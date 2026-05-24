"use client"

import { PROJECTS } from "@/lib/constants"
import Reveal from "@/components/ui/Reveal"
import SectionHeading from "@/components/ui/SectionHeading"
import ProjectCard from "@/components/ui/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Backend-heavy projects with product polish."
          desc="Representative work shaped around APIs, service design, AI workflows, and frontend clarity."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
