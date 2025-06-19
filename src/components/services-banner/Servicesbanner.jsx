import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Servicesbanner = (props) => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Desktop Banner Image */}
            <img className="hidden md:block w-full" src={assets.servicebanner} alt="Servicesbanner" />

            {/* Mobile Background */}
            <div className="md:hidden h-[80vh] bg-[#FFF6E0] w-full" />

            {/* Banner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20">
                <h1 className="font-para text-[18px] md:text-[25px] lg:text-[65px] xl:text-[70px] font-bold bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent leading-tight">
                    {props.serviceName}
                </h1>
                <p className="text-[13px] xs:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[30px] font-para font-bold mt-2">
                    Treatment in Malleshwaram, Bangalore
                </p>
            </div>

            {/* Right Images */}
            <div className="absolute right-0 bottom-0 flex justify-end w-full pointer-events-none">
                <div className="relative">
                    <img className="relative z-10 w-[300px] xs:w-[320px] md:w-[260px] lg:w-[360px] xl:w-[550px]" src={assets.bannerimg} alt="bannerimg" />
                    <img className="absolute top-0 right-0 -mt-10 z-0 xl:right-7 xl:mr-5 xs:w-[500px] xl:w-[550px]" src={assets.colorimg} alt="colorimg" />
                </div>
            </div>

            {/* Buttons */}
            <div className="relative mt-[500px] md:mt-[300px] lg:mt-[400px] xl:mt-[500px] flex justify-center gap-5 md:gap-10">
                <button className="font-para text-[12px] lg:text-[13px] xl:text-[14px] py-2 px-5 lg:py-4 lg:px-10 font-bold text-white bg-[#EF7F1A] rounded-lg">
                    Learn More
                </button>
                <Link to="/contact">
                    <button className="font-para text-[12px] lg:text-[13px] xl:text-[14px] py-2 px-5 lg:py-4 lg:px-10 font-bold text-[#B22726] rounded-lg">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Servicesbanner
