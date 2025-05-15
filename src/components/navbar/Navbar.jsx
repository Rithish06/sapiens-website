import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [mobileFixed, setMobileFixed] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 500);
        };

        const handleScrollMobile = () => {
            setMobileFixed(window.scrollY > 50);
        };

        if (window.innerWidth > 1024) {
            handleScroll();
            window.addEventListener('scroll', handleScroll);
        } else {
            handleScrollMobile();
            window.addEventListener('scroll', handleScrollMobile);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollMobile);
        };
    }, [windowWidth]);

    return (
        <div className={`w-full ${mobileFixed ? 'fixed' : 'absolute z-100'}`}>
            {/* Header */}
            <div className="px-4 py-1 flex items-center justify-between lg:px-8 font-poppins">
                {/* Logo */}
                <img src={assets.colorLogo} className='w-[85px] h-auto lg:w-[180px] mxl:w-[224px] mxl:h-auto' alt="logo" />

                {/* Header Details */}
                <div className="hidden lg:flex gap-8 items-center">
                    <div className="flex items-center gap-2">
                        <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] mxl:w-[50px] mxl:h-[50px] border border-orange-500 rounded-full">
                            <FaHome className="text-orange-500 lg:text-xl mxl:text-3xl" />
                        </div>
                        <div>
                            <div className="lg:text-[14px] mxl:text-[16px] font-[500]">Evening OPD Consultation</div>
                            <div className="lg:text-[12px] mxl:text-[14px] text-[#808080]">Mon to Sat 4:00 PM to 7:30 PM</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] mxl:w-[50px] mxl:h-[50px] border border-orange-500 rounded-full">
                            <IoCall className="text-orange-500 lg:text-xl mxl:text-3xl" />
                        </div>
                        <div>
                            <div className="lg:text-[14px] mxl:text-[16px] font-[500]">Phone Number</div>
                            <div className="lg:text-[12px] mxl:text-[14px] text-[#808080]">+91 78925 56378</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] mxl:w-[50px] mxl:h-[50px] border border-orange-500 rounded-full">
                            <TfiEmail className="text-orange-500 lg:text-xl mxl:text-3xl" />
                        </div>
                        <div>
                            <div className="lg:text-[14px] mxl:text-[16px] font-[500]">Email Us Here</div>
                            <div className="lg:text-[12px] mxl:text-[14px] text-[#808080]">sapiensclinic@gmail.com</div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="relative w-10 h-10 focus:outline-none group lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <div className="relative w-full h-full flex flex-col justify-center items-center gap-3">
                        <span className={`absolute left-0 w-9 h-1 bg-[#1E1E1E] transition-all duration-300 ease-in-out rounded ${isOpen ? 'rotate-45 top-1/2' : 'top-3'}`} />
                        <span className={`absolute left-0 w-9 h-1 bg-[#1E1E1E] transition-all duration-300 ease-in-out rounded ${isOpen ? 'opacity-0' : 'top-4.6'}`} />
                        <span className={`absolute left-0 w-9 h-1 bg-[#1E1E1E] transition-all duration-300 ease-in-out rounded ${isOpen ? '-rotate-45 top-1/2' : 'bottom-3'}`} />
                    </div>
                </button>
            </div>

            {/* Desktop Navs */}
            <div className={`hidden lg:flex px-16 w-full ${isFixed ? 'fixed top-0' : 'absolute mt-2 lg:mt-0'} z-[100] lg:bg-transparent`}>
                <div className="bg-[#001F3F] w-[80%] flex items-center px-2 lg:py-3 mxl:py-5 pl-10 gap-14">
                    <div className='text-white lg:text-[14px] mxl:text-[16px] cursor-pointer hover:text-orange-500 transition-colors font-medium'>Home</div>

                    <div className="text-white hover:text-orange-500 transition-colors">
                        <div className='lg:text-[14px] mxl:text-[16px] cursor-pointer font-medium'>Dr. Darshan Kumar A. Jain</div>
                        <div className='lg:text-[10px] mxl:text-[12px] cursor-pointer'>-Hand Surgeon</div>
                    </div>

                    <div className="text-white hover:text-orange-500 transition-colors">
                        <div className='lg:text-[14px] mxl:text-[16px] cursor-pointer font-medium'>Dr. Divya D Sundaresh</div>
                        <div className='lg:text-[10px] mxl:text-[12px] cursor-pointer'>-Oculoplasty & Cataract Surgeon</div>
                    </div>

                    <div className='text-white lg:text-[14px] mxl:text-[16px] cursor-pointer hover:text-orange-500 transition-colors font-medium'>Contact Us</div>
                </div>
                <div className='bg-orange-500 w-[20%] text-white font-bold flex items-center justify-center lg:text-[14px] mxl:text-[16px] cursor-pointer'>
                    Book Appointment
                </div>
            </div>

            {/* Mobile Navs */}
            <div className={`transform p-5 w-full bg-white fixed top-20 transition-all duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden md:w-[50vw] md:shadow-2xl md:shadow-gray-800`}>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#1E1E1E] text-[16px] cursor-pointer hover:text-orange-500 transition-colors font-medium'>Home</div>

                    <div className="text-[#1E1E1E] hover:text-orange-500 transition-colors">
                        <div className='text-[16px] cursor-pointer font-medium'>Dr. Darshan Kumar A. Jain</div>
                        <div className='text-[12px] cursor-pointer'>-Hand Surgeon</div>
                    </div>

                    <div className="text-[#1E1E1E] hover:text-orange-500 transition-colors">
                        <div className='text-[16px] cursor-pointer font-medium'>Dr. Divya D Sundaresh</div>
                        <div className='text-[12px] cursor-pointer'>-Oculoplasty & Cataract Surgeon</div>
                    </div>

                    <div className='text-[#1E1E1E] text-[16px] cursor-pointer hover:text-orange-500 transition-colors font-medium'>Contact Us</div>
                </div>

                <div className='flex flex-col gap-5 mt-12'>
                    <div className="flex items-center gap-5">
                        <div className="flex justify-center items-center w-[50px] h-[50px] border border-orange-500 rounded-full">
                            <FaHome className="text-orange-500 text-3xl" />
                        </div>
                        <div>
                            <div className="text-[16px] font-[500]">Evening OPD Consultation</div>
                            <div className="text-[14px] text-[#808080]">Mon to Sat 4:00 PM to 7:30 PM</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex justify-center items-center w-[50px] h-[50px] border border-orange-500 rounded-full">
                            <IoCall className="text-orange-500 text-3xl" />
                        </div>
                        <div>
                            <div className="text-[16px] font-[500]">Phone Number</div>
                            <div className="text-[14px] text-[#808080]">+91 78925 56378</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex justify-center items-center w-[50px] h-[50px] border border-orange-500 rounded-full">
                            <TfiEmail className="text-orange-500 text-3xl" />
                        </div>
                        <div>
                            <div className="text-[16px] font-[500]">Email Us Here</div>
                            <div className="text-[14px] text-[#808080]">sapiensclinic@gmail.com</div>
                        </div>
                    </div>
                </div>

                <div className='bg-orange-500 w-full h-14 text-white font-bold flex items-center justify-center text-[16px] cursor-pointer mt-12'>
                    Book Appointment
                </div>
            </div>
        </div>
    );
};

export default Navbar;
