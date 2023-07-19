import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Preferences, Swipe } from './Views'
// import Chat from './Components/Chat/Chat';
import Conversations from './Components/Chat/conversations/conversations';
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={user ? <Swipe /> : <Login />} />
			<Route path="/conversations" element={user ? <Conversations /> : <Login />} />
			<Route path="/register" element={user ? <Swipe /> : <Register />} />
			<Route path="/preferences" element={user ? <Preferences /> : <Login />} />
			<Route path="/swipe" element={user ? <Swipe /> : <Login />} />
			<Route path="*" element={<Navigate replace={true} to="/" />} />
		</Routes>
	)
}

export default App
