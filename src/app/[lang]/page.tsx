import Header from "./components/header"
import { dictionary } from "@/content"

export default async function Home({
	params
}: {
	params: { lang: string }
}) {
	return (
		<>
			<Header lang={params.lang} />
			<main>
				<h1>{dictionary[params.lang]?.greeting}</h1>
			</main>
		</>
	)
}
