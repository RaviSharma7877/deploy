"use client"

import { motion } from "framer-motion"
import { Rocket, TrendingUp, Zap } from "lucide-react"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function FrameworkSection() {
  const steps = [
    {
      icon: Rocket,
      title: "Build the core",
      description: "Translate the strategy into experience architecture, full-stack delivery, and AI-powered workflows users adopt on day one.",
    },
    {
      icon: TrendingUp,
      title: "Scale adoption",
      description: "Instrument product analytics, run pricing and activation experiments, and align RevOps with the product-led funnel.",
    },
    {
      icon: Zap,
      title: "Compound growth",
      description: "Automate handoffs, surface predictive insights, and spin up new revenue loops with AI copilots and continuous delivery.",
    },
  ]

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            The Build → Scale → Grow operating system
          </motion.h2>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            One integrated pod to take you from validated thesis to predictable revenue without legacy agency overhead.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-8 transition-all hover:border-foreground/30 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.2 })}
            >
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-6">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-sans font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
