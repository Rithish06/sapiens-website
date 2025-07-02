import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import ContactPage from '../ContactPage/ContactPage'
import Contact from '../../contactUs/Contact'
import { Helmet } from 'react-helmet'

const Blepharophimosis = () => {

    const faqs = [
        {
            ques: "At what age is blepharophimosis surgery typically performed?",
            ans: "Surgery is usually done between 3 to 5 years of age, once the facial structures are developed and before the condition affects visual development."
        },
        {
            ques: "Is the surgery painful?",
            ans: "No. The procedure is done under general anesthesia, and any post-surgical discomfort is usually mild and well-managed with medications."
        },
        {
            ques: "Will this surgery improve my child's vision?",
            ans: "Yes. By correcting droopy eyelids and misaligned canthi, the surgery can prevent vision problems and improve both function and appearance."
        },
        {
            ques: "How long is the recovery period?",
            ans: "Most children recover in about 4 to 6 weeks, with stitches typically removed after a week and visible improvement within a few days."
        },
        {
            ques: "Is the surgery done in one stage or multiple stages?",
            ans: "Depending on the severity, it may be done in a single-stage or multi-stage approach, as determined by the oculoplastic surgeon during evaluation."
        },
    ]


    return (
        <div>

            <Helmet>
                <title>Dr. Divya D Sundaresh - Blepharophimosis Surgeon Bangalore</title>
                <meta name="description" content='Dr. Divya D Sundaresh provides expert blepharophimosis surgery in Bangalore, Karnataka for improved eyelid function and appearance.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Blepharophimosis Correction Surgery' />
            </div>


            <div className='lg:mx-20 mx-5 xs:mt-29  md:mt-10 mt-10 '>

                {/* container 1 */}
                <div className='flex flex-col items-center'>
                    {/* <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Blepharophimosis Correction Surgery in Malleshwaram</div> */}
                    <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Advanced Surgical Care for Congenital Eyelid Disorders</div>
                    <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2'>Blepharophimosis syndrome (BPES) is a rare congenital condition that primarily affects the eyelids, resulting in narrowed eye openings, droopy lids (ptosis), and a skin fold near the inner corner of the eyes (epicanthus inversus). These features not only affect the cosmetic appearance but can significantly impair vision and daily function, particularly in children.
                        At <b>Sapiens Clinic, Malleshwaram</b>, we offer specialized oculoplastic interventions to correct the eyelid abnormalities caused by BPES and restore both function and appearance. Our experienced team handles complex eyelid surgeries with precision, ensuring optimal outcomes for patients of all ages
                    </div>
                </div>

                {/* container 2 */}
                <div className='flex lg:flex-row flex-col md:gap-10 gap-5 mt-10 items-center'>
                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Understanding Blepharophimosis Syndrome</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>Blepharophimosis syndrome typically presents at birth and includes :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li><b>Blepharophimosis:</b> Horizontal narrowing of the eye opening</li>
                                <li><b>Ptosis:</b> Drooping of the upper eyelid</li>
                                <li><b>Epicanthus inversus:</b> An upward fold of skin from the lower eyelid, near the inner corner of the eye</li>
                                <li><b>Telecanthus:</b> Abnormally wide spacing between the eyes</li>
                            </ul>

                            <div className='mt-2 leading-5'>In some cases (Type I), the condition may also involve <b>premature ovarian insufficiency</b> in females, affecting fertility. Type II presents only with the facial features.</div>
                        </div>
                    </div>
                </div>

                {/* container 3 */}

                <div className='flex lg:flex-row flex-col-reverse md:gap-10 gap-5 mt-10 items-center'>
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:20px lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Symptoms You Shouldn’t Ignore</div>
                        <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc ml-5 mt-2 leading-7'>
                            <li>Small or narrow-appearing eyes</li>
                            <li>Drooping eyelids obstructing vision</li>
                            <li>Difficulty opening eyes fully</li>
                            <li>Constant head tilting to see better</li>
                            <li>Poor or delayed visual development in children</li>
                            <li>Possible fertility concerns in female patients (Type I only)</li>
                        </ul>
                        <div className='text-[12px] md:text-[16px] font-para font-[500] mt-2 leading-5'>Other associated signs include lazy eye (amblyopia), strabismus (crossed eyes), and short distance between the nose and upper lip.</div>
                    </div>

                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 4 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>
                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Causes of Blepharophimosis</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para leading-6'>The syndrome is usually caused by a mutation in the <b>FOXL2 gene</b>, which affects eyelid muscle development and, in females, ovarian function. It is inherited in an <b>autosomal dominant pattern</b>, meaning a parent with the condition has a 50% chance of passing it on.</div>

                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-10'>Diagnosis and Preoperative Evaluation</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='ml-2 leading-5'>A full ophthalmic evaluation is essential to diagnose BPES and plan corrective surgery. During your consultation at Sapiens Clinic:</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li>A detailed <b>eye examination</b> will be performed</li>
                                <li>The <b>patient’s medical history</b> and family background will be reviewed</li>
                                <li>Tests for <b>visual acuity and eyelid function</b> will be conducted</li>
                                <li>In female patients with suspected Type I, hormonal and ovarian assessments may be recommended</li>
                            </ul>

                            <div className='mt-2'>Based on this evaluation, a tailored surgical plan will be created.</div>
                        </div>
                    </div>

                </div>

                {/* container 5 */}

                <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10 '>
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-10'>Surgical Management of Blepharophimosis</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para mt-2 leading-6'>Surgery is the gold standard for correcting blepharophimosis and its associated eyelid deformities. Our surgeons perform either <b>single-stage </b>or <b>multi-stage surgeries</b>, depending on the patient’s age, severity of symptoms, and aesthetic considerations.</div>

                        <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent md:mt-10 mt-5'>Single-Stage Approach (Most Common at Sapiens Clinic)</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para '>
                            <div className='mt-2'>This combines multiple procedures into one surgical session :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li><b>Lateral Canthotomy</b> : To increase the horizontal eye opening</li>
                                <li><b>Medial Canthoplasty with transnasal wiring </b>: To reposition and shorten the inner eye corners</li>
                                <li><b>Frontalis Suspension</b> using fascia lata : To elevate the eyelid using the forehead muscle</li>
                            </ul>

                            <div className='mt-2 leading-5'>The surgery is performed under general anesthesia. If fascia lata (tissue graft) is needed, it is harvested from the thigh.</div>
                        </div>
                        <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Multi-Stage Approach</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para mt-2 leading-5'>In younger children or in cases where complexity is high, the procedures may be spaced out over months to years to ensure safe and staged correction.</div>
                    </div>

                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                </div>

                {/* container 6 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>
                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Postoperative Recovery and Care</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>After surgery, you or your child will be given :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li>Antibiotic eye drops and ointments</li>
                                <li>Pain-relieving medications</li>
                                <li>Instructions for gentle cleaning and cold compress application</li>
                                <li>Regular follow-up appointments for stitch removal and healing checks</li>
                            </ul>

                            <div className='mt-2'>Most patients begin to see functional and aesthetic improvement within weeks, with full recovery in 1–2 months.</div>
                        </div>
                    </div>

                </div>

                {/* container 7 */}

                <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10'>
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Why Choose Sapiens Clinic for Blepharophimosis Surgery?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2 leading-5'>Located in the heart of Malleshwaram, Sapiens Clinic is known for its advanced oculoplastic care and a patient-first approach. Our experienced surgical team offers :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li>Accurate diagnosis and personalized treatment plans</li>
                                <li>Expertise in both functional and cosmetic eyelid correction</li>
                                <li>Child-friendly environment and pre/post-operative support</li>
                                <li>Meticulous attention to symmetry, aesthetics, and vision restoration</li>
                            </ul>

                            <div className='mt-2 leading-5'>We work closely with pediatricians and endocrinologists when needed, especially in Type I BPES cases involving hormonal issues.</div>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 8 */}

                <div className='flex lg:flex-row flex-col items-center gap-5 lg:gap-0 mt-10'>
                    {/* img */}
                    {/* <div className=' lg:w-[35%]'>
                        <img src={assets.eximg} className=' lg:w-[84%]' alt="" />
                    </div> */}
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Cost of Blepharophimosis Surgery in Malleshwaram</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-2'>The cost of blepharophimosis surgery varies based on :</div>
                            <ul className='list-disc leading-7 ml-5 mt-2'>
                                <li>The severity of eyelid malformation</li>
                                <li>Whether the surgery is single-stage or multi-stage</li>
                                <li>Need for grafting or additional procedures</li>
                                <li>Duration and frequency of follow-ups</li>
                            </ul>

                            <div className='mt-2 leading-5'>Our team will provide a transparent breakdown of the treatment plan and pricing during your consultation.</div>

                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Don’t Delay Vision Correction</div>
                            <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7'>Blepharophimosis can severely impact a child’s visual development and self-confidence. Early evaluation and timely surgery can prevent complications such as lazy eye, poor academic performance, and social challenges.
                                Book a consultation at <b>Sapiens Clinic, Malleshwaram</b> and let our experts guide you through the safest and most effective path to visual and cosmetic improvement.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* container 9 */}
            <div>
                <ContactPage />
            </div>

            {/* container 10 */}

            <div>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default Blepharophimosis