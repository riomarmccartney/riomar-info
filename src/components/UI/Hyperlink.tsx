import Link from 'next/link'
import { ReactNode } from 'react'

type HyperlinkType = {
  children: ReactNode,
  onClick?: ReactNode,
  href?: string,

}

 

export const Hyperlink = ({ children, href, onClick, ...rest }: HyperlinkType) => {
  const classname = 'transition-all duration-150 bg-transparent border-b border-gray-400 border-solid cursor-pointer hover:bg-black hover:text-white hover:border-black'

  switch (href) {
  case '' || undefined:
    return <span className={classname} {...onClick}>{children}</span>

  default:
    return (
      <Link 
        href={href} 
        passHref
        {...rest}
        {...onClick}>
        <a className={classname}>{children}</a>
      </Link>
    )
  }
}
