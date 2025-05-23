import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { FaPlus } from "react-icons/fa6";

const Faqs = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='realtive bg-green flex items-center flex-col gap-0 py-10'>
            <div className='flex items-center gap-3 justify-center'>
                <img src={assets.faqs} className='w-[50px] h-[50px]' alt="" />
                <span className='bg-orange-gradient font-heading text-[20px] lg:text-[30px] font-[700]'>Frequently Asked Questions</span>
            </div>

            <div className="mt-10 w-[90%] lg:w-[60%]">
                {props.faqs.map((faq, index) => (
                    <div key={index} className="border-b-2 border-[#C8C8C8] pb-4 mb-4">
                        <div className="flex items-start justify-start gap-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
                            <div className='transition-transform duration-300'>
                                <FaPlus className={`w-5 h-5 text-orange transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}/>
                            </div>
                            <div className='flex-1'>
                                <div className="text-[14px] lg:text-[16px] font-heading font-[700] text-black">
                                    {faq.ques}
                                </div>
                                <div className={`text-[12px] lg:text-[14px] font-heading font-[400] mt-2 text-gray-600 transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {faq.ans}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs;
