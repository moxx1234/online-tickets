type DictionaryEntry = {
	greeting: string,
	searchHolder: string,
	languageHolder: string,
	authIn: string,
	authOut: string
}

export const dictionary: Record<string, DictionaryEntry> = {
	en: {
		greeting: 'Hello world!',
		searchHolder: 'Search...',
		languageHolder: 'Choose language',
		authIn: 'Login / Sign Up',
		authOut: 'Logout'
	},
	ru: {
		greeting: 'Привет, мир!',
		searchHolder: 'Поиск...',
		languageHolder: 'Выбрать язык',
		authIn: 'Вход / Регистрация',
		authOut: 'Выйти'
	}
}