"use client"

import { useEffect, useState } from "react"
import AppNavigationDrawer from "./AppNavigationDrawer"
import Bars from "../icons/Bars"
import { getNavigations } from "@/libs/helpers/navigation"

export default function () {
   const navItems = getNavigations()

   const [viewportWidth, setViewportWidth] = useState(0)

   useEffect(() => {
      const handleResize = () => setViewportWidth(window.innerWidth)
      handleResize()

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
   }, [])

   return (
      <>
         {viewportWidth < 768 ? (
            <AppNavigationDrawer>
               <button className="p-2">
                  <Bars className="size-6" />
               </button>
            </AppNavigationDrawer>
         ) : (
            <nav className="flex items-center gap-6">
               {navItems.map((item, index) => (
                  <a
                     key={index}
                     href={item.location}
                     className="font-mono hover:underline"
                  >
                     {item.label}
                  </a>
               ))}
            </nav>
         )}
      </>
   )
}
