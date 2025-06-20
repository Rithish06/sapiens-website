import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import ContactPage from '../ContactPage/ContactPage'

const EntropionRepair = () => {

    const faqs =[
        {
            ques:"What happens if entropion is left untreated?",
            ans:"It can cause corneal damage, infections, and eventual loss of vision due to constant friction."
        },
        {
            ques:"Is entropion repair surgery painful?",
            ans:" No, the procedure is performed under local anesthesia with minimal discomfort. Mild swelling is expected post-op."
        },
        {
            ques:"Can entropion come back after surgery?",
            ans:" While rare, recurrence is possible, especially in cases with underlying inflammatory disease. Regular follow-ups help monitor recovery."
        },
        {
            ques:"How soon can I resume normal activities?",
            ans:" Most patients return to routine life within 7–10 days. Heavy lifting or eye rubbing should be avoided for 2 weeks."
        },
        {
            ques:"Is surgery the only solution?",
            ans:" Not always. In early or mild cases, conservative treatments can help manage symptoms. Surgery is recommended for lasting relief."
        },
    ]


    return (
        <div>
            <div>
                <Divyaservicebanner servicename= 'Entropion Repair Surgery'/>
            </div>

            {/* container 1 */}
            <div className='xs:mt-29 md:mt-10 lg:mx-20 md:mx-10 mx-5  '>
                <div className='flex flex-col items-center mt-5'>
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Entropion Repair Surgery in Malleshwaram, Bangalore</div> */}
                    <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>Restore Comfort and Protect Your Vision from Inward-Turning Eyelids</div>
                    <div className='text-[12px] md:text-[16px] font-[500] font-para mt-2  md:leading-7 leading-5 '>Entropion is a condition where the <b>eyelid turns inward</b>, causing the eyelashes and skin to rub directly against the surface of the eye. This constant friction can lead to discomfort, redness, tearing, and in severe cases, corneal damage or vision loss.
                        Most commonly seen in older adults, especially those over 60, entropion requires timely evaluation and appropriate treatment to avoid long-term complications. At <b>Sapiens Clinic</b>, we offer advanced surgical and non-surgical solutions for entropion, ensuring comfort, safety, and lasting relief.
                    </div>
                </div>

                {/* container 2 */}

                <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>
                    {/* img */}
                    {/* <div className='md:w-[50%]'>
                        <img src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div className='md:leading-7 leading-5 w-[100%]' >
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent py-2'>What Is Entropion?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>Entropion occurs when the lower eyelid folds inward, leading to direct contact between the lashes and the eye’s surface. This causes irritation to the cornea, which may result in persistent redness, watery eyes, blurred vision, and a sensation of a foreign object in the eye.
                            Entropion typically affects the lower eyelid, though in some cases both eyes may be involved. Left untreated, this condition can progressively damage the cornea, increasing the risk of infection and visual impairment.
                        </div>
                    </div>
                </div>

                {/* container 3 */}

                <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10'>

                    {/* content */}
                    <div>
                        <div className='text-[19px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Types of Entropion</div>
                        <div className=' text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='py-2'>There are several causes of entropion :</div>
                            <ul className='list-disc md:leading-7 leading-5 ml-5'>
                                <li><b>Involutional Entropion </b>: Most common in aging adults due to weakening of eyelid muscles and tissues.</li>
                                <li><b>Spastic Entropion</b> : Triggered by inflammation, infection, or trauma — often after eye surgery.</li>
                                <li><b>Cicatricial Entropion</b> : Caused by scar tissue formation from burns, surgeries, or chronic inflammation.</li>
                                <li><b>Congenital Entropion</b> : Present from birth due to structural abnormalities in the eyelid.</li>
                                <li><b>Mechanical Entropion</b> : Occurs when a growth or mass on the eyelid causes it to turn inward.</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className='xl:w-[50%]'>
                        <img src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 4 */}

                <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>
                    {/* img */}

                    {/* <div className='xl:w-[50%]'>
                        <img src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Symptoms of Entropion</div>
                        <div className=' text-[12px] md:text-[16px] font-[500] font-para pt-2'>
                            <ul className='list-disc md:leading-7 leading-5 ml-5'>
                                <li>A gritty or foreign body sensation in the eye</li>
                                <li>Persistent tearing and eye redness</li>
                                <li>Light sensitivity and blurred vision</li>
                                <li>Eye pain or irritation</li>
                                <li>Eyelid crusting or discharge</li>
                            </ul>

                            <div className='py-2'>Initially, these symptoms may come and go. But as the eyelid continues to turn inward, the discomfort becomes more constant and severe.</div>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10 '>

                    {/* content */}
                    <div>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Causes Entropion?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='py-2'>Entropion often results from age-related muscle laxity, but other causes include :</div>
                            <ul className='list-disc ml-5 md:leading-7 leading-5 '>
                                <li>Past eye trauma or surgery</li>
                                <li>Infections or inflammatory conditions</li>
                                <li>Scarring from burns or autoimmune diseases</li>
                                <li>Genetic predisposition (in congenital cases)</li>
                            </ul>
                        </div>

                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Diagnosis at Sapiens Clinic</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='py-2'>A detailed eye examination is performed to identify the type and severity of entropion. Tests may include :</div>
                            <ul className='list-disc md:leading-7 leading-5 ml-5'>
                                <li><b>Slit lamp exam</b> to inspect the eyelid margin and cornea</li>
                                <li><b>Snap-back test</b> to assess eyelid muscle tone</li>
                                <li><b>Distraction test</b> to evaluate lid laxity and positioning</li>
                            </ul>
                            <div className='py-2'>Ruling out similar conditions is also key to ensuring the right treatment plan.</div>
                        </div>
                    </div>

                    {/* img */}

                    {/* <div className='xl:w-[50%]'>
                        <img src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 6 */}

                <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>

                    {/* img */}
                    {/* <div className='xl:w-[50%]'>
                        <img src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Entropion Treatment Options</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>Treatment depends on the underlying cause and severity of symptoms. We offer both non-surgical and surgical options :</div>
                        <div className='text-[14px] md:text-[16px] lg:text-[26px] font-heading font-[600] pt-2 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Non-Surgical Management (Short-term Relief)</div>
                        <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc md:leading-7 leading-5 ml-5 pt-2'>
                            <li><b>Lubricating Eye Drops and Ointments</b> : Help reduce friction and dryness</li>
                            <li><b>Protective Soft Contact Lenses </b>: Act as a shield to prevent corneal irritation</li>
                            <li><b>Tape Technique </b>: Temporarily repositions the eyelid outward</li>
                            <li><b>Botox Injections</b> : Weaken overactive eyelid muscles causing the inward turn</li>
                            <li><b>Eyelash Removal (Epilation) </b>: Reduces irritation by removing misdirected lashes</li>
                        </ul>
                        <div className=' text-[12px] md:text-[16px] font-[500] font-para py-2'>These methods offer symptom relief but are often temporary.</div>
                    </div>
                </div>

                {/* container 7 */}

                <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10'>

                    {/* content */}
                    <div>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Entropion Repair Surgery</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>Surgery is the most effective and lasting solution for entropion. Performed under local anesthesia with sedation, the procedure repositions the eyelid to its natural alignment.</div>
                        <div className='text-[14px] md:text-[16px] lg:text-[26px] font-heading font-[600] pt-2 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Surgical Techniques May Include:</div>
                        <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc md:leading-7 leading-5 ml-5 py-2'>
                            <li>Eyelid Tightening (lateral tarsal strip or wedge resection)</li>
                            <li>Retractor Reinsertion to restore muscle function</li>
                            <li>Orbicularis Muscle Adjustment to reduce abnormal muscle pull</li>
                            <li>Eyelid Margin Reconstruction in cases with trauma or severe scarring</li>
                        </ul>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para py-2'>Most procedures are performed as day-care surgeries, and patients go home the same day.</div>
                    </div>

                    {/* img */}
                    {/* <div className='xl:w-[50%]'>
                        <img src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 8 */}

                <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>

                    {/* img */}
                    {/* <div className='xl:w-[50%]'>
                        <img src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Recovery and Outlook</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para '>
                            <ul className='list-disc md:leading-7 leading-5 ml-5'>
                                <li><b>Recovery Time</b> : 1–2 weeks for most patients</li>
                                <li><b>Post-op Care</b> : Cold compresses, antibiotics, and lubricants are advised</li>
                                <li><b>Results</b> : Most patients experience lasting relief from symptoms with restored eyelid function and eye protection</li>
                            </ul>
                            <div className='text-[12px] md:text-[16px] font-[500] font-para py-2'>Minor swelling or bruising is common in the early days but subsides quickly with proper care.</div>
                        </div>

                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Why Early Treatment Matters</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='py-2'>Untreated entropion can lead to :</div>
                            <ul className=' list-disc md:leading-7 leading-5 ml-5'>
                                <li><b>Corneal abrasions or ulcers</b></li>
                                <li><b>Chronic infections</b></li>
                                <li><b>Scarring and permanent vision loss</b></li>
                            </ul>
                            <div className='text-[12px] md:text-[16px] font-[500] font-para py-2'>Prompt evaluation and surgical correction offer the best long-term outcomes.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage />
            </div>

            {/* faqs */}
            <div>
                <Faqs faqs={faqs}/>
            </div>
        </div>
    )
}

export default EntropionRepair