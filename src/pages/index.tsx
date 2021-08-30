import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { Client } from 'utils/prismicHelpers'
import { Note } from 'src/components/Note'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { Layout } from 'src/components/Layout'
import { dateFormatter } from 'utils/dateFormatter'

export default function Index({ notes }) {
  return (
    <Layout>
      <div>Updated: {dateFormatter(notes[0].first_publication_date)}</div>
      <div>
        {notes.map((note) => (
          <Note 
            key={note.uid}
            uid={note.uid}
            title={RichText.asText(note.data.title)}
            date={note.first_publication_date}
            article={<RichText render={note.data.article} htmlSerializer={htmlSerializer} />}
            caption={<RichText render={note.data.caption} htmlSerializer={htmlSerializer} />}
          />
        ))}
        </div>
    </Layout>
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