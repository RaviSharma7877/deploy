"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

interface CaseStudyTechProps {
  tech: string[]
}

export function CaseStudyTech({ tech }: CaseStudyTechProps) {
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
            AI & Tech Used
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            {tech.map((item, index) => (
              <motion.span
                key={item}
                className="px-6 py-3 bg-secondary border border-border text-foreground rounded-xl font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={createSmoothTransition({ duration: 0.4, delay: index * 0.05 })}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
