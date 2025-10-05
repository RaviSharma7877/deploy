"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function TechStackStrip() {
  const technologies = [
    { name: "OpenAI", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Anthropic", logo: "/placeholder.svg?height=40&width=120" },
    { name: "AWS", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Snowflake", logo: "/placeholder.svg?height=40&width=120" },
    { name: "PostHog", logo: "/placeholder.svg?height=40&width=120" },
    { name: "dbt", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Vercel", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Stripe", logo: "/placeholder.svg?height=40&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <h3 className="text-sm font-sans font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Platforms we activate
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ duration: 0.4, delay: index * 0.05 })}
            >
              <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="h-8 w-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
