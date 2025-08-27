import Image from "next/image"
import ProfilePicture from "@/../public/img/profile.webp"

type Prop = {
   className?: string
   id?: string
}

export default function LandingHero({ className, id }: Prop) {
   return (
      <div
         className={["pt-36", className].join(" ")}
         id={id}
      >
         <div className="container">
            <div className="grid grid-cols-1 gap-8 lg:flex lg:items-center">
               <div className="flex w-7xl flex-col gap-4">
                  <div className="flex flex-col gap-2">
                     <h1 className="font-mono text-5xl font-semibold lg:text-6xl">
                        Riva Almero
                     </h1>
                     <p className="font-sans tracking-wide text-gray-500">
                        Front-end Developer
                     </p>
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="font-sans leading-relaxed font-light">
                        Just like in photography, I frame, focus, and capture.
                        Only this time &ndash; with code.
                     </p>
                  </div>
                  <div className="">
                     <button className="cursor-pointer border border-(--foreground) bg-transparent px-10 py-4 font-mono text-sm font-light tracking-wide uppercase">
                        Reach Out
                     </button>
                  </div>
               </div>
               <div className="p-8">
                  <Image
                     src={ProfilePicture}
                     objectFit="cover"
                     alt="Profile Picture"
                     className="h-auto w-full"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
