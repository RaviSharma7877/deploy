"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, FileText, Lightbulb, Target, Zap } from "lucide-react"
import { createSmoothTransition } from "@/lib/motion"

  const resources = [
    {
      title: "Retention OS Canvas",
      description: "Map signals, health scores, and success plays that keep SaaS accounts expanding.",
      icon: Lightbulb,
      pages: "28 pages",
      format: "PDF + FigJam",
    },
    {
      title: "AI Copilot Readiness Checklist",
      description: "Readiness criteria, guardrails, and architecture patterns for launching compliant AI assistants.",
      icon: Zap,
      pages: "18 pages",
      format: "PDF",
    },
    {
      title: "Product ↔ RevOps Sync Playbook",
      description: "Weekly rituals, scoring models, and automation hooks that align product usage with revenue teams.",
      icon: Target,
      pages: "34 pages",
      format: "PDF",
    },
    {
      title: "Pricing Experiment Planner",
      description: "Hypothesis templates, analytics setup, and rollout checklist for confident pricing changes.",
      icon: FileText,
      pages: "16 pages",
      format: "Sheets Template",
    },
  ]

export function ResourcesGrid() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={createSmoothTransition({ delay: index * 0.1 })}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold mb-2">{resource.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{resource.pages}</span>
                      <span>•</span>
                      <span>{resource.format}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>
                <Button className="w-full gradient-accent rounded-xl group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
