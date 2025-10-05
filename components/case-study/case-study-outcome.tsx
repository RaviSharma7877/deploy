"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

interface CaseStudyOutcomeProps {
  outcome: {
    metrics: Array<{ label: string; value: string }>
    description: string
  }
}

export function CaseStudyOutcome({ outcome }: CaseStudyOutcomeProps) {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            Outcome
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {outcome.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={createSmoothTransition({ delay: index * 0.1 })}
              >
                <div className="text-3xl md:text-4xl font-sans font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createSmoothTransition({ delay: 0.4 })}
          >
            {outcome.description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
