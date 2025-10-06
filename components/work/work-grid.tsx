import Link from "next/link"
import Image from "next/image"

interface WorkGridProps {
  heading?: string
  subheading?: string
}

export function WorkGrid({ heading, subheading }: WorkGridProps = {}) {
  const caseStudies = [
    {
      title: "Algochurn",
      description: "Practice the most popular coding questions asked in a technical interview round.",
      highlight: "Used by 1000+ registered users preparing for technical interviews.",
      liveUrl: "https://algochurn.com",
      images: [
        "/placeholder.svg?height=360&width=640&text=Algochurn+Dashboard",
        "/placeholder.svg?height=360&width=640&text=Algochurn+Interview+Prep",
      ],
    },
    {
      title: "Tailwind Master Kit",
      description: "Get beautiful, responsive, professionally developed Tailwind UI components and build your website quicker.",
      highlight: "Trusted by 500+ founders to launch production-ready interfaces.",
      liveUrl: "https://tailwindmasterkit.com",
      images: [
        "/placeholder.svg?height=360&width=640&text=Tailwind+Components",
        "/placeholder.svg?height=360&width=640&text=Tailwind+Library",
      ],
    },
    {
      title: "Creme Digital",
      description: "Commonsense solutions that achieve marketing objectives and reach business goals.",
      highlight: "Since 2015, Creme Digital&apos;s solutions have supported brands from virtually every industry.",
      liveUrl: "https://cremedigital.com",
      images: [
        "/placeholder.svg?height=360&width=640&text=Creme+Digital+Landing",
        "/placeholder.svg?height=360&width=640&text=Creme+Digital+Forms",
      ],
    },
    {
      title: "Invoker Labs",
      description: "Delivering magical Web3 experiences with a wide range of products and services.",
      highlight: "Flagship products include Nearsend, Nearblocks, nKYС and Route ag.",
      liveUrl: "https://invokerlabs.com",
      images: [
        "/placeholder.svg?height=360&width=640&text=Invoker+Labs+Portal",
        "/placeholder.svg?height=360&width=640&text=Invoker+Labs+Products",
      ],
    },
  ]

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {heading ? (
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{heading}</h2>
              {subheading ? (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{subheading}</p>
              ) : null}
            </div>
          ) : null}
          {caseStudies.map(({ title, description, highlight, liveUrl, images }) => (
            <div key={title} className="grid gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-center">
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
                <p className="text-sm font-medium text-foreground/80">{highlight}</p>
                <div className="pt-2">
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center rounded-xl bg-[#0B1B4A] px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#091337]"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {images.map((image, index) => (
                  <div
                    key={`${title}-image-${index}`}
                    className="flex h-full items-center justify-center rounded-[24px] border-[6px] border-[#109BFF] bg-background p-3 shadow-[0_15px_45px_rgba(16,155,255,0.15)]"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                      <Image
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
