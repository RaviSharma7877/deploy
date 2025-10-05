import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostCTA } from "@/components/blog/blog-post-cta"
import { buildMetadata } from "@/lib/site"
import { notFound } from "next/navigation"

type BlogPost = {
  title: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  content: string
}

// Sample blog post data
const blogPosts: Record<string, BlogPost> = {
  "saas-retention-os": {
    title: "Designing a retention OS for NRR-heavy SaaS",
    category: "Product Ops",
    date: "2024-03-18",
    readTime: "9 min read",
    author: "Product Leader",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
Recurring revenue only compounds when customers stay. For most SaaS teams, the data to predict risk is scattered across product, support, finance, and CRM tools. A retention operating system pulls it into one motion.

## Start with the signals you already have

Instrument product telemetry, support tickets, billing events, and success notes into a single warehouse. Map the events that truly predict churn (usage drop, support backlog, missing executive sponsor) and keep the schema lean so it refreshes hourly.

## Score health, but keep humans in the loop

Blend quantitative metrics with field intel. We use Snowflake + dbt to compute scores, then push them into the product and Slack so customer teams see context alongside next-best actions.

## Design plays that can be automated

Every alert should trigger a play: add usage coaching, escalate roadmap fit, or introduce new packaging. Build the play once, measure impact, and let RevOps automate the routing with HubSpot or Salesforce flows.

## Close the loop with experimentation

Your retention OS improves as you run experiments. Track which plays move net revenue retention, sunset the ones that don’t, and feed learnings back into the model. That’s how we shaved churn by 27% for a support platform in 120 days.
    `,
  },
  "ai-copilots-regulated": {
    title: "Shipping AI copilots in regulated industries",
    category: "AI Delivery",
    date: "2024-03-12",
    readTime: "11 min read",
    author: "Ravi Sharma",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
AI copilots have huge upside for fintech, health, and insurance—but regulators watch every move. The pattern that works is opinionated and auditable.

## Architect for traceability from day one

Store every prompt, response, and context element. We route requests through Temporal workflows so we can replay interactions when auditors ask.

## Use RAG with policy-aware indexing

Ground your model with vetted content only. We maintain separate indexes for public docs, internal SOPs, and regulatory clauses, then choose at runtime which the copilot can access.

## Layer deterministic guardrails

Before responses reach users, check them against policy engines (Open Policy Agent works great) and run PII scrubbing. Fallbacks should degrade gracefully to human review, never to silence.

## Measure more than latency

Track usefulness, escalation rates, and compliance exceptions. If trust scores dip, freeze new features until you know why. This mindset let us launch AI underwriting helpers inside a heavily regulated SME lender in 12 weeks.
    `,
  },
  "product-revops-loop": {
    title: "Closing the product ↔ RevOps feedback loop",
    category: "Revenue Architecture",
    date: "2024-03-05",
    readTime: "8 min read",
    author: "Rajat Sharma",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
When product usage lives in one dashboard and revenue teams live in another, expansion dies. The fix is a shared loop where product signals trigger revenue action automatically.

## Align on the questions first

What signals tell us an account is ready for expansion? Which behaviours show risk? Answer these with product, marketing, sales, and success in the room before wiring anything.

## Centralise, then model

Pipe product events into your CRM and marketing tools. We lean on PostHog + dbt + HubSpot to make product qualified lead scores available inside every rep workspace.

## Trigger campaigns and plays in real time

Use the scores to kick off lifecycle sequences, price experiments, and executive outreach. The loop only stays healthy when the actions run without humans refreshing spreadsheets.

## Report on lag and lead metrics

Track how quickly plays fire after signals appear, and measure revenue, activation, and retention impact. The faster you close the loop, the faster ARR compounds.
    `,
  },
  "small-pod-enterprise": {
    title: "The small-pod playbook for enterprise launches",
    category: "Delivery",
    date: "2024-02-26",
    readTime: "7 min read",
    author: "Product Leader",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
Large enterprises expect polish, security, and alignment—but you don’t need a 40-person vendor team to deliver it. Here’s how we launch with senior pods.

## Put strategy, design, and build in one room

Senior talent means fewer handoffs. Product, design, and engineering make decisions together daily, cutting weeks of back-and-forth.

## Ship artifacts execs care about

Yes, code matters. So do value cases, risk registers, and enablement plans. Build them alongside the product so stakeholders stay confident.

## Automate compliance early

Bake in SOC2, GDPR, and access controls while the product is still forming. Retro-fitting compliance is where timelines go to die.

## Iterate in production, not PowerPoint

Launch with feature flags, beta cohorts, and observable usage. Enterprise buyers trust teams who show progress in their environment—not just decks.
    `,
  },
  "llm-guardrails": {
    title: "LLM guardrails that keep product and legal aligned",
    category: "AI Delivery",
    date: "2024-02-19",
    readTime: "10 min read",
    author: "Ravi Sharma",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
Legal wants safety. Product wants speed. You can have both if you treat guardrails as product features, not afterthoughts.

## Build a moderation stack, not a single check

Layer prompt filters, response classifiers, and business rule validators. Each guardrail catches different failure modes.

## Invest in red-teaming

Schedule time to break your own assistant. Document the exploits and add automated tests so regressions are caught before release.

## Give users a transparent escape hatch

Surface why content was blocked and offer alternate actions. Trust grows when users see the guardrail helping, not hiding.

## Keep compliance involved with dashboards

Share weekly guardrail metrics, false positive rates, and incident reviews. When legal has visibility, approvals become faster.
    `,
  },
  "pricing-experiments": {
    title: "Pricing experiments that move the needle",
    category: "Growth",
    date: "2024-02-12",
    readTime: "8 min read",
    author: "Rajat Sharma",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
Pricing tweaks fail when they’re treated like guesses. Treat them like product launches instead and you’ll unlock expansion revenue quickly.

## Start with hypotheses, not discounts

Frame experiments around value: packaging by outcomes, usage tiers, or services. Document what success looks like before touching billing.

## Build the analytics runway

You need self-serve dashboards for conversion, payback, and churn before rolling out changes. Otherwise you’re flying blind.

## Launch iteratively

Pilot with a clear cohort (new signups, specific segments), gather quantitative and qualitative feedback, then decide to scale, iterate, or kill.

## Operationalise learnings

Update sales playbooks, marketing messaging, and in-app prompts so the whole company moves with the new pricing story. That’s how we helped a workflow SaaS lift expansion revenue by 41%.
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  if (!post) return {}

  const description = post.content.replace(/\s+/g, " ").trim().slice(0, 160)

  return buildMetadata({
    title: `${post.title} | E2S_HuB Insights`,
    description,
    path: `/blog/${params.slug}`,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <BlogPostHeader
          title={post.title}
          category={post.category}
          date={post.date}
          readTime={post.readTime}
          author={post.author}
          image={post.image}
        />
        <BlogPostContent content={post.content} />
        <BlogPostCTA />
      </main>
      <Footer />
    </>
  )
}
