import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Insights & Field Notes | E2S_HuB",
  description: "Playbooks on product leadership, AI engineering, and growth systems for SaaS, SME, and D2C teams.",
  path: "/blog",
})

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}
