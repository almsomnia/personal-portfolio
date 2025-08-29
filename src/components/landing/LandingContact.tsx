import FormContact from "../forms/FormContact"

export default function () {
   return (
      <section id="landing-contact" className="container">
         <div className="flex flex-col gap-6">
            <h2 className="font-mono text-4xl font-semibold">Reach Out</h2>
            <div className="flex flex-col md:flex-row gap-24">
               <div className="flex-1">
                  <div className="flex flex-col gap-4">
                     <p className="leading-relaxed font-light text-pretty">
                        If you'd like me to frame your next idea, collaborate on
                        something new, or simply say hi, feel free to reach out.
                        My inbox is always open.
                     </p>
                     <FormContact />
                  </div>
               </div>
               <ul className="ms-4 md:ms-0 list-disc space-y-4 *:font-light *:hover:underline">
                  <li>
                     <a
                        href="https://github.com/almsomnia"
                        target="_blank"
                     >
                        GitHub
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.linkedin.com/in/riva-almero-5755aa164/"
                        target="_blank"
                     >
                        LinkedIn
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.instagram.com/almsomnia"
                        target="_blank"
                     >
                        Instagram
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   )
}
