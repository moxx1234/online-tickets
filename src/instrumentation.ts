import init from "./database/init"

export async function register() {
	// run code on server startup
	if (process.env.NEXT_RUNTIME === 'nodejs') {
		init()
	}
}