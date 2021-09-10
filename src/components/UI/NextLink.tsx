import Link from 'next/link'
import { ReactNode } from 'react'

type NextLinkType = {
  children: ReactNode,
  href: string,
}

export const NextLink = ({ children, href, ...rest }: NextLinkType) => {
  return (
    <Link 
      href={href} 
      passHref
      {...rest}>
      <a className='transition-all duration-150 bg-transparent border-b border-gray-400 border-solid hover:bg-black hover:text-white hover:border-black'>
        {children}
      </a>
    </Link>
  )
}