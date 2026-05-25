import { AnimatedBackground }    from '@/components/AnimatedBackground'
import { Navigation }            from '@/components/Navigation'
import { Footer }                from '@/components/Footer'
import { HeroSection }           from '@/sections/HeroSection'
import { AboutSection }          from '@/sections/AboutSection'
import { ProjectsSection }       from '@/sections/ProjectsSection'
import { SkillsSection }         from '@/sections/SkillsSection'
import { ExperienceSection }     from '@/sections/ExperienceSection'
import { EducationSection }      from '@/sections/EducationSection'
import { CertificationsSection } from '@/sections/CertificationsSection'
import { ContactSection }        from '@/sections/ContactSection'

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
