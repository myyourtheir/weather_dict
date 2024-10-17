import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Owners, Weather, WeatherNote } from '../types'


export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
	tagTypes: ['WeatherNotes', 'Owners', 'weatherTypes'],
	endpoints: (build) => ({
		getWeatherNotes: build.query<WeatherNote[], void>({
			query: () => `weather`,
			transformResponse: (res: WeatherNote[]) => {
				res.forEach(note => {
					note.comment = note.comment ? note.comment : '-'
				})
				return res
			},
			providesTags: ['WeatherNotes']
		}),

		getOwners: build.query<Owners[], void>({
			query: () => `owners`,
			providesTags: ['Owners']
		}),
		getWeatherTypes: build.query<Weather[], void>({
			query: () => `weather_type`,
			providesTags: ['weatherTypes']
		}),

		addWeatherNote: build.mutation<WeatherNote, { newWeatherNote: WeatherNote }>({
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




export const { useGetWeatherNotesQuery, useDeleteWeatherNoteMutation, useAddWeatherNoteMutation, useGetOwnersQuery, useGetWeatherTypesQuery } = weatherApi