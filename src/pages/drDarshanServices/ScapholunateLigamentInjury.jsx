import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';

const ScapholunateLigamentInjury = () => {

    const faqs = [
        {
            ques: "What causes a scapholunate ligament injury?",
            ans: "Common causes include falls onto an outstretched hand, sports injuries, and motor vehicle accidents."
        },
        {
            ques: "How is a scapholunate ligament injury diagnosed?",
            ans: "Through physical examination, imaging tests like X-rays, MRI, or CT scans, and specific tests such as the Watson's test."
        },
        {
            ques: "Is surgery always required for a scapholunate ligament injury?",
            ans: "Not always. Mild injuries may heal with non-surgical treatments, but severe or chronic injuries often require surgical intervention."
        },
        {
            ques: "What is the recovery time after surgery?",
            ans: "Recovery varies but typically involves several weeks of immobilization followed by physical therapy. Full recovery can take several months."
        },
        {
            ques: "Can a scapholunate ligament injury lead to arthritis?",
            ans: "Yes, if left untreated, it can lead to scapholunate advanced collapse (SLAC), a form of wrist arthritis."
        }
    ];

    return (
        <div>

            <Servicesbanner serviceName="Scapholunate Ligament Injury" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                    The scapholunate ligament is a key stabilizer of the wrist, connecting the scaphoid and lunate bones.Injury to this ligament can lead to wrist instability, pain and if untreated, progressive arthritis. At Sapiens Clinic in Malleshwaram, we specialize in the accurate diagnosis and effective treatment of scapholunate ligament injuries, aiming to restore wrist function and alleviate discomfort.
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    What Is a Scapholunate Ligament Injury?
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            A scapholunate ligament injury occurs when the ligament connecting the scaphoid and lunate bones in the wrist is stretched or torn. This can result in abnormal movement between these bones, leading to wrist instability. Common causes include:
                        </div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Falls onto an outstretched hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Sports injuries</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Motor vehicle accidents</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            The severity of the injury can range from a mild sprain to a complete tear, affecting the stability and function of the wrist.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Symptoms
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Symptoms of a scapholunate ligament injury may include:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pain:</b> on the thumb side of the wrist</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Swelling and tenderness:</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Decreased grip strength:</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Clicking or popping sensations:</b> during wrist movement</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Limited range of motion:</b></li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            These symptoms can develop immediately after injury or gradually over time if the injury is not addressed.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Diagnosis
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Accurate diagnosis is crucial for effective treatment. Diagnostic methods include:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Examination:</b> Assessing wrist stability and identifying areas of tenderness.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Tests:</b> X-rays can reveal gaps between the scaphoid and lunate bones. MRI or CT scans provide detailed images of soft tissue and bone structures.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Special Tests:</b> The Watson's test may be performed to assess scapholunate instability.</li>
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
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Treatment depends on the severity of the injury and the time elapsed since it occurred:</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>
                            Non-Surgical Treatments
                        </div>

                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immobilization:</b> Using a splint or cast to allow the ligament to heal.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Exercises to restore strength and flexibility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity Modification:</b> Avoiding activities that exacerbate symptoms.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>
                            Surgical Treatments
                        </div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Surgery may be necessary for complete tears or chronic injuries:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Ligament Repair:</b> Reattaching the torn ligament to the bone.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Ligament Reconstruction:</b> Using a tendon graft to replace the damaged ligament.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Partial Wrist Fusion:</b> Fusing certain wrist bones to stabilize the joint while preserving some motion.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Recovery and Rehabilitation
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Post-treatment rehabilitation is essential for optimal recovery:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> To regain strength and range of motion.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Gradual Return to Activities:</b> Resuming activities as advised by your healthcare provider.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Regular Follow-ups:</b> Monitoring healing progress and adjusting treatment as needed.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Prevention Tips
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>To reduce the risk of scapholunate ligament injuries:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Use protective gear:</b> during sports or high-risk activities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Practice proper techniques:</b> when lifting or performing repetitive wrist movements.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Strengthen wrist and forearm muscles:</b> through regular exercise.</li>
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
                            Early detection and appropriate management of scapholunate ligament injuries are vital to prevent long-term complications. If you're experiencing wrist pain or instability, consult Dr. Darshan Kumar A. Jain, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <Faqs faqs={faqs} />

        </div>
    )
}

export default ScapholunateLigamentInjury
