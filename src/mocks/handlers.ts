import { http, HttpResponse } from 'msw'
import { WeatherNote } from '../types'
let data: WeatherNote[] = [
	{
		id: 1676800000,
		date: '1676800000',
		temperature: 20,
		comment: '',
		owner: 'vasya',
		weather: 'Cloudy'
	}
]


export const handlers = [
	http.get('/api/weather', () => {

		return HttpResponse.json(data)
	}),
	http.post('/api/weather', () => {

		console.log('Captured a "POST /posts" request')
	}),
	http.delete('/api/weather/:id', ({ params }) => {
		const id = params.id as string
		data = data.filter(note => note.id !== parseInt(id))
		return new HttpResponse('Successfully delete', {
			status: 202
		})
	}),
	http.get('/api/owners', () => {

		console.log('Captured a "GET /owners" request')
	}),
	http.get('/api/weather_type', () => {

		console.log('Captured a "GET /weather_type" request')
	}),
]
