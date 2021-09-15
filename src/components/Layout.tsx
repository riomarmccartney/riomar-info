import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

type LayoutType = {
  children: ReactNode,
  notes: any,
  className?: string,
}

export const Layout = ({ children, notes }: LayoutType) => {
  return (
    <div className='flex flex-col text-base md:h-screen md:space-y-0 md:flex-row font-regular font-typeface tracking-base'>
      <nav className="fixed z-50 w-full px-4 mt-4 text-gray-100 border-black border-solid md:overflow-scroll md:text-current md:relative md:mt-0 lg:pt-8 md:py-8 md:pl-8 md:pr-16 md:border-r min-w-min md:w-1/6 mix-blend-difference md:mix-blend-normal">
        <div className="max-w-2xl mx-auto md:flex md:flex-col md:mx-0 md:max-w-sm md:justify-between md:h-full">
          <Sidebar notes={notes} className='box-border py-2 border-b border-gray-100 border-solid md:py-0 md:border-none '/>
        </div>
      </nav>
      <main className='flex-1 w-full px-4 mt-40 md:mt-0 md:overflow-y-scroll md:py-8 md:px-16'>
        <div className="max-w-2xl pb-12 mx-auto md:mx-0 md:max-w-7xl md:pb-18">
          <div className='space-y-universal'>{children}</div>
        </div>  
      </main>
    </div>
  )
}