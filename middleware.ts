import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Temporary holding-page middleware.
 * Active only when HOLDING_PAGE=true (set on Vercel, not locally).
 * Redirects all routes to "/" while the site is under construction.
 * To launch the full site: remove the env var on Vercel (or delete this file).
 */
export function middleware(request: NextRequest) {
  if (process.env.HOLDING_PAGE !== "true") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow the home page, static assets, and Next.js internals
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".pdf")
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
