"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/hooks/use-calendly"
import { smoothTransition } from "@/lib/motion"

export function ServicesCTA() {
  const { openCalendly } = useCalendly()

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-card border border-border/60 rounded-xl p-12 md:p-16 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-6 text-foreground">
            Let’s design your next growth run.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Share the product goal that keeps you up at night and we’ll blueprint the team, timeline, and growth loops
            that will get you there without the usual agency drag.
          </p>
          <Button
            size="lg"
            onClick={openCalendly}
            className="rounded-xl px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start a working session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
