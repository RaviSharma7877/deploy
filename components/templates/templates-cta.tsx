import Link from "next/link"

export function TemplatesCTA() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#15263F] via-[#122136] to-[#0D1A2C] px-6 py-16 text-center text-white sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Want to customize templates? We are here!</h2>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Contact us and we will get back within 24 hours. We mean it. You saw the testimonials, right?
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-2xl border border-white/70 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
