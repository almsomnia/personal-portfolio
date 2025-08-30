"use client"

import { cloneElement, ReactElement, useState } from "react"
import XMark from "../icons/XMark"
import { getNavigations } from "@/libs/helpers/navigation"

type Prop = {
   children: ReactElement<any>
}

export default function ({ children }: Prop) {
   const navItems = getNavigations()

   const [open, setOpen] = useState(false)

   return (
      <>
         {children &&
            cloneElement(children, {
               onClick: () => setOpen(true),
            })}
         {open && (
            <div
               onClick={() => setOpen(false)}
               className="fixed inset-0 z-40 bg-black/50 backdrop-blur"
            ></div>
         )}

         <div
            className={`fixed top-0 right-0 z-50 container h-full w-full transform bg-white shadow-lg transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
         >
            <div className="flex h-16 items-center justify-end">
               <button
                  onClick={() => setOpen(false)}
                  className="p-2"
               >
                  <XMark className="size-6" />
               </button>
            </div>
            <div className="">
               <nav className="font-mono font-light">
                  <ul>
                     {navItems.map((item, index) => (
                        <li key={index}>
                           <a
                              href={item.location}
                              className="block p-4 ps-0"
                              onClick={() => setOpen(false)}
                           >
                              {item.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>
         </div>
      </>
   )
}
