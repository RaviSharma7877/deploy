"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      showPopupWidget: (url: string) => void
    }
  }
}

const DEFAULT_CALENDLY_URL = "https://calendly.com/sraa7877/discovery-call"

export function useCalendly(url: string = DEFAULT_CALENDLY_URL) {
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    if (!document.querySelector('link[href*="calendly"]')) {
      document.head.appendChild(link)
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget(url)
    } else {
      console.error("[v0] Calendly script not loaded yet")
    }
  }

  return { openCalendly }
}
