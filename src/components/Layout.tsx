import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

type LayoutType = {
  children: ReactNode,
  notes: any,
  className?: string,
}

export const Layout = ({ children, notes }: LayoutType) => {
  return (
    <div className='flex flex-col text-base bg-gray-100 md:h-screen space-y-universal md:space-y-0 md:flex-row font-regular font-typeface tracking-base'>
      <nav className="px-4 pt-8 border-black border-solid lg:pt-24 md:py-8 md:pl-8 md:pr-16 md:border-r min-w-min md:w-1/6">
        <div className="max-w-2xl mx-auto md:mx-0 md:max-w-sm">
          <Sidebar notes={notes} className='space-y-universal'/>
        </div>
      </nav>
      <main className='flex-1 w-full px-4 md:overflow-y-scroll md:py-8 md:px-16 lg:pt-24'>
        <div className="max-w-2xl mx-auto md:mx-0 md:max-w-7xl">
          <div className='space-y-universal'>{children}</div>
        </div>  
      </main>
    </div>
  )
}