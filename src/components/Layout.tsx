import { ReactNode } from "react"
import { Sidebar } from "./Sidebar"

type LayoutType = {
  children: ReactNode,
  className?: string,
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className="flex flex-row w-full h-screen text-base divide-x divide-black font-regular font-typeface tracking-base">
      <Sidebar className="w-1/5 py-8 pl-12 space-y-24" />

      <div className="flex-1 px-12 py-8 overflow-y-scroll">
        <div className="space-y-24 max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  )
} 