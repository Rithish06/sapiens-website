import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [mobileFixed, setMobileFixed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navBg, setNavBg] = useState(false)

    const shouldShowSimpleLogo = (location.pathname === '/' || location.pathname === '/fellowship-medical-jobs-bangalore') && windowWidth > 760;
    const logoToShow = shouldShowSimpleLogo ? assets.logo : assets.colorLogo;


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

        if (window.innerWidth >= 1024) {
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

    const handleCallClick = () => {
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                send_to: 'AW-11415701805/HR33CKH__uQaEK2St8Mq',
                value: 1.0,
                currency: 'INR',
                event_callback: function () {
                    window.location.href = 'tel:+917892556378';
                    console.log("call tracked")
                }
            });
        } else {
            window.location.href = 'tel:+917892556378';
        }
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        console.log("isOpen : ", isOpen)
    }, [isOpen])

    return (
        <div className={`w-full bg-[#FFF6E0] font-['poppins'] lg:bg-transparent ${mobileFixed ? 'fixed' : 'absolute'} z-[999] ${(isOpen || mobileFixed) ? 'md:bg-[#FFF6E0]' : 'md:bg-transparent'}`}>
            {/* Header */}
            <div className="px-4 py-1 flex items-center justify-between lg:px-20 font-poppins">
                {/* Logo */}
                <NavLink to="/">
                    <img src={logoToShow} className='w-[130px] h-auto md:w-[140px] lg:w-[180px] mxl:h-auto' alt="Logo of Sapiens Clinic, Bangalore Karnataka" />
                    {/* <img src={assets.logo} className='w-[85px] h-auto lg:w-[180px] mxl:w-[224px] mxl:h-auto' alt="logo" /> */}
                </NavLink>

                {/* Header Details */}
                <div className="hidden lg:flex gap-8 items-center">
                    <div className="flex items-center gap-2">
                        <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] mxl:w-[50px] mxl:h-[50px] border border-orange-500 rounded-full">
                            <FaHome className="text-orange-500 lg:text-xl mxl:text-2xl" />
                        </div>
                        <div>
                            <div className="lg:text-[14px] mxl:text-[16px] font-[500]">Evening OPD Consultation</div>
                            <div className="lg:text-[12px] mxl:text-[14px] text-[#808080]">Mon to Sat 4:00 PM to 7:30 PM</div>
                        </div>
                    </div>

                    <a href="tel:+917892556378" onClick={handleCallClick} className="flex items-center gap-5 cursor-pointer">
                        <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] mxl:w-[50px] mxl:h-[50px] border border-orange-500 rounded-full">
                            <IoCall className="text-orange-500 lg:text-xl mxl:text-2xl" />
                        </div>
                        <div>
                            <div className="lg:text-[14px] mxl:text-[16px] font-[500]">Phone Number</div>
                            <div className="lg:text-[12px] mxl:text-[14px] text-[#808080]">+91 78925 56378</div>
                        </div>
                    </a>

                    <a href="mailto:sapiensclinic@gmail.com" className="flex items-center gap-5 cursor-pointer">
                        <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] mxl:w-[50px] mxl:h-[50px] border border-orange-500 rounded-full">
                            <TfiEmail className="text-orange-500 lg:text-xl mxl:text-2xl" />
                        </div>
                        <div>
                            <div className="lg:text-[14px] mxl:text-[16px] font-[500]">Email Us Here</div>
                            <div className="lg:text-[12px] mxl:text-[14px] text-[#808080]">sapiensclinic@gmail.com</div>
                        </div>
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="relative w-10 h-10 focus:outline-none group lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <div className="relative w-full h-full flex flex-col justify-center items-center">
                        <span className={`absolute left-0 w-9 h-1 bg-[#1E1E1E] transition-all duration-300 ease-in-out rounded ${isOpen ? 'rotate-45 top-1/2' : 'top-3'}`} />
                        <span className={`absolute left-0 w-9 h-1 bg-[#1E1E1E] transition-all duration-300 ease-in-out rounded ${isOpen ? 'opacity-0' : 'top-4.6'}`} />
                        <span className={`absolute left-0 w-9 h-1 bg-[#1E1E1E] transition-all duration-300 ease-in-out rounded ${isOpen ? '-rotate-45 top-1/2' : 'bottom-3'}`} />
                    </div>
                </button>
            </div>

            {/* Desktop Navs */}
            <div className={`hidden lg:flex px-16 w-full ${isFixed ? 'fixed top-0 transition-top duration-300' : 'absolute mt-2 lg:mt-0'} z-[100] lg:bg-transparent`}>
                <div className="bg-[#001F3F] lg:w-full mxl:w-[80%] flex items-center justify-center mxl:justify-start px-2 lg:py-3 mxl:py-5 mxl:pl-10 gap-14">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `lg:text-[14px] mxl:text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/dr-darshan-kumar-a-jain"
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        <div className='lg:text-[14px] mxl:text-[16px] cursor-pointer font-medium'>Dr. Darshan Kumar A. Jain</div>
                        <div className='lg:text-[10px] mxl:text-[12px] cursor-pointer'>-Hand Surgeon</div>
                    </NavLink>

                    <NavLink
                        to="/dr-divya-sundaresh"
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        <div className='lg:text-[14px] mxl:text-[16px] cursor-pointer font-medium'>Dr. Divya D Sundaresh</div>
                        <div className='lg:text-[10px] mxl:text-[12px] cursor-pointer'>-Oculoplasty & Cataract Surgeon</div>
                    </NavLink>

                    <NavLink
                        to="/contact-clinic-bangalore"
                        className={({ isActive }) =>
                            `lg:text-[14px] mxl:text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        Contact Us
                    </NavLink>

                    <NavLink
                        to="/fellowship-medical-jobs-bangalore"
                        className={({ isActive }) =>
                            `lg:text-[14px] mxl:text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        Career
                    </NavLink>

                    <NavLink
                        to="hand-eye-care-blog-bangalore"
                        className={({ isActive }) =>
                            `lg:text-[14px] mxl:text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
                            }`
                        }
                    >
                        Blog
                    </NavLink>
                </div>
                <Link
                    to='/contact-clinic-bangalore'
                    className='bg-orange-500 mxl:w-[20%] text-white font-bold lg:hidden mxl:flex flex items-center justify-center lg:text-[14px] mxl:text-[16px] cursor-pointer hover:bg-orange-600 transition-colors'
                >
                    Book Appointment
                </Link>
            </div>

            {/* Mobile Navs */}
            <div className={`transform p-5 w-full h-full bg-white fixed top-20 transition-all duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden md:w-full md:shadow-2xl md:shadow-gray-800`}>
                <div className='flex flex-col gap-5'>
                    <NavLink
                        to="/"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-[#1E1E1E] hover:text-orange-500'
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/dr-darshan-kumar-a-jain"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-orange-500' : 'text-[#1E1E1E] hover:text-orange-500'
                            }`
                        }
                    >
                        <div className='text-[16px] cursor-pointer font-medium'>Dr. Darshan Kumar A. Jain</div>
                        <div className='text-[12px] cursor-pointer'>-Hand Surgeon</div>
                    </NavLink>

                    <NavLink
                        to="/dr-divya-sundaresh"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? 'text-orange-500' : 'text-[#1E1E1E] hover:text-orange-500'
                            }`
                        }
                    >
                        <div className='text-[16px] cursor-pointer font-medium'>Dr. Divya D Sundaresh</div>
                        <div className='text-[12px] cursor-pointer'>-Oculoplasty & Cataract Surgeon</div>
                    </NavLink>

                    <NavLink
                        to="/contact-clinic-bangalore"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-[#1E1E1E] hover:text-orange-500'
                            }`
                        }
                    >
                        Contact Us
                    </NavLink>

                    <NavLink
                        to="/fellowship-medical-jobs-bangalore"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-[#1E1E1E] hover:text-orange-500'
                            }`
                        }
                    >
                        Career
                    </NavLink>

                    <NavLink
                        to="hand-eye-care-blog-bangalore"
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `text-[16px] cursor-pointer transition-colors font-medium ${isActive ? 'text-orange-500' : 'text-[#1E1E1E] hover:text-orange-500'
                            }`
                        }
                    >
                        Blog
                    </NavLink>
                </div>

                <div className='flex flex-col md:flex-row flex-wrap gap-5 md:gap-10 md:max-w-[700px] mt-12'>
                    <div className="flex items-center gap-5">
                        <div className="flex justify-center items-center w-[50px] h-[50px] border border-orange-500 rounded-full">
                            <FaHome className="text-orange-500 text-3xl" />
                        </div>
                        <div>
                            <div className="text-[16px] font-[500]">Evening OPD Consultation</div>
                            <div className="text-[14px] text-[#808080]">Mon to Sat 4:00 PM to 7:30 PM</div>
                        </div>
                    </div>

                    <a target='_blank' href="tel:+917892556378" onClick={handleCallClick} className="flex items-center gap-5 cursor-pointer">
                        <div className="flex items-center gap-5">
                            <div className="flex justify-center items-center w-[50px] h-[50px] border border-orange-500 rounded-full">
                                <IoCall className="text-orange-500 text-3xl" />
                            </div>
                            <div>
                                <div className="text-[16px] font-[500]">Phone Number</div>
                                <div className="text-[14px] text-[#808080]">+91 78925 56378</div>
                            </div>
                        </div>
                    </a>

                    <a href="mailto:sapiensclinic@gmail.com" className="flex items-center gap-5 cursor-pointer">
                        <div className="flex items-center gap-5">
                            <div className="flex justify-center items-center w-[50px] h-[50px] border border-orange-500 rounded-full">
                                <TfiEmail className="text-orange-500 text-3xl" />
                            </div>
                            <div>
                                <div className="text-[16px] font-[500]">Email Us Here</div>
                                <div className="text-[14px] text-[#808080]">sapiensclinic@gmail.com</div>
                            </div>
                        </div>
                    </a>

                    <Link
                        to='/contact-clinic-bangalore'
                        onClick={closeMobileMenu}
                        className='bg-orange-500 w-full md:w-[40%] h-14 text-white font-bold flex items-center justify-center text-[16px] cursor-pointer mt-6 md:mt-0 md:ml-8 hover:bg-orange-600 transition-colors'
                    >
                        Book Appointment
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;