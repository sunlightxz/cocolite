import React from 'react'
import about from '../assets/about.png';  
import choco from '../assets/choco.png';  

const About = () => {

    window.addEventListener('mousemove', parallasx) ;
    function parallasx(e){
     document.querySelectorAll(".objectx").forEach(function(move){
         var moving_value = move.getAttribute("data-value");
         var x = (e.clientX * moving_value) /250 ;
         var y = (e.clientY * moving_value) /250 ;

         move.style.transform = "translateX("+ x + "px) translateY("+ y + "px)" ;
     });
    }

  return (
    <div className='h-[100vh] bg-about font-popping w-full relative ' >
        <img src={choco} alt=""  className='absolute -top-14 right-0 objectx'data-value="4"/>
        <div className="flex justify-center items-center w-full h-full relative pr-5">
            <div className="flex flex-wrap items-center">
                <div className="w-1/2">
                    <div className="items-start absolute inset-0">
                        <img src={about} className="h-[99.99%]" alt=""/>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-1/2">
                    <p className="text-teal-100 text-opacity-60 text-[26px] font-medium mb-4">We provide quality and expert information
                       to help <span className='text-teal-100'>chocolate lovers</span> make educated 
                       choices about specialty <span className='text-teal-100'>chocolate</span> products and <span className='text-teal-100'>cakes </span>
                       for dietary needs.
                    </p>
                    <div className="flex justify-start w-full mt-6">
                        <button className='bg-green hover:bg-lime-950 text-white text-xl px-8 py-3 rounded-[30px] z-30' data-value="3">Learn More</button>
                    </div>
                </div>

                
            </div>
        </div>    
       
    </div>
  )
}

export default About