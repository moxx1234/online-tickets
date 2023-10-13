import { dictionary } from "@/content"

export default async function Home({
	params
}: {
	params: { lang: string }
}) {
	return (
		<>
			<h1>{dictionary[params.lang]?.greeting}</h1>
		</>
	)
}
