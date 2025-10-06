import Image from "next/image"
import Link from "next/link"

const templates = [
  {
    name: "Foxtrot",
    description:
      "Foxtrot is a SaaS marketing template that has a modern design with a pinch of class. Built with Next.js and Tailwind CSS, it is perfect for launching your landing page.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX", "React"],
    liveUrl: "https://example.com/foxtrot-live",
    purchaseUrl: "https://example.com/foxtrot-buy",
    images: [
      "/placeholder.svg?height=360&width=640&text=Foxtrot+Hero",
      "/placeholder.svg?height=360&width=640&text=Foxtrot+Testimonials",
    ],
  },
]

export function TemplatesShowcase() {
  return (
    <section className="bg-background pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {templates.map((template) => (
            <div
              key={template.name}
              className="grid gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-center"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{template.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {template.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {template.stack.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={template.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center rounded-xl bg-[#0B1B4A] px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#091337]"
                  >
                    Live Preview
                  </Link>
                  <Link
                    href={template.purchaseUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center rounded-xl border border-border/70 px-5 py-2 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:border-foreground/80"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {template.images.map((image, index) => (
                  <div
                    key={`${template.name}-image-${index}`}
                    className="flex h-full items-center justify-center rounded-[24px] border-[6px] border-[#109BFF] bg-background p-3 shadow-[0_15px_45px_rgba(16,155,255,0.15)]"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                      <Image
                        src={image}
                        alt={`${template.name} screenshot ${index + 1}`}
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
