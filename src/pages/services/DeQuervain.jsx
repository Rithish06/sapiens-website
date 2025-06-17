import React, { useRef } from 'react'
import { assets } from '../../assets/assets'
import { useForm } from "react-hook-form";
import Servicesbanner from '../../components/services-banner/Servicesbanner';
import Faqs from '../../components/faqs/faqs';

const DeQuervain = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  // console.log(watch("example"))

  






  const faqs = [
    {
      ques: "Can De Quervain’s go away on its own?",
      ans: ""
    },
    {
      ques: "How long does recovery take after surgery?",
      ans: ""
    },
    {
      ques: "Is this condition permanent?",
      ans: ""
    },
    {
      ques: "Can I still use my phone or laptop?",
      ans: ""
    },
    {
      ques: "Does the treatment involve any injections?",
      ans: ""
    }
  ];


  return (
    <div className=''>
      <div className='lg:px-0 xs:top-20 '>
        <div >
          <Servicesbanner />
        </div>
        {/* <div className='xl:text-[40px] font-para font-[600] xl:mx-15 sm:text-[16px] sm:mx-5'><span className='xl:text-[50px]  font-[700]  bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent sm:text-[22px] xs:text-[22px]'>De Quervain’s Tenosynovitis</span> <br />
          Treatment in Malleshwaram, Bangalore
        </div> */}
        <div className='px-5 pb-5'>
          <div className=' lg:flex flex-row xl:mx-15 sm:flex-col sm:m-5 mt-5 '>

            <div>
              <div className=' xl:mt-10 xl:text-[30px] pb-5 px-1  font-[600] sm:text-[18px] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent xs:text-[17px] md:flex md:justify-center  '><span className='bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Personalized Care for Lasting Wrist Pain </span>Relief - At Sapiens Clinic</div>
              <div className='xl:text-[16px] font-para font-[500] text-justify xl:text-sm/8 xs:text-[12px] md:text-[14px] sm:text-[16px] text-[12px]'>Pain on the thumb side of your wrist when lifting, gripping, or holding something as light as your phone? You're not alone. This could be a sign of De Quervain’s Tenosynovitis - a condition that affects countless individuals who rely on their hands every day, from young mothers and IT professionals to athletes and artists.</div>
              <div className='xl:text-[16px] font-[500] font-para xl:text-sm/8  sm:text-[14px]  xs:text-[12px] md:text-[14px] text-[12px] my-2'>At Sapiens Clinic, Malleshwaram, this condition is managed with empathy, expertise and evidence-based care focused on helping you regain comfort and mobility-without compromising your routine or lifestyle.</div>
            </div>

            {/* <div className='xl:w-554 xl:ml-10 sm:w-[100%]'><img className='' src={assets.handimg} alt="" /></div> */}
          </div>

          <div className='mt-10   lg:flex  xl:mx-15 sm:mx-5 lg:mt-10  items-center'>
            <div className=''>
              <div className='xl:text-[30px] font-heading font-[600] xl:py-2 xl:mt-10 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent sm:text-[20px] xs:text-[18px]  '>What is De Quervain’s Tenosynovitis?</div>
              <div className='xl:text-[16px] font-[500] font-para xl:py-2 xl:text-sm/8 text-justify sm:text-[15px] sm:text-sm/5 xs:text-[12px] md:text-[14px] text-[12px]'>De Quervain’s Tenosynovitis occurs when the tendons that run along the thumb side of the wrist become swollen and irritated. These tendons pass through a narrow tunnel (sheath) and when inflamed, they can cause sharp pain and restricted movement.</div>
              <div className='xl:text-[24px] font-[700] font-heading xl:py-2 mt-10 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent sm:text-[20px] xs:text-[18px] '>Common triggers include : </div>

              <ul className='font-para font-[500] xl:text-[16px] list-disc pl-7 sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>
                <li className='py-1'>Repetitive wrist and thumb movements (texting, lifting, writing)</li>
                <li className='py-1'> New mothers often experience this due to frequent lifting of their babies</li>
                <li className='py-1'>Certain sports or occupations that involve gripping or twisting</li>
                <li className='py-1'>Hormonal changes (more common in women aged 30-50)</li>
              </ul>

              <div className='font-para xl:text-[16px] font-[500] py-2 xl:text-sm/8  sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>Without proper treatment, this can interfere with even the simplest of tasks-like brushing your hair, holding a pen or cooking.</div>
              <div className='xl:text-[24px] font-[700] font-para py-2 mt-10 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent sm:text-[20px] xs:text-[18px]'>Common Causes</div>
              <div className='xl:text-[16px] font-[500] font-para py-2 sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>This condition is often linked to repetitive strain, especially :</div>

              <ul className='xl:text-[16px] font-[500] font-para list-disc pl-7 sm:text-[16px] xs:text-[12px] md:text-[14px] text-[12px]'>
                <li className='py-1'>New mothers lifting their baby multiple times a day</li>
                <li className='py-1'> Desk job professionals using a mouse or typing frequently</li>
                <li className='py-1'> Fitness enthusiasts lifting weights or doing wrist-heavy workouts</li>
                <li className='py-1'> Artists or tailors who do precise wrist movements for hours</li>
              </ul>

              <div className='xl:text-[16px] font-[500] font-para xl:text-sm/8 sm:text-[15px] xs:text-[12px]  md:text-[14px] text-[12px]'>Even gardening, texting, or scrolling on your phone repeatedly can contribute.</div>
            </div>

            <div className=' md:w-[70%] lg:w-[100%] xl:m-10 pt-5 md:mx-auto '>
              <img src={assets.img1} alt="" />
            </div>
          </div>


          <div className='flex flex-col-reverse xl:flex lg:flex-row xl:gap-10 lg:gap-5 sm:mx-5 sm:my-10 xl:mx-15   '>
            <div className='md:w-[70%]   lg:w-[100%] md:mx-auto lg:mt-10'>
              <img src={assets.img2} alt="" />
            </div>

            <div className=''>
              <div className='xl:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent sm:text-[20px] xs:text-[18px] pt-5'>How is it Diagnosed ?</div>
              <div className='xl:text-[16px] font-[500] font-para xl:text-sm/8 py-5 text-justify sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>Diagnosis is typically done through a simple in-clinic physical exam. One commonly used method is the Finkelstein test - where the thumb is bent into the palm and the wrist is moved downward. If this movement causes pain, it’s a strong sign of De Quervain’s. No fancy tests or scans are usually needed unless another condition needs to be ruled out.</div>
              <div className='xl:text-[24px] font-[700] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent sm:text-[20px] xs:text-[18px]'>Treatment Options :</div>
              <div className='xl:text-[16px] font-[700] font-heading mt-5 sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>a) Non-Surgical Management</div>
              <div className='xl:text-[16px] font-[500] font-para py-5 sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>Most cases improve with conservative measures like:</div>

              <ul className='list-disc pl-7 xs:text-[12px] md:text-[14px] text-[12px] font-para'>
                <li className='py-1 xl:text-[16px] font-[500] sm:text-[15px]'><span className='xl:text-[16px] font-[700]'>Thumb and wrist splints </span>- to immobilize the area and allow healing</li>
                <li className='py-1 xl:text-[16px] font-[500] sm:text-[15px]'><span className='xl:text-[16px] font-[700]'>Anti-inflammatory medications</span> - to reduce swelling and ease discomfort</li>
                <li className='py-1 xl:text-[16px] font-[500] sm:text-[15px]'><span className='xl:text-[16px] font-[700]'>Activity modifications</span> - avoiding repetitive wrist movements</li>
                <li className='py-1 xl:text-[16px] font-[500] sm:text-[15px]'><span className='xl:text-[16px] font-[700]'>Ultrasound-guided steroid injections</span> - for targeted inflammation control</li>
                <li className='py-1 xl:text-[16px] font-[500] sm:text-[15px]'><span className='xl:text-[16px] font-[700]'>Hand therapy</span> - strengthening and stretching exercises under expert guidance</li>
              </ul>

              <div className='xl:text-[16px] font-[700] font-heading mt-5 sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>b) Surgical Care (if needed)</div>
              <div className='xl:text-[16px] font-[500] font-para xl:text-sm/8 py-5 text-justify sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>When pain persists despite all non-surgical options, a minor surgical procedure may be suggested. This involves releasing the tight sheath surrounding the tendons, allowing them to move freely without friction or inflammation. It's a day-care procedure with a quick recovery timeline.</div>
            </div>
          </div>
        </div>
      </div>

      <div className=' xl:flex justify-center items-center bg-[#FFF6E0] p-5 xl:py-10 xl:px-15 gap-10 lg:flex'>

        <div className='text-center' >
          <div className='xl:text-[30px] font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent font-heading sm:text-[20px] xs:text-[18px]'>Why Choose Sapiens Clinic in Malleshwaram?</div>
          <div className='xl:text-[16px] font-[500] font-para xl:text-sm/8 py-5 sm:text-[15px] xs:text-[12px] md:text-[14px] text-[12px]'>Sapiens Clinic offers a specialized and well-rounded approach to hand and wrist problems. The clinic is equipped with advanced diagnostic tools, expert therapists and a calm, patient-first atmosphere. From young mothers to working professionals, personalized care is at the heart of what they do.
            All De Quervain’s treatments are led by Dr. Darshan Kumar A. Jain, one of Bangalore’s trusted names in orthopedic and hand surgery, known for his precise diagnosis and minimally invasive techniques.
          </div>
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
              <button type="submit" className='xl:w-[40%] outline-none focus:border-none focus:outline-none focus:ring-0 text-white font-para font-[800] xl:text-[14px] sm:text-[10px] px-2 py-3 bg-[#EF7F1A] mt-4 rounded-sm flex items-center justify-center gap-2 cursor-pointer mxl:mt-10 xs:text-[12px] text-[12px]'>Submit Now <img src={assets.arrowleft} alt="" /> </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Faqs faqs={faqs}/>
      </div>
      
    </div>
  )
}

export default DeQuervain
