import React, { useState } from 'react';
import logo from '../assets/logo.png';
import chocolateBarsImage from '../assets/chocolateHero.png';  
import cakeImage from '../assets/cakehero2.png'; 
import { Bars3Icon, XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import HeroSection from './Hero'; 

const Nav = () => {
 const [activeButton , setActiveButton] = useState('cakes');
 const [heroImage , setHeroImage]= useState(cakeImage);

 const handleButtonClick =(buttontype) => {
    if(buttontype == 'cakes'){
        setActiveButton("cakes");
        setHeroImage(cakeImage)
    }
    else if(buttontype == 'chocolateBars'){
        setActiveButton("chocolateBars");
        setHeroImage(chocolateBarsImage)
    }
 }

  return (
    <div>
      <div className="py-8 flex justify-between items-center fixed top-0 z-30 w-full transition bottom-0.3s ease-in-out bg-blue text-white">
        <div className="mx-auto w-5/6 flex justify-between items-center">
          <img src={logo} alt="logo" />
          <div className="flex justify-between items-center">
            <div className="flex gap-5 mr-3">
              <button
                className={`${
                  activeButton === 'cakes' ? 'bg-secondary' : 'border-2 border-teal-100 border-opacity-80'
                } text-white text-xl px-8 py-3 rounded-[30px] active`}
                onClick={() => handleButtonClick('cakes')}
              >
                Cakes
              </button>
              <button
                className={`${
                  activeButton === 'chocolateBars' ? 'bg-secondary' : 'border-2 border-teal-100 border-opacity-80'
                } text-white text-xl px-8 py-3 rounded-[30px]`}
                onClick={() => handleButtonClick('chocolateBars')}
              >
                Chocolate Bars
              </button>
            </div>
            <Bars3BottomLeftIcon className="h-11 w-11" />
          </div>
        </div>
      </div>
      <HeroSection heroImage={heroImage} />
    </div>
  );
};

export default Nav;
