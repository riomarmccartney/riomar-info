import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import SliceZone from 'next-slicezone'
import resolver from 'utils/sliceMachineResolver'
import { Note } from 'src/components/Note'
import Client from 'utils/prismicHelpers'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { Layout } from 'src/components/Layout'

type ParameterType = {
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

export const getStaticProps: GetStaticProps = async ({ params }: { params: ParameterType }) => {

  const note = await Client().getByUID('note', params.uid, {})

  return {
    props: { 
      note,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await Client().query(Prismic.Predicates.at('document.type', 'note'))

  return {
    paths: notes.results.map((note) => {
      return { params: { uid: note.uid }}
    }),
    fallback: false,
  }
}