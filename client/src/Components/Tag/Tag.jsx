import React from 'react';

const Tag = ({text}) => {
  return (
    <div className="bg-gray-200 text-gray-800 inline-block px-2 py-1 rounded-md mr-2 mb-2">
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default Tag;
