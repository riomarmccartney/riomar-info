import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import SliceZone from 'next-slicezone'
import resolver from 'utils/sliceMachineResolver'
import { Note } from 'src/components/Note'
import Client from 'utils/prismicHelpers'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { Layout } from 'src/components/Layout'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    uid: string
}

export default function NotePage({ note }: any) {
  return (
    <Layout>
      <Note 
        key={note.uid}
        uid={note.uid}
        title={RichText.asText(note.data.title)}
        date={note.first_publication_date}
        article={<SliceZone resolver={resolver} slices={note.data.body}/>}
        caption={<RichText render={note.data.caption} htmlSerializer={htmlSerializer} />}
      />
    </Layout>
  )
  
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { uid } = context.params as IParams
  const note = await Client().getByUID('note', uid, {})

  return {
    props: { 
      note,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await Client().query(Prismic.Predicates.at('document.type', 'note'))
  
  const paths = notes.results.map((note) => {
    return { 
      params: { uid: note.uid }
      
    }
  })

  return { paths, fallback: false }
}