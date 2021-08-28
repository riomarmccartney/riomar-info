import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { Client } from 'utils/prismicHelpers'
import { Note } from 'src/components/Note'
import { RichText } from 'prismic-reactjs'

export default function Wall({ notes }: { notes: any[] }) {
  return notes.map((note ) => {
    return (
      <Note 
        key={note.uid}
        uid={note.uid}
        title={RichText.asText(note.data.title)}
        date={note.first_publication_date}
        article={RichText.render(note.data.article)}
        caption={RichText.render(note.data.caption)}
      />
    )}
  )
}

export const getStaticProps: GetStaticProps = async () => { 
  const { results } = await Client().query(Prismic.Predicates.at('document.type', 'note'))

  if (!results) {
    return {
      notFound: true,
    }
  }

  console.log(results[0].data.article)

  return {
    props: { notes: results }
  }
}