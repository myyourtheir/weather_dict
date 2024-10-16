import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { useState } from 'react'

function AddWeatherNoteButton() {
	const [visible, setVisible] = useState(false)
	return (
		<>
			<Button onClick={e => setVisible(true)}>
				Add
			</Button>
			<Dialog visible={visible} onHide={() => { if (!visible) return; setVisible(false) }}>
				content
			</Dialog>
		</>
	)
}

export default AddWeatherNoteButton