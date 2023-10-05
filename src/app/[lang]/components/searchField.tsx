'use client'

export default function SearchField({
	placeholder
}: {
	placeholder: string
}) {
	return (
		<input type="text" className="rounded text-black px-2 py-1 w-full" placeholder={placeholder} />
	)
}