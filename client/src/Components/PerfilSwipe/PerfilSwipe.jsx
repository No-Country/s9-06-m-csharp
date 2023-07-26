import React, { useEffect, useState } from 'react';
import {
  FaMapMarkerAlt,
  FaQuoteRight,
  FaMars,
  FaBirthdayCake,
} from 'react-icons/fa';
import Carrusel from '../Carrusel/Carrusel.jsx';
import Tag from '../Tag/Tag.jsx';
import MatchButtons from '../MatchButtons/MatchButtons.jsx';

const PerfilSwipe = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://buddyup.azurewebsites.net/api/account/get-by-pid?id=1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {userData && (
        <>
          <div className='bg-white border border-gray-400 rounded-xl p-4 m-4'>
            <div className='flex items-start'>
              <h1 className='text-xl font-bold'>{userData.pname}</h1>
            </div>
            <div className='flex items-start mt-2'>
              <FaMapMarkerAlt className='w-5 h-5 text-gray-500 mr-1' />
              <p className='text-gray-500'>
                {userData.plocation}
              </p>
            </div>
          </div>
          <div className='bg-[#D7F854] border border-gray-400 rounded-xl p-4 m-4'>
            <FaQuoteRight />
            <div className='flex items-start'>
              <p>
                {userData.pquote}
              </p>
            </div>
          </div>
          <div className='bg-white border border-gray-400 rounded-xl p-4 m-4'>
            <p className='pb-3 font-bold'>Mi descripción</p>
            <div className='flex items-start'>
              <p>
                {userData.pbio}
              </p>
            </div>
          </div>
          <div className='bg-white border border-gray-400 rounded-xl p-4 mx-4 mt-4'>
            <p className='font-bold'>Lo esencial</p>
            <div className='mt-4'>
              <Tag
                text={
                  <div className='flex items-center'>
                    <FaMars className='w-5 h-5 text-gray-500 mr-1' />
                    {userData.pgender}
                  </div>
                }
              />
              <Tag
                text={
                  <div className='flex items-center'>
                    <FaBirthdayCake className='w-5 h-5 text-gray-500 mr-1' />
                    {userData.page}
                  </div>
                }
              />
            </div>
          </div>
          <Carrusel />
          <div className='bg-white border border-gray-400 rounded-xl p-4 mx-4 mt-4'>
            <p className='font-bold'>Mis intereses</p>
            <div className='mt-4'>
              <Tag text={userData.ptags} />
            </div>
          </div>
          {/* Mostrar solo en dispositivos móviles */}
          <div className='mt-1 flex flex-col items-center justify-center sticky bottom-20 bg-white md:hidden'>
            <MatchButtons />
          </div>
          {/* Mostrar solo en desktop */}
          <div className='sticky bottom-3 bg-white hidden md:block'>
            <MatchButtons />
          </div>
        </>
      )}
    </>
  );
};

export default PerfilSwipe;
