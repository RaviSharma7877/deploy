import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/resources/resources-hero"
import { ResourcesGrid } from "@/components/resources/resources-grid"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Playbooks & Templates | E2S_HuB",
  description: "Download the playbooks, canvases, and checklists we use to help SaaS, SME, and D2C teams ship and grow AI-first products.",
  path: "/resources",
})

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <Navigation />
      <ResourcesHero />
      <ResourcesGrid />
      <Footer />
    </main>
  )
}
