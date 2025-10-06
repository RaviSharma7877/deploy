"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

interface WorkTestimonialProps {
  quote?: string
  author?: string
  role?: string
  avatarSrc?: string
  className?: string
}

export function WorkTestimonial({
  quote =
    "Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended.",
  author = "Tyler Durden",
  role = "Founder at Project Mayhem",
  avatarSrc = "/placeholder-user.jpg",
  className,
}: WorkTestimonialProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background py-20 sm:py-24",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,31,51,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,31,51,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#109BFF]/40 bg-background shadow-[0_10px_28px_rgba(16,155,255,0.18)]">
            <Image
              src={avatarSrc}
              alt={author}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <blockquote className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            “{quote}”
          </blockquote>
          <div className="mt-6 text-sm font-semibold text-foreground sm:text-base">{author}</div>
          <div className="text-xs text-muted-foreground sm:text-sm">{role}</div>
        </div>
      </div>
    </section>
  )
}
