import { ReactNode } from "react"
import { LayoutFooter } from "./layoutFooter"
import { LayoutHeaderDesktop } from "./layoutHeaderDesktop"

export interface LayoutTemplateProps {
  children: ReactNode
}

export function LayoutTemplate({ children }: LayoutTemplateProps) {
  return (
    <main className="min-h-[100vh] bg-white text-foreground p-2 relative ">
      <LayoutHeaderDesktop />
      <div className="mx-auto p-5 pb-16 border-solid border-red border-red border-1">
        {children}
      </div>
      <LayoutFooter />
    </main>

  )
}