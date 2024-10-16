
import { DataTable } from 'primereact/datatable'
import { useGetWeatherNotesQuery } from '../api/weatherApiSlice'
import { Column } from 'primereact/column'
import DeleteButton from './DeleteButton'
import { WeatherNote } from '../types'

function Table() {
	const { data } = useGetWeatherNotesQuery()
	return (
		<DataTable
			value={data}
			tableStyle={{ minWidth: '50rem' }}
			showGridlines
		>
			<Column field="date" header="Date"></Column>
			<Column field="temperature" header="Temperature"></Column>
			<Column field="weather" header="Weather"></Column>
			<Column field="owner" header="Owner"></Column>
			<Column field="comment" header="Comment"></Column>
			<Column field="" header="" body={(rowData: WeatherNote) => <DeleteButton rowData={rowData} />}></Column>
		</DataTable>
	)
}

export default Table