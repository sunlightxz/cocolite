import React from 'react'
import expert from '../assets/expert.png';  
import healt from '../assets/healt.png';  
import {StarIcon } from '@heroicons/react/24/solid';
import kcal from '../assets/kcal.png';  
import kcal2 from '../assets/kcal2.png';  
import kcal3 from '../assets/kcal3.png';  
import kcal4 from '../assets/kcal4.png';  

const Healthy = ({ healtImage }) => {
    console.log(healtImage  )
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
    <div className='lg:h-screen h-auto bg-lite font-popping w-full z-30 lg:p-5 p-3 ' id="about-section">
        <div className="bg-white-lite md:w-full md:h-full flex flex-col items-center py-8 mx-auto px-16">
            <h1 className='text-yellow-950 lg:text-[40px] text-3xl font-semibold mt-12 lg:mb-12 mb-6'>Top 12 Healthiest Cakes</h1>
            <div className="mt-3 flex sm:flex-row flex-col sm:gap-0 gap-8 justify-between items-start w-full">
                <div className="relative sm:basis-1/2	">
                    <img src={expert} className="object max-w-[200px] lg:max-w-[350px] xl:max-w-none md:max-w-[280px]" alt="" data-value="-2"/>
                    <img src={healtImage} className="absolute bottom-5 left-16 object h-full max-w-[200px] md:max-w-[280px] lg:max-w-[350px] xl:max-w-none" alt="" data-value="4" />
                </div>
                <div className="sm:basis-1/2	">
                   <div className="flex">
                    <StarIcon className='w-6 h-6 text-amber-400'/>
                    <StarIcon className='w-6 h-6 text-amber-400'/>
                    <StarIcon className='w-6 h-6 text-amber-400'/>
                    <StarIcon className='w-6 h-6 text-amber-400'/>
                    <StarIcon className='w-6 h-6 text-amber-400'/>
                   </div>

                    <p className='md:text-xl text-2xl font-semibold mt-2'>Lorem ipsum dolor sit amet <br />consect.  convallis sed vitae commodo
                    </p>
                    <div className="kcal flex gap-8 md:mt-8 mt-4 mt:ml-0 ml-4 ">
                        <div className="text-center">
                        <img src={kcal} alt=""  className='mb-2'/>
                        <span className=''>Energy</span>
                       </div>
                       <div className="text-center">
                        <img src={kcal2} alt="" className='mb-2'/>
                        <span className=''>Sugar</span>
                       </div>
                       <div className="text-center">
                        <img src={kcal3} alt=""  className='mb-2'/>
                        <span className=''>Fat</span>
                       </div>
                       <div className="text-center">
                        <img src={kcal4} alt=""  className='mb-2'/>
                        <span className=''>Protein</span>
                       </div>
                       
                    </div>
                    <p className='lg:mt-16 mt-4 mb-9 font-medium lg:w-5/6 w-full'>Lorem ipsum dolor sit amet consectetur. Luctus amet sit scelerisque odio. 
                    Eget aliquet eget faucibus nibh lobortis convallis vestibulum cursus tempor. 
                    Mauris volutpat rhoncus lobortis nisl tellus interdum.
                    Luctus amet sit scelerisque odio. Eget aliquet eget faucibus nibh lobortis 
                    convallis  eget faucibus nibh lobortis convallis vestibulum
                    </p>

                </div>
            </div>
            
                    <button className='bg-secondary hover:bg-slate-800 text-white text-xl px-8 py-3 rounded-[30px] z-30 mt-4 ' data-value="3">More Reviews</button>
        </div>
    </div>
  )
}

export default Healthy