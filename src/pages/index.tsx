import { GetStaticProps } from 'next'
import SliceZone from 'next-slicezone'
import resolver from 'utils/sliceMachineResolver'
import Prismic from '@prismicio/client'
import { Client } from 'utils/prismicHelpers'
import { Note } from 'src/components/Note'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { Layout } from 'src/components/Layout'
import { Intro } from 'src/components/Intro'
import { Seo } from 'src/components/Seo'

export default function Index({ notes, intro }: { notes: any, intro: any }) {
  return (
    <Layout notes={notes}>
      <Seo/>
      <Intro content={intro} />
          
      {notes.map((note: any) => {
        return (
          <Note 
            key={note.uid}
            uid={note.uid}
            title={RichText.asText(note.data.title)}
            date={note.first_publication_date}
            article={<SliceZone resolver={resolver} slices={note.data.body}/>}
            caption={RichText.asText(note.data.caption) && <RichText render={note.data.caption} htmlSerializer={htmlSerializer} />}
          />
        )}
      )}

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => { 
  const { results } = await Client().query(Prismic.Predicates.at('document.type', 'note'), {
    orderings: '[note.first_publication_date]'
  })
  const notes = results

  const intro = await Client().getSingle('introduction', {})

  if (!notes || !intro) {
    console.error('Failed to load required notes from Prismic: ' + (!notes && 'Notes') || (!intro && 'Intro') + ' not found.')
    
    return {
      notFound: true,
    }
  }

  return {
    props: { notes, intro }
  }
}