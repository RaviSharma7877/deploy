"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User } from "lucide-react"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"

interface BlogPostHeaderProps {
  title: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
}

export function BlogPostHeader({ title, category, date, readTime, author, image }: BlogPostHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
          >
            <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground text-balance">
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
