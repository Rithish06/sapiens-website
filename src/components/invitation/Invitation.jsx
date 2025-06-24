import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Invitation = (props) => {
    return (
        <div className='border-t-[3px] border-b-[3px] border-zinc-600 mt-20' style={{ background: props.bg }}>

            < div className='realtive overflow-hidden py-8' >
                <div className='w-full flex flex-col justify-between h-[1100px] md:h-[900px]'>
                    {/* <div className='realtive rounded-full w-[300px] h-[300px] bg-[#DFF7EA] -mt-10 -ml-20'></div>
                    <div className='relative rounded-full w-[300px] h-[300px] bg-[#D3C0FF] ml-[90%]'></div>
                    <div className='relative rounded-full w-[200px] h-[200px] bg-[#FEF0C3] -mb-30 -ml-20'></div> */}
                </div>
                <div className='relative h-[1100px] -mt-[1100px] flex flex-col items-center justify-center md:h-[900px] md:-mt-[900px]'>

                    <img src={assets.colorLogo} alt="" className='w-[160px] md:w-[224px] mt-3 mx-auto' />
                    <div className='font-[700] text-[18px] font-para lg:text-[22px]'>Inviting Applications </div>
                    <div className='font-[700] text-[18px] font-para mt-3 lg:text-[22px]'>for</div>
                    <div className='font-[700] text-[18px] font-para text-center mt-3 lg:text-[22px]'>Fellowship in Hand Surgery & Upper limb Surgery <br />(2025-2026)</div>

                    <table className='mt-5 text-[12px] font-[700] lg:text-[25px] font-para border-none outline-none' style={{ border: 'none', borderCollapse: 'collapse', cellPadding: "10px" }}>
                        <tbody>
                            <tr className='mt-3 border-none'>
                                <td className=''>Course Co-Ordinator</td>
                                <td className='px-2 border-none'>:</td>
                                <td className='text-[#001581] cursor-pointer border-none pl-1'>
                                    <Link to="/dr-darshan-kumar-a-jain">Dr Darshan Kumar A. Jain</Link>
                                </td>
                            </tr>
                            <tr className='mt-3 border-none'>
                                <td className='border-none'>Location</td>
                                <td className='px-2 border-none'>:</td>
                                <td className='border-none pl-1'>Bangalore</td>
                            </tr>
                            <tr className='mt-3 border-none'>
                                <td className='border-none'>Eligibility</td>
                                <td className='px-2 border-none'>:</td>
                                <td className='border-none pl-1'>MS/DNB Orthopaedic</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='mt-5 text-[12px] font-[700] text-center font-para lg:text-[25px]'>With an inclination to deliver best patient care and publishing articles.</div>

                    <div className='flex flex-col gap-3 justify-center mt-7 md:flex-row'>

                        <div className='px-5 md:w-[50%]'>
                            <div className='text-[20px] font-[700] text-left font-para lg:text-[30px]'>Objectives of training:</div>
                            <ul className='list-disc mt-5 text-[12px] lg:text-[16px] font-[700] font-para'>
                                <li className='mt-1'>To perform a good clinical assessment of various problems of upper limb</li>
                                <li className='mt-1'>Comprehensive training in</li>
                                <li className='ml-4 mt-1'>
                                    <li className='mt-1'>Upper limb surgery </li>
                                    <li className='mt-1'>Microsurgery/Microvascular surgery </li>
                                    <li className='mt-1'>Brachial plexus/Peripheral nerve surgery </li>
                                    <li className='mt-1'>Neglected trauma</li>
                                    <li className='mt-1'>Wrist injuries</li>
                                    <li className='mt-1'>Elbow injuries</li>
                                    <li className='mt-1'>Wrist arthroscopy</li>
                                    <li className='mt-1'>Elbow arthroscopy and arthroplasty</li>
                                </li>
                                <li className='mt-1'>Expected to be involved in patient care, maintain log book & publish articles</li>
                            </ul>
                        </div>

                        <div className='w-[80%] border-black border-[1px] md:w-0 md:h-100 md:mt-5 mx-auto'></div>

                        <div className='px-5 md:w-[50%] flex flex-col justify-end'>
                            {/* <div className='text-[20px] font-[700] text-center  lg:text-[30px]'>Duration: 1 year</div> */}
                            <div className='text-[12px] font-para mt-6 font-[600] lg:text-[16px]'><span className='font-[700]'>Last date for application:</span> 15th June 2025</div>
                            <div className='text-[12px] font-para mt-2 font-[600] lg:text-[16px]'><span className='font-[700]'>Interview:</span> June last week 2025</div>
                            <div className='text-[12px] font-para mt-2 font-[600] lg:text-[16px]'><span className='font-[700]'>Course starts on:</span> 1st August 2025</div>
                            <div className='text-[12px] font-para mt-2 font-[600] lg:text-[16px]'>Send in your applications with CV to jaindarshan81@gmail.com<br /> with subject as: <span className='font-[700]'>"Hand surgery fellowship application 2025-2026"</span></div>
                            <div className='text-[12px] font-para mt-3 font-[600] lg:text-[16px]'>Contact Secretary: 7892556378</div>
                        </div>
                    </div>
                </div>
            </div >

            <div className='flex justify-center my-5'>
                <Link to="/contact-clinic-bangalore" className="w-64 h-12 px-5 py-3.5 bg-orange-500 rounded-lg inline-flex justify-center items-center cursor-pointer gap-2.5">
                    <div className="justify-start text-white text-sm font-extrabold font-['Montserrat']">Apply Now</div>
                </Link>
            </div>
        </div>
    )
}

export default Invitation
