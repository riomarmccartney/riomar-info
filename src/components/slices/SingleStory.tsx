import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'
import { subAtomicSpacing } from 'src/constants/spacing'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

export const SingleStory = ({ slice }: { slice: any }) => {
  const { paragraph } = slice.primary
  
  return (
    <div className={clsx('w-1/2 pr-6', subAtomicSpacing)}>
      <RichText render={paragraph} htmlSerializer={htmlSerializer} />
    </div>
  )
}