import Link from 'next/link'
import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'
import { dateFormatter } from 'utils/dateFormatter'
import { Clock } from './UI/Clock'
import { useState } from 'react'

type TagListType = {
  title: any,
  content: any, 
  className: any,
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
    <nav className={clsx(wrapperClassName, (sidebarListVisibility ? 'bg-gray-100 text-current h-full' : 'mix-blend-difference text-gray-100'), 'border-black md:bg-none border-solid md:overflow-scroll md:text-current md:border-r md:mix-blend-normal')}>
      <div className={clsx(className)}>
        <div className='flex flex-col content-between h-full whitespace-nowrap space-y-universal'>
          <div className={clsx((sidebarListVisibility ? 'border-black' : 'border-gray-100'), 'flex flex-row items-center justify-between pb-2 border-b border-solid md:py-0 md:border-none ')}>
            <div className="md:py-1">
              <Link href='/' passHref>
                <a className={clsx((sidebarListVisibility ? 'hover:text-white hover:bg-black' : 'hover:text-black hover:bg-white'), ' bg-transparent md:duration-150 md:transition-colors md:leading-none md:table-cell md:text-center md:align-middle md:border md:border-black md:rounded-full md:w-10 md:h-10  md:boder-solid md:hover:text-white md:hover:bg-black')}>
                  RM
                </a>
              </Link>
            </div>
          
            <div>
              <button 
                className={clsx((sidebarListVisibility ? 'hover:text-white hover:bg-black' : 'hover:text-black hover:bg-white'),'relative md:transition-colors md:duration-150 bg-transparent md:hidden md:hover:text-white md:hover:bg-black')}
                onClick={() => setSidebarListVisibility(!sidebarListVisibility)}
              >
                <span>{sidebarListVisibility ? 'Close ' : 'Index'}</span>
              </button>
            </div>
          </div>

          <div className={clsx(sidebarListVisibility ? 'block ' : 'hidden', 'md:block space-y-molecular flex-1')}>
            {tags.map((tag, i) => {
              return (
                <TagList
                  className={clsx((sidebarListVisibility ? 'hover:text-white hover:bg-black' : 'hover:text-black hover:bg-white'), 'md:hover:text-white md:hover:bg-black')} 
                  key={i}
                  title={tag}
                  content={notes}
                />
              )
            })}
          </div>
          <div className={clsx(sidebarListVisibility ? 'block ' : 'hidden', 'mt-36 md:block')}><Clock /></div>
        </div>
      </div>
    </nav>
  )
}

const TagList = ({title, content, className}: TagListType) => {
  const listItem = 
    content
      .map(({uid, tags, first_publication_date, data}: NoteType) => {
        const tag = tags[0] || 'Notes'

        if (tag == title) 
          return (
            <li key={uid}><Link href={'/note/' + uid} passHref><a className={className}>{tags[0] ? RichText.asText(data.title) : dateFormatter(first_publication_date)}</a></Link></li>
          )
        return 
      })
      .filter((list: any) => typeof list !== 'undefined')
  

  if (listItem[0]) {
    return (
      <figure>
        <figcaption className="h-0 transform -translate-y-6"><sup>{title}</sup></figcaption>
        
        <ul>
          {listItem}
        </ul>
      </figure>
    )
  }

  return null
}
