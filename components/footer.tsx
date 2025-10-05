import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Solutions" },
    { href: "/work", label: "Case Studies" },
    { href: "/blog", label: "Insights" },
    { href: "/resources", label: "Playbooks" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="border-t border-border mt-32">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-sans font-bold tracking-tight hover:text-primary transition-colors">
              {siteConfig.shortName}
            </Link>
            <p className="text-muted-foreground mt-4 text-base">AI-First Product & Growth Studio for SaaS, SME, and D2C teams</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-lg mb-4 opacity-0">More</h3>
            <ul className="space-y-3">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground mb-4 text-base">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                {siteConfig.email}
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="divider pt-8">
          <p className="text-muted-foreground text-sm text-center">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
