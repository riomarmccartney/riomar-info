import { ReactNode } from 'react'

type LayoutType = {
  children: ReactNode,
  className?: string,
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className='flex flex-row h-screen text-base bg-gray-100 divide-x divide-black font-regular font-typeface tracking-base'>
      {children}
    </div>
  )
}