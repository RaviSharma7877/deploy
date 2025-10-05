"use client"

import { motion } from "framer-motion"
import { Code, Brain, BarChart3, Settings } from "lucide-react"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function WhatWeDoSection() {
  const services = [
    {
      icon: Brain,
      title: "Strategy to shipping",
      description: "Discovery sprints, AI-backed product roadmaps, and outcome-led delivery plans that convert exec alignment into pull requests.",
    },
    {
      icon: Code,
      title: "AI-first engineering",
      description: "Full-stack product builds, data pipelines, and model integrations that make SaaS, SME, and D2C experiences feel personal at scale.",
    },
    {
      icon: BarChart3,
      title: "Growth activation",
      description: "Lifecycle analytics, monetisation experiments, and RevOps systems that keep pipelines and self-serve funnels in sync.",
    },
    {
      icon: Settings,
      title: "Scale without drag",
      description: "Reliability, cost optimisation, and AI-driven automation that keeps operations lean while your product footprint expands.",
    },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            One team to build, ship, and expand AI-first products
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card border border-border rounded-xl p-6 transition-all hover:border-foreground/30 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.1 })}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-sans font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
