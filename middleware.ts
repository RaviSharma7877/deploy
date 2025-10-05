import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get geolocation data from Vercel headers
  const country = request.geo?.country || "US"
  const region = request.geo?.region || "Unknown"
  const city = request.geo?.city || "Unknown"

  // Add geolocation headers to response for client-side access
  response.headers.set("x-geo-country", country)
  response.headers.set("x-geo-region", region)
  response.headers.set("x-geo-city", city)

  // Regional redirects or content optimization can be added here
  // Example: Redirect based on country
  // if (country === 'FR' && !request.nextUrl.pathname.startsWith('/fr')) {
  //   return NextResponse.redirect(new URL('/fr', request.url))
  // }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
