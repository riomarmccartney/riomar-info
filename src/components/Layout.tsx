import { ReactNode } from "react"

type LayoutType = {
  children: ReactNode,
}

export const Layout = ({children}: LayoutType) => {
  return (
    <div className="w-1/2 p-4 typeface">
      Riomar McCartney
      {children}
    </div>
  )
} 