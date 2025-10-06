export function ServicesHero() {
  return (
    <section className="bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Services that
            <span className="ml-2 inline bg-gradient-to-r from-[#7B7FFE] via-[#B673FF] to-[#FF9FCE] bg-clip-text text-transparent">
              ship and scale
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            One seasoned pod that plans, designs, builds, and grows your next product release—without the usual handoffs or
            agency drag.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Strategy first",
              description: "Insights, positioning, and metrics that point the pod at the right outcome from day one.",
            },
            {
              title: "Build with AI",
              description: "Design systems, resilient services, and LLM workflows that ship weekly without regressions.",
            },
            {
              title: "Growth wired in",
              description: "Activation, pricing, and RevOps experiments that connect product usage to revenue.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-card/85 p-6 text-left shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
