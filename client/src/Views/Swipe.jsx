import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuTop from '../Components/MenuTop/MenuTop'
import PerfilSwipe from '../Components/PerfilSwipe/PerfilSwipe'
import MenuBtm from '../Components/MenuBtm/MenuBtm'

const Swipe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      <MenuTop />
      {isMobile ? (
          <PerfilSwipe />
      ) : (
        <PerfilSwipe />
      )}
      <div className='pt-3 flex flex-col items-center justify-center sticky bottom-0 bg-white'>
        <MenuBtm />
      </div>
    </>
  )
}

export default Swipe
