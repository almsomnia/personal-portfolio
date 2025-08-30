import Image from "next/image"

type Prop = {
   className?: string
}

export default function ({ className }: Prop) {
   return (
      <header className={className}>
         <div className="container">
            <div className="flex h-16 items-center justify-between">
               <div className="">
                  <Image
                     src="/img/logo.svg"
                     alt="logo"
                     width={24}
                     height={24}
                     className="w-8 h-auto"
                     loading="lazy"
                  />
               </div>
               {renderNavigation()}
            </div>
         </div>
      </header>
   )
}

function renderNavigation() {
   const navItems = [
      {
         label: "About",
         location: "#about",
      },
      {
         label: "Experience",
         location: "#experience",
      },
      {
         label: "Skills",
         location: "#skill",
      },
      {
         label: "Reach Out",
         location: "#contact",
      },
   ]

   return (
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
   )
}
