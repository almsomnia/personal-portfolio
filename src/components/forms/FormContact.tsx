"use client"

import { FormEvent, useState, useEffect } from "react"
import AlertTriangle from "../icons/AlertTriangle"
import CheckCircle from "../icons/CheckCircle"
import Loader from "../icons/Loader"

export default function () {
   const [loading, setLoading] = useState(false)
   const [sendStatus, setSendStatus] = useState<"IDLE" | "SENT" | "FAIL">(
      "IDLE",
   )

   async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      if (loading) return

      setLoading(true)

      const formData = new FormData(event.currentTarget)

      const res: { ok: boolean } = await fetch("/api/contact", {
         method: "POST",
         body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
         }),
      }).then(async (res) => await res.json())

      if (res.ok) {
         setSendStatus("SENT")
      } else {
         setSendStatus("FAIL")
      }

      setLoading(false)

      setTimeout(() => {
         setSendStatus("IDLE")
      }, 5000)
   }

   return (
      <div className="flex flex-col gap-4">
         {renderAlert(sendStatus)}
         <form
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            onSubmit={onSubmit}
         >
            <input
               type="text"
               name="name"
               placeholder="Name"
               className="bg-background border border-(--foreground) px-4 py-2.5 font-sans font-light focus:outline-none active:outline-0"
               required
            />
            <input
               type="email"
               name="email"
               placeholder="Email"
               className="bg-background border border-(--foreground) px-4 py-2.5 font-sans font-light focus:outline-none active:outline-0"
               required
            />
            <input
               type="text"
               name="subject"
               placeholder="Subject"
               className="bg-background col-span-full border border-(--foreground) px-4 py-2.5 font-sans font-light focus:outline-none active:outline-0"
               required
            />
            <textarea
               name="message"
               placeholder="Message"
               className="bg-background col-span-full border border-(--foreground) px-4 py-2.5 font-sans font-light focus:outline-none active:outline-0"
               rows={5}
               required
            />
            <div className="col-span-full flex items-center justify-end">
               <button
                  type="submit"
                  className="bg-foreground disabled:bg-foreground/60 text-background cursor-pointer border border-(--foreground) px-10 py-4 font-mono text-sm tracking-wide uppercase disabled:cursor-not-allowed aria-busy:cursor-progress"
                  aria-busy={loading}
               >
                  {loading ? (
                     <Loader className="motion-safe:animate-[spin_2s_linear_infinite]" />
                  ) : (
                     "Send Message"
                  )}
               </button>
            </div>
         </form>
      </div>
   )
}

function renderAlert(status: "IDLE" | "SENT" | "FAIL") {
   if (status == "IDLE") return <></>

   return (
      <div
         className={[
            "border p-4",
            status == "FAIL"
               ? "border-red-600 bg-red-50 text-red-600"
               : "border-emerald-600 bg-emerald-50 text-emerald-600",
         ].join(" ")}
      >
         <div className="flex items-center gap-2 font-medium">
            {status == "FAIL" ? (
               <AlertTriangle className="size-4" />
            ) : (
               <CheckCircle className="size-4" />
            )}

            <p className="text-sm">
               {status == "FAIL"
                  ? "Failed to send the message, please try again."
                  : "Message sent."}
            </p>
         </div>
      </div>
   )
}
