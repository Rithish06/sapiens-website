import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner';
import Faqs from '../../components/faqs/faqs';
import ContactPage from '../services/ContactPage/ContactPage';

const ElbowReplacement = () => {

    const faqs = [
        {
            ques: "How long does an elbow replacement last?",
            ans: "Elbow prostheses can last 10-15 years, depending on activity levels and adherence to postoperative guidelines."
        },
        {
            ques: "Will I regain full range of motion after surgery?",
            ans: "Most patients experience significant improvement, though full range of motion may not be restored."
        },
        {
            ques: "Are there risks associated with elbow replacement?",
            ans: "As with any surgery, risks include infection, nerve damage, and implant loosening."
        },
        {
            ques: "Can I return to sports after elbow replacement?",
            ans: "Low-impact activities are generally permissible, but high-impact sports should be avoided to prolong implant life."
        },
        {
            ques: "How soon can I drive after surgery?",
            ans: "Driving is typically resumed 6-8 weeks post-surgery, depending on recovery progress and surgeon's advice."
        }
    ];

    return (
        <div>

            <Servicesbanner serviceName="Elbow Replacement (Elbow Arthroplasty): Diagnosis and " />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Elbow Replacement
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Elbow replacement, or elbow arthroplasty, is a surgical procedure to replace damaged parts of the elbow joint with artificial components. This intervention is considered when conservative treatments fail to alleviate severe elbow pain and dysfunction caused by conditions like arthritis, fractures, or other joint diseases. At Sapiens Clinic in Malleshwaram, we specialize in comprehensive evaluation and management of elbow conditions, aiming to restore function and improve quality of life for our patients.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Understanding Elbow Replacement
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            The elbow joint comprises three bones: the humerus (upper arm bone), the ulna, and the radius (forearm bones). Elbow replacement involves removing the damaged sections of these bones and replacing them with metal and plastic implants designed to mimic the natural movement of the elbow. This procedure can be total or partial, depending on the extent of joint damage.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Causes and Indications
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Severe Osteoarthritis:</b> Degenerative joint disease leading to cartilage loss and bone-on-bone contact.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Rheumatoid Arthritis:</b> An autoimmune condition causing joint inflammation and destruction.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Post-Traumatic Arthritis:</b> Arthritis developing after an elbow injury or fracture.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Complex Fractures:</b> Fractures that are not amenable to fixation, especially in elderly patients.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Tumors:</b> Bone tumors affecting the elbow joint.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>
                    Symptoms Indicating Need for Elbow Replacement
                </div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Chronic Elbow Pain:</b> Persistent pain not relieved by medications or therapy.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Limited Range of Motion:</b> Difficulty in bending or straightening the elbow.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Joint Instability:</b> Feeling of the elbow giving way.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Swelling and Stiffness:</b> Especially after periods of inactivity.</li>
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
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medical History and Physical Examination:</b> Evaluating symptoms and joint function.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Studies:</b> X-rays to assess bone damage; MRI or CT scans for detailed joint evaluation.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Laboratory Tests:</b> To rule out infections or autoimmune conditions.</li>
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
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Non-Surgical Management</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medications:</b> Pain relievers and anti-inflammatory drugs.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Exercises to improve strength and flexibility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Bracing:</b> To support and stabilize the elbow joint.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[600]'>Surgical Intervention</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Anesthesia:</b> General or regional anesthesia is administered.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Incision and Removal:</b> Damaged bone and cartilage are removed.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Implant Placement:</b> Artificial components are inserted and fixed in place.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Closure:</b> The incision is closed, and the arm is bandaged.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            The surgery typically lasts 1.5 to 2 hours.
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
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Hospital Stay:</b> Usually 1-2 days, depending on individual recovery.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pain Management:</b> Medications to control postoperative pain.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Initiated soon after surgery to regain motion and strength.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity Restrictions:</b> Avoiding heavy lifting and repetitive movements for several weeks.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Full recovery may take several months, with gradual improvement in function and reduction in pain.
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
                            Elbow replacement surgery offers significant relief from pain and improved joint function for patients with severe elbow conditions. At Sapiens Clinic, Malleshwaram, Dr. Darshan Kumar A. Jain and our dedicated team provide expert care, from diagnosis through rehabilitation, ensuring optimal outcomes for our patients. If you're experiencing persistent elbow pain or dysfunction, schedule a consultation to explore your treatment options.
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

export default ElbowReplacement
