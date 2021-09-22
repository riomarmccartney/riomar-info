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
      <Sidebar 
        notes={notes} 
        wrapperClassName='fixed z-50 w-full px-4 py-4 lg:pt-8 md:py-8 md:pl-8 md:pr-16 min-w-min md:w-1/6 flex'
        className='flex-1 max-w-2xl mx-auto md:mx-0 md:max-w-sm'
      />
      <main className='flex-1 w-full px-4 mt-40 md:mt-0 md:overflow-y-scroll md:py-8 md:px-16'>
        <div className="max-w-2xl pb-12 mx-auto md:mx-0 md:max-w-7xl md:pb-18">
          <div className='space-y-universal'>{children}</div>
        </div>  
      </main>
    </div>
  )
}