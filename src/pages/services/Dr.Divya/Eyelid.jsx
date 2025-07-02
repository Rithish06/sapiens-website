import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../ContactPage/ContactPage'
import Faqs from '../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const Eyelid = () => {



    const faqs = [
        {
            ques: "How serious are eyelid diseases?",
            ans: "Some eyelid conditions are cosmetic, while others can threaten vision or indicate systemic health issues. An early diagnosis ensures better outcomes."
        },
        {
            ques: "What is entropion?",
            ans: "Entropion is when the eyelid turns inward, causing the eyelashes to rub against the eye, leading to irritation and discomfort."
        },
        {
            ques: "Are eyelid surgeries safe?",
            ans: "Yes. When performed by experienced oculoplastic surgeons, eyelid surgeries are generally safe and offer long-lasting results."
        },
        {
            ques: "Are there non-surgical treatments available?",
            ans: "Mild cases may be managed with lubricating drops or ointments, but structural issues often require surgical correction."
        },
        {
            ques: "Will surgery affect how my eyes look?",
            ans: "Yes - in a positive way. Most procedures restore a natural and refreshed appearance, often reversing signs of aging."
        },
    ]

    return (
        <div>
            <Helmet>
                <title>Eyelid Surgery in Bangalore by Dr. Divya D Sundaresh</title>
                <meta name="description" content='Dr. Divya D Sundaresh offers expert eyelid surgery in Bangalore, Karnataka for cosmetic and functional correction.' />
            </Helmet>

            <div>
                <Divyaservicebanner servicename='Eyelid Disease Care' />
            </div>


            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-20">
                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Eyelid Disease Care at Sapiens Clinic, Bangalore</div>
                    <div className="text-[12px] md:text-[16px]  font-[500] font-para leading-7 mt-2">Do your eyes often feel tired, or do your eyelids appear droopy or puffy? Do you find yourself struggling with blurry vision or eye irritation? You might be experiencing an eyelid condition that requires professional attention. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis and treatment of various eyelid diseases to restore comfort, function and aesthetics to your eyes.</div>
                </div>

                {/* container 2 */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Are Eyelid Diseases?</div>
                        <div className="text-[12px] md:text-[16px]  font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Eyelid diseases refer to a wide range of conditions that can affect the upper or lower eyelids. These may be present from birth or develop later due to trauma, aging, allergies, infections, or systemic conditions like thyroid disorders or tumors. While some are primarily cosmetic, many can cause eye irritation, discomfort, impaired vision and in some cases, pose serious health risks.</div>
                            <div className="mt-2">Common symptoms include :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Drooping or sagging eyelids (ptosis)</li>
                                <li>Inward (entropion) or outward (ectropion) turning eyelids</li>
                                <li>Swollen, puffy, or red eyelids</li>
                                <li>Watering, burning, or itching</li>
                                <li>Tired or aged appearance</li>
                            </ul>

                            <div className="mt-2">Left untreated, these issues can worsen over time, impact your self-confidence, and affect your quality of life.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 3 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Surgical Treatment for Eyelid Conditions</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">At Sapiens Clinic, our oculoplastic experts offer advanced surgical options to correct eyelid diseases and enhance both function and appearance.</div>
                            <ul className="ml-t mt-2">
                                <li><b>1. Ptosis Surgery (Upper/Lower Eyelid Repair)</b> : Used to treat droopy eyelids caused by weak or stretched muscles, restoring a more alert and symmetrical look.</li>
                                <li><b>2. Blepharoplasty (Eyelid Lift Surgery)</b> : Removes excess fat, skin, or tissue around the eyes to reduce puffiness, improve vision, and rejuvenate facial appearance.</li>
                                <li><b>3. Entropion & Ectropion Correction</b> : These procedures reposition eyelids that turn inward or outward, relieving irritation, dryness, and watering.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery After Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Most patients recover within two weeks. Swelling and bruising usually subside during this period, and normal activities can be resumed gradually. Cold compresses and prescribed eye drops aid in healing. Our specialists will guide you through personalized post-operative care for the best outcome.</div>
                    </div>

                    {/* img */}
                </div>
            </div>

            {/* contact */}
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

export default Eyelid