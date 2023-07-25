<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { VscSend } from 'react-icons/vsc';
import img from '../../../images/imageTest.jpg';

const Chat = () => {
	const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const socket = io("http://localhost:5173", {
    transports: ["websocket"],
    // timeout: 600000,
  });
  useEffect(() => {
	socket.on('connect', () => {
	  console.log('Conectado al servidor de Socket.IO');
	});
  
	socket.on('connect_error', (error) => {
	  console.error('Error de conexión:', error.message);
	});
  
	socket.on('error', (error) => {
	  console.error('Error en la conexión:', error.message);
	});
  
	const handleReceiveMessage = (data) => {
	  console.log('Mensaje recibido del servidor:', data);
	  setChatLog((prevChatLog) => [...prevChatLog, data]);
	};
  
	socket.on('message', handleReceiveMessage);
  
	// Limpieza: desuscribirse del evento al desmontar el componente
	return () => {
	  socket.off('message', handleReceiveMessage);
	};
  }, []);
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
		console.log("enviando mensaje al servidor ",message)
      socket.emit('message', { fromUserId: 'user 1', message }); // Cambia 'user 1' por el ID del usuario actual
      setMessage('');
    }
  };

  return (
	<div className='h-screen bg-white text-white flex items-center justify-center'>
	<form className='bg-white' onSubmit={handleSendMessage}>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-center text-black'>Nueva amistad</p>
          <div className='w-16 h-16'>
            <img
              src={img}
              alt='imagen del match'
              className='rounded-full fill-gray-300 stroke-current filter drop-shadow-md'
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
          {chatLog.map((msj, index) => (
            <li
              key={index}
              className={`my-2 p-2 text-sm rounded-md table ${
                msj.user === "user 1" ? "bg-sky-700 ml-auto" : "bg-black"
              }`}
            >
              <p>
                {msj.message}
              </p>
              <p className="text-xs text-gray-500">{msj.timestamp}</p> {/* Muestra la hora del servidor sin modificar */}
            </li>
          ))}
        </ul>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full rounded-xl border border-gray-700 bg-white p-2 pl-16 text-start text-black'
          placeholder='Ingrese su mensaje aquí'
        />
        <div className='w-5 h-5 flex-shrink-0 ml-2 relative'>
          <button type="submit" className='bg-black rounded-full text-white flex absolute bottom-6 left-64 p-2'>
            <VscSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
=======
import React, { useState, useEffect } from 'react'
import img from '../../../images/imageTest.jpg'
import { VscSend } from 'react-icons/vsc'
const Chat = () => {
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])

	const handleMsj = () => {
		console.log('enviando mensajituu')
	}
	return (
		<div className='h-screen bg-white text-white flex items-center justify-center'>
			<form className=' bg-white'>
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
					{/* {userHistory.map((msj, index) => (
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
        ))} */}
					<li className='my-2 p-2 text-sm rounded-md table'>
						<p>que onda padre, esta la nota?</p>
					</li>
				</ul>

				<input
					type='text'
					// onChange={(e) => setMessage(e.target.value)}
					// value={message}
					className=' w-full rounded-xl border border-gray-700 bg-white p-2 pl-16  text-start'
					placeholder='Ingrese su mensaje aqui'
				/>
				<div className='w-5 h-5 flex-shrink-0 ml-2 relative'>
					<h1 className='bg-black rounded-full text-white flex absolute  bottom-6 left-64 p-2 '>
						<VscSend />
					</h1>
				</div>
			</form>
		</div>
	)
}

export default Chat
>>>>>>> 3bb4b12f07560b0f887c894802fb14aaab4b41dd
