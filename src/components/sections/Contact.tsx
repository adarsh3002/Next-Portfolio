import { Mail, MapPin, Send } from "lucide-react"
import Reveal from "@/components/ui/Reveal"
import MagneticButton from "@/components/ui/MagneticButton"

export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-10 pt-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_30px_120px_rgba(15,23,42,0.24)] dark:border-white/10">
          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
            <div aria-hidden="true" className="aurora absolute right-0 top-0 h-72 w-72 translate-x-1/3 opacity-60" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</p>
              <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Let us build a backend that can handle the future.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Open to backend, Java, Spring Boot, AI integration, platform, and full-stack roles
                where reliability and product thinking matter.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href="mailto:adarsh@example.com" variant="dark">
                  <Send size={17} /> Email me
                </MagneticButton>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <Mail className="size-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">adarsh@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-white/10 py-5">
                <MapPin className="size-5 text-emerald-300" />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">India, remote-friendly</p>
                </div>
              </div>
              <div className="pt-5">
                <p className="text-sm text-slate-400">Best fit</p>
                <p className="mt-2 leading-7 text-slate-200">
                  AI backend engineering, Java platform teams, API-heavy startups, and product
                  teams that need someone who can reason from database to UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-2 py-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Adarsh Kumar. Built with Next.js.</p>
        <p>Java Backend • AI Integrations • Frontend Craft</p>
      </footer>
    </section>
  )
}
