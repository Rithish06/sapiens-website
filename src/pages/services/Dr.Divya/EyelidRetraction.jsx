import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import { FaQ } from 'react-icons/fa6'
import ContactPage from '../ContactPage/ContactPage'

const EyelidRetraction = () => {

    const faqs =[
        {
            ques:"Is eyelid retraction always caused by thyroid disease?",
            ans:"No, while thyroid eye disease is a common cause, eyelid retraction can also result from trauma, surgery, scarring, nerve conditions, or muscle disorders."
        },
        {
            ques:"Can it be corrected without surgery?",
            ans:"Mild cases may improve with conservative treatment, but moderate to severe retraction typically requires surgical intervention for lasting results."
        },
        {
            ques:"Is the surgery painful?",
            ans:"Most procedures are done under local anesthesia, and discomfort is minimal. Post-surgical pain is usually manageable with over-the-counter medication."
        },
        {
            ques:"Will insurance cover the surgery?",
            ans:"If the condition affects vision or causes corneal damage, it is often considered medically necessary. Documentation will be provided to support your claim."
        },
        {
            ques:"How long does recovery take?",
            ans:"Most patients return to daily activities within 1–2 weeks. Complete healing and final results may take a few more weeks depending on the procedure."
        },
    ]



    return (
        <div>
            <div>
                <Divyaservicebanner servicename = 'Eyelid Retraction Treatment'/>
            </div>

            <div className='lg:mx-20 xs:mt-29 md:mt-10 mx-5 mt-10'>
                {/* container 1 */}
                <div className='flex flex-col items-center'>
                    <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Eyelid Retraction Treatment in Malleshwaram</div>
                    <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2'><b>Eyelid retraction</b> occurs when the upper eyelid is pulled higher or the lower eyelid drops lower than its natural position, exposing more of the eye’s surface. This condition not only affects appearance but also causes discomfort, dryness, and in more severe cases, damage to the cornea. At Sapiens Clinic, Malleshwaram, we offer effective treatment options to restore eyelid function and protect eye health.</div>
                </div>

                {/* container 2 */}

                <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10'>

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Causes Eyelid Retraction?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>Eyelid retraction can result from multiple underlying conditions :</div>
                            <ul className='list-disc leading-7 ml-5 mt-5'>
                                <li><b>Thyroid eye disease (Graves’ orbitopathy)</b> – the most common cause.</li>
                                <li><b>Previous eye surgeries</b> or trauma.</li>
                                <li><b>Neurological conditions</b>, such as abnormal nerve regeneration.</li>
                                <li><b>Myasthenia Gravis</b> or other muscle-weakening conditions.</li>
                                <li><b>Scarring</b> from injury, infection, or inflammation.</li>
                                <li><b>Congenital factors</b>, in rare cases.</li>
                            </ul>

                            <div className='mt-2'>The condition can involve either the upper or lower eyelid and may lead to significant ocular surface exposure and discomfort.</div>
                        </div>

                        <div className='flex flex-col lg:flex-row   gap-10 mt-10'>
                            <div>
                                <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Common Symptoms</div>
                                <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                                    <div className='mt-2'>If you're experiencing any of the following, eyelid retraction could be the cause :</div>
                                    <ul className='list-disc leading-7 ml-5 mt-2'>
                                        <li>Dryness or excessive tearing</li>
                                        <li>Eye redness and irritation</li>
                                        <li>Sensitivity to light or wind</li>
                                        <li>Foreign body sensation in the eye</li>
                                        <li>Visible sclera (white of the eye) above or below the iris</li>
                                        <li>Recurrent eye infections or ulcers</li>
                                    </ul>
                                </div>
                            </div>
 
                            <div>
                                <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>How Eyelid Retraction is Diagnosed</div>
                                <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                                    <div className='mt-2'>Diagnosis begins with a detailed examination of your eyelid position and ocular surface. Your specialist may perform :</div>
                                    <ul className='list-disc leading-7 ml-5 mt-5'>
                                        <li>A <b>snap-back test</b> and <b>distraction test </b> to assess eyelid laxity</li>
                                        <li><b>Slit-lamp examination</b> to check corneal health</li>
                                        <li>A review of any history of thyroid issues, prior eye surgeries, or injuries</li>
                                    </ul>

                                    <div>Determining the cause helps shape the right treatment approach for you.</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* img */}

                    {/* <div className='flex flex-col gap-5 lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 3 */}

                <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>
                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}

                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Treatment Options at Sapiens Clinic</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>Initial management may include :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li><b>Lubricating eye drops or ointments</b> to reduce irritation</li>
                                <li><b>Moisture goggles or protective eyewear</b></li>
                                <li><b>Botox injections</b> in selected cases to reduce muscle overactivity</li>
                            </ul>

                            <div className='mt-2'>However, <b>surgical correction</b> is the definitive and most effective option for moderate to severe eyelid retraction.</div>

                            <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Surgical Approaches</div>
                            <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                                <ol className='list-decimal leading-7 ml-5 mt-2'>
                                    <li><b>Upper Eyelid Retraction Surgery</b>
                                        <div>The retracted levator muscle is relaxed or repositioned to allow the lid to return to its natural position.</div>
                                    </li>
                                    <li><b>Lower Eyelid Retraction Surgery</b>
                                        <div>Often requires the use of a spacer graft, using tissue from the mouth or ear, to support the lower lid and restore balance.</div>
                                    </li>
                                </ol>

                                <div className='mt-2'>These procedures are typically performed under local anesthesia with light sedation. Most patients can go home the same day.</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* container 4 */}

                <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10'>
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Post-Surgical Recovery</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>Following surgery, you may be advised to :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li>Use cold compresses to reduce swelling</li>
                                <li>Avoid rubbing or straining the eyes</li>
                                <li>Wear a protective shield or patch for a day</li>
                                <li>Return for stitch removal around 5–7 days after the procedure</li>
                            </ul>

                            <div className='mt-2'>Prescribed medications may include antibiotics, anti-inflammatory drops, and pain relievers. Full healing typically takes a few weeks.</div>
                        </div>

                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Why Timely Treatment Matters</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>Untreated eyelid retraction can lead to :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li>Corneal ulcers</li>
                                <li>Chronic dryness</li>
                                <li>Light sensitivity</li>
                                <li>Permanent vision changes</li>
                            </ul>

                            <div className='mt-2'>Seeking expert care early can prevent long-term complications and restore both comfort and appearance.</div>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                          
                    </div> */}
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage/>
            </div>

            <div>
                <Faqs faqs={faqs}/>
            </div>
        </div>
    )
}

export default EyelidRetraction