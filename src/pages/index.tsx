import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps } from "next"
import { MDXRemote } from 'next-mdx-remote'
import { GraphQLClient } from 'graphql-request'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

export const getStaticProps: GetStaticProps = async () => {  
  
  const { notes } = await graphcms.request(
    `
      { 
        notes(orderBy: publishedAt_DESC) {
          slug
        }
      }
    `,
  )


  const timeline = await Promise.all(notes.map(async ({ slug }) => {
    const {note} = await graphcms.request(
      `
        query ($slug: String!) {
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
      `,
        {
          slug: slug,
        }
    )
    const mdxContent = await serialize(note.content.markdown)
    const mdxCaption = await serialize(note.caption.markdown)
    const date = await dayjs(note.publishedAt).tz("Asia/Tokyo").format('YYYY.MM.DD HH:mm')
      

    return {
      ...note,
      ...{date},
      ...{content: mdxContent},
      ...{caption: mdxCaption}
    }
  }))

  return {
    props: {
      timeline,
    },
  }
  
}


const Index = ({ timeline }) => {
  return timeline.map(({ title, slug, date, content, caption}) => (
    <article>
      <h2>{title}</h2>
      <span>{date}</span>
      <MDXRemote {...content} /> 
      <MDXRemote {...caption} /> 
    </article>
  ))
}

export default Index
