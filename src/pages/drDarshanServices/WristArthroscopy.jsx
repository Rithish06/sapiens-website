import React from 'react'
import Faqs from '../../components/faqs/faqs';
import Servicesbanner from '../../components/services-banner/Servicesbanner';
import ContactPage from '../services/ContactPage/ContactPage';

const WristArthroscopy = () => {

    const faqs = [
        {
            ques: "Is wrist arthroscopy painful?",
            ans: "The procedure is performed under anesthesia, minimizing discomfort. Postoperative pain is usually mild and manageable."
        },
        {
            ques: "How long does the procedure take?",
            ans: "Wrist arthroscopy typically takes less than an hour, depending on the complexity of the condition."
        },
        {
            ques: "When can I return to work or daily activities?",
            ans: "Many patients resume light activities within a few days, but full recovery may take several weeks."
        },
        {
            ques: "Are there risks associated with wrist arthroscopy?",
            ans: "As with any surgical procedure, risks include infection, nerve injury, or stiffness, but these are relatively rare."
        },
        {
            ques: "Will I need physical therapy after the procedure?",
            ans: "Physical therapy is often recommended to restore wrist function and strength."
        }
    ];

    return (
        <div>
            <Servicesbanner serviceName="Wrist Arthroscopy" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                    Wrist arthroscopy is a minimally invasive surgical procedure that allows orthopedic specialists to diagnose and treat various wrist conditions with precision. At Sapiens Clinic in Malleshwaram, we utilize advanced arthroscopic techniques to provide effective solutions for patients experiencing wrist pain, instability or limited mobility.
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            <strong>What Is Wrist Arthroscopy?</strong>
                        </div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Wrist arthroscopy involves inserting a small camera, known as an arthroscope, into the wrist joint through tiny incisions. This camera projects images onto a monitor, enabling the surgeon to examine the intricate structures within the wrist, such as ligaments, cartilage, and bones. The procedure can be both diagnostic and therapeutic, allowing for the treatment of various conditions without the need for large incisions.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Indications for Wrist Arthroscopy
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Persistent wrist pain unresponsive to conservative treatments</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Ligament injuries, such as scapholunate or lunotriquetral tears</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Triangular Fibrocartilage Complex (TFCC) tears</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Wrist fractures involving the joint surface</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Removal of ganglion cysts</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Evaluation and treatment of chronic wrist instability</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Synovitis or inflammation of the joint lining</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Benefits of Wrist Arthroscopy
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Smaller incisions leading to reduced scarring</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Less postoperative pain and swelling</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Shorter recovery time and quicker return to daily activities</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Enhanced visualization of the wrist's internal structures</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Lower risk of complications</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    The Procedure
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Preparation:</strong> The patient's arm is positioned to allow optimal access to the wrist joint.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Incision:</strong> Small incisions are made to insert the arthroscope and surgical instruments.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Examination:</strong> The surgeon examines the wrist joint, identifying any abnormalities.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Treatment:</strong> If necessary, surgical instruments are used to repair or remove damaged tissues.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Closure:</strong> Instruments are removed, and incisions are closed with sutures or sterile strips.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            The entire procedure usually lasts less than an hour, and patients can often return home the same day.
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
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Immobilization:</strong> A splint or bandage may be applied to protect the wrist.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Pain Management:</strong> Over-the-counter or prescribed medications can alleviate discomfort.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Physical Therapy:</strong> Exercises to restore strength and flexibility are initiated as advised.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><strong>Follow-Up:</strong> Regular check-ups ensure proper healing and address any concerns.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Most patients experience significant improvement within a few weeks, with full recovery typically achieved in a few months.
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
                            Wrist arthroscopy is a valuable tool in diagnosing and treating various wrist conditions with minimal invasiveness. If you're experiencing persistent wrist issues, consult Dr. Darshan Kumar A. Jain, Orthopedic Specialist at Sapiens Clinic, Malleshwaram, for a comprehensive evaluation and personalized treatment plan.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <div className="mt-15">
                <Faqs faqs = {faqs} />  
            </div>
            
        </div>
    )
}

export default WristArthroscopy
