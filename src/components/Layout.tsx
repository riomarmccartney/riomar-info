import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import clsx from 'clsx'
import { elementSpacing } from 'src/constants/spacing'

type LayoutType = {
  children: ReactNode,
  className?: string,
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex flex-row h-screen text-base divide-x divide-black font-regular font-typeface tracking-base">
      <Sidebar className={clsx('w-1/5 py-8 pl-8 pr-24 min-w-min whitespace-nowrap max-w-sm', elementSpacing)}/>

      <div className={clsx('flex-1 py-8 pl-8 pr-24 overflow-y-scroll max-w-7xl', elementSpacing)}>
        {children}
      </div>
    </div>
  )
} 