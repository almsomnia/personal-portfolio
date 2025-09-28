import { twMerge } from "tailwind-merge"

type Prop = {
   name?: string
   placeholder?: string
   rows?: number
   required?: boolean
   className?: string
}

export default function (props: Prop) {
   const className = twMerge(
      "bg-background col-span-full border border-(--foreground) px-4 py-2.5 font-sans font-light focus:outline-none active:outline-0",
      props.className,
   )

   return (
      <textarea
         name={props.name}
         placeholder={props.placeholder}
         className={className}
         rows={props.rows}
         required={props.required}
      />
   )
}
