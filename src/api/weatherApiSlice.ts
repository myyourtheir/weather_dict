import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherNote } from '../types'


export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
	tagTypes: ['WeatherNotes'],
	endpoints: (build) => ({
		getWeatherNotes: build.query<WeatherNote[], void>({
			query: () => `weather`,
			transformResponse: (res: WeatherNote[]) => {
				res.forEach(note => {
					note.comment = note.comment ? note.comment : '-'
					note.date = new Date(parseInt(note.date)).toLocaleString()
				})
				return res
			},
			providesTags: ['WeatherNotes']
		}),

		addWeatherNorte: build.mutation<WeatherNote, { newWeatherNote: WeatherNote }>({
			query: ({ newWeatherNote }) => ({
				url: `weather`,
				method: 'POST',
				body: newWeatherNote
			}),
			invalidatesTags: ['WeatherNotes']
		}),

		deleteWeatherNote: build.mutation({
			query: ({ id }) => ({
				url: `weather/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['WeatherNotes']
		}),
	}),
})




export const { useGetWeatherNotesQuery, useDeleteWeatherNoteMutation, useAddWeatherNorteMutation } = weatherApi