import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

export const SingleStory = ({ slice }: { slice: any }) => {
  const paragraph = slice.primary?.paragraph
  
  return (
    <div className="flex-1 w-1/2">
      <RichText render={paragraph} htmlSerializer={htmlSerializer} />
    </div>
  )
}