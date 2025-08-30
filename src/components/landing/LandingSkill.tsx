export default function () {
   const skills = [
      {
         label: "Capabilities",
         value: ["Custom Websites", "Full-Stack Applications", "Web Design"],
      },
      {
         label: "Languages",
         value: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP"],
      },
      {
         label: "Databases + ORMs",
         value: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Prisma ORM",
            "Drizzle ORM",
            "Sequelize ORM",
            "Eloquent ORM",
         ],
      },
      {
         label: "Libraries + Apps",
         value: [
            "Node.js / Bun JS",
            "React / NextJS",
            "Vue.js / Nuxt",
            "ElysiaJS",
            "ExpressJS",
            "Laravel",
            "Vercel",
         ],
      },
   ]

   return (
      <section id="skill" className="container">
         <div className="flex flex-col gap-6">
            <h2 className="font-mono text-4xl font-semibold">Skills</h2>
            <div className="flex flex-col gap-4">
               <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                  {skills.map((skill) => renderSkill(skill))}
               </div>
            </div>
         </div>
      </section>
   )
}

function renderSkill(skill: { label: string; value: string[] }) {
   return (
      <div key={skill.label} className="flex flex-col gap-2">
         <span className="font-semibold">{skill.label}</span>
         <ul className="space-y-2">
            {skill.value.map((item, index) => (
               <li
                  key={index}
                  className="font-light"
               >
                  {item}
               </li>
            ))}
         </ul>
      </div>
   )
}
