"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function ClosingCTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-foreground to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            Ready to escape the billable-hour treadmill?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            Let’s design the roadmap, build the platform, and wire growth into the product together. E2S_HuB embeds
            senior product, revenue, and engineering leaders so your team can focus on the next vision milestone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={createSmoothTransition({ delay: 0.4 })}
          >
            <Button
              asChild
              size="lg"
              className="rounded-xl text-base px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link href="/contact">
                Book a working session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
