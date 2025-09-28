import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Prop = {
   children?: ReactNode
   header?: ReactNode
   footer?: ReactNode
   title?: ReactNode | string
   className?: string
}

export default function ({ header, footer, children, title, ...props }: Prop) {
   const rootClassName = twMerge(
      "border border-(--foreground)",
      props.className,
   )

   return (
      <div className={rootClassName}>
         {header ? header : <></>}
         {title ? (
            <div className="p-4 pb-0 font-mono text-lg font-semibold">
               {title}
            </div>
         ) : (
            <></>
         )}
         <div className="p-4">{children}</div>
         {footer ? <div className="p-4 pt-0">{footer}</div> : <></>}
      </div>
   )
}
