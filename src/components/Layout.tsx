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
    <div className="flex flex-row h-screen text-base bg-gray-100 divide-x divide-black font-regular font-typeface tracking-base">
      <Sidebar className={clsx('w-1/5 py-8 pl-8 pr-24 min-w-min whitespace-nowrap max-w-sm', elementSpacing)}/>
      <main className="flex-1 w-full py-8 pl-16 pr-24 overflow-y-scroll">
        <div className={clsx('max-w-5xl', elementSpacing)}>
          {children}
        </div>
      </main>
    </div>
  )
}