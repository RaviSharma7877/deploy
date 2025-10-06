const features = [
  {
    title: "Top Notch Design",
    description:
      "We design great looking websites from scratch. We use the latest design trends and best practices to make your website look great.",
  },
  {
    title: "Developed modern",
    description:
      "We build your website using the latest technologies and frameworks. We make sure that it works on the latest browsers and is easy to maintain.",
  },
  {
    title: "Performance Optimized",
    description:
      "We focus heavily on performance optimisation, whether it’s image optimisation or website build speed, we have you covered.",
  },
  {
    title: "Responsive Design",
    description:
      "Your website will look amazing on any device. We make sure your website works great on mobile, tablet, and desktop.",
  },
  {
    title: "Search Engine Optimized",
    description:
      "We make sure you get found on Google. We use the best SEO techniques to make sure your website is successful and long lasting.",
  },
  {
    title: "Onboard Forms",
    description:
      "We make sure your leads get converted. We make sure you get the leads you need. We integrate your website with your favourite streamlining tools.",
  },
  {
    title: "Revisions",
    description:
      "We make sure you are happy with the website. We do revisions and keep you updated on the progress.",
  },
  {
    title: "Analytics and Tracking",
    description:
      "We make sure you know how your website is performing. We integrate analytics, website tracking, and also Google Search Console.",
  },
  {
    title: "Built by experts",
    description:
      "We have the people behind projects like Algochurn and Tailwind Master Kit. We’ve been building websites for years – we know what we’re doing.",
  },
]

export function PackagesFeatures() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">What&apos;s included</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
