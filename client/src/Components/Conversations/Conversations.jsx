import React, { useEffect } from 'react';
import { RiShieldUserLine } from 'react-icons/ri';
import imgTest from '../../images/imageTest.jpg';
import imgBU1 from '../../images/imgConversationsBuddyUp1.png'
import imgBU2 from '../../images/img2BuddyUpConversations.png'
import imgBU3 from '../../images/img3BuddyUpConversations.png'
import imgBU4 from '../../images/img4BuddyUpConversations.png'
import axios from 'axios';
const Conversations = () => {
  useEffect(() => {
    const getIDMatches = async () => {
      try {
        const endpoint = "https://buddyup.azurewebsites.net/api/match/my-matches";
        const token = sessionStorage.getItem('token');
        const tokenWithoutQuotes = token.replace(/^"(.*)"$/, '$1');
        console.log(tokenWithoutQuotes);

        const config = {
          headers: {
            'Authorization': `Bearer ${tokenWithoutQuotes}`
          }
        };

        const req = await axios.get(endpoint, config);
        console.log(req)

      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        setError('Ocurrió un error al obtener las coincidencias.');
      }
    };

    getIDMatches();
  }, []);
  
	const conversations = [
		{
			name: 'Maria Fernanda',
			img: imgTest,
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
const AmistadesNuevas=[
  {name:'Fernanda', img:imgBU1},
{name:'Miley' ,img:imgBU2},
{name:'Laura' ,img:imgBU3},
{name:'Daniela' ,img:imgBU4},
]
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
				<div className='flex justify-around mt-2'>
          {AmistadesNuevas.map((item,index)=>(
            <div key={index} >
            <img src={item.img} alt="" />
            <p className='text-center'>{item.name}</p>
              </div>
         
          ))}
        </div>
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
