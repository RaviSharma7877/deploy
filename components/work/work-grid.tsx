"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { createSmoothTransition } from "@/lib/motion"

export function WorkGrid() {
  const caseStudies = [
    {
      title: "Predictive CX for a SaaS support platform",
      metric: "-27% churn in 120 days",
      industry: "SaaS",
      description: "Implemented predictive health scoring, alerted success teams, and automated playbooks that retained mid-market accounts.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "saas-churn-reduction",
    },
    {
      title: "AI retail copilot for a D2C wellness brand",
      metric: "3× sales velocity",
      industry: "D2C",
      description: "Built a conversational shopping copilot, personalised bundles, and optimised fulfillment to increase repeat rate.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "d2c-wellness-copilot",
    },
    {
      title: "Automation-first credit ops for an SME lender",
      metric: "Launch in 12 weeks",
      industry: "Fintech",
      description: "Delivered a modular lending platform with AI underwriting, onboarding workflows, and regulatory compliance baked in.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "sme-credit-automation",
    },
    {
      title: "B2B SaaS monetisation reboot",
      metric: "+41% expansion revenue",
      industry: "SaaS",
      description: "Rebuilt pricing, packaging, and usage insights; automated handoffs between product qualified leads and sales.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "saas-monetisation-reboot",
    },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.1 })}
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
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full font-semibold">
                      {study.metric}
                    </span>
                  </div>
                  <h3 className="text-2xl font-sans font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                  <div className="flex items-center text-primary group-hover:text-foreground transition-colors">
                    <span className="text-sm font-semibold">Read case study</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
