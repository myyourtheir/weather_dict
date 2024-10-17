
import { DataTable } from 'primereact/datatable'
import { useGetWeatherNotesQuery } from '../api/weatherApiSlice'
import { Column } from 'primereact/column'
import DeleteButton from './DeleteButton'
import { WeatherNote } from '../types'
import DateCell from './DateCell'

function Table() {
	const { data, isSuccess } = useGetWeatherNotesQuery()
	return (
		<>
			{
				isSuccess &&
				<DataTable
					value={data}
					tableStyle={{ minWidth: '50rem' }}
					showGridlines
				>
					<Column header="Date" body={(rowData: WeatherNote & { date: string }) => <DateCell rowData={rowData} />} />
					<Column field="temperature" header="Temperature" />
					<Column field="weather" header="Weather" />
					<Column field="owner" header="Owner" />
					<Column field="comment" header="Comment" />
					<Column header="" body={(rowData: WeatherNote) => <DeleteButton rowData={rowData} />} />
				</DataTable>
			}
		</>
	)
}

export default Table