import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';

const GlomusTumors = () => {

    const faqs = [
        {
            ques: "Are glomus tumors cancerous?",
            ans: "No, glomus tumors are benign and not cancerous."
        },
        {
            ques: "Can glomus tumors recur after removal?",
            ans: "Recurrence is rare if the tumor is completely excised."
        },
        {
            ques: "Is surgery the only treatment option?",
            ans: "Surgical removal is the most effective treatment, especially for symptomatic tumors."
        },
        {
            ques: "Will the surgery affect nail appearance?",
            ans: "With meticulous surgical technique, nail deformity is uncommon."
        },
        {
            ques: "How soon will pain subside after surgery?",
            ans: "Most patients experience immediate relief following complete tumor excision."
        }
    ];



    return (
        <div>

            <Servicesbanner serviceName="Glomus tumors" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Glomus Tumors
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Glomus tumors are rare, benign vascular neoplasms arising from the glomus body, a thermoregulatory shunt concentrated in the fingers and toes. These tumors most commonly occur under the fingernails (subungual region) and are characterized by severe pain, tenderness, and sensitivity to cold. At Sapiens Clinic in Malleshwaram, we offer comprehensive evaluation and personalized treatment plans for individuals presenting with glomus tumors, ensuring optimal functional and aesthetic outcomes.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Understanding Glomus Tumors
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Glomus tumors are typically small, solitary lesions that can cause significant discomfort. They may present with a bluish discoloration under the nail and can lead to nail deformity if left untreated. While benign, their location and symptoms often necessitate medical intervention.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Causes and Risk Factors
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Age and Gender:</b> More common in adults aged 20-50, with a slight female predominance.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Trauma:</b> Previous injury to the affected area may contribute.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Genetic Factors:</b> Rare familial cases have been reported.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Symptoms
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Severe, localized pain:</b> Often described as burning or throbbing.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tenderness:</b> Especially when pressure is applied.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Cold sensitivity:</b> Exacerbation of pain in cold environments.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Visible discoloration:</b> Bluish or reddish hue under the nail.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Nail deformity:</b> In advanced cases.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Diagnosis
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Clinical Examination:</b> Assessing symptoms and physical signs.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Studies:</b> MRI is the most sensitive modality, revealing small lesions not visible on X-rays.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Histopathological Analysis:</b> Confirmation through biopsy post-excision.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Treatment Options
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            The primary treatment for glomus tumors is surgical excision. Complete removal typically results in immediate symptom relief and low recurrence rates. The procedure is usually performed under local anesthesia, with care taken to preserve nail integrity.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Recovery and Rehabilitation
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Postoperative recovery is generally swift, with most patients resuming normal activities within a few days. Pain relief is often immediate, and cosmetic outcomes are favorable. Follow-up appointments ensure proper healing and monitor for potential recurrence.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Conclusion
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Early recognition and appropriate management of glomus tumors are essential to alleviate pain and prevent complications. If you experience persistent fingertip pain or notice discoloration under your nail, consult Dr. Darshan Kumar A. Jain, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <div className="mt-15">
                <Faqs faqs={faqs} />
            </div>

        </div>
    )
}

export default GlomusTumors
