"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/hooks/use-calendly"

const ORBIT_POINTS = Array.from({ length: 20 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: `${(index % 5) * 0.35}s`,
  duration: `${3 + (index % 4) * 0.4}s`,
}))

export function HeroSection() {
  const { openCalendly } = useCalendly()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient with orbit lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-background to-background">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full text-primary/40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="orbit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#orbit-pattern)" />
          </svg>
        </div>
        <div className="absolute inset-0">
          {ORBIT_POINTS.map(({ left, top, delay, duration }, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
              style={{ left, top, animationDelay: delay, animationDuration: duration }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight mb-6 text-foreground">
            Build, scale, and grow the products your customers keep choosing.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            E2S_HuB is an AI-first product and growth studio partnering with SaaS, SME, and D2C operators who refuse to pay
            for endless billable hours. Led by a product leader, fueled by Rajat’s revenue playbooks and Ravi’s scalable AI
            engineering, we take ideas from discovery to adoption and compound the growth loops that follow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={openCalendly}
              className="rounded-xl text-base px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Talk to the founders
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border text-foreground hover:bg-muted text-base px-8 bg-transparent"
            >
              <Link href="/services">Explore our approach</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
