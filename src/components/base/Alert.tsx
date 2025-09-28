import { twMerge } from "tailwind-merge"

type Prop = {
   severity?:
      | "info"
      | "success"
      | "error"
      | "warn"
      | "contrast"
      | "primary"
      | (string & {})
   visible: boolean
   className?: string
   message: string
}

export default function (props: Prop) {
   const severityClasses: Record<
      Exclude<Prop["severity"], undefined>,
      string
   > = {
      success: /* @tw */ "border-emerald-600 bg-emerald-50 text-emerald-600",
      error: /* @tw */ "border-red-600 bg-red-50 text-red-600",
      info: /* @tw */ "border-blue-500 bg-blue-50 text-blue-500",
      warn: /* @tw */ "border-amber-500 bg-amber-50 text-amber-500",
      contrast: /* @tw */ "border-black bg-black text-white",
      primary: /* @tw */ "border-black bg-white text-black",
   }

   const rootClass = twMerge(
      "border p-4",
      (props.severity && severityClasses[props.severity]) || "",
      props.className ?? "",
      (props.visible && "visible") || "invisible",
   )

   return (
      <div className={rootClass}>
         <div className="flex items-center gap-2 font-medium">
            {/* Icon */}
            <p className="text-sm">{props.message}</p>
         </div>
      </div>
   )
}
