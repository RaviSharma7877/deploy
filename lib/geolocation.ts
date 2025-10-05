export type Region = "NA" | "EU" | "APAC" | "LATAM" | "OTHER"

export interface GeolocationData {
  country: string
  region: Region
  timezone: string
  locale: string
}

export async function getGeolocation(): Promise<GeolocationData | null> {
  try {
    // Use Vercel's geolocation headers if available
    if (typeof window === "undefined") {
      return null
    }

    // Fallback to browser geolocation API
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const locale = navigator.language

    // Determine region from timezone
    let region: Region = "OTHER"
    if (timezone.includes("America")) {
      region = timezone.includes("Argentina") || timezone.includes("Brazil") ? "LATAM" : "NA"
    } else if (timezone.includes("Europe")) {
      region = "EU"
    } else if (timezone.includes("Asia") || timezone.includes("Pacific")) {
      region = "APAC"
    }

    return {
      country: "Unknown",
      region,
      timezone,
      locale,
    }
  } catch (error) {
    console.error("Geolocation error:", error)
    return null
  }
}

export function getRegionalContent(region: Region) {
  const regionalData = {
    NA: {
      currency: "USD",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h",
    },
    EU: {
      currency: "EUR",
      dateFormat: "DD/MM/YYYY",
      timeFormat: "24h",
    },
    APAC: {
      currency: "USD",
      dateFormat: "YYYY/MM/DD",
      timeFormat: "24h",
    },
    LATAM: {
      currency: "USD",
      dateFormat: "DD/MM/YYYY",
      timeFormat: "24h",
    },
    OTHER: {
      currency: "USD",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h",
    },
  }

  return regionalData[region]
}
