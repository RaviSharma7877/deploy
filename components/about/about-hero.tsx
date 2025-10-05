"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
          >
            The pod behind E2S_HuB.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            We bring product leadership, revenue operations, and AI-first engineering into one founding team. The same
            trio that shaped SaaS, SME, and D2C platforms inside high-growth companies now ships the roadmap, scale
            motions, and automation for yours.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
