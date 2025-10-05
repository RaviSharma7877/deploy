"use client"

import { motion } from "framer-motion"
import { smoothTransition } from "@/lib/motion"

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={smoothTransition}>
          <h1 className="font-sans text-5xl lg:text-6xl font-bold mb-6 text-balance">Let's Build Something Great</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Have an idea? Need help scaling? Just want to chat about AI products? We're here.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
