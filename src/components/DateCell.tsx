import { WeatherNote } from '../types'

function DateCell({ rowData }: { rowData: WeatherNote & { date: string } }) {
	const date = new Date(Date.parse(rowData.date))
	return (
		<div>
			{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} {date.getHours()}:{date.getMinutes()}
		</div>
	)
}

export default DateCell