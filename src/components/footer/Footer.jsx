import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='bg-[#53646A] p-5 lg:px-20 lg:py-10'>
            <div className='lg:flex lg:gap-5'>
                <div className='flex flex-col items-center lg:items-center lg:w-50%'>
                    <div className="flex gap-2 items-center justify-center md:w-[90%]">
                        <img src={assets.logo} className='w-[134px] h-auto md:w-[224px] cursor-pointer' alt="" />
                        <div className='text-[20px] md:text-[36px] text-white font-[700] font-poppins md:w-[316px]'>Hand Surgery & Eye Care Centre</div>
                    </div>
                    <div className="text-[12px] md:text-[16px] text-white max-w-[700px]  font-poppins leading-[26px] mt-4 md:w-[90%]">Specializing in upper limb surgery and comprehensive eye care, we focus on accurate diagnosis, modern treatment techniques and patient-centered outcomes. Every procedure is backed by clinical expertise and delivered with precision and care.</div>
                    <div className='flex justify-center lg:justify-start lg:w-[90%]'>
                        <button className='border-none outline-nonefocus:outline-none focus:ring-0 gradient-button-bg px-4 py-2 rounded-sm text-white text-[16px] font-[400] mt-6 cursor-pointer'>Book Appointment</button>
                    </div>
                </div>
                <div className="flex gap-10 lg:gap-20 justify-center mt-14 lg:mt-0 lg:w-[50%]">
                    <div className='text-white'>
                        <div className='text-[20px] md:text-[24px] font-[700] font-poppins'>Menu</div>
                        <div className='text-[12px] md:text-[16px] font-[400] font-poppins mt-3 cursor-pointer hover:text-orange'>Home</div>
                        <div className='text-[12px] md:text-[16px] font-[400] font-poppins mt-3 cursor-pointer hover:text-orange'>Dr. Darshan Kumar A. Jain</div>
                        <div className='text-[12px] md:text-[16px] font-[400] font-poppins mt-3 cursor-pointer hover:text-orange'>Dr. Divya D Sundaresh</div>
                        <div className='text-[12px] md:text-[16px] font-[400] font-poppins mt-3 cursor-pointer hover:text-orange'>Contact Us</div>
                    </div>
                    <div className='text-white'>
                        <div className='text-[20px] md:text-[24px] font-[700] font-poppins'>Follow us</div>
                        <div className='text-[12px] md:text-[16px] font-[400] font-poppins mt-3 cursor-pointer hover:text-orange'>Facebook</div>
                        <div className='text-[12px] md:text-[16px] font-[400] font-poppins mt-3 cursor-pointer hover:text-orange'>Instagram</div>
                        <div className='text-[12px] md:text-[16px] font-[400] font-poppins mt-3 cursor-pointer hover:text-orange'>Youtube</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-center text-white mt-14 md:gap-8">
                <div className='text-[10px] md:text-[16px] font-[400] font-poppins cursor-pointer hover:text-orange'>Privacy Policy</div>
                <div className='text-[10px] md:text-[16px] font-[400] font-poppins cursor-pointer hover:text-orange'>Terms of Use</div>
                <div className='text-[10px] md:text-[16px] font-[400] font-poppins cursor-pointer hover:text-orange'>Clinic Map</div>
                <div className='text-[10px] md:text-[16px] font-[400] font-poppins cursor-pointer hover:text-orange'>Parking Location</div>
            </div>
            <div className='text-[12px] text-center font-[300] font-poppins text-white mt-8 md:text-[16px]'>© 2025 All Rights Reserved</div>
        </div>
    )
}

export default Footer
