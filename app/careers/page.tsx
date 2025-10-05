import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersValues } from "@/components/careers/careers-values"
import { CareersOpenings } from "@/components/careers/careers-openings"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Careers at E2S_HuB",
  description: "Work alongside senior product, growth, and engineering leaders building AI-first products for SaaS, SME, and D2C teams.",
  path: "/careers",
})

export default function CareersPage() {
  return (
    <main id="main-content">
      <Navigation />
      <CareersHero />
      <CareersValues />
      <CareersOpenings />
      <Footer />
    </main>
  )
}
