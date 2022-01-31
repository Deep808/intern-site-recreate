import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <div>
      {visible ? (
        <motion.i
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
          onClick={scrollToTop}
          className="fixed cursor-pointer hover:scale-110 transition ease-in-out duration-200 text-blue-800 border-2 bg-white border-white rounded-full bottom-6 right-6 z-40 fas fa-arrow-alt-circle-up fa-3x"
        ></motion.i>
      ) : (
        <i className="hidden fas fa-arrow-alt-circle-up fa-3x"></i>
      )}
    </div>
  );
};

export default ScrollUpButton;
