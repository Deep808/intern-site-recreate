import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import './ClientCard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

const ClientCard = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <div className="cursor-pointer w-11/12 mx-auto md:w-9/12 lg:w-2/4 lg:mx-auto ">
      <h1 className="text-center text-2xl font-bold mx-2 my-8 text-blue-800 md:text-3xl md:mx-auto md:leading-10  md:text-center lg:text-4xl">
        We Are greatful for The Kind Words From Our Valued Clients
      </h1>
      <Swiper
        autoHeight
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        // pagination={{

        //   clickable: true,
        // }}
        className="md:py-16"
      >
        <SwiperSlide className="w-1/2 md:bg-slate-300 md:p-4 md:rounded-md lg:flex lg:bg-slate-300 lg:p-4 lg:rounded-md">
          <div className="lg:w-3/5">
            <img
              className="hidden md:hidden lg:block lg:rounded-lg"
              src="images/client.png"
              alt=""
            />
          </div>
          <div className="lg:my-auto lg:ml-6">
            <h4 className="font-bold text-xl text-blue-800">
              Kapler Wand
              <span className="text-base font-medium ml-4 text-gray-500">
                India
              </span>
            </h4>

            <div className="flex mb-4 lg:flex lg:mb-4">
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-gray-600">
              Shine web team ensure to provide best advice and products
              available in the whole market and we are efficient in our
              services. They keep an eye on provider's changes.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-1/2 md:bg-red-200 md:p-4 md:rounded-md lg:flex lg:bg-red-200 lg:p-4 lg:rounded-md">
          <div className="lg:w-3/5">
            <img
              className="hidden md:hidden lg:block lg:rounded-lg"
              src="images/client.png"
              alt=""
            />
          </div>
          <div className="lg:my-auto lg:ml-6">
            <h4 className="font-bold text-xl text-blue-800">
              John Wick
              <span className="text-base font-medium ml-4 text-gray-400">
                New York
              </span>
            </h4>

            <div className="flex mb-4 lg:flex lg:mb-4">
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-gray-600">
              Shine web team ensure to provide best advice and products
              available in the whole market and we are efficient in our
              services. They keep an eye on provider's changes.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-1/2 md:bg-orange-200 md:p-4 md:rounded-md lg:flex lg:bg-orange-200 lg:p-4 lg:rounded-md">
          <div className="lg:w-3/5">
            <img
              className="hidden md:hidden lg:block lg:rounded-lg"
              src="images/client.png"
              alt=""
            />
          </div>
          <div className="lg:my-auto lg:ml-6">
            <h4 className="font-bold text-xl text-blue-800">
              Justin Bieber
              <span className="text-base font-medium ml-4 text-gray-500">
                Canada
              </span>
            </h4>

            <div className="flex mb-4 lg:flex lg:mb-4">
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
              <StarIcon className=" w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-gray-600">
              Shine web team ensure to provide best advice and products
              available in the whole market and we are efficient in our
              services. They keep an eye on provider's changes.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientCard;
