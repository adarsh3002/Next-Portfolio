import Reveal from "./Reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  desc: string
}

export default function SectionHeading({ eyebrow, title, desc }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
        {desc}
      </p>
    </Reveal>
  )
}
