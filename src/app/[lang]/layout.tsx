import '../globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts/fonts'
import { defaultLocale } from '@/middleware'

export const metadata: Metadata = {
	title: 'Buy tickets online',
}

export default function RootLayout({
	children,
	params
}: {
	children: React.ReactNode,
	params: { lang: string }
}) {
	return (
		<html lang={params.lang ?? defaultLocale}>
			<body className={`${inter.className} bg-neutral-950 min-h-screen`}>
				{children}
			</body>
		</html>
	)
}
