export type WeatherNote = {
	id: number,
	date: Date | null,
	temperature: number | null
	weather: Weather | null
	owner: Owners | null
	comment: string
}

export type Weather = 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy'

export type Owners = 'Oleg' | 'John' | 'Mike' | 'Tom'

export type makeArrDict<T> = {
	title: T
}[]