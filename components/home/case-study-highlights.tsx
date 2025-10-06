"use client"

import Link from "next/link"

const projects = [
  {
    title: "Algochurn",
    description: "Practice the most popular coding questions asked in a technical interview round.",
    highlight: "Used by 1000+ registered users preparing for technical interviews.",
    liveUrl: "https://algochurn.com",
    images: [
      "/placeholder.svg?height=320&width=520&text=Algochurn+1",
      "/placeholder.svg?height=320&width=520&text=Algochurn+2",
      "/placeholder.svg?height=320&width=520&text=Algochurn+3",
    ],
  },
  {
    title: "Tailwind Master Kit",
    description: "Get beautiful, responsive, professionally designed Tailwind components ready to plug into your stack.",
    highlight: "Trusted by 500+ founders to launch production-ready interfaces.",
    liveUrl: "https://tailwindmasterkit.com",
    images: [
      "/placeholder.svg?height=320&width=520&text=Tailwind+Kit+1",
      "/placeholder.svg?height=320&width=520&text=Tailwind+Kit+2",
      "/placeholder.svg?height=320&width=520&text=Tailwind+Kit+3",
    ],
  },
  {
    title: "Creme Digital",
    description: "Commonsense solutions that achieve marketing objectives and reach business goals.",
    highlight: "Since 2015, Creme Digital's solutions have supported brands from virtually every industry.",
    liveUrl: "https://cremedigital.com",
    images: [
      "/placeholder.svg?height=320&width=520&text=Creme+Digital+1",
      "/placeholder.svg?height=320&width=520&text=Creme+Digital+2",
      "/placeholder.svg?height=320&width=520&text=Creme+Digital+3",
    ],
  },
  {
    title: "Invoker Labs",
    description: "Delivering magical Web3 experiences with a wide range of products and services.",
    highlight: "Flagship products include Nearsend, Nearblocks, nKYC and Route ag.",
    liveUrl: "https://invokerlabs.com",
    images: [
      "/placeholder.svg?height=320&width=520&text=Invoker+Labs+1",
      "/placeholder.svg?height=320&width=520&text=Invoker+Labs+2",
      "/placeholder.svg?height=320&width=520&text=Invoker+Labs+3",
    ],
  },
]

export function CaseStudyHighlights() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Recent
            <span className="ml-2 inline bg-gradient-to-r from-[#7B7FFE] via-[#B673FF] to-[#FF9FCE] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A look at some of the amazing websites that we&apos;ve built recently.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.title}
              className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]"
            >
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">{project.title}</h3>
                <p className="text-base text-muted-foreground">{project.description}</p>
                <p className="text-sm font-medium text-foreground/80">{project.highlight}</p>
                <div className="h-px w-12 bg-muted-foreground/30" aria-hidden="true" />
                <div className="pt-1">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center rounded-xl bg-[#0B1B4A] px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#091337]"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.images.map((image, index) => (
                  <div
                    key={`${project.title}-image-${index}`}
                    className="flex items-center justify-center rounded-[22px] border-[5px] border-[#0D8CE8] bg-background p-3 shadow-[0_12px_40px_rgba(13,140,232,0.16)]"
                  >
                    <div className="aspect-video w-full overflow-hidden rounded-2xl">
                      <img src={image} alt={`${project.title} preview ${index + 1}`} className="h-full w-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="group relative inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B673FF]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB4FF] via-[#E2ACFF] to-[#9CF5FF] opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
            <span className="relative inline-flex items-center rounded-full bg-background px-8 py-3 text-base font-semibold text-foreground shadow-[0_18px_40px_rgba(182,115,255,0.18)] ring-1 ring-black/5 dark:ring-white/10">
              Explore More Work
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
