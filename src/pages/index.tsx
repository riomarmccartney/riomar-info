import { GetStaticProps } from "next"
import Prismic from '@prismicio/client'
import { Client } from 'utils/prismicHelpers'
import { Note } from "src/components/Note"
import { NoteType } from "src/types/note"

export default function Wall({ notes }: { notes: any[] }) {
  return notes.map((note: NoteType ) => {
    return (
      <Note 
        key={note.uid}
        title={note.data.title} 
        date={note.first_publication_date}
        article={note.data.article}
        caption={note.data.caption}
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