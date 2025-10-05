export const locales = ["en", "es", "fr"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/")
  const potentialLocale = segments[1]

  if (locales.includes(potentialLocale as Locale)) {
    return potentialLocale as Locale
  }

  return defaultLocale
}

export function getPathnameWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPath(pathname)
  if (locale === defaultLocale) return pathname

  return pathname.replace(`/${locale}`, "") || "/"
}
