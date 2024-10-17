import AddWeatherNoteButton from './components/AddWeatherNote'
import Table from './components/Table'
import './index.scss'
import 'primereact/resources/themes/saga-blue/theme.css'


function App() {
	return (
		<main className="App">
			<div className='container'>
				<h3>
					Weather Notes Table
				</h3>
				<Table />
				<AddWeatherNoteButton />
			</div>
		</main>
	)
}

export default App
