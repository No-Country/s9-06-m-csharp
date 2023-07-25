import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Preferences, Swipe } from './Views'
import Conversations from './Components/Chat/conversations/conversations'
<<<<<<< HEAD
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import { RtChat } from './Components/RtChat/RtChat'
=======
// import Chat from './Components/Chat/Chat';
import { useEffect, useState } from "react";
import Notification from './Components/PushNotification/Notification';
>>>>>>> 114c33d84dc05173998717aec64556dd726273e2

function App() {
	const [token, setToken] = useState(JSON.parse(sessionStorage.getItem("token")) || "");
	useEffect(() => {
		setToken(token);
	}, [token]);

	return (
		<Routes>
<<<<<<< HEAD
			<Route path='/' element={<RtChat />} />
=======
			<Route path='/' element={<Home />} />

>>>>>>> 114c33d84dc05173998717aec64556dd726273e2
			<Route path='/nueva' element={<Home />} />
			<Route path='/login' element={user ? <Swipe /> : <Login />} />

			<Route
				path='/conversations'
				element={token ? <Conversations /> : <Login />}
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
