import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  if (process.env.MAINTENANCE === 'true') {
    const url = req.nextUrl.clone()
    if (url.pathname === '/maintenance.html' || url.pathname.includes('.')) {
      return NextResponse.next()
    }

    url.pathname = '/maintenance.html'
    return NextResponse.rewrite(url, {
      status: 503,
    })
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
