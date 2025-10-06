import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TemplatesHero } from "@/components/templates/templates-hero"
import { TemplatesShowcase } from "@/components/templates/templates-showcase"
import { WorkTestimonial } from "@/components/work/work-testimonial"
import { TemplatesCTA } from "@/components/templates/templates-cta"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Templates | E2S_HuB",
  description: "Website templates ready to customize and launch, complete with the polish your brand deserves.",
  path: "/templates",
})

export default function TemplatesPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <TemplatesHero />
        <TemplatesShowcase />
        <WorkTestimonial />
        <TemplatesCTA />
      </main>
      <Footer />
    </>
  )
}
