import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { MissionSection } from "@/components/about/mission-section"
import { ValuesSection } from "@/components/about/values-section"
import { TeamSection } from "@/components/about/team-section"
import { PartnersSection } from "@/components/about/partners-section"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "About E2S_HuB",
  description:
    "Meet the product, revenue, and engineering leaders behind E2S_HuB—the AI-first studio helping SaaS, SME, and D2C teams outpace their markets.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <AboutHero />
        <StorySection />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  )
}
