import Link from "next/link"
import { ReactNode } from "react"

type CategoryType = {
  title: string,
  content: any[]
}

type CategoryListType = {
  title: string,
  link: string,
  uid: string,
}

type LayoutType = {
  children: ReactNode,
  className?: string,
}

const Category = ({title, content}: CategoryType) => {
  const list = 
    content.map(({title, link, uid}: CategoryListType) => (
      <li key={uid}><Link href={link} as={link}>{title}</Link></li>
    ))
  
  return (
    <div>
      <span className="font-semibold leading-6 uppercase text-xxs">{title}</span>
      <ul className="pl-2">{list}</ul>
    </div>
  )
  
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex flex-row w-full h-screen text-base divide-x divide-black font-regular font-typeface tracking-base">
      <div className="w-1/5 py-8 pl-12 space-y-24">
        <Link href="/"><span>Riomar McCartney</span></Link>
        
        <div className="space-y-6">
          <Category
            title="Notes"
            content={[
              {
                title: "2020-01-04",
                link: "/note/greetings",
                uid: "greetings"
              }
            ]}
          />

          <Category
            title="Work"
            content={[
              {
                title: "2020-01-04",
                link: "/note/greetings",
                uid: "greetings"
              }
            ]}
          />
        </div>
      </div>
      <div className="flex-1 px-12 py-8 overflow-y-scroll">
        <div className="space-y-24 max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
} 