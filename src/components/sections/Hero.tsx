import { ArrowRight, Cpu, DatabaseZap, Gauge, ServerCog, Sparkles } from "lucide-react"
import { HERO_METRICS } from "@/lib/constants"
import Reveal from "@/components/ui/Reveal"
import MagneticButton from "@/components/ui/MagneticButton"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen px-5 pb-20 pt-32 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="aurora absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full opacity-70 dark:opacity-90" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-700 shadow-lg shadow-cyan-500/10 dark:text-cyan-200">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Backend Engineer at an AI company
          </div>

          <h1 className="font-display mt-7 max-w-5xl text-balance text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-7xl lg:text-8xl">
            I build scalable Java backends for AI-powered products.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am Adarsh Kumar, a backend engineer focused on Spring Boot, APIs, system design,
            databases, microservices, and pragmatic AI integrations, with enough frontend range to
            make the systems feel excellent to use.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#projects">
              View projects <ArrowRight size={17} />
            </MagneticButton>
            <MagneticButton href="mailto:adarsh@example.com" variant="secondary">
              Contact me
            </MagneticButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white/60 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]">
                <div className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{metric.value}</div>
                <div className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/75 p-4 shadow-[0_25px_100px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
            <div className="flex items-center gap-2 border-b border-slate-200/80 pb-4 dark:border-white/10">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-400" />
              <span className="size-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">service-map.ts</span>
            </div>

            <div className="grid gap-4 pt-5">
              {[
                { icon: ServerCog, label: "Spring Boot APIs", value: "typed, tested, versioned" },
                { icon: Sparkles, label: "AI integrations", value: "guarded, observable, useful" },
                { icon: DatabaseZap, label: "Data workflows", value: "modeled for scale" },
                { icon: Gauge, label: "Performance", value: "fast paths, clean contracts" },
              ].map((item) => (
                <div key={item.label} className="group flex items-center gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 transition hover:-translate-y-1 hover:border-cyan-300 dark:border-white/10 dark:bg-white/[0.055]">
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-cyan-200 dark:bg-cyan-300 dark:text-slate-950">
                    <item.icon size={21} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{item.label}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-5">
              <div className="flex items-center gap-3 text-sm font-semibold text-emerald-700 dark:text-emerald-200">
                <Cpu size={18} />
                Current focus
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Turning backend services into reliable AI product infrastructure: APIs, queues,
                data stores, evaluation paths, and frontend surfaces that make complexity feel calm.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
