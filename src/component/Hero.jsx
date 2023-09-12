import React from 'react'
import bgHero from '../assets/heroImg.png';  
import chocolovers from '../assets/chocolovers.png';  
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Hero = ({ heroImage }) => {
  
    document.addEventListener('mousemove', parallax) ;
       function parallax(e){
        document.querySelectorAll(".object").forEach(function(move){
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) /250 ;
            var y = (e.clientY * moving_value) /250 ;

            move.style.transform = "translateX("+ x + "px) translateY("+ y + "px)" ;
        });
       }

  return (
    <div className='h-[100vh] bg-bgmain font-popping w-full'>
        <div className="pb-12 mx-auto flex justify-center items-center w-full h-full">
            <div className="bg flex flex-col justify-center items-center w-full">
                <h1 className='text-7xl text-teal-100 mb-9 mx-auto'><span className='text-opacity-60 text-teal-100 '>for</span> lite</h1>
                <div className="relative w-full flex justify-center">
                    <img src={bgHero} className="absolute z-10 object" alt="" data-value="-2"/>
                    <img src={chocolovers} className="absolute z-20 object" data-value="-4" alt="" />
                    <div className="justify-center items-center">
                        <img src={heroImage} className=" z-30 relative object mt-10" data-value="6" alt="Hero" />
                    </div>
                </div>
                <button className='bg-secondary hover:bg-slate-800 text-white text-xl px-8 py-3 rounded-[30px] z-30 mt-10 object' data-value="3">Buy Now</button>

                
            </div>
        </div>    
       
    </div>
  )
}

export default Hero