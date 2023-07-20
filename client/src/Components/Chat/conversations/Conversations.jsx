import React from 'react';
import { RiShieldUserLine } from 'react-icons/ri';
import imgTest from '../../../images/imageTest.jpg';

const Conversations = () => {
	const conversations = [
		{
			name: 'Maria Fernanda',
			img: imgTest, // Change this line to use the imported image directly
			lastMessage: 'Hola como estas?',
		},
		{
			name: 'Raul Agustin',
			img: imgTest,
			lastMessage: 'weeenas bb',
		},
		{
			name: 'Sebastian Escobar',
			img: imgTest,
			lastMessage: 'Hola como estas?',
		},
		{
			name: 'Debora Meltrozo',
			img: imgTest,
			lastMessage: 'Tienes razon',
		},
		{
			name: 'Jose Jose',
			img: imgTest,
			lastMessage: 'jajja tienes razon',
		},
	];

	return (
		<div className='container mx-auto px-4'>
			<div className='flex justify-between mt-2'>
				<div>
					<h1>BuddyUp</h1>
				</div>
				<div>
					<p className='text-2xl mt-1'>
						<RiShieldUserLine />
					</p>
				</div>
			</div>
			<div className='mt-2'>
				<input
					type='text'
					className='w-full rounded-xl border-solid border-2 p-2'
					placeholder='buscar nombre'
				/>
				<h2 className='text-left mt-2 font-bold'>Amistades nuevas</h2>
				<div>aca iria un carrousel o las nuevas amistades</div>
			</div>

			<div className='flex flex-col justify-start'>
				<h2 className='text-left mt-2 font-bold'>Mensajes</h2>
				<div>
					{conversations.map((conversation, index) => (
						<div key={index} className='flex items-center mt-2'>
							<img
								src={conversation.img}
								alt='la imagen del usuario'
								className='w-10 h-10 rounded-full mr-4'
							/>
							<h2 className='text-left mt-2 font-bold'>{conversation.name}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Conversations;
