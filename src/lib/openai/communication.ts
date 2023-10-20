import OpenAI from "openai"

const openai = new OpenAI({
	apiKey: process.env.OPENAI_SECRET,
	maxRetries: 3,
})

export const getCinemaNames = async (cinemasQty: number) => {
	const model = 'gpt-3.5-turbo'
	const namesCompletion = await openai.chat.completions.create({
		model,
		messages: [
			{ role: 'system', content: 'Act like you are a console in the terminal of IDE. Give output as unnamed json array' },
			{ role: 'user', content: `Generate ${cinemasQty} new names for cinemas` }
		]
	})
		.then(completion => JSON.parse(completion.choices[0].message.content as string))
		.catch(error => console.error(error))
	return namesCompletion
}