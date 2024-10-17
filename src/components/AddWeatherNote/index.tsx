import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { useState } from 'react'
import AddWeatherDialogContent from './AddWeatherDialogContent'
import './AddWeatherNote.scss'
function AddWeatherNoteButton() {
	const [visible, setVisible] = useState(false)
	return (
		<div className='add-weather-note-button'>
			<Button onClick={e => setVisible(true)}>
				Add
			</Button>
			<Dialog modal header='New weather note' visible={visible} onHide={() => { if (!visible) return; setVisible(false) }}>
				<AddWeatherDialogContent setVisible={setVisible} />
			</Dialog>
		</div>
	)
}

export default AddWeatherNoteButton