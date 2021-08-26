export type NoteType = {
  slug: string
  title: string
  publishedAt: string
  article: { 
    markdown: string,
    compiledSource: string,
  }
  caption: { 
    markdown: string,
    compiledSource: string,
  }
}
