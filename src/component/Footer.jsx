import React from 'react'
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-secondary font-popping w-full py-20 px-40 text-[#CABDC1]'>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <img src={logo} alt="" />
            </div>
            <div className="flex flex-col">
                <a href="">About</a>
                <a href="">History</a>
                <a href="">Shop</a>
            </div>
            <div className="flex flex-col">
                <a href="">About</a>
                <a href="">History</a>
                <a href="">Shop</a>
            </div>
        </div>
    </div>
  )
}

export default Footer