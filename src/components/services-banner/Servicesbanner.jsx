import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Servicesbanner = (props) => {

    const scrollWindow = () => {
        window.scrollTo({
            top: 800,
            behavior : 'smooth'
        })
    }

    return (
        <div className="relative w-full overflow-hidden">
            {/* Desktop Banner Image */}
            <img className="hidden md:block w-full" src={assets.servicebanner} alt="Servicesbanner" />

            {/* Mobile Background */}
            <div className="md:hidden h-[80vh] bg-[#FFF6E0] w-full" />

            {/* Banner Content */}
            <div className='flex flex-col md:flex-row absolute w-full top-0'>

                <div className='w-full lg:w-[60%] relative top-24 md:top-30 lg:top-50 mxl:top-65'>
                    <div className="inset-0 flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20">
                        <h1 className="font-para text-[20px] md:text-[30px] lg:text-[55px] xl:text-[60px] font-bold bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent leading-tight">
                            {props.serviceName}
                        </h1>
                        <p className="text-[13px] xs:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[30px] font-para font-bold mt-2">
                            Treatment in Malleshwaram, Bangalore
                        </p>
                    </div>


                    {/* Buttons */}
                    <div className="hidden w-full md:mt-20 lg:mt-10 mxl:mt-20 md:flex justify-center gap-5 md:gap-10">
                        <button onClick={scrollWindow} className="font-para text-[12px] lg:text-[13px] xl:text-[14px] py-2 px-5 lg:py-4 lg:px-10 font-bold text-white bg-[#EF7F1A] rounded-lg  cursor-pointer">
                            Learn More
                        </button>
                        <Link to="/contact">
                            <button className="font-para text-[12px] lg:text-[13px] xl:text-[14px] py-2 px-5 lg:py-4 lg:px-10 font-bold text-[#B22726] border-[#B22726] border-2 rounded-lg cursor-pointer">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Images */}
                <div className="flex justify-center pointer-events-none w-full lg:w-[40%] realtive mt-30 lg:mt-45 mxl:mt-51">
                    <div className="relative">
                        <img className="relative z-10 w-[300px] xs:w-[320px] md:w-[260px] lg:w-[360px] xl:w-[550px]" src={assets.drDarshanServiceImage} alt="bannerimg" />
                        <img className="absolute top-0 right-0 -mt-10 z-0 xl:mr-5 xs:w-[500px] xl:w-[550px]" src={assets.drDarshanPageEllipse} alt="colorimg" />
                    </div>
                </div>

                <div className="w-full mt-20 flex justify-center gap-5 md:gap-10 md:hidden">
                    <button className="font-para text-[12px] lg:text-[13px] xl:text-[14px] py-2 px-5 lg:py-4 lg:px-10 font-bold text-white bg-[#EF7F1A] rounded-lg  cursor-pointer">
                        Learn More
                    </button>
                    <Link to="/contact">
                        <button className="font-para text-[12px] lg:text-[13px] xl:text-[14px] py-2 px-5 lg:py-4 lg:px-10 font-bold text-[#B22726] rounded-lg cursor-pointer">
                            Contact Us
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Servicesbanner
