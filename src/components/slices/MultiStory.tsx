import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'
import { subAtomicSpacig } from 'src/constants/spacing'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

export const MultiStory = ({ slice }: { slice: any }) => (
  <div className="flex flex-row space-x-12">
    {slice.items?.map(({ paragraph }: any, i: number) => (
      <div key={i} className={clsx('flex-1 w-1/2', subAtomicSpacig)}><RichText render={paragraph} htmlSerializer={htmlSerializer} /></div>
    ))}
  </div>
)

