"use client"

import { motion } from "framer-motion"
import { createSmoothTransition, smoothTransition } from "@/lib/motion"
import { AnimatedGridPattern } from "../ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export function ProblemSection() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-06%20at%2012.03.17-6gcKV7slSl3TOFgd55lN15fNuzV5G9.png"
            alt="Michael Scott"
            className="w-24 h-24 rounded-full object-cover"
          />

          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground">
            Agenlabs are different and one of their kind. They are very professional and have a great team of
            developers. They are very responsive and always available to help. I would highly recommend them to anyone
            looking for a website or app development.
          </blockquote>

          <div className="space-y-2">
            <p className="text-xl font-semibold text-foreground">Michael Scott</p>
            <p className="text-lg text-muted-foreground">Manager at Dunder Mifflin</p>
          </div>
        </div>
      </div>
    </main>
  )
}
