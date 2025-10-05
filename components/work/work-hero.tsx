"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function WorkHero() {
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
            Output is table stakes. Outcomes are why we’re here.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            Browse how E2S_HuB partnered with SaaS, SME, and D2C teams to reduce churn, unlock new revenue, and automate
            the operations that keep growth compounding.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
