import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Preferences, Swipe } from './Views'
// import Chat from '../src/Components/Chat/conversations/Chat/Chat';
import Chat from '../src/Components/Conversations/Chat/Chat'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import Conversations from './Components/Chat/conversations/conversations'
import Chat from './Components/Chat/Chat';
import { useEffect, useState } from "react";
import Notification from './Components/PushNotification/Notification';

function App() {
	const [token, setToken] = useState(JSON.parse(sessionStorage.getItem("token")) || "");
	useEffect(() => {
		setToken(token);
	}, [token]);

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={token ? <Swipe /> : <Login />} />
			<Route
				path='/Chat'
				element={user ? <Chat /> : <Login />}
				
			/>
			<Route path='/register' element={token ? <Swipe /> : <Register />} />
			<Route path='/preferences' element={token ? <Preferences /> : <Login />} />
			<Route path='/swipe' element={token ? <Swipe /> : <Login />} />
			<Route path='*' element={<Navigate replace={true} to='/' />} />
			<Route path="/notication" element={<Notification />} />
		</Routes>
	)
}

export default App
