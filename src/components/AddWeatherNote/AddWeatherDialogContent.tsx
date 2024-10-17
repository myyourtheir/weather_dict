import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { WeatherNote } from '../../types'
import { InputNumber } from 'primereact/inputnumber'
import { FloatLabel } from 'primereact/floatlabel'
import { Dropdown } from 'primereact/dropdown'
import { useAddWeatherNoteMutation, useGetOwnersQuery, useGetWeatherTypesQuery } from '../../api/weatherApiSlice'
import { Calendar } from 'primereact/calendar'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Dispatch, SetStateAction } from 'react'

type AddWeatherDialogContentProps = {
	setVisible: Dispatch<SetStateAction<boolean>>
}

function AddWeatherDialogContent({ setVisible }: AddWeatherDialogContentProps) {
	const { data: owners } = useGetOwnersQuery()
	const { data: wetherTypes } = useGetWeatherTypesQuery()
	const [addNote] = useAddWeatherNoteMutation()
	const { control, formState: { errors }, handleSubmit } = useForm<WeatherNote>({
		defaultValues: {
			id: Date.now(),
			date: null,
			temperature: null,
			weather: null,
			owner: null,
			comment: ''
		}
	})
	const getFormErrorMessage = (name: keyof WeatherNote) => {
		console.log(errors[name])
		return errors[name] && <small className="p-error">{errors[name]?.message}</small>
	}
	const onSubmit: SubmitHandler<WeatherNote> = (data) => {
		addNote({ newWeatherNote: data }).then(() => setVisible(false))
	}

	return (
		<div className='dialog'>

			<form onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
				<Controller
					name="date"
					control={control}
					rules={{
						required: { value: true, message: 'Date is required' }
					}}
					render={({ field }) => (
						<div>
							<FloatLabel>
								<Calendar
									id={field.name}
									value={field.value}
									onChange={(e) => field.onChange(e.value)} dateFormat="dd.mm.yy" mask="99.99.9999"
									showIcon
									showTime
									hourFormat="24"
								/>
								<label htmlFor="date">Date</label>
							</FloatLabel>
							{getFormErrorMessage(field.name)}
						</div>
					)}
				/>
				<Controller
					name='temperature'
					rules={{
						required: { value: true, message: 'Temperature is required' },
						min: { value: -50, message: '<50' },
						max: { value: 60, message: '>60' },
					}}
					control={control}
					render={({ field }) => {
						return (
							<div>
								<FloatLabel>
									<label htmlFor={field.name}>Temperature</label>
									<InputNumber
										id={field.name}
										value={field.value}
										onValueChange={field.onChange}
										maxFractionDigits={2}
									/>
								</FloatLabel>
								{getFormErrorMessage(field.name)}
							</div>


						)
					}}
				/>
				<Controller
					name='weather'
					control={control}
					rules={{
						required: { value: true, message: 'Weather is required' },
					}}
					render={({ field }) => {
						return (
							<div>
								<FloatLabel>
									<Dropdown
										id={field.name}
										options={wetherTypes}
										value={field.value}
										onChange={field.onChange}
									/>
									<label htmlFor={field.name}>Weather</label>
								</FloatLabel>
								{getFormErrorMessage(field.name)}
							</div>
						)
					}}
				/>
				<Controller
					name='owner'
					rules={{
						required: { value: true, message: 'Owner is required' },
					}}
					control={control}
					render={({ field }) => {
						return (
							<div>
								<FloatLabel>
									<Dropdown
										id={field.name}
										options={owners}
										value={field.value}
										onChange={field.onChange}
									/>
									<label htmlFor={field.name}>Owner</label>
								</FloatLabel>
								{getFormErrorMessage(field.name)}
							</div>
						)
					}}
				/>
				<Controller
					name='comment'
					control={control}
					render={({ field }) => {
						return (
							<FloatLabel>
								<InputTextarea
									autoResize
									{...field}
								/>
								<label htmlFor={field.name}>Comment</label>
							</FloatLabel>
						)
					}}
				/>
				<Button type='submit'>
					Add Note
				</Button>
			</form>
		</div>
	)
}

export default AddWeatherDialogContent