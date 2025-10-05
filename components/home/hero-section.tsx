"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/hooks/use-calendly"
import { LayoutTextFlip } from "../ui/layout-text-flip"
import { motion } from "framer-motion"
import Script from "next/script"

// Type declaration for lottie-player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": any
    }
  }
}

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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:flex-1 lg:max-w-2xl text-center lg:text-left">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Desktop: Multi-line layout */}
              <h1 className="hidden lg:block text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground leading-tight">
                <span className="block">Transform Your</span>
                <span className="block">Business With</span>
                <span className="block mt-2">
                  <LayoutTextFlip
                    text="10x More"
                    words={["Intelligence", "Growth", "Automation", "Innovation"]}
                    className="text-4xl xl:text-5xl 2xl:text-6xl"
                  />
                </span>
              </h1>

              {/* Tablet: Single line layout */}
              <h1 className="hidden md:block lg:hidden text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                <span className="inline">Transform Your Business With </span>
                <LayoutTextFlip
                  text="10x More"
                  words={["Intelligence", "Growth", "Automation", "Innovation"]}
                  className="text-3xl md:text-4xl"
                />
              </h1>

              {/* Mobile: Single line layout */}
              <h1 className="block md:hidden text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
                <span className="inline">Transform Your Business With </span>
                <LayoutTextFlip
                  text="10x More"
                  words={["Intelligence", "Growth", "Automation", "Innovation"]}
                  className="text-2xl sm:text-3xl"
                />
              </h1>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From idea to impact - we use design, data, and AI to build products that learn, adapt, and scale
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={openCalendly}
                className="rounded-xl text-base px-8 py-6 transition-all hover:-translate-y-0.5 hover:shadow-lg bg-primary text-primary-foreground"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Lottie Animation - Below text on tablet/mobile, right side on desktop */}
          <div className="w-full lg:flex-1 lg:max-w-xl xl:max-w-2xl order-last lg:order-last">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="afterInteractive" />
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="/lottiefile.json"
                style={{ width: "100%", height: "auto", minHeight: "300px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
