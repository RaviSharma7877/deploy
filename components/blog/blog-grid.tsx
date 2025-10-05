"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { createSmoothTransition } from "@/lib/motion"

export function BlogGrid() {
  const posts = [
    {
      title: "Designing a retention OS for NRR-heavy SaaS",
      excerpt:
        "A blueprint for unifying product, success, and RevOps data into one churn-fighting system without rebuilding your stack from scratch.",
      category: "Product Ops",
      date: "2024-03-18",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "saas-retention-os",
    },
    {
      title: "Shipping AI copilots in regulated industries",
      excerpt:
        "How to move from proof-of-concept to production-grade AI experiences when compliance, audit trails, and trust matter most.",
      category: "AI Delivery",
      date: "2024-03-12",
      readTime: "11 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "ai-copilots-regulated",
    },
    {
      title: "Closing the product ↔ RevOps feedback loop",
      excerpt:
        "Practical steps to align product usage signals with marketing, sales, and customer success motions in under 60 days.",
      category: "Revenue Architecture",
      date: "2024-03-05",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "product-revops-loop",
    },
    {
      title: "The small-pod playbook for enterprise launches",
      excerpt:
        "We unpack how small, senior pods outpace traditional consulting models when you need to deliver enterprise-grade experiences fast.",
      category: "Delivery",
      date: "2024-02-26",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "small-pod-enterprise",
    },
    {
      title: "LLM guardrails that keep product and legal aligned",
      excerpt:
        "Lessons from deploying LLM-powered experiences across SaaS and fintech without slowing down release velocity.",
      category: "AI Delivery",
      date: "2024-02-19",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "llm-guardrails",
    },
    {
      title: "Pricing experiments that move the needle",
      excerpt:
        "A repeatable framework for running pricing and packaging experiments while keeping finance and RevOps confident in the numbers.",
      category: "Growth",
      date: "2024-02-12",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "pricing-experiments",
    },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={createSmoothTransition({ delay: index * 0.1 })}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden transition-all hover:border-foreground/30 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-sans font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary group-hover:text-foreground transition-colors">
                    <span className="text-sm font-semibold">Read more</span>
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
