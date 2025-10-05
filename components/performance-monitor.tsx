"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("[v0] LCP:", entry.startTime)
        }
        if (entry.entryType === "first-input") {
          console.log("[v0] FID:", (entry as any).processingStart - entry.startTime)
        }
        if (entry.entryType === "layout-shift") {
          if (!(entry as any).hadRecentInput) {
            console.log("[v0] CLS:", (entry as any).value)
          }
        }
      }
    })

    try {
      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"] })
    } catch (e) {
      // Browser doesn't support all entry types
    }

    return () => observer.disconnect()
  }, [])

  return null
}
