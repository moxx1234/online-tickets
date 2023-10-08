import { dictionary } from "@/content"
import LanguageSwitcher from "./languageSwitcher"
import AuthButton from "./authButton"

export default function Menu({
	lang
}: {
	lang: string
}) {
	const currentDictionary = dictionary[lang]
	return (
		<nav id="menu" data-open="false" className={`absolute left-0 data-[open=true]:top-0 data-[open=false]:-top-full w-screen h-screen overflow-hidden transition-all bg-slate-900 p-4 flex flex-col justify-around items-center`}>
			<LanguageSwitcher placeholder={currentDictionary?.languageHolder} language={lang} />
			<AuthButton authIn={currentDictionary?.authIn} authOut={currentDictionary?.authOut} />
		</nav>
	)
}