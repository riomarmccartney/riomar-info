import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps } from "next"
import { MDXRemote } from 'next-mdx-remote'
import { GraphQLClient, gql } from 'graphql-request'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)
interface INote {
  slug: string
  title: string
  publishedAt: string
  content: { 
    markdown: string,
    compiledSource: string,
  }
  caption: { 
    markdown: string,
    compiledSource: string,
  }
}

export default function Index({ wall }: { wall: any }) {
  return wall.map(({ note }: { note: INote } ) => (
      <article key={note.slug} >
        <h2>{note.title}</h2>
        <span>{note.publishedAt}</span>
        <MDXRemote {...note.content} /> 
        <MDXRemote {...note.caption} /> 
      </article>
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
          content {
            markdown
          }
          caption {
            markdown
          }
        }
      }
    `

    const data: { note: INote | null } = await graphcms.request(query, { slug: slug })

    if (!data.note) {
      return {
        notFound: true,
      }
    }

    const date = await dayjs(data.note.publishedAt).tz("Asia/Tokyo").format('YYYY.MM.DD HH:mm')
    const mdxContent = await serialize(data.note.content.markdown)
    const mdxCaption = await serialize(data.note.caption.markdown)

    
    return {
      note: {
      ...data.note,
      ...{publishedAt: date},
      ...{content: mdxContent},
      ...{caption: mdxCaption}
      }
    }
  }))

  return {
    props: { wall }
  }
}