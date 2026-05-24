import { ArrowUpRight } from "lucide-react"
import { EXPERIENCE } from "@/lib/constants"
import Reveal from "@/components/ui/Reveal"
import SectionHeading from "@/components/ui/SectionHeading"

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internship to full-time ownership."
          desc="A focused timeline showing growth from backend intern to engineer building AI product infrastructure."
        />

        <div className="relative mx-auto max-w-4xl">
          <div aria-hidden="true" className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-emerald-400 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <Reveal key={exp.role} delay={index * 0.1}>
                <article className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 ? "" : "sm:text-right"}`}>
                  <div className={`${index % 2 ? "sm:col-start-2" : ""} ml-14 sm:ml-0`}>
                    <div className="rounded-[1.75rem] border border-slate-200 bg-white/75 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-none">
                      <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">{exp.period}</p>
                      <h3 className="font-display mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{exp.role}</h3>
                      <p className="mt-1 text-slate-500 dark:text-slate-400">{exp.company}</p>
                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{exp.desc}</p>
                      <ul className="mt-5 space-y-3 text-left">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            <ArrowUpRight className="mt-1 size-4 shrink-0 text-emerald-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <span className="absolute left-5 top-8 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-cyan-300 bg-white text-sm font-bold text-cyan-700 shadow-lg dark:bg-slate-950 dark:text-cyan-200 sm:left-1/2">
                    {index + 1}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
