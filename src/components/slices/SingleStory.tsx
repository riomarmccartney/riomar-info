import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'
import { subAtomicSpacig } from 'src/constants/spacing'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

export const SingleStory = ({ slice }: { slice: any }) => {
  const { paragraph } = slice.primary
  
  return (
    <div className={clsx('flex-1 w-1/2 mr-6', subAtomicSpacig)}>
      <RichText render={paragraph} htmlSerializer={htmlSerializer} />
    </div>
  )
}