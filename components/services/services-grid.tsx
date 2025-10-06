import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Code, Settings } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Brain,
      label: "Discover",
      title: "Strategy → Launch",
      description:
        "Customer research, AI opportunity mapping, and launch planning that aligns leadership on what to build next.",
      bullets: [
        "North-star metric playbook",
        "Experience architecture",
        "AI opportunity canvas",
        "Roadmapping + sequencing",
      ],
    },
    {
      icon: Code,
      label: "Build",
      title: "AI product engineering",
      description:
        "Design systems, resilient services, and LLM integrations shipped by a pod that drops production-ready code every week.",
      bullets: [
        "Full-stack delivery",
        "Design systems + UX",
        "LLM and data pipelines",
        "Security & compliance",
      ],
    },
    {
      icon: BarChart3,
      label: "Scale",
      title: "Growth & RevOps integration",
      description:
        "Lifecycle analytics, activation experiments, and revenue ops that connect product usage to pipeline and retention.",
      bullets: [
        "Activation experiments",
        "Lifecycle automation",
        "Pricing & packaging",
        "Revenue analytics",
      ],
    },
    {
      icon: Settings,
      label: "Evolve",
      title: "Managed evolution",
      description:
        "Reliability, cost optimisation, and AI copilots that keep improving the product after launch—without bloating headcount.",
      bullets: [
        "Site reliability & SLOs",
        "Cost optimisation",
        "AI copilots + assistants",
        "Continuous delivery",
      ],
    },
  ]

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-border/70 bg-card/85 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1B4A]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1B4A]/30 bg-background">
                  <service.icon className="h-5 w-5" />
                </div>
                {service.label}
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{service.description}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#0B1B4A]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center text-[#0B1B4A] transition-transform hover:translate-x-1"
                >
                  See related outcomes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
