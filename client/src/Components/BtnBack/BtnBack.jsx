import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const BtnBack = () => {
  return (
    <button className="flex items-center justify-center w-12 h-12 bg-[#BF9CFA] rounded-full text-white focus:outline-none">
      <FaArrowLeft className="text-2xl" />
    </button>
  );
};

export default BtnBack;
