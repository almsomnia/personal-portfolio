import Image from "next/image"
import ProfilePicture from "@/../public/img/profile.webp"

type Prop = {
   className?: string
   id?: string
}

export default function LandingHero({ className, id }: Prop) {
   return (
      <section
         className={[
            "h-[calc(100dvh-var(--header-height))-(var(--spacing)*24)] pt-24 md:h-auto md:pt-36",
            className,
         ].join(" ")}
         id={id}
      >
         <div className="container">
            <div className="grid grid-cols-1 gap-4 md:flex md:items-center md:gap-8">
               <div className="flex flex-2 flex-col gap-4">
                  <div className="flex flex-col gap-2">
                     <h2 className="font-mono text-5xl font-semibold lg:text-6xl">
                        Riva Almero
                     </h2>
                     <h1 className="font-sans tracking-wide text-gray-500">
                        Front-end Developer
                     </h1>
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="font-sans leading-relaxed font-light">
                        Just like in photography, I frame, focus, and capture.
                        Only this time &ndash; with code.
                     </p>
                  </div>
                  <div className="">
                     <a href="#contact">
                        <button className="cursor-pointer border border-(--foreground) bg-transparent px-10 py-4 font-mono text-sm font-light tracking-wide uppercase">
                           Reach Out
                        </button>
                     </a>
                  </div>
               </div>
               <div className="flex-1 p-0 md:p-8">
                  <Image
                     src={ProfilePicture}
                     alt="Profile Picture"
                     className="object-contain"
                     loading="lazy"
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
