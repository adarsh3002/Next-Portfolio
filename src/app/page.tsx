import Navbar from "@/components/layout/Navbar"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Experience from "@/components/sections/Experience"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Recommendations from "@/components/sections/Recommendations"
import SystemLab from "@/components/sections/SystemLab"
import AmbientStage from "@/components/ui/AmbientStage"
import AiChatbot from "@/components/ui/AiChatbot"
import CustomCursor from "@/components/ui/CustomCursor"
import ScrollProgress from "@/components/ui/ScrollProgress"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <AmbientStage />
      <Navbar />
      <main className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="neo-grid pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <SystemLab />
        <Recommendations />
        <Contact />
      </main>
      <AiChatbot />
    </>
  )
}
