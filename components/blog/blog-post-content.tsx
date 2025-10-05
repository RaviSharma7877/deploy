"use client"

import { motion } from "framer-motion"
import type React from "react" // Import React for JSX
import { smoothTransition } from "@/lib/motion"

interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  // Simple markdown-like parsing for demo purposes
  const parseContent = (text: string) => {
    const lines = text.trim().split("\n")
    const elements: React.ReactNode[] = [] // Declare elements as React.ReactNode
    let key = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="text-3xl font-sans font-bold text-foreground mt-12 mb-6">
            {line.replace("## ", "")}
          </h2>,
        )
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <h3 key={key++} className="text-xl font-sans font-bold text-foreground mt-8 mb-4">
            {line.replace(/\*\*/g, "")}
          </h3>,
        )
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={key++} className="text-lg text-muted-foreground leading-relaxed ml-6 mb-2">
            {line.replace("- ", "")}
          </li>,
        )
      } else if (line.trim() === "") {
        // Skip empty lines
      } else {
        elements.push(
          <p key={key++} className="text-lg text-muted-foreground leading-relaxed mb-6">
            {line}
          </p>,
        )
      }
    }

    return elements
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.article
          className="max-w-3xl mx-auto prose prose-invert prose-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
        >
          {parseContent(content)}
        </motion.article>
      </div>
    </section>
  )
}
