"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

interface CaseStudyHeaderProps {
  title: string
  industry: string
  metric: string
  image: string
}

export function CaseStudyHeader({ title, industry, metric, image }: CaseStudyHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{industry}</span>
              <span className="px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-semibold">
                {metric}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground">
              {title}
            </h1>
          </motion.div>

          <motion.div
            className="aspect-video rounded-xl overflow-hidden border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={createSmoothTransition({ delay: 0.2 })}
          >
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
