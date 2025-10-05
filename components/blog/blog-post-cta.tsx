"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useCalendly } from "@/hooks/use-calendly"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function BlogPostCTA() {
  const { openCalendly } = useCalendly()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card border border-border/60 rounded-xl p-12 text-center mb-12 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-6 text-foreground">
              Ready to turn ideas into shipped outcomes?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bring us the problem you’re cracking—we’ll show you how the E2S_HuB pod would design, build, and grow the
              solution.
            </p>
            <Button
              size="lg"
              onClick={openCalendly}
              className="rounded-xl px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book a working session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/40 bg-transparent"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
