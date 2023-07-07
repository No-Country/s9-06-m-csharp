import React from 'react';
import { FaStar } from 'react-icons/fa';

const BtnStar = () => {
  return (
    <button className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white focus:outline-none">
      <FaStar className="text-2xl" />
    </button>
  );
};

export default BtnStar;
