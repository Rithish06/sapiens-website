import React, { useRef } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

  
const Divyaservicebanner = (props) => {  

        const scrollWindow = () => {
        window.scrollTo({
            top: 800,
            behavior : 'smooth'
        })
    }

    return (
        <div>
            <div className='overflow-hidden'>
                <img className='relative hidden md:block lg:h-[90vh] w-full' src={assets.servicebanner} alt="Servicesbanner" />
                <div className='relative bg-[#FFF6E0] md:hidden h-[83vh]'> </div>
                <div className='absolute top-20 xl:top-70 lg:top-55 md:top-40 md:ml-5  flex flex-col justify-center  items-center md:w-[50%] w-full'>
                    <h1 className='font-para text-[22px] xl:text-[50px] lg:text-[40px] md:text-[25px] text-center 2xl:w-[80%] font-[700] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent xl:leading-[56px] lg:leading-[50px]'>
                        {props.servicename}
                    </h1>
                    <div className='font-para text-[16px] xl:text-[38px] lg:text-[25px] md:text-[20px] font-[700]'>in Bangalore</div>
                    <div className='absolute top-25 xl:top-57 lg:top-60 lg:flex lg:gap-10 md:top-35'>
                        <button onClick={scrollWindow} className='font-para cursor-pointer text-[12px] py-2 px-5 lg:text-[13px] xl:text-[14px] font-[800] text-[#FFFFFF] bg-[#EF7F1A] lg:py-4 lg:px-10 rounded-lg '>Learn More</button>
                        <Link to={'/contact'}>  <button className='font-para cursor-pointer text-[12px] py-2 px-5 lg:text-[13px] xl:text-[14px] font-[800] text-[#B22726] lg:py-4 lg:px-10 rounded-lg text-[#B22726] border-[#B22726] border-2 '>Contact Us</button></Link>
                    </div>
                </div>

                <div className='absolute lg:h-[90vh] top-55 xl:top-0 lg:top-0 md:top-18 md:right-0 lg:right-0 flex flex-col lg:items-end justify-center md:flex-row md:justify-end overflow-y-hidden'>
                    <div className='line-blur md:w-[100px] xl:h-[526px] lg:h-[420px] md:h-[306px] h-[50px] w-full bg-[#FFF6E0] md:blur-[10px] blur-sm top-7 relative md:left-15 md:top-0'></div>
                    <img className='md:w-full xl:h-[526px] lg:h-[420px] md:h-[306px] h-auto w-full max-w-[450px] md:max-w-full' src={assets.divyaservicebannerimg} alt="Services of Dr. Divya Sundaresh at Sapiens Clinic Bangalore" />
                </div>
            </div>
        </div>
    ) 
}

export default Divyaservicebanner