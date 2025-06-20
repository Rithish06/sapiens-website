import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-[#53646A] p-5 lg:px-20 lg:py-10'>
            <div className='lg:flex lg:gap-5'>
                <div className='flex flex-col items-center lg:items-center lg:w-50%'>
                    <div className="flex gap-3 items-center justify-center md:w-[90%]">
                        <img src={assets.logo} className='w-[134px] h-auto md:w-[224px] cursor-pointer' alt="" />
                        <div className='text-[20px] md:text-[36px] text-white font-[700] font-roboto md:w-[316px] mt-4 lg:mt-9'>Hand Surgery & Eye Care Centre</div>
                    </div>
                    <div className="text-[12px] md:text-[16px] text-white max-w-[700px]  font-roboto leading-[26px] mt-4 md:w-[90%]">Specializing in upper limb surgery and comprehensive eye care, we focus on accurate diagnosis, modern treatment techniques and patient-centered outcomes. Every procedure is backed by clinical expertise and delivered with precision and care.</div>
                    <div className='flex justify-center lg:justify-start lg:w-[90%]'>
                        <Link to='/contact' className='border-none outline-nonefocus:outline-none font-roboto focus:ring-0 gradient-button-bg px-8 py-2.5 rounded-lg text-white text-[16px] font-[400] mt-6 cursor-pointer'>Book Appointment</Link>
                    </div>
                </div>
                <div className="flex gap-10 lg:gap-20 justify-center mt-14 lg:mt-10 lg:w-[50%]">
                    <div className='text-white'>
                        <div className='text-[20px] md:text-[24px] font-[700] font-roboto'>Menu</div>
                        <Link to="/"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Home</div></Link>
                        <Link to="/dr-darshan"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Dr. Darshan Kumar A. Jain</div></Link>
                        <Link to="/dr-divya-sundaresh"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Dr. Divya D Sundaresh</div></Link>
                        <Link to="/contact"><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-4 cursor-pointer hover:text-orange'>Contact Us</div></Link>   
                    </div>
                    <div className='text-white'>
                        <div className='text-[20px] md:text-[24px] font-[700] font-roboto'>Follow us</div>
                        <a href="https://www.facebook.com/profile.php?id=100089038095094" target='_blank'><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-3 cursor-pointer hover:text-orange'>Facebook</div></a>
                        <a href="https://www.instagram.com/sapiensclinicmalleswaram/" target='_blank'><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-3 cursor-pointer hover:text-orange'>Instagram</div></a>
                        <a href="https://www.youtube.com/@SapiensClinicMalleshwaram" target='_blank'><div className='text-[12px] md:text-[16px] font-[400] font-roboto mt-3 cursor-pointer hover:text-orange'>YouTube</div></a>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-center text-white mt-14 md:gap-8">
                <div className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Privacy Policy</div>
                <div className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Terms of Use</div>
                <a target='_blank' href='https://maps.app.goo.gl/wMhxex5pi2v5qLas9' className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Clinic Map</a>
                <a target='_blank' href='https://maps.app.goo.gl/rZYZCTqmQ8UNRcwY8' className='text-[10px] md:text-[16px] font-[400] font-roboto cursor-pointer hover:text-orange'>Parking Location</a>
            </div>
            <div className='text-[12px] text-center font-[300] font-roboto text-white mt-8 md:text-[16px]'>© 2025 All Rights Reserved</div>
        </div>
    )
}

export default Footer
