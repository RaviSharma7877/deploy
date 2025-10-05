"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function PartnersSection() {
  const partners = [
    { name: "OpenAI Solution Partner", logo: "/placeholder.svg?height=60&width=180" },
    { name: "AWS Build", logo: "/placeholder.svg?height=60&width=180" },
    { name: "PostHog Partner Network", logo: "/placeholder.svg?height=60&width=180" },
    { name: "HubSpot App Accelerator", logo: "/placeholder.svg?height=60&width=180" },
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
            Ecosystem collaborators
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ duration: 0.4, delay: index * 0.1 })}
            >
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 w-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
