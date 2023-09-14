import React from 'react'
import subscribe from '../assets/subscribe.png';  
import subs from '../assets/subs.png';  
import bgHero from '../assets/sbsx.png';  

const Subs = () => {
  return (
    <div className='h-screen bg-bgmain font-popping w-full'>
        <div className="pb-12 mx-auto flex flex-col justify-center items-center w-full h-full">
            <img src={subs} className="absolute z-10 object " alt="" data-value="-2"/>
            <div className="flex justify-center flex-col items-center relative">
                <img src={subscribe} className="" alt="" />
                <h1 className='text-[64px] absolute font-medium top-28'>Subscribe to offers <br /> and new letters</h1>
                <img src={bgHero} className="absolute z-10 object" alt="" data-value="-2"/>
               
            </div>
            <div className="mt-48">
                    <input className='px-20 py-3 rounded-l-2xl' type="text" name="" id="" />
                    <button className='px-6 py-3 bg-secondary text-white rounded-r-2xl'> Subscribe</button>
                </div>
           
        </div>
       
    </div>
  )
}

export default Subs