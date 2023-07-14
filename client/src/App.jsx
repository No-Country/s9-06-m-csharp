import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Preferences, Swipe } from './Views'
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={user ? <Swipe /> : <Login />} />
			<Route path="/register" element={user ? <Swipe /> : <Register />} />
			<Route path="/preferences" element={user ? <Swipe /> : <Preferences />} />
			<Route path="*" element={<Navigate replace={true} to="/" />} />
		</Routes>
	)
}

export default App
