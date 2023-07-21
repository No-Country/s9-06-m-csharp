import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { VscSend } from 'react-icons/vsc';
import img from '../../../images/imageTest.jpg'
const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const socketUrl = 'http://localhost:5173'; // Sin la barra diagonal al final

  // Establece la conexión WebSocket con el servidor
  const socket = io(socketUrl);

  // Maneja los mensajes recibidos del servidor
  useEffect(() => {
    socket.on('message', (data) => {
      const { user, message } = data;
      setChatLog((prevChatLog) => [...prevChatLog, { user, message }]);
    });

    // Limpieza: desconectar cuando el componente se desmonte
    return () => {
      socket.disconnect();
    };
  }, [socket]);
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      socket.emit('message', { user: 'User1', message });
	  console.log('Enviando mensaje:', message); 
      setMessage('');
    }

  };
  // Función para seleccionar al destinatario (enviar evento al servidor)
  const handleSelectRecipient = () => {
    const fromUserId = 'User1'; // Cambia esto por el ID del usuario actual
    const toUserId = 'User2'; // Cambia esto por el ID del destinatario seleccionado

    socket.emit('selectRecipient', { fromUserId, toUserId });
  };

  return (
	<div className='h-screen bg-white text-white flex items-center justify-center'>
	<form className=' bg-white' onSubmit={handleSendMessage} >
		<div className='flex flex-col justify-center items-center'>
			<p className='text-center text-black'>Nueva amistad</p>
			<div className='w-16 h-16'>
				<img
					src={img}
					alt='imagen del match'
					className='rounded-full fill-gray-300 stroke-current  filter drop-shadow-md'
				/>
			</div>
			<h1 className='text-black'>Uzumaki Naruto</h1>
			<div className='flex justify-center items-center flex-wrap flex-row gap-2'>
				<div className='text-black  px-8 items-start gap-1  rounded-xl border border-gray-700 bg-white'>
					<p>Ninja</p>
				</div>
				<div className='text-black  px-8 items-start gap-1  rounded-xl border border-gray-700 bg-white'>
					<p>Clan Uzumaki</p>
				</div>
				<div className='text-black  px-8 items-start gap-1  rounded-xl border border-gray-700 bg-white'>
					<p>Konoha</p>
				</div>
				<div className='text-black  px-8 items-start gap-1  rounded-xl border border-gray-700 bg-white'>
					<p>SasukeLover</p>
				</div>
				<div className='text-black  px-8 items-start gap-1  rounded-xl border border-gray-700 bg-white'>
					<p>Teamkyubi</p>
				</div>
			</div>
		</div>

		<ul className='h-80 overflow-y-auto'>
			{/* {chatLog.map((msj, index) => (
  <li
	key={index}
	className={`my-2 p-2 text-sm rounded-md table ${
	  msj.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
	}`}
  >
	<p>
	  {msj.from}: {msj.body}
	</p>
  </li>
))}
			{/* <li className='my-2 p-2 text-sm rounded-md table'>
				<p>{}</p>
			</li> */} 
		</ul>

		<input
			type='text'
			value={message}
			onChange={(e) => setMessage(e.target.value)}
			className=' w-full rounded-xl border border-gray-700 bg-white p-2 pl-16  text-start  text-black'
			placeholder='Ingrese su mensaje aqui'
		/>
		<div className='w-5 h-5 flex-shrink-0 ml-2 relative'>
			<h1 className='bg-black rounded-full text-white flex absolute  bottom-6 left-64 p-2 '>
				<VscSend />
			</h1>
		</div>
	</form>
</div>
  );
};

export default Chat;
