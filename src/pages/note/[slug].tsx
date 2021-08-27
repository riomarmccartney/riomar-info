import { gql, GraphQLClient } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from 'next-mdx-remote/serialize'
import { Note } from "src/components/Note";
import { NoteType } from "src/types/note";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

export default function NotePage({ note }: { note: NoteType }) {
  return (
    <Note   
      slug={note.slug}
      title={note.title} 
      publishedAt={note.publishedAt}
      article={note.article}
      caption={note.caption}
    />
  )
  
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

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
    };
  }

  const mdxArticle = await serialize(data.note.article.markdown)
  const mdxCaption = await serialize(data.note.caption.markdown)

  return {
    props: { 
      note: { 
        ...data.note, 
        ...{article: mdxArticle},
        ...{caption: mdxCaption}
      } 
    },
    revalidate: 60 * 60,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Notes { 
      notes {
        slug
      }
    }
  `

  const data = await graphcms.request(query)

  return {
    paths: data.notes.map((note: NoteType) => ({ params: { slug: note.slug } })),
    fallback: "blocking",
  }
}