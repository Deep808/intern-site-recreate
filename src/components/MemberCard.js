import React from 'react';

const MemberCard = ({ name, numbers, icon }) => {
  return (
    <div className="mb-6 hover:animate-pulse ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={icon}
        />
      </svg>
      <p className="mt-2">{name}</p>
      <h1 className="mt-2 text-3xl font-bold">{numbers}</h1>
    </div>
  );
};

export default MemberCard;
