import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudyHeader } from "@/components/case-study/case-study-header"
import { CaseStudyOverview } from "@/components/case-study/case-study-overview"
import { CaseStudyApproach } from "@/components/case-study/case-study-approach"
import { CaseStudyTech } from "@/components/case-study/case-study-tech"
import { CaseStudyOutcome } from "@/components/case-study/case-study-outcome"
import { CaseStudyTestimonial } from "@/components/case-study/case-study-testimonial"
import { CaseStudyCTA } from "@/components/case-study/case-study-cta"
import { buildMetadata } from "@/lib/site"
import { notFound } from "next/navigation"

type CaseStudy = {
  title: string
  industry: string
  metric: string
  image: string
  overview: {
    client: string
    challenge: string
    goal: string
  }
  approach: {
    build: string
    scale: string
    automate: string
  }
  tech: string[]
  outcome: {
    metrics: Array<{ label: string; value: string }>
    description: string
  }
  testimonial: {
    quote: string
    author: string
    role: string
  }
}

// Sample case study data
const caseStudies: Record<string, CaseStudy> = {
  "saas-churn-reduction": {
    title: "Predictive CX for a SaaS support platform",
    industry: "SaaS",
    metric: "-27% churn in 120 days",
    image: "/placeholder.svg?height=600&width=1200",
    overview: {
      client: "Series B customer success platform serving 2K+ mid-market accounts",
      challenge: "Churn spiked as customers struggled to realise ROI beyond onboarding milestones",
      goal: "Predict at-risk accounts and orchestrate success plays ahead of renewal conversations",
    },
    approach: {
      build:
        "Unified product telemetry, CRM, and support data into a Snowflake hub, designed a health score model, and surfaced insights directly in the SaaS app and Slack.",
      scale:
        "Implemented PostHog dashboards for activation, ran guided workflow experiments, and coached success teams on the new playbook cadence.",
      automate:
        "Automated HubSpot and Slack workflows to trigger AI-generated success briefs, renewal alerts, and ongoing model retraining with fresh signals.",
    },
    tech: ["PostHog", "Snowflake", "HubSpot", "Slack", "Next.js", "AWS"],
    outcome: {
      metrics: [
        { label: "Gross churn", value: "-27%" },
        { label: "Expansion revenue", value: "+14%" },
        { label: "Play adoption", value: "92%" },
        { label: "Time to insight", value: "-65%" },
      ],
      description:
        "Within four months the platform’s churn rate dropped below pre-spike levels, renewals expanded, and success managers now have AI briefings before every QBR.",
    },
    testimonial: {
      quote:
        "E2S_HuB gave us the clarity we never had—health scores that actually drive action. Our CSMs finally feel ahead of renewals, not behind them.",
      author: "Mira Patel",
      role: "VP Customer Success",
    },
  },
  "d2c-wellness-copilot": {
    title: "AI retail copilot for a D2C wellness brand",
    industry: "D2C",
    metric: "3× sales velocity",
    image: "/placeholder.svg?height=600&width=1200",
    overview: {
      client: "A consumer wellness brand expanding from subscription to omnichannel",
      challenge: "Customers were overwhelmed by product choices and conversion lagged on mobile",
      goal: "Create an AI-assisted shopping experience that personalises bundles across channels",
    },
    approach: {
      build:
        "Designed and shipped a conversational shopping copilot with RAG-powered recommendations embedded across web, WhatsApp, and in-store kiosks.",
      scale:
        "Synced Shopify and warehouse data, tested bundle pricing, and stood up a CDP to personalise flows across email and paid media.",
      automate:
        "Connected fulfilment systems to trigger proactive inventory alerts and automated retention messaging when purchase patterns shifted.",
    },
    tech: ["OpenAI", "Shopify", "Klaviyo", "Whatsapp Business", "Vercel", "BigQuery"],
    outcome: {
      metrics: [
        { label: "Sales velocity", value: "3×" },
        { label: "Average order value", value: "+21%" },
        { label: "Repeat purchase", value: "+34%" },
        { label: "Support volume", value: "-40%" },
      ],
      description:
        "The AI copilot now drives over half of first-time purchases, bundles adjust in real time, and customer happiness scores hit an all-time high.",
    },
    testimonial: {
      quote:
        "We’ve wanted this experience for years. E2S_HuB delivered it in a single quarter and the numbers speak for themselves.",
      author: "Laura Kim",
      role: "Chief Growth Officer",
    },
  },
  "sme-credit-automation": {
    title: "Automation-first credit ops for an SME lender",
    industry: "Fintech",
    metric: "Launch in 12 weeks",
    image: "/placeholder.svg?height=600&width=1200",
    overview: {
      client: "Regional lender modernising SME credit origination",
      challenge: "Legacy spreadsheets, manual underwriting, and compliance overhead stalling go-to-market",
      goal: "Stand up a compliant lending platform with AI-assisted underwriting and automated servicing",
    },
    approach: {
      build:
        "Delivered a modular loan origination system with intake, document verification, and risk scoring powered by domain-specific LLMs.",
      scale:
        "Connected to core banking and payment rails, instrumented analytics for backlog visibility, and trained ops on exception handling.",
      automate:
        "Rolled out robotic process automations for KYC, created audit-ready trails, and deployed predictive dashboards for capital planning.",
    },
    tech: ["LangChain", "Python", "Next.js", "Temporal", "Snowflake", "Azure"],
    outcome: {
      metrics: [
        { label: "Time-to-approval", value: "-58%" },
        { label: "Operational cost", value: "-35%" },
        { label: "Compliance exceptions", value: "<1%" },
        { label: "Employee ramp", value: "2 weeks" },
      ],
      description:
        "The lender entered market within a quarter, scaled to 600 loans in the first wave, and now runs with a fraction of the manual effort.",
    },
    testimonial: {
      quote:
        "They handled tech, compliance, and process so we could focus on capital. We’d still be in pilot mode without E2S_HuB.",
      author: "Daniel Ortega",
      role: "Chief Operating Officer",
    },
  },
  "saas-monetisation-reboot": {
    title: "B2B SaaS monetisation reboot",
    industry: "SaaS",
    metric: "+41% expansion revenue",
    image: "/placeholder.svg?height=600&width=1200",
    overview: {
      client: "Workflow automation SaaS expanding into enterprise tiers",
      challenge: "Stagnant expansion revenue and unclear usage-to-value signals for sales",
      goal: "Rebuild pricing, packaging, and product insights to accelerate expansion motions",
    },
    approach: {
      build:
        "Revamped usage tracking, released a pricing experiments service, and embedded self-serve upgrade flows in-app.",
      scale:
        "Aligned GTM and product data in HubSpot + Salesforce, enabled RevOps with real-time product qualified lead views, and ran weekly pricing tests.",
      automate:
        "Deployed AI-generated account briefs, automated billing migrations, and set up continuous experimentation pipelines.",
    },
    tech: ["PostHog", "dbt", "HubSpot", "Salesforce", "Stripe", "AWS"],
    outcome: {
      metrics: [
        { label: "Expansion revenue", value: "+41%" },
        { label: "Upgrade conversion", value: "+33%" },
        { label: "Sales cycle", value: "-22%" },
        { label: "Pricing experiments", value: "24 in 90 days" },
      ],
      description:
        "Product and RevOps now share one monetisation engine. Expansion revenue accelerated and the pricing backlog finally moves weekly.",
    },
    testimonial: {
      quote:
        "It felt like E2S_HuB had been in our company for years—they connected product usage with sales faster than any internal initiative ever has.",
      author: "Olivia Reed",
      role: "SVP Revenue",
    },
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug]
  if (!caseStudy) return {}

  return buildMetadata({
    title: `${caseStudy.title} | E2S_HuB Case Study`,
    description: `${caseStudy.metric}. ${caseStudy.overview.goal}`,
    path: `/work/${params.slug}`,
  })
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <CaseStudyHeader
          title={caseStudy.title}
          industry={caseStudy.industry}
          metric={caseStudy.metric}
          image={caseStudy.image}
        />
        <CaseStudyOverview overview={caseStudy.overview} />
        <CaseStudyApproach approach={caseStudy.approach} />
        <CaseStudyTech tech={caseStudy.tech} />
        <CaseStudyOutcome outcome={caseStudy.outcome} />
        <CaseStudyTestimonial testimonial={caseStudy.testimonial} />
        <CaseStudyCTA />
      </main>
      <Footer />
    </>
  )
}
