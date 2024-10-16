export type WeatherNote = {
	id: number,
	date: string,
	temperature: number
	weather: Weather
	owner: string
	comment: string
}

export type Weather = 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy'