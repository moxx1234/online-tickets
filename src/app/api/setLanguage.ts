'use server'
import { cookies } from 'next/headers'

export default async function setLanguage(lang: string) {
	const cookieStorage = cookies()
	cookieStorage.set('chosen-language', lang)
}