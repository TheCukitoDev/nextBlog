import 'server-only'

const dictionaries = {
	enUS: () =>
		import('@/dictionaries/en-US.json').then((module) => module.default),
	esES: () =>
		import('@/dictionaries/es-ES.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
