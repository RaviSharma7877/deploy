"use client"

import { motion } from "framer-motion"
import { smoothTransition } from "@/lib/motion"

export function MissionSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card border border-border/60 rounded-xl p-12 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-6 text-foreground">Our Mission</h2>
            <blockquote className="text-xl md:text-2xl text-primary italic leading-relaxed">
              "Give SaaS, SME, and D2C teams a single partner that designs, builds, and scales products faster than
              billable models—compounding growth with every release."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
