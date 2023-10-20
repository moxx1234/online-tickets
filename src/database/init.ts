import { getCinemaNames } from "@/lib/openai/communication"
import prisma from "./prisma/prisma"
import { Prisma } from '@prisma/client'

const generateCinemas = async (cinemasQty: number) => {
	const cinemaNames = await getCinemaNames(cinemasQty)
	const workingHours = generateWorkingHours(cinemasQty)

	await prisma.cinema.createMany({ data: cinemaNames.map((name: string, index: number) => ({ name, workingHours: workingHours[index] })) })
		.catch(error => console.error(error))

	generateHalls()
}

const generateWorkingHours = (iterations: number): Array<string> => {
	const result = []
	for (let i = 0; i < iterations; i++) {
		const openHours = 10 + Math.floor(Math.random() * 3)
		const closingHours = 22 + Math.floor(Math.random() * 3)
		const workingHours = `${openHours}:00 - ${closingHours >= 24 ? '0' + (closingHours - 24) : closingHours}:00`
		result.push(workingHours)
	}
	return result
}

const generateHalls = async () => {
	const cinemas = await prisma.cinema.findMany()
	const minCinemaHalls = 3,
		maxCinemaHalls = 12,
		minHallSeats = 75,
		maxHallSeats = 200

	cinemas.forEach(async (cinema) => {
		const hallsNumber = Math.floor(Math.random() * (maxCinemaHalls - minCinemaHalls + 1)) + minCinemaHalls
		for (let k = 0; k < hallsNumber; k++) {
			const hall = await prisma.cinemaHall.create({ data: { cinemaId: cinema.id } }).catch(error => console.error(error))
			const seatsQty = Math.floor(Math.random() * (maxHallSeats - minHallSeats + 1)) + minHallSeats
			const seatCreateManyInput: Prisma.CinemaSeatCreateManyInput = Array.from(Array(seatsQty)).reduce((result) => {
				return result = [...result, { cinemaHallId: hall?.id }]
			}, [])
			prisma.cinemaSeat.createMany({ data: seatCreateManyInput }).catch(error => console.error(error))
		}
	})
}

export default async function init() {
	const cinemas = await prisma.cinema.findMany().then(cinemas => cinemas)
	if (process.env.NODE_ENV === 'production' && cinemas.length) return
	if (process.env.NODE_ENV === 'development' && cinemas.length) {
		// clear database
		await prisma.cinemaSeat.deleteMany({})
		await prisma.cinemaHall.deleteMany({})
		await prisma.cinema.deleteMany({}).then(() => console.log('all clear'))
	}
	generateCinemas(10)
}