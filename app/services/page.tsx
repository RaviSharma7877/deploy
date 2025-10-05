import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Solutions for SaaS, SME, and D2C teams | E2S_HuB",
  description:
    "End-to-end pods that turn product strategy into AI-first delivery, growth activation, and automation that scales without bloat.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
