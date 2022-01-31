import React, { useEffect } from 'react';
import './Work.css';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; //view observer
import { useAnimation } from 'framer-motion';

const Work = () => {
  const { ref, inView } = useInView();
  const stepsAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      stepsAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          duration: 2.5,
        },
      });
    }
    if (!inView) {
      stepsAnimation.start({ x: '-100vw' });
    }
  }, [inView]);

  const work_data = [
    {
      id: 10,
      percentage: 90,
      heading: 'Work Completed',
      info: 'You are under no obligation to continue with services.',
    },
    {
      id: 20,
      percentage: 80,
      heading: 'Active To Work',
      info: 'you are under no obligation to continue with services.',
    },
  ];

  return (
    <>
      <div className="spacer layer1"></div>
      <div className="w-11/12 mx-auto md:flex md:flex-col lg:w-full lg:flex-row lg:justify-between lg:items-center lg:bg-blue-200">
        <div
          ref={ref}
          className="max-w-lg mx-auto md:max-w-2xl lg:max-w-md lg:w-full lg:h-4/5 "
        >
          <motion.div
            animate={stepsAnimation}
            className="steps step-layer"
          ></motion.div>
          <img
            className="rounded-t-md md:drop-shadow-lg lg:relative lg:drop-shadow-xl lg:mr-40 lg:object-contain lg:max-w-lg "
            src="images/people.jpg"
            alt=""
          />
        </div>
        <div className="max-w-lg mx-auto md:max-w-2xl lg:flex lg:flex-col lg:w-auto lg:z-40">
          <div className="md:w-full md:mx-auto lg:flex lg:flex-col lg:w-8/12 lg:mx-36">
            <h1 className="text-3xl font-semibold mt-8 text-blue-800">
              We create stunning websites that perfectly matches your
              expectations!
            </h1>
            <p className="text-sm font-normal text-gray-600 mt-6">
              ShineWeb focus on supporting the startups , enterprise and large
              business to help build the information technology and services as
              per the requirmemts in consideration with the business models ,
              organization models and help them in business development ,
              tracking the business growth , customised software for
              organization as well as the online presence of the business.
            </p>
          </div>
          <div className="flex flex-col md:w-3/6 md:flex lg:flex lg:flex-row lg:w-5/12 lg:mx-auto lg:space-x-4 ">
            {work_data.map((data) => (
              <ProgressBar
                key={data.id}
                percentage={data.percentage}
                heading={data.heading}
                info={data.info}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="spacer2 layer2"></div>
    </>
  );
};

export default Work;
