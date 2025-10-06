import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PackagesHero } from "@/components/packages/packages-hero"
import { PackagesFeatures } from "@/components/packages/packages-features"
import { WorkGrid } from "@/components/work/work-grid"
import { WorkTestimonial } from "@/components/work/work-testimonial"
import { PackagesCTA } from "@/components/packages/packages-cta"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Packages | E2S_HuB",
  description:
    "Landing page packages crafted to convert. Explore what’s included, see recent builds, and talk to the team about custom needs.",
  path: "/packages",
})

export default function PackagesPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <PackagesHero />
        <PackagesFeatures />
        <WorkGrid
          heading="Some of the websites that we have built"
          subheading="A look at some of the amazing websites that we've built recently."
        />
        <WorkTestimonial />
        <PackagesCTA />
      </main>
      <Footer />
    </>
  )
}
