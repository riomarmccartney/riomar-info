import { GetStaticProps } from 'next'
import SliceZone from 'next-slicezone'
import resolver from 'utils/sliceMachineResolver'
import Prismic from '@prismicio/client'
import { Client } from 'utils/prismicHelpers'
import { Note } from 'src/components/Note'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { Layout } from 'src/components/Layout'
import { dateFormatter } from 'utils/dateFormatter'

export default function Index({ notes }: { notes: any }) {
  return (
    <Layout>
      <div>Updated: {dateFormatter(notes[0].first_publication_date)}</div>
      {notes.map((note: any) => {
        return (

          <Note 
            key={note.uid}
            uid={note.uid}
            title={RichText.asText(note.data.title)}
            date={note.first_publication_date}
            article={<SliceZone resolver={resolver} slices={note.data.body}/>}
            caption={<RichText render={note.data.caption} htmlSerializer={htmlSerializer} />}
          />
            

        )})}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => { 
  const { results } = await Client().query(Prismic.Predicates.at('document.type', 'note'))
  const notes = results

  if (!notes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { notes: notes }
  }
}