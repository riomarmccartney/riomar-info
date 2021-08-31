import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

export const SingleStory = ({ slice }) => {
  return (
    <div className="flex-1 w-1/2">
      <RichText render={slice.primary.paragraph} htmlSerializer={htmlSerializer} />
    </div>
  )
}