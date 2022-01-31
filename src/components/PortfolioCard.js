import React from 'react';

const PortfolioCard = ({ id, image, name }) => {
  return (
    <div className="m-4 hover:scale-105 transition ease-in-out duration-200 ">
      <img className="rounded-lg mb-4" src={`${image}`} alt="" />
      <p className="w-auto font-semibold ml-6 mb-8 cursor-pointer hover:text-blue-800">
        {name}
      </p>
    </div>
  );
};

export default PortfolioCard;
