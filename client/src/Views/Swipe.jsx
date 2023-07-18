import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuTop from '../Components/MenuTop/MenuTop'
import PerfilSwipe from '../Components/PerfilSwipe/PerfilSwipe'
import MenuBtm from '../Components/MenuBtm/MenuBtm'
import TinderCard from 'react-tinder-card'

const Swipe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      <MenuTop />
      {isMobile ? (
        <TinderCard
          onSwipe={direction => console.log('Deslizado', direction)}
          onCardLeftScreen={() => console.log('Tarjeta fuera de pantalla')}
        >
          <PerfilSwipe />
        </TinderCard>
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
