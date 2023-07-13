import React from 'react';
import { FaTimes } from 'react-icons/fa';

const BtnX = () => {
  return (
    <button className="flex items-center justify-center w-12 h-12 bg-[#EA6C56] rounded-full text-white focus:outline-none">
      <FaTimes className="text-2xl" />
    </button>
  );
};

export default BtnX;
