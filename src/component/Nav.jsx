import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import logoAlt from '../assets/CocoliteB.png'; 
import chocolateBarsImage from '../assets/chocolateHero.png';
import cakeImage from '../assets/cakehero.png';
import cakeImage2 from '../assets/cakehero2.png';

import chocolatehBarsImage from '../assets/healt2.png';  

import { Bars3Icon, XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import HeroSection from './Hero';
import About from './About'
import Healthy from './Healthy'
import Lite from './Lite'


const Nav = () => {
  const [activeButton, setActiveButton] = useState('cakes');
  const [heroImage, setHeroImage] = useState(cakeImage);
  const [healtImage, setHealtImage] = useState(cakeImage2);

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'cakes') {
      setActiveButton('cakes');
      setHeroImage(cakeImage);
      setHealtImage(cakeImage2);

    } else if (buttonType === 'chocolateBars') {
      setActiveButton('chocolateBars');
      setHeroImage(chocolateBarsImage);
      setHealtImage(chocolatehBarsImage);

    }
  };

  // Add a state to track whether the navbar should have a different color
  const [changeNavbarColor, setChangeNavbarColor] = useState(false);

  // Add a state to track the logo source
  const [logoSource, setLogoSource] = useState(logo);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();

      console.log('rect.top:', rect.top);
      console.log('changeNavbarColor:', changeNavbarColor);
      console.log('logoSource:', logoSource);

      setChangeNavbarColor(rect.top <= 0);
      setLogoSource(rect.top <= 0 ? logoAlt : logo); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`py-8 flex justify-between items-center fixed top-0 z-30 w-full transition bottom-0.3s ease-in-out text-white`}
      >
        <div className="mx-auto w-5/6 flex justify-between items-center">
          {/* Use the logoSource state variable for the logo src */}
          <img src={logoSource} alt="logo" />
          <div className="flex justify-between items-center">
            <div className="flex gap-5 mr-3">
              <button
               

                className={`text-xl px-8 py-3 rounded-[30px] active   ${
                  changeNavbarColor ? `${
                    activeButton === 'cakes' ? 'bg-secondary hover:bg-slate-800' : 'border-2 border-slate-800 border-opacity-80 text-black'
                  }` : `${
                    activeButton === 'cakes' ? 'bg-secondary hover:bg-slate-800' : 'border-2 border-teal-100 border-opacity-80 text-white'
                  }`
                }`}


                onClick={() => handleButtonClick('cakes')}
              >
                Cakes
              </button>
              <button
              className={`text-xl px-8 py-3 rounded-[30px] active   ${
                changeNavbarColor ? `${
                  activeButton === 'chocolateBars' ? 'bg-secondary hover:bg-slate-800' : 'border-2 border-slate-800 border-opacity-80 text-black'
                }` : `${
                  activeButton === 'chocolateBars' ? 'bg-secondary hover:bg-slate-800' : 'border-2 border-teal-100 border-opacity-80 text-white'
                }`
              }`}
                onClick={() => handleButtonClick('chocolateBars')}
              >
                Chocolate Bars
              </button>
            </div>
            <Bars3BottomLeftIcon className={`h-11 w-11 ${changeNavbarColor ?'text-black':''}`} />
          </div>
        </div>
      </div>
      <HeroSection heroImage={heroImage} />
      <About/>
      <Healthy healtImage={healtImage}/>
      <Lite healtImage={healtImage}/>
    </div>
  );
};

export default Nav;
