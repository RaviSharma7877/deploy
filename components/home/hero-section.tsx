"use client"

import Link from "next/link"
import { Newspaper, PenSquare, Users } from "lucide-react"

const features = [
  {
    title: "Modern Web Apps",
    description:
      "Web apps that are discoverable, easy to customize with a modern tech stack to optimize your website for performance.",
    icon: Newspaper,
  },
  {
    title: "Tailored design",
    description:
      "Custom designs tailored to your needs, providing you with a Figma file that is easy to navigate and comfortable to work with.",
    icon: PenSquare,
  },
  {
    title: "Built by experts",
    description:
      "We are a team of Senior Software Engineers that have built and developed web apps at scale. You can trust us.",
    icon: Users,
  },
]

export function HeroSection() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <span className="text-4xl font-semibold text-muted-foreground">&gt;</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Web Apps that
            <span className="ml-2 inline bg-gradient-to-r from-[#7B7FFE] via-[#B673FF] to-[#FF9FCE] bg-clip-text text-transparent whitespace-nowrap">
              Make Sense.
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build website for your business that actually converts. Wonderfully designed, masterfully created websites and layouts,
            created by the founders of <span className="font-semibold text-foreground">Google</span> and <span className="font-semibold text-foreground">Facebook</span>.
            The ideal beginning stage for your next project.
          </p>
        </div>

        <div className="mt-16 grid gap-12">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex items-start gap-4 text-left">
                <span className="mt-1 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[#0BC2A4]/70 bg-background text-[#0BC2A4]">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/work"
              className="group relative inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B673FF]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB4FF] via-[#E2ACFF] to-[#9CF5FF] opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
              <span className="relative inline-flex items-center rounded-lg bg-background px-8 py-3 text-base font-semibold text-foreground shadow-[0_18px_40px_rgba(182,115,255,0.18)] ring-1 ring-black/5 dark:ring-white/10">
                Explore Work
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
