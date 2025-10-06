"use client"

import Image from "next/image"
import Link from "next/link"

export function PackagesHero() {
  return (
    <section className="bg-background pt-28 pb-16 sm:pb-20">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[minmax(0,320px)_1fr] lg:px-8 lg:pt-10">
        <div className="flex flex-col gap-6 rounded-3xl border border-border/70 bg-card/90 p-8 shadow-sm sm:p-10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary/80">Landing Page Development</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">$4,995</h1>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            A starting point you can use to grow your business. Our designers and devs collaborate to build a landing page
            that converts and helps you achieve your sales targets.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#0B1B4A] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#091337]"
          >
            Buy Package
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-4xl">
          <div className="rounded-[28px] border-[8px] border-[#109BFF] bg-background p-4 shadow-[0_20px_60px_rgba(16,155,255,0.18)]">
            <div className="relative overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/placeholder.svg?height=720&width=1024&text=Landing+Page+Mockup"
                alt="Landing page preview"
                width={1280}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute right-6 top-6 hidden w-64 rounded-2xl border border-border/70 bg-white p-4 text-left shadow-lg sm:block">
                <h3 className="text-sm font-semibold text-foreground">We handle just about everything!</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  From design to deployment, get your website shipped and ready to go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
