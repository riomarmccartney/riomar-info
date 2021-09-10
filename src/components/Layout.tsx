import { ReactNode } from 'react'

type LayoutType = {
  children: ReactNode,
  className?: string,
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className='flex flex-col text-base bg-gray-100 md:h-screen space-y-universal md:space-y-0 md:flex-row font-regular font-typeface tracking-base'>
      {children}
    </div>
  )
}