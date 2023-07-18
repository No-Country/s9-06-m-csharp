import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Preferences, Swipe } from './Views'
import Chat from './Components/Chat/Chat';
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
<<<<<<< HEAD
				<Route path="/Swipe" element={<Swipe /> } />
			<Route path="/" element={user ? <Swipe /> : <Login />} />
=======
			<Route path="/" element={<Home />} />
>>>>>>> 2af121755dd3d1014fb66fe0a5a553a178ecb9d0
			<Route path="/login" element={user ? <Swipe /> : <Login />} />
			<Route path="/chat" element={user ? <Chat /> : <Login />} />
			<Route path="/register" element={user ? <Swipe /> : <Register />} />
			<Route path="/preferences" element={user ? <Swipe /> : <Preferences />} />
			<Route path="*" element={<Navigate replace={true} to="/" />} />
		</Routes>
	)
}

export default App
