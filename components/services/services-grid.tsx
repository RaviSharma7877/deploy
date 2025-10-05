"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Brain, BarChart3, Settings, ArrowRight } from "lucide-react"
import { createSmoothTransition } from "@/lib/motion"

export function ServicesGrid() {
  const services = [
    {
      icon: Brain,
      title: "Strategy → Launch",
      subtitle: "Vision",
      description:
        "Discovery, customer research, and AI opportunity modelling that aligns leadership on what to build and how to measure success.",
      deliverables: [
        "North-star metrics",
        "Experience architecture",
        "AI opportunity canvas",
        "Launch sequencing",
        "Operating cadences",
      ],
    },
    {
      icon: Code,
      title: "AI product engineering",
      subtitle: "Build",
      description:
        "Design systems, front-end craft, resilient services, and LLM integrations delivered by a pod that ships production-ready code weekly.",
      deliverables: [
        "Full-stack delivery",
        "Design systems",
        "LLM & data pipelines",
        "Security & compliance",
        "Infrastructure-as-code",
      ],
    },
    {
      icon: BarChart3,
      title: "Growth & RevOps integration",
      subtitle: "Scale",
      description:
        "Lifecycle analytics, activation experiments, and revenue operations that connect product usage with pipeline and retention.",
      deliverables: [
        "Activation experiments",
        "Lifecycle automation",
        "Pricing & packaging",
        "Sales enablement",
        "Revenue analytics",
      ],
    },
    {
      icon: Settings,
      title: "Managed evolution",
      subtitle: "Grow",
      description:
        "Reliability, cost optimisation, and AI copilots that keep your product improving after launch without bloating the headcount.",
      deliverables: [
        "Site reliability",
        "Cost optimisation",
        "AI copilots",
        "Analytics & ML ops",
        "Continuous delivery",
      ],
    },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card border border-border rounded-xl p-8 md:p-12 transition-all hover:border-foreground/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.1 })}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Icon and Title */}
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                    {service.subtitle}
                  </div>
                  <h3 className="text-3xl font-sans font-bold mb-4 text-foreground">{service.title}</h3>
                </div>

                {/* Description and Deliverables */}
                <div className="lg:col-span-2">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-sans font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Deliverables
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item) => (
                        <span key={item} className="px-3 py-1 bg-secondary border border-border text-muted-foreground text-sm rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/work" className="inline-flex items-center text-primary hover:text-foreground transition-colors group">
                    See related outcomes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
