import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import ContactPage from '../ContactPage/ContactPage'
import { Helmet } from 'react-helmet'

const EyelidSynkinesis = () => {

    const faqs = [
        {
            ques: "Is eyelid synkinesis permanent?",
            ans: "While the nerve miswiring is permanent, its effects can be managed and significantly improved with therapy and Botox."
        },
        {
            ques: "When should I seek treatment?",
            ans: "If you’ve recovered from Bell’s palsy or facial nerve injury and are noticing abnormal eye movements, consult a specialist promptly."
        },
        {
            ques: "How soon can I expect improvement with Botox?",
            ans: "Most patients see relief within 3–7 days after injection, with effects lasting 3–4 months."
        },
        {
            ques: "Is surgery always necessary?",
            ans: "Not at all. Surgery is considered only if conservative measures don’t bring sufficient relief."
        },
        {
            ques: "Can this condition affect both eyes?",
            ans: "It typically affects one side, but severity can vary. Early assessment helps manage symptoms more effectively."
        },
    ]

    return (
        <div>

            <Helmet>
                <title>Dr. Divya D Sundaresh - Eyelid Synkinesis Specialist Bangalore</title>
                <meta name="description" content='Dr. Divya D Sundaresh offers expert treatment for eyelid synkinesis in Bangalore, Karnataka. Restore natural, independent movement.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Eyelid Synkinesis Treatment' />
            </div>

            <div className='lg:mx-20 md:mt-10 mx-5 xs:mt-29 mt-10'>
                {/* container 1 */}
                <div>
                    <div>
                        {/* <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent text-center'>Eyelid Synkinesis Treatment in Malleswaram</div> */}
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5 text-center'>Personalized care to help restore comfort, control and confidence.</div>
                        <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-2'>What Is Eyelid Synkinesis?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para mt-2 leading-7 '>Eyelid synkinesis is a facial nerve disorder in which the eyelid moves involuntarily - often blinking or closing - when another part of the face is activated, such as during smiling or chewing. This occurs due to misdirected nerve regrowth following a facial nerve injury, leading to unintentional and often uncomfortable muscle movements. Though not life-threatening, it can be both functionally and emotionally distressing.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className='flex lg:flex-row flex-col lg:gap-10 gap-5 mt-10 items-center'>
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Causes of Eyelid Synkinesis</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>Eyelid synkinesis most commonly develops as a consequence of :</div>
                            <ul className='list-disc leading-7 ml-7 mt-2'>
                                <li>Bell’s palsy recovery</li>
                                <li>Facial nerve trauma or surgery</li>
                                <li>Ramsay Hunt syndrome</li>
                                <li>Tumors or infections affecting the facial nerve</li>
                            </ul>

                            <div className='mt-2 leading-5'>The condition arises when facial nerve fibers heal incorrectly, causing one muscle group to activate inappropriately during unrelated movements.</div>
                        </div>
                    </div>
                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 3 */}

                <div className="flex lg:flex-row flex-col-reverse lg:gap-10 gap-5 mt-10 items-center">
                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}
                    {/* content */}

                    <div className="">
                        <div>
                            <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Common Symptoms</div>
                            <div className="text-[12px] md:text-[16px] font-[500] font-para">
                                <div className="mt-2">Patients with eyelid synkinesis may experience :</div>
                                <ul className="list-disc leading-7 ml-5 mt-2">
                                    <li>Involuntary eye closure when smiling or eating</li>
                                    <li>Excessive tearing (especially during chewing)</li>
                                    <li>Tightness or spasms around the eye or cheek</li>
                                    <li>Difficulty with facial symmetry or expressions</li>
                                    <li>Visual discomfort or partial obstruction</li>
                                </ul>
                            </div>
                        </div>

                        <div className="">
                            <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5">Diagnosis at Sapiens Clinic</div>
                            <div className="text-[12px] md:text-[16px] font-[500] font-para">
                                <div className="mt-2 leading-5">At Sapiens Clinic in Malleswaram, our specialists perform a detailed facial nerve assessment that includes:</div>
                                <ul className="list-disc leading-7 ml-5 mt-2">
                                    <li>Clinical evaluation of your facial movement and expressions</li>
                                    <li>Electromyography (EMG) to assess abnormal muscle signals</li>
                                    <li>Imaging tests if needed to rule out underlying structural issues</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* container 4 */}

                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 mt-10 items-center">
                    {/* content */}
                    <div className="">
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Treatment Options We OfferTreatment Options We Offer</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-5">
                            <div className="mt-2">We combine medical, rehabilitative, and surgical strategies to manage eyelid synkinesis effectively:</div>
                            <ol className="list-decimal leading-7 ml-5 mt-2">
                                <li className='mt-2'><b>Botulinum Toxin Injections (Botox)</b>
                                    <div className='mt-2'>Precise injections weaken overactive muscles, reducing spasms and improving facial symmetry. Results are noticeable within days and last several months.</div>
                                </li>
                                <li className='mt-2'><b>Facial Physiotherapy</b>
                                    <div className='mt-2'>Specialized facial retraining exercises help you regain voluntary control and suppress unwanted movements.Surgical Correction (If Required)
                                    </div>
                                </li>
                                <li className='mt-2'><b>Surgical Correction (If Required)</b>
                                    <div className='mt-2'>In severe or unresponsive cases, selective neurectomy or muscle-release surgeries may be offered to reduce persistent contractions.</div>
                                </li>
                            </ol>
                        </div>

                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5">Why Choose Sapiens Clinic, Malleswaram?</div>
                        <ul className="text-[12px] md:text-[16px] font-[500] font-para list-disc leading-7 ml-5 mt-2">
                            <li>Oculoplastic and facial nerve specialists with deep expertise</li>
                            <li>Customized, evidence-based treatment protocols</li>
                            <li>Supportive follow-up care focused on lasting results</li>
                            <li>Compassionate environment designed for healing and recovery</li>
                        </ul>
                    </div>

                    {/* img */}

                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[85%]" />
                    </div> */}
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage />
            </div>

            {/* faqs */}
            <div>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default EyelidSynkinesis