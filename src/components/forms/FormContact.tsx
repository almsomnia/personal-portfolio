"use client"

import { FormEvent, useState } from "react"
import { submitContact } from "@/app/actions"

export default function () {
   async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)

      // setLoading(true)
      const res = await submitContact(formData)
      if (!res.success) {
         console.log("Failed")
         return
      }
      console.log("Success")
   }

   return (
      <form
         className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
               className="bg-foreground text-background cursor-pointer border border-(--foreground) px-10 py-4 font-mono text-sm tracking-wide uppercase"
            >
               Send Message
            </button>
         </div>
      </form>
   )
}
