import Link from 'next/link'
import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'
import { dateFormatter } from 'utils/dateFormatter'

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
  notes: any,
  onMenuToggle: any,
  sidebarListVisibility: boolean,
}

export const Sidebar = ({ onMenuToggle, sidebarListVisibility, notes }: SidebarType) => {
  const tags = ['Notes', 'Work']
  const menuLabel = sidebarListVisibility ? 'Close' : 'Index'

  return (
    <nav className={clsx((sidebarListVisibility ? 'bg-gray-100 text-current h-full' : 'mix-blend-difference text-gray-100 '), 'fixed z-50 w-full px-4 py-4 border-black border-solid md:relative md:py-8 md:pl-8 md:pr-0 md:bg-none md:text-current md:border-none md:mix-blend-normal md:w-auto select-none')}>
      <div className='relative flex flex-col justify-between max-w-2xl mx-auto whitespace-nowrap space-y-universal md:h-full md:mx-0 md:max-w-none md:w-10'>
        <div className={clsx(
          (sidebarListVisibility ? 'border-black' : 'border-gray-100'), 
          'flex flex-row justify-between w-full pb-2 border-b border-solid md:py-0 md:border-none'
        )}>
          <div className="md:py-1">
            <Link href='/' passHref>
              <a onClick={() => onMenuToggle(false)} className={clsx(
                (sidebarListVisibility ? 'hover:text-white hover:bg-black' : 'hover:text-black hover:bg-white'), 
                'bg-transparent md:duration-150 md:transition-colors md:leading-none md:table-cell md:text-center md:align-middle md:border md:border-black md:rounded-full md:w-10 md:h-10 md:boder-solid md:hover:text-white md:hover:bg-black'
              )}>
                  RM
              </a>
            </Link>
          </div>
          
          <div onClick={() => onMenuToggle(false)} className={clsx(
            (sidebarListVisibility ? 'hover:text-white hover:bg-black' : 'hover:text-black hover:bg-white'),
            'md:hidden bg-transparent relative cursor-pointer')} >{menuLabel}</div>
     
        </div>
        
        <div className={clsx(sidebarListVisibility ? 'block md:translate-x-0' : 'hidden md:-translate-x-56', ' md:duration-300 md:block md:transform-gpu space-y-molecular flex-1 min-w-min')}>
          {tags.map((tag, i) => {
            return (
              <TagList
                className={clsx((sidebarListVisibility ? 'hover:text-white hover:bg-black' : 'hover:text-black hover:bg-white'), 'md:hover:text-white md:hover:bg-black md:transition-colors md:duration-150')}  
                key={i}
                title={tag}
                content={notes}
              />
            )
          })}
        </div>
        
        <div onClick={() => onMenuToggle()} className={clsx(sidebarListVisibility ? '-rotate-90 origin-right' : 'rotate-0 origin-center', 'relative hidden transition transform-gpu bg-transparent cursor-pointer md:block hover:text-white hover:bg-black vertical-lr place-self-start')} >{menuLabel}</div>
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
