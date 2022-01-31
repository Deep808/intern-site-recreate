import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

const FooterSlide = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <div className="w-4/5 mx-auto my-12 md:w-4/5 md:mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2500}
        className="md:py-16"
      >
        <SwiperSlide className="cursor-pointer opacity-60 hover:opacity-100 hover:transition ease-in-out duration-200">
          <img src="images/gardenify.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer opacity-60 hover:opacity-100 hover:transition ease-in-out duration-200">
          <img src="images/HImage.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer opacity-60 hover:opacity-100 hover:transition ease-in-out duration-200">
          <img src="images/garagecon.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer opacity-60 hover:opacity-100 hover:transition ease-in-out duration-200">
          <img src="images/gujjuBites.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

    // <div className="w-3/4 h-3/4 mx-auto mb-6 opacity-60 cursor-pointer hover:opacity-100 hover:transition ease-in-out delay-100">
    //   <Carousel
    //     slide="false"
    //     keyboard="false"
    //     controls="false"
    //     indicators="false"
    //   >
    //     <Carousel.Item interval={2000}>
    //       <img className=" w-100" src="images/HImage.jpg" alt="First slide" />
    //     </Carousel.Item>
    //     <Carousel.Item interval={500}>
    //       <img
    //         className="w-100"
    //         src="images/garagecon.jpg"
    //         alt="Second slide"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item className="hidden" interval={500}>
    //       <img className="w-100" src="images/gardenify.jpg" alt="Third slide" />
    //     </Carousel.Item>
    //     <Carousel.Item className="hidden" interval={500}>
    //       <img
    //         className="w-100"
    //         src="images/gujjuBites.jpg"
    //         alt="Fourth slide"
    //       />
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
  );
};

export default FooterSlide;
