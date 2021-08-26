import { GetStaticProps } from "next"
import { GraphQLClient, gql } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { Note } from "src/components/Note"
import { NoteType } from "src/types/note"

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

export default function Wall({ wall }: { wall: any }) {
  return wall.map(({ note }: { note: NoteType } ) => (
      <Note 
        key={note.slug}
        slug={note.slug}
        title={note.title} 
        publishedAt={note.publishedAt}
        article={note.article}
        caption={note.caption}
      />
    ))
}

export const getStaticProps: GetStaticProps = async () => { 
  const query = gql`
    query Notes { 
      notes(orderBy: publishedAt_DESC) {
        slug
      }
    }
  `

  const { notes } = await graphcms.request(query)

  if (!notes) {
    return {
      notFound: true,
    }
  }

  const wall = await Promise.all(notes.map(async ({ slug }: { slug:string }) => {
    const query = gql`
      query Note($slug: String!) {
        note(where: { slug: $slug }) {
          slug
          title
          publishedAt
          article {
            markdown
          }
          caption {
            markdown
          }
        }
      }
    `

    const data: { note: NoteType | null } = await graphcms.request(query, { slug: slug })

    if (!data.note) {
      return {
        notFound: true,
      }
    }

    const mdxContent = await serialize(data.note.article.markdown)
    const mdxCaption = await serialize(data.note.caption.markdown)

    
    return {
      note: {
      ...data.note,
      //...{publishedAt: date},
      ...{article: mdxContent},
      ...{caption: mdxCaption}
      }
    }
  }))

  return {
    props: { wall }
  }
}