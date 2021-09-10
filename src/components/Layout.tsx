import { ReactNode } from 'react'

type LayoutType = {
  children: ReactNode,
  className?: string,
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className='flex flex-col h-screen text-base bg-gray-100 md:flex-row font-regular font-typeface tracking-base'>
      {children}
    </div>
  )
}