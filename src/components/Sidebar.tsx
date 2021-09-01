import Link from 'next/link'
import { atomicSpacing, molecularSpacing } from 'src/constants/spacing'

type CategoryType = {
  title: string,
  content: any[]
}
    
type CategoryListType = {
  title: string,
  link: string,
  uid: string,
}

export const Sidebar = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Link href="/">Riomar McCartney</Link>
      
      <div className={molecularSpacing}>
        <Category
          title="Notes"
          content={[
            {
              title: '2020-01-04',
              link: '/note/greetings',
              uid: 'greetings'
            }
          ]}
        />

        <Category
          title="Work"
          content={[
            {
              title: '2020-01-04',
              link: '/note/greetings',
              uid: 'greetings'
            }
          ]}
        />
      </div>
    </div>
  )
}

const Category = ({title, content}: CategoryType) => (
  <figure className={atomicSpacing}>
    <figcaption className="font-semibold leading-6 uppercase text-xxs">{title}</figcaption>
    <ul className="pl-2">
      {content.map(({title, link, uid}: CategoryListType) => (
        <li key={uid}><Link href={link} as={link}>{title}</Link></li>
      ))}
    </ul>
  </figure>
)
