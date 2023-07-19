import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Preferences, Swipe } from './Views'
import Conversations from './Components/Conversations/Conversations';
import Chat from './Components/Conversations/Chat/Chat';
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={user ? <Swipe /> : <Login />} />
			<Route path="/conversation" element={user ? <Conversations /> : <Login />} />
			<Route path="/register" element={user ? <Swipe /> : <Register />} />
			<Route path="/preferences" element={user ? <Preferences /> : <Login />} />
			<Route path="/swipe" element={user ? <Swipe /> : <Login />} />
			<Route path="*" element={<Navigate replace={true} to="/" />} />
		</Routes>
	)
}

export default App
