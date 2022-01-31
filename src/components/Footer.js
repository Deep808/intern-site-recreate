import React from 'react';

const Footer = () => {
  const arrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <div className="bg-blue-800 text-indigo-50 mb-0 flex-col lg:items-center">
      <div className="md:w-4/5 md:mx-auto md:pt-7 md:items-center lg:w-full lg:grid lg:grid-cols-2 lg:place-items-center lg:p-16">
        <div className="md:grid md:grid-cols-2 lg:place-items-center">
          <div className="p-6 lg:p-0">
            <img className="bg-white" src="images/logo.png" alt="" />
            <p className="text-sm font-light mt-6 lg:w-4/5">
              ShinWeb is focus on supporting the startups, customised software
              for organization as well as the online presence of the business.
            </p>
            <div className="cursor-pointer w-2/6 flex justify-between md:w-2/4 ">
              <i className="fab fa-facebook-square fa-lg hover:opacity-70 hover:transition ease-in-out delay-75 cursor-pointer"></i>
              <i className="fab fa-twitter-square fa-lg hover:opacity-70 cursor-pointer hover:transition ease-in-out delay-75"></i>
              <i className="fab fa-linkedin fa-lg hover:opacity-70 cursor-pointer hover:transition ease-in-out delay-75"></i>
              <i className="fab fa-youtube-square fa-lg hover:opacity-70 cursor-pointer hover:transition ease-in-out delay-75"></i>
              <i className="fab fa-instagram-square fa-lg hover:opacity-70 cursor-pointer hover:transition ease-in-out delay-75"></i>
            </div>
          </div>

          <div className="p-6 lg:p-0 ">
            <h4>Contact Us</h4>
            <p className="text-sm font-light lg:w-4/5">
              <span className="font-semibold ">Address: </span>308, I-The
              Address, Nr Sola Flyover, Besides HCG hospital, Ahmedabad, 380059
            </p>
            <p className="text-sm font-light hover:opacity-70 cursor-pointer">
              <span className="font-semibold">Hotline: </span>Phone: +91
              9099367675
            </p>
            <p className="text-sm font-light">
              <span className="font-semibold">Open Hours: </span> Mon - Mon: 5
              Am - 7 Pm, Sunday: Closed
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:items-center">
          <div className="p-6 lg:p-0 lg:mt-8">
            <h4>Services</h4>

            <p className="flex text-sm items-center hover:opacity-70 cursor-pointer">
              {arrowSvg} App Development
            </p>
            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} AI Development
            </p>
            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} Machine Learning
            </p>
            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} CRM Development
            </p>
            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} Ecommerce
            </p>
          </div>
          <div className="p-6 lg:p-0 lg:mt-8 lg:ml-12">
            <h4>Others Links</h4>

            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} FAQ
            </p>
            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} Support
            </p>
            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} Contact
            </p>
            <p className="flex text-sm items-center  hover:opacity-70 cursor-pointer">
              {arrowSvg} Privacy and Policy
            </p>
            <p className="flex text-sm items-center hover:opacity-70 cursor-pointer">
              {arrowSvg} Terms and Conditions
            </p>
          </div>
        </div>
      </div>
      <div className="text-center bottom-0 bg-blue-900 ">
        <p className="text-center mb-0 p-4 text-sm ">
          ©2022 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
