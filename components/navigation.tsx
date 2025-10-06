"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useCalendly } from "@/hooks/use-calendly"
import { siteConfig } from "@/lib/site"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openCalendly } = useCalendly()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/templates", label: "Templates" },
    { href: "/blog", label: "Blog" },
  ]

  const homeLabel = `${siteConfig.name} home`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary z-50"
            aria-label={homeLabel}
          >
            <span className="text-2xl leading-none">&gt;</span>
            <span>{siteConfig.shortName}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button
              onClick={openCalendly}
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7B7FFE] to-[#80E5FF] p-[1px] text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7B7FFE]"
            >
              <span className="rounded-full bg-background px-5 py-2 text-muted-foreground">
                Contact
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7B7FFE] z-50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 animate-in fade-in duration-200">
          <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                openCalendly()
              }}
              className="relative mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7B7FFE] to-[#80E5FF] p-[1px] text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7B7FFE]"
            >
              <span className="rounded-full bg-background px-7 py-2 text-muted-foreground">
                Contact
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
