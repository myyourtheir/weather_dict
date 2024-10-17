import { http, HttpResponse } from 'msw'
import { Owners, Weather, WeatherNote } from '../types'
let data: WeatherNote[] = [
	{
		id: 1676800000,
		date: new Date(),
		temperature: 20,
		comment: '',
		owner: 'John',
		weather: 'Cloudy'
	}
]
const owners: Owners[] = [
	'John', 'Mike', 'Tom', 'Oleg'
]

const weatherTypes: Weather[] = [
	'Sunny', 'Cloudy', 'Rainy', 'Snowy'
]

export const handlers = [
	http.get('/api/weather', () => {

		return HttpResponse.json(data, { status: 200 })
	}),

	http.post('/api/weather', async ({ request }) => {
		const newNote = await request.json()
		data.push(newNote as WeatherNote)
		return new HttpResponse('Successfully added', {
			status: 201
		})
	}),

	http.delete('/api/weather/:id', ({ params }) => {
		const id = params.id as string
		data = data.filter(note => note.id !== parseInt(id))
		return new HttpResponse('Successfully delete', {
			status: 202
		})
	}),

	http.get('/api/owners', () => {
		return HttpResponse.json(owners, { status: 200 })
	}),

	http.get('/api/weather_type', () => {
		return HttpResponse.json(weatherTypes, { status: 200 })
	}),
]
