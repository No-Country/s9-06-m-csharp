import { NavLink } from 'react-router-dom'
AiOutlineStar
import { AiOutlineStar } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'

import { MdShare } from 'react-icons/md'
const MenuBtm = () => {
	return (
		<nav className='bg-gray-950 fixed z-50 flex justify-between w-11/12 mb-5 rounded-3xl bottom-0 lg:hidden'>
			<NavLink to='/inicio'>
				<button className='group flex flex-col items-center justify-center w-16 h-16'>
					<MdShare className='text-white text-2xl' />
				</button>
			</NavLink>
			<NavLink to='/inicio'>
				<button className='group flex flex-col items-center justify-center w-16 h-16'>
					<AiOutlineStar className='text-white text-2xl' />
				</button>
			</NavLink>
			<NavLink to='/inicio'>
				<button className='group flex flex-col items-center justify-center w-16 h-16'>
					<BsChatDots className='text-white text-2xl' />
				</button>
			</NavLink>
			<NavLink to='/inicio'>
				<button className='group flex flex-col items-center justify-center w-16 h-16'>
					<RxPerson className='text-white text-2xl' />
				</button>
			</NavLink>
		</nav>
	)
}
export default MenuBtm
