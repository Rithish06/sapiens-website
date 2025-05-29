import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import PageTransition from "../../components/PageTransition";
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster, toast } from 'sonner';

const Contact = () => {

    useLayoutEffect(() => {
        gsap.fromTo(
            ".anime",
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }
        );
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const containerRef = useRef();
    const rotateRef = useRef();
    const rotateRevRef = useRef();
    const pinRef = useRef();
    const fadeInRef = useRef();


    useGSAP(() => {
        // Animate elements from left
        if (rotateRef.current) {
            gsap.fromTo(
                rotateRef.current,
                { opacity: 0, x: -500 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: rotateRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        // toggleActions: "restart none none none",
                        scrub: true,
                        markers: false,
                    },
                }
            );
        }

        // Animate elements from right
        if (rotateRevRef.current) {
            gsap.fromTo(
                rotateRevRef.current,
                { opacity: 0, x: 500 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: rotateRevRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        // toggleActions: "restart none none none",
                        scrub: true,
                        markers: false,
                    },
                }
            );
        }

        // Pin-style animation from bottom
        if (pinRef.current) {
            gsap.fromTo(
                pinRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: "top 100%",
                        end: "top 30%",
                        // toggleActions: "restart none none none",
                        scrub: true,
                        markers: false,
                        // pin: true // Uncomment if pinning needed
                    },
                }
            );
        }
        if (fadeInRef.current) {
            gsap.fromTo(
                fadeInRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: fadeInRef.current,
                        start: "top 85%",
                        end: "top 40%",
                        scrub: true,
                        // toggleActions: "play none none none",
                        markers: false,
                    },
                }
            );
        }
        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, { scope: containerRef });


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        init("TTEfFnQUvu6htAOxZ"); // Initialize once
    }, []);

    const onSubmit = (data) => {
        setIsSubmitting(true);
        emailjs.send(
            "service_b8jvt4d",
            "template_c06irsg",
            data
        )
            .then(() => {
                toast.success("Email sent successfully!");
                reset();
            })
            .catch(() => {
                toast.error("Failed to send email");
            })
            .finally(() => setIsSubmitting(false));
    };


    console.log(watch("example"))

    return (
        <PageTransition>
            <div ref={containerRef}>
                <div className=' anime'>
                    <img src={assets.contactMobileBanner} className='relative w-full h-auto md:hidden' alt="" />
                    <img src={assets.contactUsDesktopBanner} className='hidden lg:block lg:h-[90vh] mxl:w-full mxl:h-auto' alt="" />
                    <img src={assets.contactUsTabletBanner} className='hidden md:block lg:hidden w-full h-[60vh]' alt="" />
                    {/* <div className='relative w-full h-[100vh] hidden md:blocmgk bg-amber-50 md:justify-center'></div> */}

                    <div className="absolute flex flex-col gap-5 top-15 md:flex-row md:justify-center w-full lg:top-50 mxl:top-60">
                        <div className='md:w-[50%]'>
                            <div className='mt-9 px-4 md:max-w-[400px] mxl:max-w-full mxl:px-30'>
                                <div className='text-[44px] font-[600] font-para leading-[46px] sxl:text-[74px] sxl:leading-[70px]'>Contact<br />Information</div>
                                <div className='text-[14px] font-[600] font-para mt-3 w-[95%] mxl:w-[70%] sxl:text-[16px]'>Thank you for visiting our website. We are here assist you with any inquiries you may have.</div>
                            </div>

                            <div className='flex flex-col mx-3 justify-center py-5 px-10 lg:px-5 bg-white rounded-2xl mt-5 lg:mx-auto md:mx-4 max-w-[400px] sxl:flex-row sxl:max-w-[80%] sxl:py-2 mxl:ml-30'>
                                <div className="flex gap-2 items-center sxl:w-[44%]">
                                    <div className="min-w-[50px] w-[50px] h-[50px] min-h-[50px] shrink-0 rounded-full bg-[#B22726] flex align-center justify-center items-center">
                                        <FaRegClock className='text-white text-[25px]' />
                                    </div>
                                    <div>
                                        <div className='text-[14px] font-[700] font-para leading-0'>Evening OPD</div>
                                        <div className='text-[12px] font-[500] font-para text-[#2B2A29] leading-4 mt-3'>Mon to Sat 4:00 PM to 7:30 PM Sunday Holiday</div>
                                    </div>
                                </div>

                                <div className="w-[30%] my-3 mx-auto h-[2px] bg-black rounded-2xl sxl:w-[2px] sxl:h-[80px]"></div>

                                <div className="flex gap-2 items-center sxl:w-[46%]">
                                    <div className="min-w-[50px] w-[50px] h-[50px] min-h-[50px] shrink-0 rounded-full bg-[#EF7F1A] flex align-center justify-center items-center">
                                        <MdOutlineMailOutline className='text-white text-[25px]' />
                                    </div>
                                    <div>
                                        <span className='text-[14px] font-[700] font-para leading-0'>Phone :</span>
                                        <span className='text-[12px] font-[500] font-para text-[#2B2A29]  leading-4 mt-3'> 7892556378</span><br />

                                        <span className='text-[14px] font-[700] font-para leading-0'>Email Us :</span>
                                        <span className='text-[12px] font-[500] font-para text-[#2B2A29]  leading-4 mt-3'> sapiensclinic@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* form */}

                        <div className="w-full flex justify-center md:w-[50%]">
                            <div className="mt-4 max-w-[400px] bg-white rounded-2xl w-[90%] py-2 px-4 lg:py-3 lg:px-6 shadow-2xl shadow-gray-400">
                                <div className="text-[28px] font-[700] font-para text-[#2b2a29] mxl:text-[34px]">Ask A Question</div>
                                <div className="text-[12px] text-[#2B2A29] font-[400] font-para mt-2 mxl:text-[16px] leading-6">
                                    If you have any question, you can contact us. Please, fill out the form below.
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="w-full flex gap-2 mt-5 mxl:mt-10">
                                        <div className='w-[50%]'>
                                            <input
                                                {...register("first_name", {
                                                    required: "First name is required",
                                                    pattern: {
                                                        value: /^[A-Za-z\s]+$/,
                                                        message: "First name should contain only letters"
                                                    }
                                                })}
                                                placeholder='First Name*'
                                                className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D] placeholder:text-[10px] placeholder:font-para py-2 text-[12px] font-[500]'
                                            />
                                            {errors.first_name && <span className='text-[12px] text-red-400'>{errors.first_name.message}</span>}
                                        </div>

                                        <div className='w-[50%]'>
                                            <input
                                                {...register("last_name", {
                                                    pattern: {
                                                        value: /^[A-Za-z\s]*$/,
                                                        message: "Last name should contain only letters"
                                                    }
                                                })}
                                                placeholder='Last Name'
                                                className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D] placeholder:text-[10px] placeholder:font-para py-2 text-[12px] font-[500]'
                                            />
                                            {errors.last_name && <span className='text-[12px] text-red-400'>{errors.last_name.message}</span>}
                                        </div>
                                    </div>

                                    <div className="w-full flex gap-2 mt-5 mxl:mt-10">
                                        <div className='w-[50%]'>
                                            <input
                                                {...register("phone", {
                                                    required: "Phone number is required",
                                                    pattern: {
                                                        value: /^[6-9]\d{9}$/,
                                                        message: "Enter a valid 10-digit Indian phone number"
                                                    }
                                                })}
                                                placeholder='Phone Number*'
                                                className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D] placeholder:text-[10px] placeholder:font-para py-2 text-[12px] font-[500]'
                                            />
                                            {errors.phone && <span className='text-[12px] text-red-400'>{errors.phone.message}</span>}
                                        </div>

                                        <div className='w-[50%]'>
                                            <input
                                                {...register("email", {
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: "Enter a valid email address"
                                                    }
                                                })}
                                                placeholder='Email'
                                                className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D] placeholder:text-[10px] placeholder:font-para py-2 text-[12px] font-[500]'
                                            />
                                            {errors.email && <span className='text-[12px] text-red-400'>{errors.email.message}</span>}
                                        </div>
                                    </div>

                                    <div className="w-full flex gap-2 mt-5 mxl:mt-10">
                                        <textarea
                                            {...register("message", {
                                                required: "Message is required"
                                            })}
                                            placeholder='Message*'
                                            className='w-full h-[100px] outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D] placeholder:text-[10px] placeholder:font-para py-2 text-[12px] font-[500]'
                                        ></textarea><br />
                                    </div>
                                    {errors.message && <span className='text-[12px] text-red-400'>{errors.message.message}</span>}

                                    <button
                                        type="submit"
                                        className='w-[50%] outline-none focus:border-none focus:outline-none focus:ring-0 text-white font-para font-[800] text-[14px] px-1 py-3 bg-[#EF7F1A] mt-4 rounded-sm flex items-center justify-center gap-2 cursor-pointer mxl:mt-8'
                                        disabled={isSubmitting}
                                    >
                                        Submit Now <FaArrowRight className='text-white text-[14px]' />
                                    </button>
                                </form>
                            </div>
                        </div>


                    </div>

                </div>

                {/* container 2 */}
                <div className="mt-25 px-10 lg:px-20 mxl:px-30 overflow-x-hidden" >
                    <div className="text-[36px] font-[700] font-heading bg-orange-gradient text-center md:text-[40px]">Location For</div>

                    <div className="flex flex-col gap-15 items-center lg:flex-row lg:gap-20 mxl:gap-30 mt-10">
                        <div className='w-full lg:width-[50%] rotate' ref={rotateRef}>
                            <div className='text-[28px] font-[700] mt-3 text-center lg:text-[34px]'>Clinic</div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.475084671423!2d77.56893461220703!3d13.005390086790818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172329d41e0b%3A0x415cd1c76d7ec943!2sDr%20Darshan%20Kumar%20A.%20Jain!5e0!3m2!1sen!2sin!4v1683783254060!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.475084671423!2d77.56893461220703!3d13.005390086790818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172329d41e0b%3A0x415cd1c76d7ec943!2sDr%20Darshan%20Kumar%20A.%20Jain!5e0!3m2!1sen!2sin!4v1683783254060!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dr. Darshan Kumar A. Jain Clinic Location"
                                className="w-full h-[300px] md:h-[450px] mt-5 rounded-xl"
                            />
                        </div>

                        <div className='w-full lg:width-[50%] rotaterev' ref={rotateRevRef}>
                            <div className="text-[28px] font-[700] mt-3 text-center lg:text-[34px]">Parking</div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.417989085552!2d77.56890187507713!3d13.009032987309787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzMyLjUiTiA3N8KwMzQnMTcuMyJF!5e0!3m2!1sen!2sin!4v1691076582394!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dr. Darshan Kumar A. Jain Clinic Location"
                                className="w-full h-[300px] md:h-[450px] mt-5 rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* container 3 */}
                <div className="mt-20 px-5 lg:px-20 mxl:px-30 flex flex-col gap-10 lg:flex-row lg:gap-0 items-center pin" ref={pinRef}>
                    <div>
                        <div className="text-[30px] font-[700] font-heading bg-orange-gradient text-center md:text-[40px]">Orthopedic</div>
                        <div className='flex flex-col gap-5 items-center mt-5'>
                            <div className='w-[95%] border-1 bg-[#FFF8F8] border-black rounded-xl p-3 text-center  max-w-[390px] mxl:max-w-[590px]'>
                                <div className='bg-orange-gradient text-[24px] font-[700] mxl:text-[36px] font-logo'>Sapiens Clinic</div>
                                <div className='text-[14px] font-para font-[600] mxl:text-[24px]'>Mon to sat 12:00 noon to 8:00 PM, Sunday Holiday</div>
                            </div>

                            <div className='w-[95%] border-1 bg-[#FFF8F8] border-black rounded-xl p-3 text-center  max-w-[390px] mxl:max-w-[590px]'>
                                <div className='bg-orange-gradient text-[18px] font-[700] mxl:text-[24px] font-heading'>Apollo Spectra - Koramangala</div>
                                <div className='text-[14px] font-para font-[600] mxl:text-[24px]'>Wednesday and Saturday, 10:00 AM to <br />1:00 PM</div>
                            </div>

                            <div className='w-[95%] border-1 bg-[#FFF8F8] border-black rounded-xl p-3 text-center  max-w-[390px] mxl:max-w-[590px]'>
                                <div className='bg-orange-gradient text-[18px] font-[700] mxl:text-[24px] font-heading'>Rxdx Healthcare, Whitefiled:</div>
                                <div className='text-[14px] font-para font-[600] mxl:text-[24px]'>Every Monday Morning, 10:00 AM to <br />12:00 PM</div>
                            </div>
                        </div>
                    </div>

                    <div className='h-[2px] bg-black w-[80%] mx-auto lg:w-[2px] lg:h-[450px]'></div>

                    <div>
                        <div className="text-[36px] font-[700] font-heading bg-orange-gradient text-center md:text-[40px]">Opthalmology</div>

                        <div className='flex flex-col gap-5 items-center mt-5'>
                            <div className='w-[95%] border-1 bg-[#FFF8F8] border-black rounded-xl p-3 text-center max-w-[390px]  mxl:max-w-[590px]'>
                                <div className='bg-orange-gradient text-[18px] font-[700] mxl:text-[24px] font-heading'>Sapiens Clinic</div>
                                <div className='text-[14px] font-para font-[600] mxl:text-[24px]'>Ophthalmology : Morning 10:00am to 03:00pm</div>
                            </div>
                            <div className='w-[95%] flex justify-center'>
                                <img src={assets.contactOpthalmology} className='w-[80%] h-auto max-w-[380px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* container 4 */}
                <div className='flex flex-col lg:flex-row mt-14 lg:max-h-[700px] fadeIn mb-0' ref={fadeInRef}>
                    <div className='w-full lg:w-[55%] h-auto flex flex-col items-center border-b-[20px] border-[#FFF6E0]'>
                        <div className='bg-[#FFF6E0] w-full'>
                            <div className="text-[36px] font-[700] font-heading bg-orange-gradient text-center :text-[48px]">Contact Information</div>
                        </div>
                        <div className="flex flex-col gap-5 mt-8 md:w-[70%] lg:w-[95%] lg:pl-10">
                            <div className='px-4 lg:px-14'>
                                <div className="text-[18px] font-[700] mt-4 font-para lg:text-[24px]">ADDRESS : </div>
                                <div className='flex gap-3 mt-6 items-center'>
                                    <img src={assets.contactLocation} className='w-[20px] h-[20px]' alt="" />
                                    <div className='text-[12px] font-para font-[500] lg:text-[16px]'>18/3, 1st Main Ranganathapura 18th cross, entrance, opposite Sankey tank, Malleshwaram, Bengaluru, Karnataka 560003.</div>
                                </div>
                                <div className='flex gap-3 mt-6 items-center'>
                                    <img src={assets.contactCall} className='w-[20px] h-[20px] mb-1' alt="" />
                                    <div className='text-[14px] font-para font-[500]  lg:text-[18px]'><b>Phone :</b> 7892556378</div>
                                </div>
                                <div className='flex gap-3 mt-6 items-center'>
                                    <img src={assets.contactEmail} className='w-[20px] h-[20px] mb-0.5' alt="" />
                                    <div className='text-[12px] font-para font-[500] lg:text-[18px]'><b>Email Us :</b> sapiensclinic@gmail.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-start md:w-[70%] lg:w-[95%]  lg:pl-10">
                            <div className="text-[18px] font-[700] px-4 mt-14 font-para text-center md:text-left lg:text-[24px] lg:px-14 lg:ml-10">For Emergency Contact Details:</div>
                            <div className='flex gap-3 mt-6 px-4  lg:px-14'>
                                <img src={assets.handicon} className='w-[20px] h-[20px]' alt="" />
                                <div className='lg:flex lg:items-center gap-5'>
                                    <div className='text-[12px] font-para font-[500]  lg:text-[20px]'>Dr. Darshan Kumar A Jain</div>
                                    <div className='flex items-center gap-3'>
                                        <img src={assets.bulb} className='w-[20px] auto' alt="" />
                                        <div className='text-[#B22726] text-[18px] font-[700] font-para'>8095679126</div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-3 mt-6 px-4 lg:px-14'>
                                <img src={assets.eyeicon} className='w-[20px] h-[20px]' alt="" />
                                <div className='lg:flex lg:items-center gap-5'>
                                    <div className='text-[12px] font-para font-[500] lg:text-[20px]'>Dr. Divya Sundaresh</div>
                                    <div className='flex items-center gap-3 lg:'>
                                        <img src={assets.bulb} className='w-[20px] auto' alt="" />
                                        <div className='text-[#B22726] text-[18px] font-[700] font-para'>6364675657</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[45%] h-auto flex justify-center lg:justify-start mt-10 lg:mt-0'>
                        <img src={assets.contactUsImage} className='w-full h-auto md:w-[70%] lg:w-[100%] object-cover mt-4 md:mt-0' alt="" />
                    </div>
                </div>
            </div>
            <div className='relative z-1000'>
                {/* <ToastContainer
                    position="top-right" // Choose from positions below
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    style={{
                        zIndex: 9999,
                    }}
                    className="custom-toast-container"
                /> */}
                <Toaster
                    position="top-left"
                    style={{
                        zIndex: 1000,
                        position: 'fixed',
                        top: "200px"
                    }}
                    richColors
                />
            </div>
        </PageTransition>
    )
}

export default Contact
