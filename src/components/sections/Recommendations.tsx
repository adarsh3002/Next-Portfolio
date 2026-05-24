import { CheckCircle2 } from "lucide-react"
import { RECOMMENDATIONS } from "@/lib/constants"
import Reveal from "@/components/ui/Reveal"
import SectionHeading from "@/components/ui/SectionHeading"

const sections = [
  ["Recommended folder structure", RECOMMENDATIONS.folderStructure],
  ["Suggested tech stack", RECOMMENDATIONS.techStack],
  ["UI component ideas", RECOMMENDATIONS.componentIdeas],
  ["SEO and performance", RECOMMENDATIONS.seoPerformance],
] as const

export default function Recommendations() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Architecture"
          title="Built for maintainability, not just screenshots."
          desc="The portfolio now follows a scalable frontend structure with reusable content, interaction islands, and SEO-ready App Router metadata."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {sections.map(([title, items], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="h-full rounded-[1.75rem] border border-slate-200 bg-white/70 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]">
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
