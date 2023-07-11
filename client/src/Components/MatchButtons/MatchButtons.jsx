import BtnX from '../BtnX/BtnX.jsx'
import BtnStar from '../BtnStar/BtnStar.jsx'

const MatchButtons = () =>{
    return(
        <div className='flex justify-between mx-6 space-x-6 pt-3'>
        <BtnX />
        <BtnStar />
    </div>
    )
}

export default MatchButtons