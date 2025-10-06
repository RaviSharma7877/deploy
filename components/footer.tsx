import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <span className="text-2xl leading-none">&gt;</span>
            <span>{siteConfig.shortName}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
