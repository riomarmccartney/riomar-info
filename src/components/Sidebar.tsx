import Link from 'next/link'
import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'
import { dateFormatter } from 'utils/dateFormatter'
import { Clock } from './UI/Clock'
import { useState } from 'react'

type TagListType = {
  title: any,
  content: any, 
}
    
type NoteType = {
  first_publication_date: string,
  uid: string,
  tags: any[],
  data: {
    title: any[]
  }
}

type SidebarType = {
  className?: string,
  wrapperClassName?: string,
  notes: any,
}

export const Sidebar = ({ className, wrapperClassName, notes }: SidebarType) => {
  const tags = ['Notes', 'Work']
  const [sidebarListVisibility, setSidebarListVisibility] = useState(false)

  return (
    <nav className={clsx(wrapperClassName, (sidebarListVisibility ? 'pb-8 backdrop-filter backdrop-blur-3xl' : 'bg-transparent'), 'mix-blend-difference text-gray-100 border-black border-solid md:overflow-scroll md:text-current md:relative md:border-r md:mix-blend-normal')}>
      <div className={clsx(className)}>
        <div className='box-border whitespace-nowrap space-y-universal md:justify-between md:h-full md:flex md:flex-col'>
          <div className="flex flex-row items-center justify-between py-2 border-b border-gray-100 border-solid md:py-0 md:border-none">
            <div>
              <Link href='/' passHref>
                <a className="transition-colors duration-150 bg-transparent md:leading-none md:table-cell md:text-center md:align-middle md:border md:border-black md:rounded-full md:w-10 md:h-10 md:boder-solid hover:text-white hover:bg-black">
                  RM
                </a>
              </Link>
            </div>
          
            <div>
              <button 
                className="relative transition-colors duration-150 bg-transparent md:hidden hover:text-white hover:bg-black"
                onClick={() => setSidebarListVisibility(!sidebarListVisibility)}
              >
                <span>{sidebarListVisibility ? 'Close ' : 'Index'}</span>
              </button>
            </div>
          </div>

          <div className={clsx(sidebarListVisibility ? 'block ' : 'hidden', 'md:block space-y-molecular')}>
            {tags.map((tag, i) => {
              return (
                <TagList 
                  key={i}
                  title={tag}
                  content={notes}
                />
              )
            })}
          </div>
        </div>
        <div className="hidden mt-36 md:block"><Clock /></div>
      </div>
    </nav>
  )
}

const TagList = ({title, content}: TagListType) => {
  const listItem = 
    content
      .map(({uid, tags, first_publication_date, data}: NoteType) => {
        const tag = tags[0] || 'Notes'

        if (tag == title) 
          return (
            <li key={uid}><Link href={'/note/' + uid}>{tags[0] ? RichText.asText(data.title) : dateFormatter(first_publication_date)}</Link></li>
          )
        return 
      })
      .filter((list: any) => typeof list !== 'undefined')
  

  if (listItem[0]) {
    return (
      <figure>
        <figcaption><sup>{title}</sup></figcaption>
        
        <ul>
          {listItem}
        </ul>
      </figure>
    )
  }

  return null
}
