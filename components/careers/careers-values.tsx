"use client"

import { motion } from "framer-motion"
import { Rocket, Users, Zap, Heart } from "lucide-react"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

const values = [
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "We believe in rapid iteration. Launch, learn, improve. No endless planning cycles.",
  },
  {
    icon: Users,
    title: "Remote-First",
    description: "Work from anywhere. We care about output, not where you sit.",
  },
  {
    icon: Zap,
    title: "Own Your Work",
    description: "You'll have real ownership and autonomy. We hire people we trust.",
  },
  {
    icon: Heart,
    title: "Learn Together",
    description: "AI moves fast. We share knowledge, experiment together, and grow as a team.",
  },
]

export function CareersValues() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="text-center mb-12"
        >
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">What We Value</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={createSmoothTransition({ delay: index * 0.1 })}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-sans text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
