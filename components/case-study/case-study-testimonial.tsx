"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { smoothTransition } from "@/lib/motion"

interface CaseStudyTestimonialProps {
  testimonial: {
    quote: string
    author: string
    role: string
  }
}

export function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card border border-border rounded-xl p-12 relative shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            <Quote className="w-12 h-12 text-primary mb-6 opacity-60" />
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <div>
              <div className="font-sans font-bold text-foreground">{testimonial.author}</div>
              <div className="text-muted-foreground">{testimonial.role}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
