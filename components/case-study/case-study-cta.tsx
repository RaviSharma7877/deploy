"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/hooks/use-calendly"
import { smoothTransition } from "@/lib/motion"

export function CaseStudyCTA() {
  const { openCalendly } = useCalendly()

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-6 text-foreground">
            Want similar results? Let's talk.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every product has unique growth opportunities. Let's discover yours.
          </p>
          <Button
            size="lg"
            onClick={openCalendly}
            className="rounded-xl text-base px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
