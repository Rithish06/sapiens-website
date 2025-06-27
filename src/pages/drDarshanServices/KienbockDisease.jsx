import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';
import { Helmet } from 'react-helmet';

const KienbockDisease = () => {

    return (
        <div>
            <Helmet>
                <title>Kienböck’s Disease Treatment in Bangalore | Dr. Darshan Jain</title>
                <meta name='description' content='Dr. Darshan Kumar A Jain provides expert care for Kienböck’s disease in Bangalore, Karnataka. Regain wrist function with precision.'/>
            </Helmet>


            <Servicesbanner serviceName=" Kienbock’s Disease" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                    Kienböck’s disease is a rare and progressive condition in which the lunate bone - one of the small bones in the wrist - loses its blood supply.
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Over time, this leads to bone death (avascular necrosis), collapse, and arthritis if left untreated. The disease can cause significant pain, stiffness, and loss of wrist function.
                        </div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            At Sapiens Clinic, Malleshwaram, we focus on early diagnosis and customized treatment to preserve wrist motion, relieve pain and prevent long-term joint damage.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    What Is Kienböck’s Disease?
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            The lunate bone plays a key role in wrist movement. When blood flow to this bone is disrupted, the bone begins to break down. As the condition progresses, the structure of the lunate deteriorates, affecting the balance and mechanics of the wrist joint.
                        </div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Repetitive wrist trauma or injury:</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Anatomical differences in the forearm bones:</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Vascular issues affecting blood flow:</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Certain medical conditions:</b> like sickle cell disease or lupus</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Common Symptoms
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Persistent wrist pain:</b> especially during activity</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tenderness:</b> over the central part of the wrist</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Decreased range of motion or stiffness:</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Weak grip strength:</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Swelling and occasional clicking or creaking sensations:</b></li>
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
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Early diagnosis is crucial to manage the condition before joint damage becomes permanent. Diagnostic methods include:
                        </div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>X-rays:</b> May appear normal in the early stages but later show bone collapse or fragmentation.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>MRI:</b> Helps detect early changes in the bone and assess blood supply.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>CT scans:</b> Provide detailed imaging to evaluate the bone structure and any joint degeneration.</li>
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
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>
                            Non-Surgical Treatments (for early-stage disease)
                        </div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immobilization:</b> Wrist splints or casts to offload the lunate and reduce pressure.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>NSAIDs:</b> Medications to reduce inflammation and manage pain.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity modification:</b> Avoiding strenuous wrist use to prevent progression.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical therapy:</b> To maintain flexibility and strength without overloading the wrist.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>
                            Surgical Treatments (for moderate to advanced stages)
                        </div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Revascularization procedures:</b> Bone grafting techniques to restore blood flow to the lunate.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Joint leveling surgery:</b> Shortening or lengthening one of the forearm bones to redistribute pressure on the lunate.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Lunate excision or replacement:</b> In severely damaged bones, removal or replacement of the lunate may be considered.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Partial wrist fusion:</b> Stabilizes the wrist while preserving some movement.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Proximal row carpectomy:</b> Removes a row of small wrist bones to reduce pain and retain limited motion.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Each treatment plan is customized based on the severity of the condition, age, lifestyle, and hand dominance of the patient.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Prevention Tips
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Seeking early medical evaluation:</b> for wrist pain or injuries</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Avoiding repetitive wrist stress:</b> especially in high-risk activities</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Protecting the wrist:</b> during sports or physical work</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Managing underlying conditions:</b> that may impair blood flow</li>
                        </ul>
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
                            Kienböck’s disease can significantly impact wrist function and quality of life if not diagnosed early. The good news is that with the right care, its progression can often be slowed or managed effectively. If you're experiencing ongoing wrist pain or stiffness, don't delay evaluation. For accurate diagnosis and expert care, consult Dr. Darshan Kumar A. Jain, Hand and Upper Limb Specialist at Sapiens Clinic, Malleshwaram.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <Faqs faqs={faqs} />

        </div>
    )
}

export default KienbockDisease
