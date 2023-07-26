import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MenuTop from '../Components/MenuTop/MenuTop'
import PerfilSwipe from '../Components/PerfilSwipe/PerfilSwipe'
import MenuBtm from '../Components/MenuBtm/MenuBtm'
import axios from "axios"

const Swipe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const api = "https://buddyup.azurewebsites.net/buddyup-curated";
    const headerConfig = {
      headers: {
        "Authorization": "Bearer " + JSON.parse((sessionStorage.getItem("token"))),
        "Content-Type": "application/json",
      }
    }
    try {
      const { data } = await axios.get(api, headerConfig);
      console.log(data);
      setUser(data)
    } catch (error) {
      console.error(error);
    }
  }
  getUsers();

  return (
    <>
      <MenuTop />
      <div className='flex'>
        {
          user.map(user => (
            <PerfilSwipe id={user.id} />
          ))
        }
      </div>
      <div className='pt-3 flex flex-col items-center justify-center sticky bottom-0 bg-white'>
        <MenuBtm />
      </div>
    </>
  )
}

export default Swipe