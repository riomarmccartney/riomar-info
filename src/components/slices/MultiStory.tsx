import { RichText } from 'prismic-reactjs'
import { ReactNode } from 'react'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

type MultiStoryType = {
  slice?: any,
  children?: ReactNode,
}

export const MultiStory = ({ slice, children }: MultiStoryType) => (
  <div className='flex flex-col lg:space-x-8 lg:flex-row'>
    {slice?.items?.map(({ paragraph }: any, i: number) => (
      <div key={i} className='flex-1 lg:w-1/2 space-y-atomic'><RichText render={paragraph} htmlSerializer={htmlSerializer} /></div>
    )) || children}
  </div>
)
