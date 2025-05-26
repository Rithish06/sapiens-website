import React from 'react'
import { assets } from '../../assets/assets'

const Servicesbanner = () => {


    return (
        <div>
            <div>
                <img className='relative  hidden md:block' src={assets.Servicesbanner} alt="Servicesbanner" />
                <div className='relative bg-[#FFF6E0] md:hidden h-[80vh]'> </div>
                <div className='absolute top-15 md:top-40 lg:top-50  xl:left-0 xl:top-70 md:w-[50%] w-full md:ml-10 lg:ml-20 '>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='font-para text-center text-[18px] md:text-[25px] lg:text-[65px] xl:text-[70px] font-[700] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent leading-[80px]'>De Quervain’s Tenosynovitis</div>
                        <div className='-mt-5 text-[13px] xs:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[30px] font-para text-center font-[700] lg:mt-3'>Treatment in Malleshwaram, Bangalore</div>
                    </div>

                </div>
                <div className='flex md:justify-end justify-center absolute top-40  md:top-30 md:right-12 lg:top-45 lg:right-10 xl:top-55 w-full'>
                    <img className='absolute z-[3] xl:mr-7 w-[300px] xs:w-[320px] md:w-[260px] lg:w-[360px] xl:w-[550px]' src={assets.bannerimg} alt="bannerimg" />
                    <img className='relative top-0 -mt-10 xs:-mt-20 md:-mr-5 xl:-mt-10 xl:right-7 xl:mr-5 xs:w-[500] xl:w-[550px]' src={assets.colorimg} alt="colorimg" />
                </div>

                <div className='absolute flex justify-center top-110 xs:top-115 md:top-70 lg:top-108  xl:top-140 lg:ml-20  md:w-[50%] w-full gap-10'>
                    <button className='font-para cursor-pointer text-[12px] py-2 px-5 lg:text-[13px] xl:text-[14px] font-[800] text-[#FFFFFF] bg-[#EF7F1A] lg:py-4 lg:px-10 rounded-lg '>Learn More</button>
                    <button className='font-para cursor-pointer text-[12px] py-2 px-5 lg:text-[13px] xl:text-[14px] font-[800] text-[#B22726] lg:py-4 lg:px-10 rounded-lg '>Contact Us</button>
                </div>

            </div>

        </div>
    )
}

export default Servicesbanner