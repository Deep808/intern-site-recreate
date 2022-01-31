import React, { useState } from 'react';
import PortfolioMenu from './PortfolioMenu';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';

const Portfolio = () => {
  const [menu, setMenu] = useState(PortfolioMenu);

  const filterMenu = (cateItem) => {
    const updatedMenu = PortfolioMenu.filter((curItem) => {
      return curItem.category === cateItem;
    });

    setMenu(updatedMenu);
  };

  const filterAll = (catAll) => {
    const updateAll = PortfolioMenu.filter((curAll) => {
      return curAll.itemAll === catAll;
    });

    setMenu(updateAll);
  };

  return (
    <div className="portfolio_container">
      <h1 className="portfolio_heading">
        We Let Our Portfolio Do The Talking!
      </h1>
      <div className="portfolio_buttons">
        <button onClick={() => filterAll('all')}>ALL</button>
        <button onClick={() => filterMenu('mobileApp')}>MOBILE APP</button>
        <button onClick={() => filterMenu('uiDesign')}>UI/UX DESIGH</button>
        <button onClick={() => filterMenu('eCommerce')}>ECOMMERCE</button>
        <button onClick={() => filterMenu('crm')}>CRM</button>
        <button onClick={() => filterMenu('graphicDesign')}>
          GRAPHIC DESIGN
        </button>
      </div>
      <div className="portfolio_cards">
        {menu.map((item) => {
          const { images, id, name } = item;

          return <PortfolioCard key={id} image={images} id={id} name={name} />;
        })}
      </div>
      <button className="text-blue-700 w-2/4 p-2 mx-auto rounded-lg bg-gray-400 hover:bg-blue-700 hover:text-white hover:transition ease-in-out delay-50 hover:scale-105 duration-300 mb-6 md:w-3/12">
        Discover Portfolio
      </button>
    </div>
  );
};

export default Portfolio;
