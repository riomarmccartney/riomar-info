import Link from 'next/link'
import { ReactNode } from 'react'

type HyperlinkType = {
  children: ReactNode,
  href?: string,

}

export const Hyperlink = ({ children, href, ...rest }: HyperlinkType) => {
  const className = {className: 'transition-all duration-150 bg-transparent border-b border-gray-400 border-solid cursor-pointer hover:bg-black hover:text-white hover:border-black'}

  switch (href) {
  case '' || undefined:
    return <span {...className}>{children}</span>

  default:
    return (
      <Link 
        href={href}
        {...rest}
      >
        <a {...className}>{children}</a>
      </Link>
    )
  }
}
