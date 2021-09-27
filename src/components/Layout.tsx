import clsx from 'clsx'
import { ReactNode, useState } from 'react'
import { Sidebar } from './Sidebar'

type LayoutType = {
  children: ReactNode,
  notes: any,
}

export const Layout = ({ children, notes }: LayoutType) => {
  const [sidebarListVisibility, setSidebarListVisibility] = useState(false)
  
  return (
    <div className='absolute flex flex-col items-stretch w-full h-full md:space-y-0 md:flex-row font-regular font-typeface tracking-bases md:space-x-16 xl:space-x-24'>
      <Sidebar notes={notes} sidebarListVisibility={sidebarListVisibility} onMenuToggle={(bool: boolean) => {setSidebarListVisibility( bool ?? !sidebarListVisibility)}}/>
      
      <main className='w-full px-4 mt-36 md:mt-0 md:overflow-y-scroll md:py-8 md:pr-8 md:pl-0'>
        <div className='max-w-2xl pb-12 mx-auto md:mx-0 md:max-w-7xl md:pb-18'>
          <div className={clsx(sidebarListVisibility ? 'md:translate-x-56' : 'md:translate-0', 'md:transform-gpu md:duration-300 space-y-universal')}>{children}</div>
        </div>  
      </main>
    </div>
  )
}