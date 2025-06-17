import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const Pseudotumor = () => {

    const faqs =[
        {
            ques:"Is pseudotumor a real tumor?",
            ans:"No, it mimics a brain tumor but doesn't involve an actual mass or malignancy."
        },
        {
            ques:"Can pseudotumor lead to permanent vision loss?",
            ans:"Can pseudotumor lead to permanent vision loss?"
        },
        {
            ques:"Is surgery always necessary?",
            ans:"Not always. Many patients respond well to medication and lifestyle changes."
        },
        {
            ques:"Can pseudotumor come back after treatment?",
            ans:"Yes, especially if underlying risk factors like weight gain are not addressed."
        },
        {
            ques:"How often should I follow up after treatment?",
            ans:"Initially every 1-2 months, then periodically based on your doctor’s guidance."
        },
    ]

    const contact = [
        {
            heading:"",
            para:""
        }
    ]
    return (
        <div>
            <div>
                <Divyaservicebanner />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Pseudotumor Treatment in Malleshwaram</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Advanced Diagnosis & Care at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Do you experience persistent headaches, vision changes, dizziness, or pressure behind the eyes-yet imaging tests reveal no actual tumor? You could be facing a condition called <b>Pseudotumor Cerebri</b>, also known as <b>Idiopathic Intracranial Hypertension (IIH)</b>. Though it mimics the symptoms of a brain tumor, no true mass exists. At Sapiens Clinic, Malleshwaram, our experienced ophthalmologists and specialists offer thorough diagnostic evaluations and advanced treatment options to preserve your vision and manage symptoms effectively.</div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is a Pseudotumor?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">A pseudotumor is a neurological condition where <b>pressure builds up inside the skull</b> due to an excess of cerebrospinal fluid (CSF). This pressure can compress the <b>optic nerves</b>, potentially leading to <b>vision loss</b> if left untreated. Although it mimics a brain tumor, it is not cancerous. Early detection is essential to prevent permanent damage.</div>
                    </div>
                </div>

                {/* container 3 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Causes and Risk Factors</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">The exact cause is often unclear, but several contributing factors include :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Overproduction or reduced absorption of cerebrospinal fluid</li>
                                <li>Obesity or recent significant weight gain</li>
                                <li>Hormonal imbalances</li>
                                <li>Certain medications (like tetracyclines or vitamin A derivatives)</li>
                            </ul>

                            <div className="mt-2">Women of childbearing age, especially those with higher body weight, are most commonly affected.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 4 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}


                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Common Symptoms</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7 ">
                            <li>Persistent headaches (worsening when lying down or bending over)</li>
                            <li>Blurred or double vision</li>
                            <li>Temporary episodes of vision blackouts</li>
                            <li>Pain behind the eyes or during eye movement</li>
                            <li>Nausea or vomiting</li>
                            <li>Pulsing sound in the ears</li>
                            <li>Neck stiffness or dizziness</li>
                        </ul>
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Is It Diagnosed?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">At Sapiens Clinic, we perform comprehensive eye and neurological evaluations to rule out other causes and confirm a diagnosis :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Ophthalmoscopy </b>to assess optic nerve swelling</li>
                                <li><b>MRI or CT scan</b> to rule out masses or structural issues</li>
                                <li><b>Lumbar puncture</b> to measure CSF pressure and assess fluid composition</li>
                                <li><b>Visual field tests</b> to evaluate the extent of visual changes</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 6 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Pseudotumor Treatment Options</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Our specialists develop an individualized treatment plan based on the severity of your condition. The goal is to <b>reduce intracranial pressure, protect your vision</b>, and <b>relieve symptoms</b>.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Non-Surgical Treatment :</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li><b>Weight management</b>: Structured plans with support from our dieticians</li>
                            <li><b>Medication</b>:
                                <ul className="list-disc ml-5 mt-2">
                                    <li>Acetazolamide: Reduces CSF production</li>
                                    <li>Diuretics like furosemide to reduce fluid buildup</li>
                                    <li>Corticosteroids in select cases to relieve swelling</li>
                                    <li>Migraine medications to manage headaches</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Surgical Intervention (if conservative methods fail) :</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7 ">
                            <li><b>Shunt surgery</b>: A small tube is placed to drain excess fluid from the brain</li>
                            <li><b>Optic nerve sheath fenestration</b>: A precise incision in the optic nerve sheath to relieve pressure and protect vision</li>
                        </ul>
                    </div>
                </div>

                {/* container 7 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* contact */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery and Aftercare</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Most patients see symptom relief with medication and lifestyle adjustments. Those undergoing surgery generally recover well within a few weeks. Regular monitoring is essential, as pseudotumors can <b>recur</b> in some cases.</div>
                            <div className="mt-2">We provide :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Ongoing follow-up for visual function</li>
                                <li>Repeat imaging if necessary</li>
                                <li>Coordination with neurologists or endocrinologists if related issues arise</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 8 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic, Malleshwaram?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">At Sapiens Clinic, you receive compassionate, expert care with access to the latest diagnostic tools and treatment protocols. Our oculoplastic and neuro-ophthalmology specialists understand the complexities of pseudotumor and work closely with patients to prevent long-term complications.</div>
                    </div>
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage contacts={contact[0]}/>
            </div>

            {/* faqs */}
            <div>
                <Faqs faqs={faqs}/>
            </div>
        </div>
    )
}

export default Pseudotumor