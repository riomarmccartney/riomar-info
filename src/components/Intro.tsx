import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from 'utils/prismicRichTextSerializer'
import { NextImage } from './UI/NextImage'
import { Note } from './Note'
import { MultiStory } from './slices'

export const Intro = ({ content }: {content: any}) => (
  <>
    <div>
      <p>Riomar McCartney ✹ マッカートニー 龍馬</p>
      <p>Born 1996 Japan. Raised in France. <span className="block md:inline">Currently based in Tokyo, Japan.</span></p>
    </div>
    <Note 
      article={
        <>
          <div className="lg:hidden">
            <NextImage 
              src={content.data.profile_picture.url}
              alt={content.data.profile_picture.alt}
              height={content.data.profile_picture.dimensions.height}
              width={content.data.profile_picture.dimensions.width}
            />
          </div>
          <MultiStory>
            <div className='lg:w-1/2 space-y-molecular'>
              <div className='whitespace-pre-wrap space-y-atomic'><RichText render={content.data.intro} htmlSerializer={htmlSerializer} /></div>
              <ul className="flex flex-row space-x-4 md:space-x-6">{content.data.links.map(({ link }: { link: any}) => {
                return (
                  <li key={RichText.asText(link)} className="whitespace-nowrap">
                    <span className="inline-block"><RichText render={link} htmlSerializer={htmlSerializer} /></span>
                    <sup className="transform ml-0.5">↗︎</sup>
                  </li>
                )
              })}
              </ul>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <NextImage 
                src={content.data.profile_picture.url}
                alt={content.data.profile_picture.alt}
                height={content.data.profile_picture.dimensions.height}
                width={content.data.profile_picture.dimensions.width}
              />
            </div>
          </MultiStory>
        </>
      }
      caption={<RichText render={content.data.colophon} htmlSerializer={htmlSerializer} />}
    />
  </>
)