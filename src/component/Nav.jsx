import React, { useState, useEffect } from 'react';
import logo from '../assets/lgox.png';
import logoAlt from '../assets/lgo.png'; 
import chocolateBarsImage from '../assets/chocolateHero.png';
import cakeImage from '../assets/cakehero.png';
import cakeImage2 from '../assets/cakehero2.png';
import md1 from '../assets/Facebook.png';
import logosx from '../assets/layersb.png'; 
import logos from '../assets/layers.png'; 

import chocolatehBarsImage from '../assets/healt2.png';  
import menu from '../assets/MENux.png';
import { FaFacebookF ,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";

import { Bars3Icon, XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import HeroSection from './Hero';
import About from './About'
import Healthy from './Healthy'
import Lite from './Lite'


const Nav = () => {
  const [activeButton, setActiveButton] = useState('cakes');
  const [heroImage, setHeroImage] = useState(cakeImage);
  const [healtImage, setHealtImage] = useState(cakeImage2);
  const [menuToglled,setMenuToglled] = useState(false);

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
  const [logoSourcex, setLogoSourcex] = useState(logos);


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
      setLogoSourcex(rect.top <= 0 ? logosx : logos); 

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`py-8 flex justify-between items-center fixed top-0 z-50 w-full transition bottom-0.3s ease-in-out text-white`}
      >
        <div className="mx-auto md:w-5/6 w-full px-4 md:px-0 flex justify-between items-center">
          {/* Use the logoSource state variable for the logo src */}
         <div className="">
          <img src={logoSource} className="sm:visible hidden sm:block"  alt="logo" />
          <img src={logoSourcex} className="sm:hidden visible max-w-[60px]" alt="logoz" />
         </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5 mr-3">
              <button
               

                className={`md:text-xl md:px-8 md:py-3 text-lg sm:px-5 sm:py-2 px-2 py-2  rounded-[30px] active   ${
                  changeNavbarColor ? `${
                    activeButton === 'cakes' ? 'bg-secondary hover:bg-opacity-70' : 'border-2 border-slate-800 border-opacity-80 text-black'
                  }` : `${
                    activeButton === 'cakes' ? 'bg-secondary hover:bg-opacity-70' : 'border-2 border-teal-100 border-opacity-80 text-white'
                  }`
                }`}


                onClick={() => handleButtonClick('cakes')}
              >
                Cakes
              </button>
              <button
              className={`md:text-xl md:px-8 md:py-3 text-lg sm:px-5 sm:py-2 px-2 py-2  rounded-[30px] active   ${
                changeNavbarColor ? `${
                  activeButton === 'chocolateBars' ? 'bg-secondary hover:bg-opacity-70' : 'border-2 border-slate-800 border-opacity-80 text-black'
                }` : `${
                  activeButton === 'chocolateBars' ? 'bg-secondary hover:bg-opacity-70' : 'border-2 border-teal-100 border-opacity-80 text-white'
                }`
              }`}
                onClick={() => handleButtonClick('chocolateBars')}
              >
                Chocolate Bars
              </button>
            </div>
            <Bars3BottomLeftIcon 
              className={`h-11 w-11 shake ${changeNavbarColor ?'text-black':''}`} 
              onClick={()=> {setMenuToglled(!menuToglled)}}
            />
            {
              menuToglled && (
                <div className="fixed right-0 bottom-0 z-40 h-screen w-full bg-bgmain px-10">
                    <div className="flex justify-end pt-12">
                        <button onClick={()=>setMenuToglled(!menuToglled)}>
                          <XMarkIcon className='h-11 w-11 text-black shakesx'/>
                        </button>
                    </div>        
                    
                    <div className="flex flex-col gap-10 text-2xl justify-center items-center h-full w-full">
                     <div className="flex justify-between items-center w-full" >
                        <div className="flex flex-col gap-14 ">
                          <a className='text-black md:text-[60px] text-[40px] font-medium shake' href="">Home</a>
                          <a className='text-black md:text-[60px] text-[40px] font-medium shake' href="">Top Bars</a>
                          <a className='text-black md:text-[60px] text-[40px] font-medium shake' href="">Top Caks</a>
                          <a className='text-black md:text-[60px] text-[40px] font-medium shake' href="">About Us</a>
                        </div>
                        <div className="">
                        <img src={menu} alt="" className='objectx md:w-auto w-[155px] sm:w-[195px]' data-value="6"/>

                        </div>
                        <div className="flex flex-col gap-12">
                          <FaFacebookF  className='text-black md:text-4xl text-2xl shake'/>
                          <FaTwitter className='text-black md:text-4xl text-2xl  shake'/>
                          <FaLinkedinIn className='text-black md:text-4xl text-2xl  shake'/>
                          <FaInstagram className='text-black md:text-4xl text-2xl  shake'/>
                        </div>
                     </div>
                    </div>
                            
                </div>
              )
            }
          </div>
        </div>
      </div>
      <HeroSection heroImage={heroImage} />
      <About/>
      <Healthy healtImage={healtImage}/>
      <Lite heroImage={heroImage}/>
    </div>
  );
};

export default Nav;
