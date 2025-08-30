"use client"

import { JSX, MouseEvent, useState } from "react"

type Experience = {
   company: string
   time: {
      from: string
      to: string
   }
   description: JSX.Element
}

export default function () {
   const experiences: Experience[] = [
      {
         company: "Jasa Medika Transmedic",
         time: {
            from: "Feb 2023",
            to: "Present",
         },
         description: (
            <>
               <p className="leading-relaxed font-light text-pretty">
                  Jasa Medika Transmedic is a group of companies that focuses on
                  innovation and development of integrated solutions in the
                  field of healthcare services.
               </p>
               <p className="leading-relaxed font-light text-pretty">
                  I've worked on projects using a variety of web development
                  technologies, including:
               </p>
               <ul className="ms-4 space-y-2 font-light">
                  <li className="list-item list-inside list-disc">
                     PHP, JavaScript, TypeScript
                  </li>
                  <li className="list-item list-inside list-disc">
                     Vue.js, React, Angular
                  </li>
                  <li className="list-item list-inside list-disc">
                     Nuxt, Next.js, Laravel
                  </li>
                  <li className="list-item list-inside list-disc">
                     MySQL, PostgreSQL, MongoDB
                  </li>
                  <li className="list-item list-inside list-disc">
                     Kurento SDK, Jitsi
                  </li>
               </ul>
            </>
         ),
      },
   ]

   const [selectedExp, setSelectedExp] = useState<Experience | undefined>(
      experiences[0],
   )

   function onExperienceSelected(event: MouseEvent, experience: Experience) {
      event.stopPropagation()
      setSelectedExp(experience)
   }

   return (
      <section id="experience" className="container">
         <div className="flex flex-col gap-6">
            <h2 className="font-mono text-4xl font-semibold">Experience</h2>
            <div className="flex">
               <div className="flex w-[18rem] shrink-0 flex-col border-s">
                  {experiences.map((exp, index) => (
                     <div
                        key={index}
                        className="flex cursor-pointer items-center py-8 ps-4"
                        onClick={(event) => onExperienceSelected(event, exp)}
                     >
                        <span
                           className={[
                              `flex-1 font-mono font-light`,
                              selectedExp?.company === exp.company
                                 ? `underline`
                                 : ``,
                           ].join(" ")}
                        >
                           {exp.company}
                        </span>
                     </div>
                  ))}
               </div>
               <div className="flex-1 ps-8">
                  {selectedExp && renderExperienceDescription(selectedExp)}
               </div>
            </div>
         </div>
      </section>
   )
}

function renderExperienceDescription(experience: Experience) {
   return (
      <>
         <div className="flex flex-col gap-2">
            <span className="text-sm font-light italic">
               {Object.values(experience.time).join(" – ")}
            </span>
            <div className="flex flex-col gap-2">{experience.description}</div>
         </div>
      </>
   )
}
