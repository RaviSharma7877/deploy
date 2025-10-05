"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function ProblemSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-8 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            Product teams aren’t short on ideas—they’re short on integrated operators.
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            Internal teams are drowning between roadmap debt, market pressure, and agencies that bill for research
            decks instead of shipping outcomes. We embed product strategy, engineering, and commercial growth into one
            AI-first pod so you can release faster, prove value sooner, and reinvest in the loops that scale revenue.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
