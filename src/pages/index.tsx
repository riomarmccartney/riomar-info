import { GetStaticProps } from 'next'
import SliceZone from 'next-slicezone'
import resolver from 'utils/sliceMachineResolver'
import Prismic from '@prismicio/client'
import { Client } from 'utils/prismicHelpers'
import { Note } from 'src/components/Note'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { Layout } from 'src/components/Layout'
import { Sidebar } from 'src/components/Sidebar'
import { Intro } from 'src/components/Intro'

export default function Index({ notes, intro }: { notes: any, intro: any }) {
  return (
    <Layout>
      <Sidebar notes={notes} className='hidden w-1/6 max-w-sm py-8 pl-8 pr-16 space-y-universal lg:block min-w-min whitespace-nowrap'/>
      <main className='flex-1 w-full px-16 py-6 overflow-y-scroll'>
        <div className='max-w-xl space-y-universal lg:max-w-7xl '>
          <Intro content={intro} />
          
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
            )}
          )}
        </div>
      </main>
      
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
    return {
      notFound: true,
    }
  }

  return {
    props: { notes, intro }
  }
 
}