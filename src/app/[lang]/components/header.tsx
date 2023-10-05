import Link from "next/link"
import { caveat } from "../fonts/fonts"
import Menu from "./menu"
import MenuToggler from "./menuToggler"
import SearchField from "./searchField"
import { dictionary } from "@/content"

export default function Header({
	lang
}: {
	lang: string
}) {
	return (
		<header className="flex gap-5 mx-auto justify-between items-center p-2 container">
			<Link href='/' className={`${caveat.className} grow text-4xl sm:text-6xl`}>Tickets</Link>
			<div className="shrink">
				<SearchField placeholder={dictionary[lang].searchHolder} />
			</div>
			<div className="text-end flex items-center justify-end">
				<MenuToggler />
			</div>
			<Menu lang={lang} />
		</header>
	)
}