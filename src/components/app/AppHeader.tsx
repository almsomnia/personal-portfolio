import Image from "next/image"
import AppNavigation from "./AppNavigation"

type Prop = {
   className?: string
}

export default function ({ className }: Prop) {
   return (
      <header className={className}>
         <div className="container">
            <div className="flex h-16 items-center justify-between">
               <div className="">
                  <a href="/">
                     <Image
                        src="/img/logo.svg"
                        alt="logo"
                        width={24}
                        height={24}
                        className="h-auto w-8"
                        loading="lazy"
                     />
                  </a>
               </div>
               <AppNavigation />
            </div>
         </div>
      </header>
   )
}
