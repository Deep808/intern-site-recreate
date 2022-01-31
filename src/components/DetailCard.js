import React from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const DetailCard = ({ heading, paragraph, icon }) => {
  return (
    <div className="flex flex-col mb-12 px-2 mx-auto md:w-auto md:mx-auto md:my-8 lg:w-auto lg:mx-8 ">
      <div className="items-center mb-2 md:w-auto lg:flex lg:flex-row lg:w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 md:mr-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="Blue"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={`${icon}`}
          />
        </svg>
        <h1 className="mt-2 text-xl text-blue-800 font-bold lg:font-semibold lg:text-lg ">
          {heading}
        </h1>
      </div>
      <div>
        <p className="text-gray-500 lg:text-sm md:w-56 lg:w-60 lg:font-normal ">
          {paragraph}
        </p>
      </div>
      <div>
        <button className="flex items-center transition ease-in-out bg-blue-800 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 rounded-md font-light justify-between w-full text-left p-2 px-3 text-white mt-6 lg:w-full">
          Read More
          <ArrowNarrowRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
