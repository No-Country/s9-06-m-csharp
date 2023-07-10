import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register, Swipe } from './Views'
import Chat from './Components/Chat/Chat';
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={user ? <Swipe /> : <Login />} />
			<Route path="/login" element={user ? <Swipe /> : <Login />} />
			<Route path="/chat" element={user ? <Chat/> : <Login />} />
			<Route path="/register" element={user ? <Swipe /> : <Register />} />
			<Route path="*" element={<Navigate replace={true} to="/" />} />
		</Routes>
	)
}

export default App
