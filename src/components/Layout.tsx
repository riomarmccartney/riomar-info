import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

type LayoutType = {
  children: ReactNode,
  className?: string,
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex flex-row w-full h-screen text-base divide-x divide-black font-regular font-typeface tracking-base">
      <Sidebar className="w-1/5 max-w-sm py-8 pl-8 pr-16 space-y-24 min-w-min whitespace-nowrap" />

      <div className="flex-1 py-8 pl-8 pr-24 overflow-y-scroll">
        <div className="space-y-24 max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
} 