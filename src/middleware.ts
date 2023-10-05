import { NextResponse, NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'ru']
export const defaultLocale = 'en'

function getLocale(request: NextRequest): string {

	const headers = new Headers(request.headers)

	const acceptLanguage = headers.get('accept-language')
	if (acceptLanguage) headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))

	const headersObject = Object.fromEntries(headers.entries())

	const languages = new Negotiator({ headers: headersObject }).languages()
	return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {

	const cookies = request.cookies.get('chosen-language')

	const locale = cookies?.value ?? getLocale(request) ?? defaultLocale
	const pathname = request.nextUrl.pathname

	const newURL = new URL(`/${locale}${pathname}`, request.nextUrl)

	return NextResponse.rewrite(newURL)
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}