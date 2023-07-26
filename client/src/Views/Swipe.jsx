import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuTop from '../Components/MenuTop/MenuTop'
import PerfilSwipe from '../Components/PerfilSwipe/PerfilSwipe'
import MenuBtm from '../Components/MenuBtm/MenuBtm'
import axios from "axios"

const Swipe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const getUsers = async () => {
    const api = "https://buddyup.azurewebsites.net/buddyup-curated";
    const headerConfig = {
      headers: {
        "Authorization": "Bearer " + JSON.parse((sessionStorage.getItem("token"))),
        "Content-Type": "application/json",
      }
    }
    try {
      const request = await axios.get(api, headerConfig);
      console.log(request);
    } catch (error) {
      console.error(error);
    }
  }
  getUsers();

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
