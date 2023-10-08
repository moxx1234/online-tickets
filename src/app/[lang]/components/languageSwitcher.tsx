'use client'
import { ChangeEvent } from "react"
import setLanguage from "@/app/api/setLanguage"
import { useRouter } from "next/navigation"

export default function LanguageSwitcher({
	placeholder,
	language
}: {
	placeholder: string,
	language: string
}) {
	const router = useRouter()
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		if (value === placeholder) return
		setLanguage(e.target.value)
		router.refresh()
	}
	return (
		<select onChange={handleChange} className="bg-gray-50 max-w-xs border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option defaultValue={language}>{placeholder}</option>
			<option value="en">English</option>
			<option value="ru">Русский</option>
		</select>
	)
}