import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';
import { Helmet } from 'react-helmet';

const Tuberculosis = () => {

    const faqs = [
        {
            ques: "Can TB of the hand occur without lung involvement?",
            ans: "Yes, extrapulmonary TB can affect the hand without active pulmonary disease."
        },
        {
            ques: "Is hand TB contagious?",
            ans: "Hand TB itself is not contagious, but the underlying TB infection can be transmitted if active pulmonary TB is present."
        },
        {
            ques: "How long does treatment last?",
            ans: "Typically, 6 to 9 months, depending on the severity and response to therapy."
        },
        {
            ques: "Will I regain full function of my hand?",
            ans: "With early diagnosis and appropriate treatment, most patients recover good hand function."
        },
        {
            ques: "Are there any preventive measures?",
            ans: "Early detection and treatment of primary TB infections and maintaining a healthy immune system can reduce the risk."
        }
    ];

    return (
        <div>

            <Helmet>
                <title>Hand Tuberculosis Treatment in Bangalore | Dr. Darshan Kumar A Jain</title>
                <meta name='description' content='Dr. Darshan Kumar A Jain offers specialized hand tuberculosis treatment in Bangalore, Karnataka. Accurate diagnosis and care.' />
            </Helmet>

            <Servicesbanner serviceName="Tuberculosis" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Tuberculosis (TB) of the Hand
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Tuberculosis (TB) of the hand is a rare manifestation of extrapulmonary TB, often presenting diagnostic challenges due to its nonspecific symptoms. At Sapiens Clinic in Malleshwaram, we specialize in the comprehensive evaluation and management of hand TB, aiming to restore function and prevent complications.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Understanding Tuberculosis of the Hand
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Common forms include:</div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tuberculous Tenosynovitis:</b> Infection of the tendon sheaths, leading to swelling and restricted movement.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tuberculous Dactylitis (Spina Ventosa):</b> Involvement of the short tubular bones, primarily in children, causing bone expansion and deformity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tuberculous Arthritis:</b> Joint involvement leading to pain, swelling and stiffness.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            These conditions often result from hematogenous spread from a primary pulmonary focus.
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
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immunosuppression:</b> Conditions like HIV/AIDS or diabetes.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Previous TB Infection:</b> History of pulmonary or extrapulmonary TB.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Close Contact:</b> Exposure to individuals with active TB.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Occupational Hazards:</b> Healthcare workers or individuals in crowded living conditions.</li>
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
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Swelling:</b> Persistent, non-painful swelling of fingers or hand.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pain:</b> Mild to moderate, increasing over time.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Stiffness:</b> Reduced range of motion in affected joints.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Sinus Formation:</b> In advanced cases, draining sinuses may develop.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Systemic Signs:</b> Low-grade fever, weight loss and night sweats in some cases.</li>
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
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging:</b> X-rays may show bone destruction; MRI is useful for soft tissue assessment.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Laboratory Tests:</b> Elevated ESR and CRP levels.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Microbiological Studies:</b> Fine-needle aspiration or biopsy for acid-fast bacilli staining and culture.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Molecular Tests:</b> PCR-based assays for rapid detection of Mycobacterium tuberculosis.</li>
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
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Medical Treatment</div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Intensive Phase:</b> Isoniazid, Rifampicin, Pyrazinamide and Ethambutol for 2 months.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Continuation Phase:</b> Isoniazid and Rifampicin for an additional 4-7 months.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Adherence to the full course is crucial to prevent recurrence and resistance.
                        </div>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Surgical Intervention</div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Abscess Formation:</b> Requiring drainage.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Severe Bone Destruction:</b> Necessitating debridement or reconstruction.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Persistent Sinuses:</b> Non-healing despite medical therapy.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Surgical options include synovectomy, debridement, and in severe cases, joint fusion.
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
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physiotherapy:</b> To restore function and prevent stiffness.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Regular Monitoring:</b> To detect any signs of recurrence.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Nutritional Support:</b> Enhancing immune response and healing.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Early diagnosis and adherence to treatment protocols generally result in favorable outcomes.
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
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Tuberculosis of the hand, though rare, can lead to significant morbidity if not addressed promptly. At Sapiens Clinic, Malleshwaram, Dr. Darshan Kumar A. Jain offers expert evaluation and comprehensive management plans tailored to individual needs. If you experience persistent hand swelling or pain, seek medical attention for timely diagnosis and treatment.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>

        </div>
    )
}

export default Tuberculosis
