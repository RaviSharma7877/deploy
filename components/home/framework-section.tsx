"use client"

import { CardSpotlight } from "@/components/ui/card-spotlight"
import { cn } from "@/lib/utils"
import { PenTool, Server, ShieldCheck, Sparkles, Wrench, Zap } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Web App development",
    description: "We&apos;ll build you a website that&apos;s so good, it&apos;ll make all the other websites jealous. Trust me, not kidding.",
    accent: false,
  },
  {
    icon: PenTool,
    title: "Web Design",
    description: "Your website will be so beautiful, you&apos;ll want to frame it and hang it on your wall (but please don&apos;t).",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "Deployments and Hosting",
    description: "Get your website out there in the world, where it belongs, with our lightning-fast deployment services.",
    accent: false,
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we&apos;ve got you covered.",
    accent: false,
  },
  {
    icon: Server,
    title: "Full-Stack Development",
    description: "Take your website to the next level with our full-stack development services. We&apos;ve got all the skills to make your vision a reality.",
    accent: false,
  },
  {
    icon: ShieldCheck,
    title: "And everything else",
    description: "Ecommerce, Landing pages, Back-end heavy, Dashboards. You name it, we&apos;ve done it AND we&apos;ll do it for you.",
    accent: false,
  },
]

export function FrameworkSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            We handle just about everything!
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We handle everything from design to deployment to get your website shipped and ready to go!
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, accent }) => (
            <CardSpotlight
              key={title}
              radius={240}
              color={accent ? "rgba(190, 64, 92, 0.28)" : "rgba(190, 64, 92, 0.18)"}
              className={cn(
                "h-full transform-gpu p-7 text-left transition-transform duration-300 hover:-translate-y-1",
                "after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(120deg,rgba(110,24,46,0.08)_1px,transparent_1px)] after:bg-[size:58px_58px] bg-card/80",
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl border text-[#BE405C]",
                  accent ? "border-[#BE405C]/40 bg-white/70" : "border-[#BE405C]/30 bg-background"
                )}
              >
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  )
}
