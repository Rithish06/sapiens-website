import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage'

const VICVolkmanIschemicContracture = () => {
    const faqs = [
        {
            ques: "Can VIC be prevented?",
            ans: "Yes, early detection and treatment of compartment syndrome, along with proper management of fractures and careful application of casts or bandages, can prevent VIC."
        },
        {
            ques: "Is surgery always required for VIC?",
            ans: "Surgical intervention is often necessary, especially in established cases. However, early-stage VIC may be managed with conservative treatments."
        },
        {
            ques: "What is the prognosis after treatment?",
            ans: "With timely and appropriate treatment, many patients experience significant improvement in function. The extent of recovery depends on the severity of the contracture and the timeliness of intervention."
        },
        {
            ques: "How long is the recovery period?",
            ans: "Recovery varies but typically spans several months, including both surgical healing and rehabilitation."
        },
        {
            ques: "Are there risks associated with VIC surgery?",
            ans: "As with any surgical procedure, risks include infection, nerve damage, and incomplete restoration of function. However, these risks are minimized with experienced surgical care and proper postoperative management."
        },
    ]

    const Contact = [
        {
            heading: "",
            para: ""
        }
    ]
    return (
        <div>
            <div>
                <Servicesbanner serviceName="VIC (Volkman’s Ischemic Contracture)" />
            </div>
            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Volkmann’s Ischemic Contracture (VIC) Treatment in Malleshwaram</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Hand Swellings (Lumps and Bumps) Treatment in Malleshwaram, Bangalore</div> */}
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Volkmann’s Ischemic Contracture (VIC) is a serious medical condition characterized by a permanent flexion deformity of the hand and wrist, resulting from prolonged muscle and nerve ischemia in the forearm. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis, management, and surgical correction of VIC, aiming to restore function and improve the quality of life for our patients.</div>
                    </div>
                </div>

                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Understanding Volkmann’s Ischemic Contracture</div>
                <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>VIC arises when increased pressure within the forearm compartments-often due to trauma, fractures, or tight bandaging—leads to compromised blood flow (ischemia). This ischemia causes muscle and nerve damage, particularly affecting the flexor muscles of the forearm, leading to fibrosis and shortening of these muscles. The result is a claw-like deformity of the hand and fingers, with restricted and painful passive extension.</div>


            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Causes and Risk Factors</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Several factors can contribute to the development of VIC :</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Trauma</b>: Fractures, especially supracondylar fractures of the humerus, are commonly associated with VIC.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Compartment Syndrome</b>: Increased pressure within the forearm compartments can impede blood flow.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Improper Bandaging or Casting</b>: Excessively tight bandages or casts can restrict circulation.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Vascular Injuries</b>: Damage to the brachial artery or its branches can lead to ischemia.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">Early recognition of VIC is crucial. Symptoms may include :</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Severe Pain</b>: Especially with passive stretching of the fingers.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3.'><b>Swelling and Tightness</b>: In the forearm muscles.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Paresthesia</b>: Tingling or numbness in the hand and fingers.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pallor and Pulselessness</b>: Indicating compromised blood flow.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Paralysis</b>: Loss of motor function in the affected limb.</li>
                        </ul>
                        <div className="font-para text-[12px] lg:text-[16px] leading-[26px] mt-3">These signs align with the "Five P's" of compartment syndrome: Pain, Pallor, Paresthesia, Pulselessness and Paralysis.</div>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Diagnosis</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Diagnosis involves a combination of clinical evaluation and diagnostic tests :</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Examination</b>: Assessing for signs of compartment syndrome and contracture.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Studies</b>: X-rays to identify fractures; MRI or ultrasound to assess soft tissue damage.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Intracompartmental Pressure Measurement</b>: To confirm elevated pressures within the forearm compartments.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Management of VIC depends on the stage and severity of the condition :</div>
                        <ul className='mt-5  list-desc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Acute Phase</b> :
                                <ul className="mt-5  list-disc pl-10">
                                    <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Fasciotomy</b>: Surgical decompression to relieve pressure and restore blood flow.</li>
                                    <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Removal of Constrictive Dressings</b>: Immediate alleviation of external pressure sources.</li>
                                </ul>
                            </li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Established Contracture</b>:
                            </li>
                            <ul className="mt-5  list-desc pl-10">
                                <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy</b>: To maintain joint mobility and prevent further stiffness.</li>
                                <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Surgical Intervention</b>:
                                    <ul className="mt-5  list-disc pl-10">
                                        <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Muscle Slide Procedures</b>: Releasing and lengthening contracted muscles.</li>
                                        <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tendon Transfers</b>: Reassigning tendons to restore hand function.</li>
                                        <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Free Functional Muscle Transfer</b>: Transplanting muscles, such as the gracilis, to restore movement in severe cases .</li>
                                    </ul>
                                </li>
                            </ul>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery and Rehabilitation</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Postoperative rehabilitation is vital for functional recovery :</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Splinting</b>: To maintain proper positioning of the hand and wrist.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Occupational Therapy</b>: To regain strength and dexterity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Regular Follow-Up</b>: Monitoring for complications and assessing progress.</li>
                        </ul>
                    <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Recovery timelines vary based on the severity of the contracture and the specific surgical procedures performed.</div>
                    </div>

                </div>
            </div>


            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Volkmann’s Ischemic Contracture is a preventable yet potentially debilitating condition. Early recognition and prompt intervention are key to preventing permanent damage. At Sapiens Clinic, Malleshwaram, our multidisciplinary team is dedicated to providing comprehensive care, employing advanced surgical techniques and personalized rehabilitation programs to restore function and improve patient outcomes.</div>
                    </div>
                </div>
            </div>

            <div>
                <ContactPage contacts={Contact} />
            </div>
            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default VICVolkmanIschemicContracture