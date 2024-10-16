import { Button } from 'primereact/button'
import { useDeleteWeatherNoteMutation } from '../api/weatherApiSlice'
import { WeatherNote } from '../types'

type DeleteButtonProps = {
	rowData: WeatherNote
}

function DeleteButton({ rowData }: DeleteButtonProps) {
	const [deleteNote] = useDeleteWeatherNoteMutation()
	return (
		<Button
			onClick={e => deleteNote({ id: rowData.id })}>
			Удалить
		</Button>
	)
}

export default DeleteButton