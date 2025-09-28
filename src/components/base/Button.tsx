import { ButtonHTMLAttributes } from "react"
import Loader from "../icons/Loader"
import { twMerge } from "tailwind-merge"

type Prop = {
   type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
   loading?: boolean
   label?: string
   disabled?: boolean
   className?: string
}

export default function (props: Prop) {
   const className = twMerge(
      "flex items-center justify-center gap-2 bg-foreground disabled:bg-foreground/60 text-background cursor-pointer border border-(--foreground) px-10 py-4 font-mono text-sm tracking-wide uppercase disabled:cursor-not-allowed aria-busy:cursor-progress",
      props.className,
   )

   return (
      <button
         type={props.type}
         className={className}
         aria-busy={props.loading}
         disabled={props.disabled}
      >
         {props.loading ? (
            <Loader className="motion-safe:animate-[spin_2s_linear_infinite]" />
         ) : (
            props.label
         )}
      </button>
   )
}
