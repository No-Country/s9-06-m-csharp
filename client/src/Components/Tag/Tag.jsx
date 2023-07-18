import React from 'react';

const Tag = ({ text }) => {
  return (
    <div className='inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-[#D7F854]'>
      {text}
    </div>
  );
};

export default Tag;
