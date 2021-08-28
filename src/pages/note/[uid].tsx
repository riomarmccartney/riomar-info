import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from 'next-mdx-remote/serialize'
import { Note } from "src/components/Note";
import { NoteType } from "src/types/note";
import Client from "utils/prismicHelpers";

export default function NotePage({ note }: { note: NoteType }) {
  return (
    <Note 
      key={note.uid}
      title={note.data.title} 
      date={note.first_publication_date}
      article={note.data.article}
      caption={note.data.caption}
    />
  )
  
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const note = await Client().getByUID('note', params.uid, {})

  return {
    props: { 
      note,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await Client().query(Prismic.Predicates.at('document.type', 'note'))

  console.log()

  return {
    paths: notes.results.map((note) => {
      return { params: { uid: note.uid }}
    }),
    fallback: false,
  }
}