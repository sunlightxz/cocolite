import React from 'react'
import expert from '../assets/expert.png';  
import healt from '../assets/healt.png';  
import {StarIcon } from '@heroicons/react/24/solid';


const Healthy = () => {
  return (
    <div className='h-[100vh] bg-lite font-popping w-full z-30 p-10 ' id="about-section">
        <div className="bg-white-lite w-full h-full flex flex-col items-center py-20 ">
            <h1 className='text-yellow-950 text-[40px] font-semibold'>Top 12 Healthiest Cakes</h1>
            <div className="mt-3 flex justify-between items-center">
                <div className="relative">
                    <img src={expert} alt="" />
                    <img src={healt} className="absolute -bottom-5 right-10" alt="" />
                </div>
                <div className="">
                   <div className="flex">
                    <StarIcon className='w-6 h-6 text-yellow-300'/>
                    <StarIcon className='w-6 h-6 text-yellow-300'/>
                    <StarIcon className='w-6 h-6 text-yellow-300'/>
                    <StarIcon className='w-6 h-6 text-yellow-300'/>
                    <StarIcon className='w-6 h-6 text-yellow-300'/>
                   </div>

                    <p className='text-2xl font-medium w-1/2'>Lorem ipsum dolor sit amet
                        consectetur.convallis sed vitae
                        commodo dui sagittis nulla convallis metus.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Healthy