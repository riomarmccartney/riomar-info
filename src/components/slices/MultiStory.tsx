import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'

export const MultiStory = ({ slice }: { slice: any }) => (
  <div className="flex flex-row space-x-12">
    {slice.items?.map(({ paragraph }: any, i: number) => (
      <div key={i} className="flex-1 max-w-2/5"><RichText render={paragraph} htmlSerializer={htmlSerializer} /></div>
    ))}
  </div>
)

