import { dictionary } from "@/content"
import LanguageSwitcher from "./languageSwitcher"

export default function Menu({
	lang
}: {
	lang: string
}) {
	return (
		<nav id="menu" data-open="false" className={`absolute left-0 data-[open=true]:top-0 data-[open=false]:-top-full w-screen h-screen overflow-hidden transition-all bg-slate-900`}>
			menu
			<LanguageSwitcher placeholder={dictionary[lang]?.languageHolder} language={lang} />
		</nav>
	)
}