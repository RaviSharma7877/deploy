"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function CaseStudyHighlights() {
  const caseStudies = [
    {
      title: "Reduced churn 27% for a SaaS CX platform with predictive playbooks",
      image: "/placeholder.svg?height=400&width=600",
      slug: "saas-churn-reduction",
    },
    {
      title: "Tripled sales velocity for a D2C wellness brand with AI retail copilots",
      image: "/placeholder.svg?height=400&width=600",
      slug: "d2c-wellness-copilot",
    },
    {
      title: "Launched SME credit ops in 90 days with automation-first infrastructure",
      image: "/placeholder.svg?height=400&width=600",
      slug: "sme-credit-automation",
    },
  ]

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            Case Study Highlights
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.2 })}
            >
              <Link
                href={`/work/${study.slug}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden transition-all hover:border-foreground/30 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="rounded-xl border-border text-foreground hover:bg-muted bg-transparent">
            <Link href="/work">
              Explore more results
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
