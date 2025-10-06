import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FrameworkSection } from "@/components/home/framework-section"
import { CaseStudyHighlights } from "@/components/home/case-study-highlights"
import { ClosingCTA } from "@/components/home/closing-cta"
import { WorkTestimonial } from "@/components/work/work-testimonial"
import { buildMetadata, siteConfig } from "@/lib/site"
import { LogoTicker } from "@/components/LogoTicker"

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
        <LogoTicker />
        <WorkTestimonial
          quote="Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended."
          author="Tyler Durden"
          role="Founder at Project Mayhem"
        />
        <CaseStudyHighlights />
        <WorkTestimonial
          quote="Agenlabs are different and one of their kind. They are very professional and have a great team of developers. They are very responsive and always available to help. I would highly recommend them to anyone looking for a website or app development."
          author="Michael Scott"
          role="Manager at Dundler Mifflin"
        />
        <FrameworkSection />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
