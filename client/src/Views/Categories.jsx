import React from 'react'
import Category from '../Components/Category/Category'

const Categories = () => {
	return (
		<div className='flex flex-col'>
			<h1>Buscas alguna actividad o intrés</h1>
			<h2>Encuentra tu amistad ideal</h2>
			<div className='flex flex-row flex-wrap justify-between'>
				<Category text='aprender musica' />
				<Category text='Manejar bicicleta' />
				<Category text='Jugar ajedréz' />
				<Category text='Matematicas' />
				<Category text='Ir al gimnasio' />
				<Category text='Jugar baloncesto' />
				<Category text='Jugar baloncesto' />
				<Category text='aprender futbol' />
				<Category text='Jugar baloncesto' />
				<Category text='aprender futbol' />
				<Category text='Jugar baloncesto' />
				<Category text='aprender futbol' />
				<Category text='Jugar baloncesto' />
				<Category text='aprender futbol' />
			</div>
		</div>
	)
}
export default Categories
