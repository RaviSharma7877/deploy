"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Form submission logic would go here
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl p-8"
    >
      <h2 className="font-sans text-2xl font-bold mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium mb-2 block">
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-background border-border rounded-xl"
            placeholder="Your name"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium mb-2 block">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-background border-border rounded-xl"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <Label htmlFor="company" className="text-sm font-medium mb-2 block">
            Company
          </Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-background border-border rounded-xl"
            placeholder="Your company"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-sm font-medium mb-2 block">
            Message *
          </Label>
          <Textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-background border-border rounded-xl min-h-[150px]"
            placeholder="Tell us about your project..."
          />
        </div>
        <Button type="submit" className="w-full gradient-accent rounded-xl py-6">
          Send Message
        </Button>
      </form>
    </motion.div>
  )
}
