// src/components/Scroll.js
import React, { useEffect } from 'react';
import { Element } from 'react-scroll';

const Scroll = ({ children }) => {
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scroll down
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      } else if (event.deltaY < 0 && window.scrollY === window.innerHeight) {
        // Scroll up from the second section
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return <Element name="scrollContainer">{children}</Element>;
};

export default Scroll;
