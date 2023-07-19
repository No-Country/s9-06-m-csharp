import React from 'react'
import { RiShieldUserLine } from 'react-icons/ri'
const Conversations = () => {
	return (
		<div className='container mx-auto px-4'>
			<div className='flex justify-between mt-2'>
				<div>
					<h1>BuddyUp</h1>
				</div>
				<div>
					<p className='text-2xl mt-1'>
						<RiShieldUserLine />
					</p>
            
				</div>
			</div>
            <div className='mt-2' >
                <input type="text" className="w-full rounded-xl  border-solid border-2 p-2" placeholder='buscar nombre' />
                <h2 className='text-left mt-2 font-black'>Amistades nuevas</h2>
            </div>
		</div>
	)
}

export default Conversations
