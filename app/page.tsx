import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { FrameworkSection } from "@/components/home/framework-section"
import { WhatWeDoSection } from "@/components/home/what-we-do-section"
import { CaseStudyHighlights } from "@/components/home/case-study-highlights"
import { TechStackStrip } from "@/components/home/tech-stack-strip"
import { ClosingCTA } from "@/components/home/closing-cta"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: `${siteConfig.name} | AI-First Product & Growth Studio`,
  description:
    "E2S_HuB helps SaaS, SME, and D2C companies launch faster, scale smarter, and compound growth with AI-first product leadership, engineering, and revenue operations.",
})

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <FrameworkSection />
        <WhatWeDoSection />
        <CaseStudyHighlights />
        <TechStackStrip />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
