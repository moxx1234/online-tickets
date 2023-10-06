import '../globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts/fonts'
import { defaultLocale } from '@/middleware'
import { getServerSession } from 'next-auth'
import SessionProvider from '../context/sessionProvider'

export const metadata: Metadata = {
	title: 'Buy tickets online',
}

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode,
	params: { lang: string }
}) {
	const session = await getServerSession()
	return (
		<html lang={params.lang ?? defaultLocale}>
			<body className={`${inter.className} bg-neutral-950 min-h-screen`}>
				<SessionProvider session={session}>
					{children}
				</SessionProvider>
			</body>
		</html>
	)
}
