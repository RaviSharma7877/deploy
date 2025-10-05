"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

const openings = [
  {
    title: "Lead Product Strategist",
    location: "Remote",
    type: "Full-time",
    description:
      "Own discovery through launch for SaaS and fintech builds. Translate outcomes into experience strategy, roadmap, and measurable adoption.",
  },
  {
    title: "Senior AI Platform Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Ship AI-first product experiences across web, services, and data pipelines. You love pairing with product and growth to release weekly.",
  },
  {
    title: "Revenue Operations Architect",
    location: "Remote",
    type: "Full-time",
    description:
      "Design lifecycle experiments, GTM automation, and expansion systems that align product usage with sales and success motions.",
  },
]

export function CareersOpenings() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="text-center mb-12"
        >
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground">Join us in building the next generation of AI products</p>
        </motion.div>
        <div className="space-y-6">
          {openings.map((opening, index) => (
            <motion.div
              key={opening.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.1 })}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-sans text-2xl font-bold mb-3">{opening.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{opening.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{opening.type}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{opening.description}</p>
                </div>
                <Button
                  asChild
                  className="gradient-accent rounded-xl group-hover:shadow-lg group-hover:shadow-primary/20 transition-all lg:w-auto w-full"
                >
                  <Link href="/contact">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
