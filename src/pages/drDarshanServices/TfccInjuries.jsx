import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';

const TfccInjuries = () => {

    const faqs = [
        {
            ques: "What causes a TFCC injury?",
            ans: "TFCC injuries can result from trauma, repetitive wrist motions or degenerative changes associated with aging."
        },
        {
            ques: "How is a TFCC injury diagnosed?",
            ans: "Diagnosis involves a physical examination, imaging tests like MRI, and sometimes arthroscopy for direct visualization."
        },
        {
            ques: "Is surgery always required for a TFCC injury?",
            ans: "Not always. Many TFCC injuries respond well to non-surgical treatments. Surgery is considered if conservative methods fail."
        },
        {
            ques: "What is the recovery time after a TFCC injury?",
            ans: "Recovery varies depending on the severity of the injury and treatment method but typically ranges from a few weeks to several months."
        },
        {
            ques: "Can I return to sports after a TFCC injury?",
            ans: "Yes, with proper treatment and rehabilitation, most individuals can return to their previous activity levels."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName="TFCC (Triangular Fibrocartilage Complex) injury" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>TFCC Injuries – Overview</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            The Triangular Fibrocartilage Complex (TFCC) is a crucial structure located on the ulnar (little finger) side of the wrist, providing stability and facilitating smooth motion between the forearm and hand. Injuries to the TFCC can result in pain, weakness, and limited wrist function. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating TFCC injuries to restore wrist health and functionality.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>What Is a TFCC Injury?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            The TFCC comprises ligaments, tendons, and cartilage that stabilize the distal radioulnar joint and the ulnar side of the wrist. Injuries can occur due to:
                        </div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Falls onto an outstretched hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Repetitive wrist motions (e.g., in sports or manual labor)</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Degenerative changes associated with aging</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            These injuries can range from minor tears to complete disruptions of the complex.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Common symptoms of a TFCC injury include:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Pain on the ulnar side of the wrist</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Clicking or popping sounds during wrist movement</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Weakness or instability in the wrist</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Difficulty performing tasks requiring wrist rotation</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Swelling or tenderness in the affected area</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Diagnosis</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Treatment depends on the severity and nature of the injury:</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Accurate diagnosis is essential for effective treatment. Diagnostic methods include:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Examination:</b> Assessing pain points, range of motion, and wrist stability.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Tests:</b> MRI scans provide detailed images of soft tissue structures, aiding in the identification of TFCC tears.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Arthroscopy:</b> A minimally invasive procedure allowing direct visualization of the TFCC for definitive diagnosis.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Non-Surgical Treatments</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immobilization:</b> Using a splint or cast to allow the TFCC to heal.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Exercises to restore strength and flexibility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medications:</b> Nonsteroidal anti-inflammatory drugs (NSAIDs) to reduce pain and inflammation.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Surgical Treatments</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Surgery may be necessary for persistent or severe injuries:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Arthroscopic Repair:</b> Minimally invasive procedure to debride or repair the torn TFCC.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Open Surgical Repair:</b> In cases where arthroscopy is insufficient, open surgery may be performed to repair or reconstruct the TFCC.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery and Rehabilitation</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Post-treatment rehabilitation is crucial for optimal recovery:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Tailored exercises to regain strength and mobility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Gradual Return to Activities:</b> Resuming daily tasks and sports as advised by your healthcare provider.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Regular Follow-ups:</b> Monitoring healing progress and adjusting treatment as needed.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Prevention Tips</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>To minimize the risk of TFCC injuries:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Use proper techniques during sports and repetitive tasks.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Strengthen wrist and forearm muscles through regular exercise.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Avoid sudden, forceful wrist movements.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Wear protective gear during high-risk activities.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            TFCC injuries can significantly impact wrist function and quality of life. Early diagnosis and appropriate treatment are essential for recovery. If you're experiencing wrist pain or instability, consult Dr. Darshan Kumar A. Jain, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
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

export default TfccInjuries