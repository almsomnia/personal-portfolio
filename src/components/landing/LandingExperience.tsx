"use client"

import { JSX, MouseEvent, useState, useEffect } from "react"
import ChevronRight from "../icons/ChevronRight"

type Experience = {
   company: string
   time: {
      from: string
      to: string
   }
   description: JSX.Element
}

export default function () {
   const experiences = getExperiences()

   const [selectedExp, setSelectedExp] = useState<Experience | undefined>(
      experiences[0],
   )

   function onExperienceSelected(event: MouseEvent, experience: Experience) {
      event.stopPropagation()
      setSelectedExp(experience)
   }

   return (
      <section
         id="experience"
         className="container"
      >
         <div className="flex flex-col gap-6">
            <h2 className="font-mono text-4xl font-semibold">Experience</h2>
            {renderExperiences({
               experiences,
               onExperienceSelected,
               selectedExperience: selectedExp,
            })}
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

type ExperienceSectionProp = {
   experiences: Experience[]
   selectedExperience: Experience | undefined
   onExperienceSelected: (event: MouseEvent, item: Experience) => void
}

function renderExperiences(props: ExperienceSectionProp) {
   const [viewportWidth, setViewportWidth] = useState(0)

   useEffect(() => {
      const handleResize = () => setViewportWidth(window.innerWidth)
      handleResize()

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
   }, [])
   return (
      <>
         {viewportWidth < 768
            ? renderExperienceAccordion(props)
            : renderExperienceTab(props)}
      </>
   )
}

function renderExperienceTab({
   experiences,
   selectedExperience,
   onExperienceSelected,
}: ExperienceSectionProp) {
   return (
      <div className="flex">
         <div className="flex w-[18rem] shrink-0 flex-col border-e">
            {experiences.map((exp, index) => (
               <div
                  key={index}
                  className="flex cursor-pointer items-center py-8 ps-4"
                  onClick={(event) => onExperienceSelected(event, exp)}
               >
                  <span
                     className={[
                        `flex-1 font-mono font-light`,
                        selectedExperience?.company === exp.company
                           ? `font-medium`
                           : ``,
                     ].join(" ")}
                  >
                     {exp.company}
                  </span>
               </div>
            ))}
         </div>
         <div className="flex-1 ps-8">
            {selectedExperience &&
               renderExperienceDescription(selectedExperience)}
         </div>
      </div>
   )
}

function renderExperienceAccordion({
   experiences,
   selectedExperience,
   onExperienceSelected,
}: ExperienceSectionProp) {
   return (
      <div className="flex flex-col">
         {experiences.map((item, index) => (
            <details
               key={index}
               className="group/details"
            >
               <summary className="flex items-center justify-between py-8 marker:content-['']">
                  <span className="font-mono font-light group-open/details:font-medium">
                     {item.company}
                  </span>
                  <ChevronRight className="group-open/details:rotate-90" />
               </summary>
               <div className="group-open/details:pb-8">
                  {renderExperienceDescription(item)}
               </div>
            </details>
         ))}
      </div>
   )
}

function getExperiences() {
   return [
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
}
