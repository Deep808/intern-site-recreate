import React from 'react';
import './MainHeading.css';
import { motion } from 'framer-motion';

const MainHeading = () => {
  return (
    <div className="main_container">
      <div>
        <motion.img
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{ duration: 3 }}
          className="hidden lg:block lg:absolute lg:w-2/4 lg:object-contain lg:-top-10 lg:-left-56 lg:opacity-40 lg:-z-10"
          src="images/Blue-circle.png"
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0.1, x: '-100vw' }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 3, bounce: 0.5 }}
        className="info"
      >
        <h1>We Build a Platform for Your Startup!</h1>
        <p>
          Get your own demand app and scale your start-up to new heights with
          Shineweb.
        </p>
        <motion.div
          initial={{ opacity: 0.1, y: '100vw' }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 3 }}
          className="buttons"
        >
          <div>
            <button className="custom-btn btn-13">Discover Services</button>
          </div>
          <div>
            <button className="custom-btn btn-13">Learn More</button>
          </div>
        </motion.div>
      </motion.div>
      <div>
        <motion.img
          initial={{ opacity: 0.1, y: '-100vw' }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 3.5, bounce: 0.5 }}
          className="image"
          src="images/image1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainHeading;
