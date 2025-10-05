"use client"

import { motion } from "framer-motion"
import { smoothTransition } from "@/lib/motion"

export function ResourcesHero() {
  return (
    <section className="pt-32 pb-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={smoothTransition}>
          <h1 className="font-sans text-5xl lg:text-6xl font-bold mb-6 text-balance">Playbooks from the trenches</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            The canvases, scorecards, and workflow templates we lean on when building and scaling AI-first products for
            SaaS, SME, and D2C teams.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
