import React from 'react'
import { useForm } from "react-hook-form";
import { assets } from '../../../assets/assets';
import { FaArrowRight } from "react-icons/fa";

const ContactPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setIsSubmitting(true);
    emailjs.send(
      "service_b8jvt4d",
      "template_c06irsg",
      data
    )
      .then(() => {
        toast.success("Email sent successfully!");

        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-11415701805/V_4RCJK49-QaEK2St8Mq',
            value: 1.0,
            currency: 'INR',
            event_callback: function () {
              console.log('Google Ads conversion tracked');
            }
          });

          console.log("form submitted")
        }

        reset();
      })
      .catch(() => {
        toast.error("Failed to send email");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className='mt-10'>
      <div className=' xl:flex justify-center items-center bg-[#FFF6E0] p-5 xl:py-10 xl:px-15 gap-10 lg:flex'>

        <div className='text-center' >
          <div className='xl:text-[30px] font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent font-heading sm:text-[20px] xs:text-[18px]'>Your Trusted Specialists in Hands & Eyes</div>
          <div className='xl:text-[16px] font-[500] font-para xl:text-sm/8 py-5 sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>We offer advanced care for hand, upper limb, and eye conditions with a focus on precision and personalized treatment. Combining expert diagnostics, surgical expertise and a patient-first approach, our goal is to restore comfort, function and confidence for every individual we treat.</div>
        </div>

        <div >
          <div className='bg-[#FFFFFF] rounded-2xl xl:w-120 h-full p-5 sm:w-[100%] lg:w-100 md:w-100 md:mx-auto '>

            <div className='items-center'  >
              <div className='xl:text-[30px]  sm:text-[20px] font-[700] font-para text-center xs:text-[18px]'>Book an Appointment</div>
              <div className='xl:text-[14px] sm:text-[12px] font-[400] text-center xs:text-[12px] md:text-[14px] text-[12px]'>Don’t let wrist pain hold you back. Whether it’s interfering with daily chores, work or parenting, expert help is just a call away.</div>
            </div>

            <form className='my-5 font-para' onSubmit={handleSubmit(onSubmit)} >
              <div className="w-full flex  gap-2 mt-5  mxl:mt-10">
                <div className='w-[50%]'>
                  <input {...register("firstname", { required: true })} placeholder='Frist Name*' className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D] placeholder:font-para py-2 text-[12px] font-[500]' />
                </div>

                <div className='w-[50%]'>
                  <input {...register("lastname", { required: true })} placeholder='Last Name' className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D]  placeholder:font-para py-2 text-[12px] font-[500]' />
                </div>
              </div>

              {errors.firstname && <span className='text-[12px] text-red-400'>first name is required</span>}
              <div className="w-full flex gap-2 mt-5 mxl:mt-10">
                <div className='w-[50%]'>
                  <input {...register("phonenumber", { required: true })} placeholder='Phone Number*' className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D]  placeholder:font-para py-2 text-[12px] font-[500]' />
                  {errors.firstname && <span className='text-[12px] text-red-400'>phone number is required</span>}
                </div>

                <div className='w-[50%]'>
                  <input {...register("email", { required: true })} placeholder='Email' className='w-full outline-none focus:border-b-black focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D]  placeholder:font-para py-2 text-[12px] font-[500]' />
                  {errors.message && <span className='text-[12px] text-red-400'>Email  is required</span>}
                </div>

              </div>

              <div className="w-full flex gap-2 mt-5  mxl:mt-10">
                <textarea {...register("message", { required: true })} placeholder='Message*' className='w-full h-[100px] outline-none focus:border-b-blacke focus:outline-none focus:ring-0 border-b-2 border-black placeholder-[#565B5D]  placeholder:font-para py-2 text-[12px] font-[500] '></textarea><br />
              </div>

              {errors.message && <span className='text-[12px] text-red-400'>message is required</span>}
              <button type="submit" className='xl:w-[40%] outline-none focus:border-none focus:outline-none focus:ring-0 text-white font-para font-[800] xl:text-[14px] sm:text-[10px] px-2 py-3 bg-[#EF7F1A] mt-4 rounded-sm flex items-center justify-center gap-2 cursor-pointer mxl:mt-10 xs:text-[12px] text-[12px]'>Submit Now <div><FaArrowRight /></div> </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
