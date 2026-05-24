import { ABOUT_POINTS } from "@/lib/constants"
import Reveal from "@/components/ui/Reveal"
import SectionHeading from "@/components/ui/SectionHeading"

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Backend engineering with product sense and AI fluency."
          desc="My work sits where reliable services, useful AI, and clean developer experience meet."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-[2rem] border border-slate-200 bg-white/70 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-none">
            <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">
              I started as a Backend Engineering Intern at an AI company in January 2025,
              converted to a full-time Backend Engineer in July 2025, and continue to work on
              backend systems that need to be dependable under real product pressure.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700 dark:text-slate-300">
              My primary toolkit is Java, Spring Boot, API design, databases, microservices,
              and AI integrations. I also bring frontend capability with Next.js and React,
              which helps me build with empathy for the full product path.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {ABOUT_POINTS.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.08}>
                <div className="flex gap-5 rounded-[1.75rem] border border-slate-200 bg-white/60 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300 dark:border-white/10 dark:bg-white/[0.045]">
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
                    <point.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{point.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{point.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
