import Link from "next/link"
import Image from "next/image"

export function BlogGrid() {
  const posts = [
    {
      title: "How to Effectively Use a Website to Increase Revenue (Updated 2024)",
      excerpt:
        "Creating a website is a great way to increase revenue for your business. Here are some tips to help you make the most of your website and increase your revenue...",
      image: "/placeholder.svg?height=360&width=640&text=Revenue+Growth",
      slug: "increase-revenue-with-website",
    },
    {
      title: "How To Get The Most Out Of Your Web Development Agency",
      excerpt:
        "As a business owner, having an effective web presence is essential for success in today’s digital world. Here’s how partnering with the right agency keeps your website growing...",
      image: "/placeholder.svg?height=360&width=640&text=Agency+Partnership",
      slug: "get-the-most-from-web-agency",
    },
    {
      title: "Landing Page Examples That Convert Well for Business Owners",
      excerpt:
        "In this blog post, we discuss the key elements of a good landing page, share examples of high-converting landing pages, and offer tips for creating your own...",
      image: "/placeholder.svg?height=360&width=640&text=Landing+Page+Examples",
      slug: "landing-page-examples",
    },
  ]

  return (
    <section className="bg-background pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-auto flex gap-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center rounded-xl bg-[#0B1B4A] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#091337]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
