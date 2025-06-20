import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Faqs from '../../components/faqs/faqs'
import ContactPage from '../services/ContactPage/ContactPage';

const ShoulderReplacement = () => {

    const faqs = [
        {
            ques: "How long does shoulder replacement surgery take?",
            ans: "The procedure typically lasts between 1 to 2 hours, depending on the complexity."
        },
        {
            ques: "Will I regain full range of motion after surgery?",
            ans: "Most patients experience significant improvement, though complete restoration depends on various factors, including preoperative joint condition and adherence to rehabilitation protocols."
        },
        {
            ques: "Are there risks associated with shoulder replacement?",
            ans: "As with any surgery, risks include infection, blood clots, prosthesis issues, and nerve damage, though these are relatively rare."
        },
        {
            ques: "How long will the shoulder prosthesis last?",
            ans: "Modern prostheses can last 10 to 20 years, depending on usage and other factors."
        },
        {
            ques: "When can I return to work after surgery?",
            ans: "Return to work depends on the nature of your job; desk jobs may resume in a few weeks, while physically demanding roles may require several months."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName="Shoulder Replacement (Arthroplasty): Diagnosis and" />

            <div className='px-8 lg:px-20 mt-8'>
                {/* <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Shoulder Replacement</div> */}
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Shoulder replacement, or shoulder arthroplasty, is a surgical procedure aimed at relieving pain and restoring function in severely damaged shoulder joints. At Sapiens Clinic in Malleshwaram, we offer advanced shoulder replacement options tailored to individual patient needs, ensuring optimal outcomes and improved quality of life.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Understanding Shoulder Replacement</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            The shoulder is a ball-and-socket joint comprising the humeral head (ball) and the glenoid cavity (socket). In shoulder arthroplasty, damaged parts of the shoulder joint are replaced with artificial components made of metal and plastic to mimic the natural anatomy and movement of the shoulder. This procedure is considered when conservative treatments fail to alleviate chronic shoulder pain and dysfunction.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Causes and Risk Factors</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Shoulder replacement is typically recommended for conditions that lead to significant joint damage, including:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Osteoarthritis:</b> Degenerative joint disease causing cartilage wear.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Rheumatoid Arthritis:</b> An autoimmune condition leading to joint inflammation.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Severe Fractures:</b> Complex fractures of the shoulder that are not amenable to fixation.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Rotator Cuff Tear Arthropathy:</b> Arthritis resulting from massive rotator cuff tears.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Avascular Necrosis:</b> Loss of blood supply to the bone leading to bone death.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Risk factors include advanced age, repetitive shoulder stress, previous shoulder injuries, and certain systemic diseases.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Patients requiring shoulder replacement often experience:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Persistent Shoulder Pain:</b> Unrelieved by medications or physical therapy.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Limited Range of Motion:</b> Difficulty in lifting or rotating the arm.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Joint Stiffness:</b> Especially after periods of inactivity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Weakness:</b> Inability to perform daily activities involving the shoulder.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Grinding or Clicking Sensations:</b> During shoulder movement.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Diagnosis</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>A comprehensive evaluation includes:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medical History and Physical Examination:</b> Assessing pain levels, range of motion, and functional limitations.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging Studies:</b> X-rays to evaluate bone structure; MRI or CT scans for detailed assessment of soft tissues and bone integrity.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Laboratory Tests:</b> To rule out infections or inflammatory conditions.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>Depending on the severity of joint damage and patient-specific factors, treatment options include:</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>Non-Surgical Management</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medications:</b> NSAIDs for pain relief.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Exercises to improve strength and flexibility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Corticosteroid Injections:</b> To reduce inflammation.</li>
                        </ul>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>Surgical Interventions</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Total Shoulder Replacement (Anatomic Arthroplasty):</b> Both the humeral head and glenoid cavity are replaced with prosthetic components that mimic natural anatomy.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Reverse Shoulder Replacement:</b> The positions of the ball and socket are reversed, beneficial in cases with rotator cuff deficiencies.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Partial Shoulder Replacement (Hemiarthroplasty):</b> Only the humeral head is replaced, suitable when the glenoid cavity is intact.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            The choice of procedure depends on factors like the extent of joint damage, rotator cuff integrity, and patient activity levels.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery and Rehabilitation</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Postoperative care focuses on:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pain Management:</b> Use of prescribed medications to control discomfort.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immobilization:</b> Wearing a sling to protect the joint during initial healing.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical Therapy:</b> Gradual exercises to restore range of motion and strength.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity Modification:</b> Avoiding strenuous activities until cleared by the surgeon.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Recovery timelines vary but typically involve several weeks of rehabilitation, with most patients resuming normal activities within 3 to 6 months.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>
                            Shoulder replacement surgery offers significant relief from chronic pain and improved joint function for individuals with severe shoulder joint damage. At Sapiens Clinic, Malleshwaram, Dr. Darshan Kumar A. Jain and our dedicated team are committed to providing personalized care, utilizing advanced surgical techniques to ensure the best possible outcomes. If you're experiencing persistent shoulder issues, schedule a consultation to explore your treatment options.
                        </div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <Faqs faqs={faqs} />
        </div>
    )
}

export default ShoulderReplacement
