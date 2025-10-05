"use client"

import { motion } from "framer-motion"
import { smoothTransition } from "@/lib/motion"

export function StorySection() {
  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-8 text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After leading product, revenue, and engineering inside scale-ups, we watched teams burn runway on
              agencies and disconnected contractors. E2S_HuB was born to embed the exact trio companies need: a product
              leader who owns the outcome, an operator who ties growth and RevOps together, and a technologist who
              builds AI-native systems that won’t buckle when volume hits. No silos, only accountable pods shipping in
              market.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
