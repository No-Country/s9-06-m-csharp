import MenuBtm from './Components/MenuBtm/MenuBtm'
import MenuTop from './Components/MenuTop/MenuTop'

function App() {
	return (
		<>
			<div className='flex flex-col items-center'>
				<MenuTop />
				<h1 className='text-3xl font-bold underline text-blue-400'>
					Hello world!
				</h1>
				<MenuBtm />
			</div>
		</>
	)
}

export default App
