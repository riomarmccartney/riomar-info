import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { atomicSpacing, molecularSpacing } from 'src/constants/spacing'
import { NextImage } from './UI/NextImage'
import { Note } from './Note'

export const Intro = ({ content }: {content: any}) => (
  <>
    <div>
      <RichText render={content.data.title} htmlSerializer={htmlSerializer} />
    </div>
    <Note 
      article={
        <div className='flex flex-row space-x-8'>
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
          <div className="w-1/2 max-w-sm">
            <NextImage 
              src={content.data.profile_picture.url}
              alt={content.data.profile_picture.alt}
              height={content.data.profile_picture.dimensions.height}
              width={content.data.profile_picture.dimensions.width}
            />
          </div>
        </div>
      }
      caption={<RichText render={content.data.colophon} htmlSerializer={htmlSerializer} />}
    />
  </>
)