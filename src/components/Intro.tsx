import clsx from 'clsx'
import Image from 'next/image'

import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { atomicSpacing, subAtomicSpacing, molecularSpacing } from 'src/constants/spacing'
import { HorizontalDivider } from './UI/HorizontalDivider'

export const Intro = ({ content }: {content: any}) => {
  return (
    <>
      <div>
        <RichText render={content.data.title} htmlSerializer={htmlSerializer} />
      </div>
      <div className={molecularSpacing}>
        <section className={clsx('flex flex-row space-x-8')}>
          <div className={clsx(molecularSpacing, 'w-1/2')}>
            <div className={atomicSpacing}><RichText render={content.data.intro} htmlSerializer={htmlSerializer} /></div>
            <ul className="flex flex-row space-x-6">{content.data.links.map(({ link }: { link: any}) => {
              return (
                <li key={RichText.asText(link)}>
                  <span className="inline-block"><RichText render={link} htmlSerializer={htmlSerializer} /></span>
                  <sup className="ml-0.5">↗</sup>
                </li>
              )
            })}
            </ul>
          </div>
          <div className="w-1/2">
            <div className="max-w-sm">
              <Image 
                src={content.data.profile_picture.url}
                alt={content.data.profile_picture.alt}
                height={content.data.profile_picture.dimensions.height}
                width={content.data.profile_picture.dimensions.width}
              />
            </div>
          </div>
        </section>
        <HorizontalDivider />
        <div className={clsx(subAtomicSpacing,'w-1/2 pr-4 text-sm text-gray-400')}>
          <RichText render={content.data.colophon} htmlSerializer={htmlSerializer} />
        </div>
      </div>
    </>
  )
}