import MenuTop from '../Components/MenuTop/MenuTop'
import PerfilSwipe from '../Components/PerfilSwipe/PerfilSwipe'
import MenuBtm from '../Components/MenuBtm/MenuBtm'

const Swipe = () => {
	return (
		<>
			<MenuTop />
			<PerfilSwipe />
			<div className='flex justify-center sticky bottom-0 bg-white mt-3'>
				<MenuBtm />
			</div>
		</>
	)
}

export default Swipe

