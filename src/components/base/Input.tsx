import { HTMLInputTypeAttribute } from "react"
import { twMerge } from "tailwind-merge"

type Prop = {
   type?: HTMLInputTypeAttribute
   name?: string
   required?: boolean
   placeholder?: string
   className?: string
}

export default function (props: Prop) {
   const className = twMerge(
      "bg-background border border-(--foreground) px-4 py-2.5 font-sans font-light focus:outline-none active:outline-0",
      props.className,
   )

   return (
      <input
         className={className}
         type={props.type}
         name={props.name}
         placeholder={props.placeholder}
         required={props.required}
      />
   )
}
