import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || ""
  const url = request.nextUrl.clone()

  if (host.startsWith("www.")) {
    const newHost = host.replace("www.", "")
    url.host = newHost
    url.protocol = "https"
    return NextResponse.redirect(url, 301) // Permanent redirect
  }

  if (request.headers.get("x-forwarded-proto") === "http") {
    url.protocol = "https"
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Run middleware on all routes except static files and API routes
  matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
}
