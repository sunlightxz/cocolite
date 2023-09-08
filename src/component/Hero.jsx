import React from 'react'
import bgHero from '../assets/bgHero.png';  
import chocolovers from '../assets/chocolovers.png';  

const Hero = ({ heroImage }) => {
  return (
    <div className='h-[100vh] bg-bgmain font-popping w-full'>
        <div className="py-12 mx-auto flex justify-center items-center w-full h-full">
            <div className="bg flex flex-col justify-center items-center w-full">
                <h1 className='text-7xl text-teal-100 mb-9 mx-auto'><span className='text-opacity-60 text-teal-100 '>for</span> lite</h1>
                <div className="relative w-full flex justify-center">
                    <img src={bgHero} className="absolute z-10" alt="" />
                    <img src={chocolovers} className="absolute z-20" alt="" />
                    <div className="justify-center items-center">
                        <img src={heroImage} className=" z-30 relative" alt="Hero" />
                    </div>
                </div>

                
            </div>
        </div>    
       
    </div>
  )
}

export default Hero