"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

export function TeamSection() {
  const team = [
    {
      name: "Product Leader",
      role: "Founder & Chief Product Officer",
      quote: "Every roadmap decision ladders up to measurable activation, retention, or revenue.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Rajat Sharma",
      role: "Co-founder & COO",
      quote: "We wire RevOps and GTM into the product so momentum never leaves the pipeline.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Ravi Sharma",
      role: "Co-founder & CTO",
      quote: "AI-native engineering means the platform learns faster than competitors can copy it.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            Meet the Founders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all hover:border-foreground/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.2 })}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-sans font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground italic leading-relaxed">"{member.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
