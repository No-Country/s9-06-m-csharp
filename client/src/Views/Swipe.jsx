import MenuTop from '../Components/MenuTop/MenuTop'
import PerfilSwipe from '../Components/PerfilSwipe/PerfilSwipe'
import MenuBtm from '../Components/MenuBtm/MenuBtm'
import BtnX from '../Components/BtnX/BtnX'
import BtnStar from '../Components/BtnStar/BtnStar'

const Swipe = () => {
	return (
		<>
			<MenuTop />
			<PerfilSwipe />
			<div className='flex justify-between mx-6 space-x-6 pt-3'>
				<div className='border-t-2 border-gray-400 flex-grow my-6 mr-2'></div>
				<BtnX />
				<BtnStar />
				<div className='border-t-2 border-gray-400 flex-grow my-6 ml-2'></div>
			</div>
			<div className='flex justify-center sticky bottom-0 bg-white mt-3'>
				<MenuBtm />
			</div>
		</>
	)
}

export default Swipe
