import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { Client } from 'utils/prismicHelpers'
import { Note } from 'src/components/Note'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

export default function Wall({ notes }) {
  return notes.map((note ) => {
    return (
      <Note 
        key={note.uid}
        uid={note.uid}
        title={RichText.asText(note.data.title)}
        date={note.first_publication_date}
        article={<RichText render={note.data.article} htmlSerializer={htmlSerializer} />}
        caption={<RichText render={note.data.caption} htmlSerializer={htmlSerializer} />}
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

  return {
    props: { notes: results }
  }
}