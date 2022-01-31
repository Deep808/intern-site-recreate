import React, { useEffect } from 'react';
import DetailCard from './DetailCard';
import './Details.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; //view observer
import { useAnimation } from 'framer-motion';

const Details = () => {
  const { ref, inView } = useInView();
  const squareAnimation = useAnimation();
  const circleAnimation = useAnimation();

  useEffect(() => {
    // console.log('client card viewed!!!!', inView);

    if (inView) {
      squareAnimation.start({
        opacity: 0.5,
        x: 0,
        transition: {
          type: 'spring',
          duration: 2.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      squareAnimation.start({ x: '-100vw' });
    }

    if (inView) {
      circleAnimation.start({
        opacity: 0.5,
        y: 0,
        transition: {
          type: 'spring',
          duration: 2.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      circleAnimation.start({ y: '90vw' });
    }
  }, [inView]);

  const data = [
    {
      id: 111,
      icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5',

      heading: 'Creative Solutions',
      paragraph:
        'A mammoth experience up our sleeve and a dedicated team of professionals and budget into a beautiful reality, be it designing websites for a business or startup, SEO and digital marketing planning services, software or application development and much more you can bank upon us for the best.',
    },
    {
      id: 112,
      icon: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z',
      heading: 'Detailed Reports',
      paragraph:
        'Detailed reports are significant and fundamental apparatuses for any venture regardless of size or industry. They provide a way to follow & analyze the performance at large and wellbeing of the business while, distinguishing area for development & open doors for growth',
    },
    {
      id: 113,
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      heading: 'Diverse Approach',
      paragraph:
        'We at Shineweb technosys strive to provide a multifaceted diverse approach by believing that clear and transparent workflow is a key to success hence we provide you with the opportunity of taking part in every step that we make, to take your business one step closer to success that you wish to achieve.',
    },
  ];

  return (
    <div className="container">
      <div className="md:overflow-hidden lg:overflow-hidden" ref={ref}>
        <motion.img
          animate={squareAnimation}
          className="hidden lg:w-1/4 lg:object-contain lg:block lg:absolute lg:top-72 lg:-left-16 lg:bottom-0 lg:-z-10 lg:opacity-25 "
          src="images/square.png"
          alt=""
        />
        <motion.img
          animate={circleAnimation}
          className="hidden lg:block lg:absolute lg:w-1/4 lg:object-contain lg:-top-10 lg:-right-5 lg:opacity-25 lg:-z-10"
          src="images/Blue-circle.png"
          alt=""
        />
      </div>
      <div className="card">
        {data.map((d) => (
          <DetailCard
            key={d.id}
            heading={d.heading}
            paragraph={d.paragraph}
            icon={d.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
