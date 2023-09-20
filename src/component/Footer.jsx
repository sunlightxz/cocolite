import React from 'react'
import logo from '../assets/Cocolite.png';
import md1 from '../assets/Facebook.png';
import md2 from '../assets/Instagram.png';
import md3 from '../assets/Twitter.png';
import md4 from '../assets/TwitterX.png';

const Footer = () => {
  return (
    <div className='bg-secondary font-popping w-full lg:py-20 py-12 lg:px-40 md:px-16 px-6 text-[#CABDC1] '>
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center mx-auto">
            <div className="flex flex-col">
                <img src={logo} alt="" className='lg:max-w-[90%] max-w-[70%]' />
                <div className="flex mt-7">
                    <img src={md1} alt="" className='md:w-[40px] w-[30px]' width='40px'  height='40px'/>
                    <img src={md2} alt=""  className='md:w-[40px] w-[30px]'width='40px'  height='40px'/>
                    <img src={md3} alt=""  className='md:w-[40px] w-[30px]'width='40px'  height='40px'/>
                    <img src={md4} alt=""  className='md:w-[40px] w-[30px]'width='40px'  height='40px' />

                </div>
                <span className='hover:text-white mt-4 md:font-semibold font-normal'>+2126-666-666</span>
            </div>
            <div className="flex gap-28">
                <div className="flex flex-col mt-2">
                    <a href="" className='md:text-[24px] text-xl md:font-semibold font-normal hover:text-white'>About</a>
                    <a href="" className='md:text-[24px] text-xl md:font-semibold font-normal hover:text-white my-4'>History</a>
                    <a href="" className='md:text-[24px] text-xl md:font-semibold font-normal hover:text-white'>Shop</a>
                </div>
                <div className="flex flex-col mt-2">
                    <a href="" className='md:text-[24px] text-xl md:font-semibold font-normal hover:text-white'>Contact Us</a>
                    <a href="" className='md:text-[24px] text-xl md:font-semibold font-normal hover:text-white my-4'>Terms and Conditions</a>
                    <a href="" className='md:text-[24px] text-xl md:font-semibold font-normal hover:text-white'>Privacy Police</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer