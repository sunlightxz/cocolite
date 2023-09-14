import React from 'react'
import litebg from '../assets/litebg.png';  
import litebg2 from '../assets/chsx.png';  

const Lite = ({ healtImage }) => {
  return (
  <div className='h-[100vh] bg-lite font-popping w-full z-30 ' >
    <div className="flex justify-center items-center w-full h-full relative py-12">
      <img src={litebg} alt="" className='absolute left-0 top-0 h-full' />

      <div className="pb-12 mx-auto flex justify-center items-center w-full h-full">
            <div className="bg flex flex-col justify-center items-center w-full">
                <div className="relative w-full flex justify-center">
                    <img src={litebg2} className="absolute z-20 object" data-value="-4" alt="" />
                    <div className="justify-center items-center">
                        <img src={healtImage} className=" z-30 relative object mt-20 " data-value="6" alt="Hero" />
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