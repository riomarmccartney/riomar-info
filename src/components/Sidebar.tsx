import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { molecularSpacing } from 'src/constants/spacing'
import { dateFormatter } from 'utils/dateFormatter'

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
  notes: any,
}

export const Sidebar = ({ className, notes }: SidebarType) => {
  const tags = ['Notes', 'Work']

  return (
    <div className={className}>
      <div className="-my-1">
        <Link href='/' passHref>
          <a className="table-cell w-8 h-8 -mt-2 leading-none text-center align-middle transition-all duration-150 bg-transparent border border-black rounded-full hover:text-white hover:bg-black ">
            RM
          </a>
        </Link>
      </div>

      <div className={molecularSpacing}>
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
