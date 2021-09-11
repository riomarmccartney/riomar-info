import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { NextImage } from './UI/NextImage'
import { Note } from './Note'
import { MultiStory } from './slices'

export const Intro = ({ content }: {content: any}) => (
  <>
    <div>
      <RichText render={content.data.title} htmlSerializer={htmlSerializer} />
    </div>
    <Note 
      article={
        <MultiStory>
          <div className='lg:w-1/2 space-y-molecular'>
            <div className='space-y-atomic'><RichText render={content.data.intro} htmlSerializer={htmlSerializer} /></div>
            <ul className="flex flex-row space-x-6">{content.data.links.map(({ link }: { link: any}) => {
              return (
                <li key={RichText.asText(link)}>
                  <span className="inline-block"><RichText render={link} htmlSerializer={htmlSerializer} /></span>
                  <sup className="ml-0.5 ">↗</sup>
                </li>
              )
            })}
            </ul>
          </div>
          <div className="ml-6 lg:w-1/2">
            <NextImage 
              src={content.data.profile_picture.url}
              alt={content.data.profile_picture.alt}
              height={content.data.profile_picture.dimensions.height}
              width={content.data.profile_picture.dimensions.width}
            />
          </div>
        </MultiStory>
      }
      caption={<RichText render={content.data.colophon} htmlSerializer={htmlSerializer} />}
    />
  </>
)