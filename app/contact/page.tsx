import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Contact E2S_HuB",
  description: "Share your product goal and we'll map the pod, plan, and growth loops to get you there.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <main id="main-content">
      <Navigation />
      <ContactHero />
      <div className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
