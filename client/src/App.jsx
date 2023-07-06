import { Route, Routes } from "react-router-dom";
import Swipe from './Views/Swipe'

function App() {
	return (
		<Routes>
		  <Route path="/" element={<Swipe/>} />
	  </Routes>
	)
}

export default App
