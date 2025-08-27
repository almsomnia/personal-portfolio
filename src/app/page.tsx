import LandingAbout from "@/components/landing/LandingAbout"
import LandingExperience from "@/components/landing/LandingExperience"
import LandingHero from "@/components/landing/LandingHero"
import LandingSkill from "@/components/landing/LandingSkill"

export default function Home() {
   return (
      <>
         <div className="relative">
            <div className="sticky top-0 z-0 bg-white">
               <LandingHero className="h-full w-full" />
            </div>
            <div className="relative z-10 mt-24 bg-(--background)">
               <div className="flex flex-col gap-24 py-8">
                  <LandingAbout />
                  <LandingExperience />
                  <LandingSkill />
               </div>
            </div>
         </div>
      </>
   )
}
