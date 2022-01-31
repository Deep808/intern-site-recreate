import React from 'react';

const OfferCard = ({ icon, offers, more }) => {
  return (
    <div className="bg-blue-200 hover:scale-105 hover:bg-blue-300 transition duration-150 ease-out hover:ease-in p-6 rounded-lg flex flex-col items-center text-center mt-6 md:mt-1 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer hover:animate-bounce h-16 w-16 bg-blue-800 rounded-full p-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={icon}
        />
      </svg>
      <div>
        <h1 className="mt-8 text-xl text-blue-800 font-bold">{offers}</h1>
        <p className="w-80 te text-sm text-gray-600 mt-4 md:w-9/12 md:mx-auto md:px-4 lg:w-9/12">
          {more}
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700 mx-auto mt-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default OfferCard;
