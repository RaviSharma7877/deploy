"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"
import { Rocket, TrendingUp, Zap } from "lucide-react"

interface CaseStudyApproachProps {
  approach: {
    build: string
    scale: string
    automate: string
  }
}

export function CaseStudyApproach({ approach }: CaseStudyApproachProps) {
  const steps = [
    { icon: Rocket, title: "Build", description: approach.build },
    { icon: TrendingUp, title: "Scale", description: approach.scale },
    { icon: Zap, title: "Automate", description: approach.automate },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-4 text-foreground">
              Build → Scale → Grow in practice
            </h2>
            <p className="text-muted-foreground text-lg">
              The same three-step operating system we use across SaaS, SME, and D2C engagements, adapted to this product.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-card border border-border rounded-xl p-8 transition-all hover:border-foreground/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={createSmoothTransition({ delay: index * 0.2 })}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-sans font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
