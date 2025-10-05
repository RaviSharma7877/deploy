"use client"

import { motion } from "framer-motion"
import { Zap, Eye, Target, TrendingUp } from "lucide-react"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function ValuesSection() {
  const values = [
    {
      icon: Zap,
      title: "Outcome ownership",
      description: "We sign up for metrics, not hours. Every sprint ties to the adoption and revenue outcomes you care about most.",
    },
    {
      icon: Eye,
      title: "Transparent by design",
      description: "Roadmaps, analytics, and automation flows live in your workspace so your team can extend them anytime.",
    },
    {
      icon: Target,
      title: "Revenue-aligned shipping",
      description: "Experiments, onboarding, and retention plays connect product decisions with GTM and RevOps execution.",
    },
    {
      icon: TrendingUp,
      title: "AI as teammate",
      description: "We embed AI copilots across engineering, support, and growth loops so the product keeps getting smarter.",
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
            Our Values
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-8 transition-all hover:border-foreground/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.1 })}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-sans font-bold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
