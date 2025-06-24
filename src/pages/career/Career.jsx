import React from 'react'
import { assets } from '../../assets/assets'
import Invitation from '../../components/invitation/Invitation'
import { Helmet } from 'react-helmet'

const Career = () => {
    return (
        <div className='relative'>

            <Helmet>
                <title>Fellowship & Careers | Sapiens Clinic Bangalore Jobs</title>
                <meta name='description' content='Apply for fellowships or careers at Sapiens Clinic Bangalore. Advance in hand surgery & oculoplasty training in India.' />
                <meta name='keywords' content='fellowship in hand surgery Bangalore, oculoplasty training India, medical careers Sapiens Clinic, orthopedic fellowship Bangalore, join Sapiens Clinic team, ophthalmology jobs Bangalore, surgical training South India, hand surgery observership India, careers in eye care Bangalore' />
            </Helmet>

            <div className='relative'>
                <img src={assets.careerPage} className='hidden md:block relative w-full h-auto' alt="" />
                <img src={assets.carrePageBgMobile} className='relative top-20  w-full h-auto md:hidden' alt="" />

                <div className='w-[60%] right-5 md:left-0 md:w-full absolute top-30 md:top-40 lg:top-50 flex flex-col mxl:top-80'>
                    <div className='text-[30px] md:text-[40px] lg:text-[76px] font-[700] font-heading text-center md:ml-66 text-white'>Work With Us</div>
                    <div className='text-heading text-[16px] md:text-[20px] lg:text-[26px] font-[600] text-center md:ml-66 text-white'>Fellowship, Training & Collaborative Learning</div>
                </div>
            </div>

            {/* container 2 */}
            <div className='px-5 lg:px-20 mt-30 lg:mt-20'>
                <div className='text-[12px] md:text-[16px] font-[600] font-para'>At Sapiens Clinic, we are driven by a strong commitment to clinical excellence, academic growth, and ongoing innovation in the fields of Hand & Upper Limb Surgery and Ophthalmology. We believe that nurturing the next generation of specialists is essential to advancing patient care and pushing the boundaries of our disciplines.</div>
                <div className='text-[12px] md:text-[16px] font-[600] font-para mt-5'>Our Hand Surgery & Upper Limb Fellowship Program offers structured, hands-on training designed to equip surgeons with comprehensive skills across the full spectrum of hand and upper limb surgery. From clinical evaluation and diagnosis to surgical planning, technique, and rehabilitation, the program ensures a deep understanding of anatomy, biomechanics, and microsurgical principles critical to restoring form and function.</div>
            </div>

            {/* container 3 */}
            <div className='px-5 lg:px-20 mt-10'>
                <div className='text-[24px] lg:text-[34px] font-heading font-[700]'>Fellowship Program Duration:</div>
                <div className='text-[12px] md:text-[16px] font-[600] font-para mt-5'>Each year, the fellowship runs from 1st August to 31st July, providing a 12-month immersive training experience under expert supervision.</div>
                <div className='text-[12px] md:text-[16px] font-[600] font-para mt-5'>We value lifelong learners and collaborative thinkers. Our mission is to mentor future leaders who will not only strengthen healthcare delivery in their communities but also actively contribute to research, education, and the advancement of their field.</div>
                <div className='text-[12px] md:text-[16px] font-[600] font-para mt-5'>We take pride in cultivating a learning environment where each generation is empowered to exceed the last - because true success lies in mentoring individuals who go on to achieve more, think deeper and create greater impact for patients and the profession alike.</div>
            </div>

            {/* invitation */}
            <Invitation bg="#FFF6E0" />

        </div>
    )
}

export default Career
