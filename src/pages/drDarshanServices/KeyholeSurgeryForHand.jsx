import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'

const KeyholeSurgeryForHand = () => {

    const faqs = [
        {
            ques: "Is arthroscopic surgery suitable for all joint problems?",
            ans: "While arthroscopy is effective for many conditions, some complex issues may require open surgery. A thorough evaluation will determine the best approach."
        },
        {
            ques: "How long does the procedure take?",
            ans: "Most arthroscopic surgeries are completed within 30 minutes to 2 hours, depending on the complexity."
        },
        {
            ques: "Will I need physical therapy after surgery?",
            ans: "Yes, physical therapy is often recommended to aid in recovery and restore joint function."
        },
        {
            ques: "Are there risks associated with arthroscopy?",
            ans: "As with any surgical procedure, risks include infection, bleeding and nerve damage, though these are relatively rare."
        },
        {
            ques: "When can I return to normal activities?",
            ans: "Recovery times vary, but many patients resume daily activities within a few weeks, with full recovery taking a few months."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName="Keyhole (Arthroscopic) Surgery for Hand, Wrist, and Elbow" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                    Minimally invasive keyhole surgery, or arthroscopy, has transformed the treatment of various hand, wrist, and elbow conditions. At Sapiens Clinic in Malleshwaram, we specialize in arthroscopic procedures that offer precise diagnosis and effective treatment with minimal discomfort and faster recovery times.
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px] mt-10'>What Is Arthroscopy?</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Arthroscopy is a surgical technique that involves inserting a small camera, known as an arthroscope, into the joint through tiny incisions. This allows orthopedic surgeons to view the internal structures of the joint on a monitor and perform necessary repairs using specialized instruments. The procedure is commonly used for joints such as the knee, shoulder, elbow, ankle, hip and wrist.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Conditions Treated with Arthroscopy
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>

                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>
                                <strong>Wrist Conditions:</strong>
                                <ul className='list-disc pl-6'>
                                    <li className='mt-2'>Triangular Fibrocartilage Complex (TFCC) tears</li>
                                    <li className='mt-2'>Scapholunate and lunotriquetral ligament injuries</li>
                                    <li className='mt-2'>Ganglion cyst removal</li>
                                    <li className='mt-2'>Wrist arthritis</li>
                                    <li className='mt-2'>Distal radius fractures</li>
                                </ul>
                            </li>

                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>
                                <strong>Elbow Conditions:</strong>
                                <ul className='list-disc pl-6'>
                                    <li className='mt-2'>Tennis elbow (lateral epicondylitis)</li>
                                    <li className='mt-2'>Loose bodies within the joint</li>
                                    <li className='mt-2'>Elbow arthritis</li>
                                    <li className='mt-2'>Synovitis</li>
                                    <li className='mt-2'>Elbow stiffness</li>
                                </ul>
                            </li>

                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>
                                <strong>Hand Conditions:</strong>
                                <ul className='list-disc pl-6'>
                                    <li className='mt-2'>Carpal tunnel syndrome</li>
                                    <li className='mt-2'>Trigger finger</li>
                                    <li className='mt-2'>Dupuytren's contracture</li>
                                    <li className='mt-2'>Ligament injuries</li>
                                    <li className='mt-2'>Arthritis-related deformities</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Benefits of Arthroscopic Surgery
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Smaller incisions leading to reduced scarring</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Less postoperative pain and swelling</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Shorter hospital stays and faster recovery</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Lower risk of infection</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Improved joint visualization for accurate diagnosis and treatment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    The Arthroscopic Procedure
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Anesthesia:</strong> Administered based on the joint involved and patient preference.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Incision:</strong> Small incisions are made to insert the arthroscope and surgical instruments.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Diagnosis and Treatment:</strong> The surgeon examines the joint and performs necessary repairs.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Closure:</strong> Instruments are removed, and incisions are closed with sutures or sterile strips.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Most arthroscopic procedures are performed on an outpatient basis, allowing patients to return home the same day.
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
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Pain Management:</strong> Medications to control discomfort.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Physical Therapy:</strong> Exercises to restore strength and mobility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Follow-Up Visits:</strong> Monitoring healing progress and addressing any concerns.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Recovery times vary depending on the specific procedure and individual patient factors but generally are shorter compared to open surgery.
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
                            Arthroscopic surgery offers a minimally invasive solution for various hand, wrist, and elbow conditions, leading to quicker recovery and improved outcomes. If you're experiencing joint issues, consult Dr. Darshan Kumar A. Jain, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-15">
                <Faqs faqs={faqs} />
            </div>

        </div>
    )
}

export default KeyholeSurgeryForHand
