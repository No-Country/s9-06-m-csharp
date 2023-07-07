import React from 'react'

const Category = ({ text }) => {
	return (
		<div className='h-32 bg-[#F4F4F4] w-[48%] mb-4 rounded-2xl p-4 flex flex-col-reverse'>
			<p>{text}</p>
		</div>
	)
}
export default Category
