import React from 'react'
import {FaMapMarkerAlt, FaQuoteRight, FaMars, FaBirthdayCake} from 'react-icons/fa'
import Tag from '../Tag/Tag.jsx'

const PerfilSwipe = () => {
	return (
		<>
				<div className='bg-white border border-gray-400 rounded-xl p-4 m-4'>
					<div className='flex items-start'>
						<div className='w-12 h-12 rounded-full bg-gray-300'></div>
						<div className='ml-4'>
							<h1 className='text-xl font-bold'>Carlos Fernández</h1>
							<div className='flex items-center mt-2'>
								<FaMapMarkerAlt className='w-5 h-5 text-gray-500 mr-1' />
								<p className='text-gray-500'>Lima / San Isidro</p>
							</div>
						</div>
					</div>
					<div className='mt-4'>
						<Tag text='Aprender a cocinar' />
						<Tag text='Recetas' />
						<Tag text='Repostería' />
						<Tag text='Fotografía' />
						<Tag text='Salir a correr' />
						<Tag text='♂ 22' />
					</div>
				</div>
				<div className='bg-white border border-gray-400 rounded-xl p-4 m-4'>
					<FaQuoteRight />
					<div className='flex items-start'>
						<p>
							Quiero hacer amigos que me enseñen nuevas formas de crear comida
							saludable
						</p>
					</div>
				</div>
				<div className='bg-white border border-gray-400 rounded-xl p-4 m-4'>
					<p className='pb-3 font-bold'>Mi descripción</p>
					<div className='flex items-start'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
							labore atque incidunt minima? Illum, maxime praesentium!
							Laboriosam sunt deserunt deleniti doloremque distinctio eum dolore
							sint vero, sed perspiciatis aspernatur! Culpa?
						</p>
					</div>
				</div>
				<div className='bg-white border border-gray-400 rounded-xl p-4 mx-4 mt-4'>
					<p className='font-bold'>Lo esencial</p>
					<div className='mt-4'>
						<Tag
							text={
								<div className='flex items-center'>
									<FaMars className='w-5 h-5 text-gray-500 mr-1' />
									Hombre
								</div>
							}
						/>
						<Tag
							text={
								<div className='flex items-center'>
									<FaBirthdayCake className='w-5 h-5 text-gray-500 mr-1' />
									22
								</div>
							}
						/>
					</div>
				</div>
				<div className='flex justify-center gap-7 mt-4'>
					<div className='bg-gray-300 rounded-lg w-24 h-32'></div>
					<div className='bg-gray-300 rounded-lg w-24 h-32'></div>
					<div className='bg-gray-300 rounded-lg w-24 h-32'></div>
				</div>
				<div className='bg-white border border-gray-400 rounded-xl p-4 mx-4 mt-4'>
					<p className='font-bold'>Mis intereses</p>
					<div className='mt-4'>
						<Tag text='Aprender a cocinar' />
						<Tag text='Recetas' />
						<Tag text='Repostería' />
						<Tag text='Fotografía' />
						<Tag text='Ir al cine' />
						<Tag text='Salir a correr' />
						<Tag text='Tecnología' />
						<Tag text='Ciencia ficción' />
					</div>
				</div>
		</>
	)
}

export default PerfilSwipe
