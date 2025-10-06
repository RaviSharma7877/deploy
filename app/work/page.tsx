import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkHero } from "@/components/work/work-hero"
import { WorkGrid } from "@/components/work/work-grid"
import { WorkTestimonial } from "@/components/work/work-testimonial"
import { ClosingCTA } from "@/components/home/closing-cta"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Case Studies | E2S_HuB",
  description:
    "Snapshots of how E2S_HuB builds, scales, and grows products for SaaS, SME, and D2C teams—from churn turnarounds to AI-first launches.",
  path: "/work",
})

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <WorkHero />
        <WorkGrid />
        <WorkTestimonial />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
