import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Note } from 'src/components/Note'
import Client from 'utils/prismicHelpers'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

type ParameterType = {
  uid: string
}

export default function NotePage({ note }) {
  return (
    <Note 
      uid={note.uid}
      title={RichText.asText(note.data.title)}
      date={note.first_publication_date}
      article={<RichText render={note.data.article} htmlSerializer={htmlSerializer} />}
      caption={<RichText render={note.data.caption} htmlSerializer={htmlSerializer} />}
    />
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