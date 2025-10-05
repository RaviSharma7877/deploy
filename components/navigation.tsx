"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useCalendly } from "@/hooks/use-calendly"
import { ThemeToggle } from "@/components/theme-toggle"
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
    { href: "/about", label: "About" },
    // { href: "/services", label: "Solutions" },
    // { href: "/work", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    // { href: "/resources", label: "Playbooks" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-sans font-bold tracking-tight hover:text-primary transition-colors z-50"
            aria-label={homeLabel}
          >
            {siteConfig.shortName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={openCalendly}
              className="bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Book a Strategy Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors z-50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-lg z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="container mx-auto px-4 py-8 h-full overflow-y-auto">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-3 block border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    openCalendly()
                  }}
                  className="bg-primary text-primary-foreground rounded-xl w-full py-6 text-base"
                >
                  Book a Strategy Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
