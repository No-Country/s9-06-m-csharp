import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Preferences, Swipe } from './Views'
import Chat from './Components/Chat/Chat';
import { useEffect, useState } from "react";
import Notification from './Components/PushNotification/Notification';

function App() {
	const [token, setToken] = useState(null);
	useEffect(() => {
		const token = sessionStorage.getItem("token");

		setToken(JSON.parse(token));
	}, [token]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={token ? <Swipe /> : <Login />} />
			<Route path="/chat" element={token ? <Chat /> : <Login />} />
			<Route path="/register" element={token ? <Swipe /> : <Register />} />
			<Route path="/preferences" element={token ? <Preferences /> : <Login />} />
			<Route path="/swipe" element={token ? <Swipe /> : <Login />} />
			<Route path="*" element={<Navigate replace={true} to="/" />} />
			<Route path="/notication" element={<Notification />} />
		</Routes>
	)
}

export default App
