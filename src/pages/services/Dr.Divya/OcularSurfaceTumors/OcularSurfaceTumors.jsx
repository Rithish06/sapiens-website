import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const OcularSurfaceTumors = () => {

    const faqs = [
        {
            ques: "Are all orbital tumors cancerous?",
            ans: "No. Many orbital tumors are benign, but any abnormal growth must be evaluated to rule out malignancy."
        },
        {
            ques: "Will the surgery affect my vision?",
            ans: "Our surgical techniques aim to preserve vision. In most cases, patients see improvement in eye comfort and function post-surgery."
        },
        {
            ques: "Is hospitalization required?",
            ans: "Most orbitotomy procedures are day surgeries, though some cases may require an overnight stay."
        },
        {
            ques: "Will I have scars after surgery?",
            ans: "Incisions are placed in discrete areas. Scarring is minimal and typically fades over time."
        },
        {
            ques: "How often should I follow up after surgery?",
            ans: "Follow-ups are usually scheduled at 1 week, 1 month and then periodically based on recovery and pathology results."
        },
    ]

    return (
        <div>

            <Helmet>
                <title>Ocular surface tumor treatment Bangalore | Dr. Divya D Sundaresh</title>
                <meta name="description" content='Dr. Divya D Sundaresh offers ocular surface tumor treatment in Bangalore, Karnataka with advanced diagnostics and precise care.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Ocular Surface Tumors Treatment' />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col ">
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Ocular Surface Tumors Treatment in Malleshwaram</div> */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient mt-2 text-center">Advanced Diagnosis and Surgical Care at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul>
                            <li>Do your eyes feel persistently irritated or look unusually enlarged?</li>
                            <li> Have you noticed any visible mass, redness, or abnormal growth on the surface of your eye?</li>
                            <li>Do you experience blurred vision or difficulty moving your eyes in different directions?</li>
                        </ul>
                        <div className="">These could be signs of an ocular surface or orbital tumor-a condition that requires prompt evaluation and expert care.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* contnet */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Are Ocular Surface Tumors?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Ocular surface tumors are abnormal growths that can appear on the front of the eye or within the orbit-the bony cavity that houses the eyeball. These tumors can be benign (non-cancerous) or malignant (cancerous) and may affect structures such as the conjunctiva, sclera, or surrounding tissues. Left untreated, they can displace the eye (a condition called proptosis), restrict eye movement, impair vision, and in rare cases, lead to significant ocular damage.</div>
                    </div>

                    {/* img */}
                </div>

                {/* container 3 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Signs and Symptoms</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li>A visible mass or lesion on the eye surface</li>
                                <li>Bulging of one or both eyes</li>
                                <li>Watering, discomfort, or pain</li>
                                <li>Restricted eye movement</li>
                                <li>Sudden vision changes or blurred vision</li>
                                <li>Eyelid changes or persistent redness</li>
                            </ul>

                            <div className="mt-2">If you're experiencing any of these symptoms, consult our oculoplastic team at Sapiens Clinic, Malleshwaram.</div>
                        </div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Are Ocular Tumors Diagnosed?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Diagnosis begins with a detailed eye examination. At Sapiens Clinic, our specialists may recommend :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Slit-lamp exam to inspect the lesion on the eye surface</li>
                                <li>Ultrasound or Orbit MRI to assess the extent of the mass</li>
                                <li>CT Scan to detect deeper orbital involvement</li>
                                <li>Biopsy in cases where malignancy is suspected</li>
                            </ul>

                            <div className="mt-2">Our team ensures a thorough and accurate diagnosis before deciding on the best course of action.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 5 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}


                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Surgical Treatment: Orbitotomy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Ocular surface tumors, especially those affecting deeper orbital structures, are typically removed via a surgical procedure called <b>orbitotomy</b>. The approach depends on the location of the tumor :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Anterior Orbitotomy</b>: For lesions in the front of the orbit, done through the eyelid or conjunctiva.</li>
                                <li><b>Lateral Orbitotomy</b>: Ideal for deeper or lacrimal gland tumors, performed via an incision near the outer brow or eyelid.</li>
                                <li><b>Posterior Orbitotomy</b>: For tumors located deep behind the eye, requiring precision and experience.</li>
                            </ul>

                            <div className="mt-2">Our oculoplastic surgeon at Sapiens Clinic is trained in minimally invasive approaches to ensure functional and aesthetic outcomes.   </div>
                        </div>
                    </div>
                </div>

                {/* container 6 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery and Aftercare</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Recovery time varies depending on the size and location of the tumor. Most patients :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Return to daily activities within 1–2 weeks</li>
                                <li>Experience mild swelling or bruising for a few days</li>
                                <li>Need to avoid heavy lifting and travel for a few weeks</li>
                                <li>Will be prescribed antibiotics, anti-inflammatory eye drops, and artificial tears</li>
                            </ul>

                            <div className="mt-2">Regular follow-up is essential to monitor healing and detect any recurrence early.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 7 */}

                <div className="flex flex-col lg:flex-row items-center gap-10  mt-10">
                    {/* img */}

                    {/* contnet */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Orbital Tumor Surgery?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Experienced oculoplastic surgeon trained in advanced orbital surgery</li>
                                <li>Personalized care and state-of-the-art diagnostic tools</li>
                                <li>Minimally invasive techniques with optimal cosmetic results</li>
                                <li>Located conveniently in Malleshwaram for accessible ongoing care</li>
                            </ul>

                            <div className="mt-2">For expert care in managing <b>ocular surface tumors</b>, schedule your consultation at <b>Sapiens Clinic, Malleshwaram</b> today. Early detection leads to better outcomes-and our team is here to support you every step of the way.</div>
                        </div>
                    </div>
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

export default OcularSurfaceTumors