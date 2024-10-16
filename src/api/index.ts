import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from './weatherApiSlice'


export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weatherApi.middleware),
})