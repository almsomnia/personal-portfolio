import LandingAbout from "@/components/landing/LandingAbout"
import LandingContact from "@/components/landing/LandingContact"
import LandingExperience from "@/components/landing/LandingExperience"
import LandingHero from "@/components/landing/LandingHero"
import LandingSkill from "@/components/landing/LandingSkill"

export default function Home() {
   return (
      <>
         <div className="relative">
            <div className="z-0 bg-white">
               <LandingHero />
            </div>
            <div className="relative z-10 mt-24 bg-(--background)">
               <div className="flex flex-col gap-24 py-8 *:scroll-mt-16">
                  <LandingAbout />
                  <LandingExperience />
                  <LandingSkill />
                  <LandingContact />
               </div>
            </div>
         </div>
      </>
   )
}
