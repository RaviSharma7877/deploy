"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

interface CaseStudyOverviewProps {
  overview: {
    client: string
    challenge: string
    goal: string
  }
}

export function CaseStudyOverview({ overview }: CaseStudyOverviewProps) {
  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            Overview
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Client", value: overview.client },
              { label: "Challenge", value: overview.challenge },
              { label: "Goal", value: overview.goal },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={createSmoothTransition({ delay: index * 0.1 })}
              >
                <h3 className="text-sm font-sans font-semibold text-primary mb-3 uppercase tracking-wider">
                  {item.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
