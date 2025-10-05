"use client"

import { motion } from "framer-motion"
import { Mail, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"
import { siteConfig } from "@/lib/site"

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Strategy Session",
    description: "30-minute working session to map your product, AI, and growth priorities.",
    action: "Pick a slot",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Prefer email? Drop us a line and we'll respond within 24 hours.",
    action: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageCircle,
    title: "Quick Question?",
    description: "For quick questions or general inquiries, use the form on the left.",
    action: null,
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={smoothTransition}
      className="space-y-8"
    >
      <div>
        <h2 className="font-sans text-2xl font-bold mb-4">Other ways to reach us</h2>
        <p className="text-muted-foreground leading-relaxed">
          Choose the method that works best for you. We're responsive and always happy to chat about AI products.
        </p>
      </div>
      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.1 })}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  {method.action &&
                    (method.href ? (
                      <a href={method.href} className="text-sm text-primary hover:underline font-medium">
                        {method.action}
                      </a>
                    ) : (
                      <Button variant="outline" className="rounded-xl bg-transparent">
                        {method.action}
                      </Button>
                    ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
