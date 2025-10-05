"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { smoothTransition } from "@/lib/motion"

export function WorkCTA() {
  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-6 text-foreground">
            Need the full case notes?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We’re happy to walk through the underlying architecture, AI workflows, and go-to-market plays behind each
            engagement—and map them to your roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border text-foreground hover:bg-muted text-base px-8 bg-transparent"
            >
              <Link href="/contact">
                <FileText className="mr-2 h-5 w-5" />
                Request case deck
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-xl text-base px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link href="/contact">
                Plan your sprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
