import React from 'react'
import MenuTop from '../Components/MenuTop/MenuTop'
import PerfilSwipe from '../Components/PerfilSwipe/PerfilSwipe'
import MenuBtm from '../Components/MenuBtm/MenuBtm'
import MatchButtons from '../Components/MatchButtons/MatchButtons'

const Swipe = () => {
	return (
		<>
			<MenuTop />
			<PerfilSwipe />
			<div className='flex flex-col items-center justify-center sticky bottom-0 bg-white'>
				<div className='mb-1'>
					<MatchButtons />
				</div>
				<MenuBtm />
			</div>
		</>
	)
}

export default Swipe
