type DictionaryEntry = {
	greeting: string,
	searchHolder: string,
	languageHolder: string
}

export const dictionary: Record<string, DictionaryEntry> = {
	en: {
		greeting: 'Hello world!',
		searchHolder: 'Search...',
		languageHolder: 'Choose language'
	},
	ru: {
		greeting: 'Привет, мир!',
		searchHolder: 'Поиск...',
		languageHolder: 'Выбрать язык'
	}
}