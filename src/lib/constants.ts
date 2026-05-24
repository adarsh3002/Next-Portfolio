import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react"

export const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export const HERO_METRICS = [
  { value: "1+", label: "year building production systems" },
  { value: "Jan 2025", label: "AI backend journey started" },
  { value: "Jul 2025", label: "converted to full-time engineer" },
]

export const ABOUT_POINTS = [
  {
    title: "Backend-first product thinking",
    desc: "I design APIs, service boundaries, data flows, and integrations with maintainability in mind.",
    icon: ServerCog,
  },
  {
    title: "AI integration mindset",
    desc: "I connect LLM and automation capabilities with reliable backend workflows, validation, and observability.",
    icon: BrainCircuit,
  },
  {
    title: "Frontend-aware execution",
    desc: "I can shape fast, accessible interfaces that make backend systems easier to understand and use.",
    icon: Layers3,
  },
]

export const EXPERIENCE = [
  {
    role: "Backend Engineering Intern",
    company: "AI Company",
    period: "January 2025 - June 2025",
    desc: "Joined as a backend intern focused on production APIs, Java service patterns, data workflows, and AI-enabled features.",
    highlights: [
      "Built and improved REST API flows for internal and customer-facing workflows.",
      "Worked across Java, Spring Boot, databases, and AI service integrations.",
      "Learned production engineering habits: debugging, code reviews, documentation, and release discipline.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "AI Company",
    period: "July 2025 - Present",
    desc: "Converted to full-time backend engineer, owning scalable service work across AI integrations and backend architecture.",
    highlights: [
      "Designing maintainable services with clear contracts, validation, and performance awareness.",
      "Collaborating with frontend and product teams to turn technical systems into usable features.",
      "Contributing to architecture choices around APIs, databases, microservices, and system reliability.",
    ],
  },
]

export const SKILL_GROUPS = [
  {
    title: "Backend",
    icon: ServerCog,
    level: 92,
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "System Design", "JWT/Auth"],
  },
  {
    title: "AI Engineering",
    icon: Sparkles,
    level: 84,
    skills: ["LLM Integrations", "Prompt Flows", "RAG Concepts", "Automation", "Evaluation", "API Orchestration"],
  },
  {
    title: "Data",
    icon: Database,
    level: 82,
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Indexing", "Data Modeling"],
  },
  {
    title: "Frontend",
    icon: Code2,
    level: 78,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    level: 74,
    skills: ["Docker", "CI/CD", "Linux", "GitHub Actions", "Monitoring", "Performance"],
  },
  {
    title: "Engineering",
    icon: ShieldCheck,
    level: 88,
    skills: ["Clean Code", "Testing", "Documentation", "Scalability", "Security", "Code Reviews"],
  },
]

export const PROJECTS = [
  {
    title: "AI Service Orchestration API",
    type: "Backend + AI",
    desc: "A production-style service layer for routing user requests through validation, AI processing, persistence, and response shaping.",
    impact: "Designed for predictable latency, clean API contracts, and easy provider replacement.",
    details: [
      "Provider-agnostic AI gateway with request validation and fallback-ready boundaries.",
      "Structured service contracts for clean handoff between frontend, backend, and model calls.",
      "Designed around observability, latency awareness, and predictable response shapes.",
    ],
    stack: ["Java", "Spring Boot", "LLM APIs", "PostgreSQL", "Docker"],
    icon: Workflow,
  },
  {
    title: "Microservice Billing Platform",
    type: "Backend Architecture",
    desc: "Invoice and payment workflow with modular services, role-based access, resilient data modeling, and audit-friendly event history.",
    impact: "Built to demonstrate domain separation, API-first design, and production maintainability.",
    details: [
      "Separated account, invoice, payment, and notification responsibilities into clear modules.",
      "Added audit-friendly state transitions for debugging and operational visibility.",
      "Modeled APIs for versioning, validation, role-aware access, and future service extraction.",
    ],
    stack: ["Spring Boot", "MongoDB", "Redis", "JWT", "REST"],
    icon: GitBranch,
  },
  {
    title: "Developer Analytics Dashboard",
    type: "Full Stack",
    desc: "A polished frontend for visualizing API health, usage trends, queue states, and backend reliability signals.",
    impact: "Shows frontend capability without losing the backend engineering center of gravity.",
    details: [
      "Built dashboard interactions around engineering decisions, not decorative metrics.",
      "Optimized charts and cards for scanability across mobile and desktop screens.",
      "Designed reusable UI blocks for system status, trend comparison, and alert triage.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Charts", "APIs"],
    icon: Layers3,
  },
]

export const CHATBOT_PROMPTS = [
  "What backend work does Adarsh do?",
  "Summarize his AI experience",
  "Why is he a good startup fit?",
]

export const CHATBOT_RESPONSES: Record<string, string> = {
  "What backend work does Adarsh do?":
    "Adarsh focuses on Java, Spring Boot, REST APIs, databases, microservices, system design, and production-minded backend architecture.",
  "Summarize his AI experience":
    "He started at an AI company as a Backend Engineering Intern in January 2025, converted full-time in July 2025, and works on AI integrations, service orchestration, and reliable product infrastructure.",
  "Why is he a good startup fit?":
    "He combines backend depth with frontend awareness, which is useful for small teams that need someone who can reason from API contracts and data models all the way to user-facing product polish.",
}

export const RECOMMENDATIONS = {
  folderStructure: [
    "src/app for routes, metadata, layouts, and route-level loading/error states",
    "src/components for reusable UI, layout, and section components",
    "src/lib for constants, utilities, SEO config, and typed content models",
    "src/hooks for small client-side interaction hooks",
    "public for static icons, OG images, resume, and optimized media",
  ],
  techStack: [
    "Next.js App Router, React 19, TypeScript, Tailwind CSS 4",
    "Framer Motion for small, purposeful animation islands",
    "Custom external-store theme controller for dark/light mode without hydration drift",
    "lucide-react for crisp, accessible interface icons",
  ],
  componentIdeas: [
    "Command-style hero status panel",
    "Experience timeline with conversion milestone",
    "3D project cards with tilt and pointer shine",
    "Skill matrix grouped by engineering domain",
    "Recruiter-ready contact CTA with availability signals",
  ],
  seoPerformance: [
    "Static metadata, Open Graph tags, descriptive title, and canonical URL",
    "Self-hosted optimized fonts through next/font",
    "Server-rendered content with client components only where interaction is needed",
    "Reduced-motion support, semantic headings, readable contrast, and keyboard-friendly controls",
  ],
}
