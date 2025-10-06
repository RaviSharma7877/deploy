import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"
import { WorkTestimonial } from "@/components/work/work-testimonial"
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
        <WorkTestimonial
          quote="Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled."
          author="Tyler Durden"
          role="Founder at Project Mayhem"
        />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
