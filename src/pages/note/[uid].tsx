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
import { Seo } from 'src/components/Seo'
import { dateFormatter } from 'utils/dateFormatter'
import { ReactNode } from 'react'

interface IParams extends ParsedUrlQuery {
    uid: string
}

type NotePageType = {
  note: any,
  notes: any,
}

export default function NotePage({note}: NotePageType) {
  return (
    <>
      <Seo 
        title={`${dateFormatter(note.first_publication_date)} ✶ ${RichText.asText(note.data.title)}`}
      />

      <Note 
        key={note.uid}
        uid={note.uid}
        title={RichText.asText(note.data.title)}
        date={note.first_publication_date}
        article={<SliceZone resolver={resolver} slices={note.data.body}/>}
        caption={RichText.asText(note.data.caption) && <RichText render={note.data.caption} htmlSerializer={htmlSerializer} />}
      />
    </>
  )
}

NotePage.withLayout = function withLayout(page: ReactNode, notes: any) {
  return <Layout notes={notes}>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { uid } = context.params as IParams
  const note = await Client().getByUID('note', uid, {})

  const { results } = await Client().query(Prismic.Predicates.at('document.type', 'note'), {
    orderings: '[note.first_publication_date]'
  })

  const notes = results

  return {
    props: { 
      note,
      notes,
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await Client().query(Prismic.Predicates.at('document.type', 'note'), {
    orderings: '[note.first_publication_date]'
  })
  
  const paths = results.map((note) => {
    return { 
      params: { uid: note.uid }
      
    }
  })

  return { paths, fallback: false }
}