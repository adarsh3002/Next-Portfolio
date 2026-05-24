"use client"

import { SKILL_GROUPS } from "@/lib/constants"
import Reveal from "@/components/ui/Reveal"
import SectionHeading from "@/components/ui/SectionHeading"
import SkillCard from "@/components/ui/SkillCard"

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A stack tuned for scalable AI products."
          desc="Backend depth is the center, supported by AI integration, data, cloud, and modern frontend execution."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
