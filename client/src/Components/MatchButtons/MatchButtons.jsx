import BtnX from '../BtnX/BtnX.jsx'
import BtnStar from '../BtnStar/BtnStar.jsx'
import BtnBack from '../BtnBack/BtnBack.jsx'

const MatchButtons = () => {
	return (
		<div className='flex justify-between mx-6 space-x-6 pt-3'>
			<BtnBack />
			<BtnX />
			<BtnStar />
		</div>
	)
}

export default MatchButtons
