import React from 'react'
import litebg from '../assets/litebg.png';  
import litebg2 from '../assets/chsx.png';  

const Lite = ({ heroImage }) => {
  return (
  <div className='lg:h-screen h-auto bg-lite font-popping w-full z-30 ' >
    <div className="flex justify-center items-center w-full h-full relative py-12">
      <img src={litebg} alt="" className='absolute left-0 top-0 h-full' />

      <div className="pb-12 mx-auto flex justify-center items-center w-full h-full">
            <div className="bg flex flex-col justify-center items-center w-full">
                <div className="relative w-full flex justify-center">
                    <img src={litebg2} className="absolute z-20 object max-w-[75%] md:max-w-[90%] sm:max-w-[85%]" data-value="-4" alt="" />
                    <div className="justify-center items-center relative flex flex-col">
                        <img src={heroImage} className=" z-30 relative object mt-20 sm:max-w-[250px] max-w-[170px] md:max-w-[350px] lg:max-w-none" data-value="6" alt="Hero" />
                        <div className="flex flex-wrap">
                            <span className='text-[#D9B266] uppercase lg:text-[60px] xl:text-[90px] text-[50px] font-semibold shake'>keto</span>
                            <span className='text-[#D9B266] uppercase lg:text-[60px] xl:text-[90px] text-[50px] font-semibold shake'>-</span>
                            <span className='text-[#D9B266] uppercase lg:text-[60px] xl:text-[90px] text-[50px] font-semibold shake'>twex</span>
                            <span className='text-[#D9B266] uppercase lg:text-[60px] xl:text-[90px] text-[50px] font-semibold shake'>-</span>
                            <span className='text-[#D9B266] uppercase lg:text-[60px] xl:text-[90px] text-[50px] font-semibold shake'>kosher</span>
                            <span className='text-[#D9B266] uppercase lg:text-[60px] xl:text-[90px] text-[50px] font-semibold shake'>-</span>
                            <span className='text-[#D9B266] uppercase lg:text-[60px] xl:text-[90px] text-[50px] font-semibold shake'>mars</span>

                        </div>
                    </div>
                </div>
            </div>
      </div>   
      <img src={litebg} alt="" className='absolute right-0 top-0 h-full' />

    </div>    
  </div>
  )
}

export default Lite