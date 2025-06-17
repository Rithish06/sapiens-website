import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import { useForm } from "react-hook-form";
import ContactPage from '../ContactPage/ContactPage';

const SurgicalBlepharoplasty = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    // console.log(watch("example"))

    const faqs = [
        {
            ques: "Is eyelid surgery painful?",
            ans: "Most patients experience only mild discomfort. Swelling and tightness are common but manageable with cold compresses and medications."
        },
        {
            ques: "What’s the best age to get blepharoplasty?",
            ans: "There is no fixed age, but most candidates are 35 and older. If droopy eyelids affect vision or appearance earlier, surgery can be considered sooner."
        },
        {
            ques: "Will I have visible scars?",
            ans: "Incisions are made in natural creases or inside the eyelid, making scars minimal and usually barely noticeable once healed."
        },
        {
            ques: "Does insurance cover this surgery?",
            ans: "When done for functional reasons (e.g., impaired vision), insurance may partially cover the cost. Purely cosmetic blepharoplasty is usually not covered."
        },
        {
            ques: "How long do the results last?",
            ans: "Upper eyelid surgery can last 5-7 years or longer. Lower eyelid surgery is often permanent and rarely needs repeating."
        },
        {
            ques: "Can it be combined with other procedures?",
            ans: "Yes. Blepharoplasty is often performed alongside brow lifts, laser treatments, or mid-face rejuvenation for more balanced results."
        },
    ]

    const contact = [
        {
            heading: "",
            para: ""
        }
    ]
    return (
        <div>
            <div className=''>
                <div>
                    <Divyaservicebanner />
                </div>

                <div className='lg:mx-20 md:mx-10 my-5 mx-5 xs:mt-25 md:mt-10'>
                    {/* container 1 */}
                    <div className='flex flex-col  items-center'>
                        <div className=" flex text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading  bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent ">Rejuvenate Your Eyes and Improve Vision with Safe, Precise Eyelid Correction</div>
                        <div className='text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para leading-loose mt-5'>As we age, the delicate skin around our eyes begins to lose elasticity. Over time, this leads to drooping upper eyelids, puffy lower lids, and an overall tired or aged appearance. In some cases, excess skin on the upper eyelids can even interfere with vision.
                            <b> Blepharoplasty</b>, or eyelid surgery, is a surgical procedure that removes or repositions excess skin, fat, and muscle from the upper and/or lower eyelids. While it is often performed for cosmetic enhancement, it can also restore a clearer visual field when sagging eyelids obstruct sight.
                            At <b>Sapiens Clinic</b>, we perform blepharoplasty with the highest standards of precision, safety, and aesthetic balance - giving you refreshed eyes and renewed confidence.</div>
                    </div>

                    {/* container 2 */}
                    <div className='flex lg:flex-row flex-col items-center mt-10 gap-10 '>
                        {/* Img */}
                        <div className='lg:w-[35%] flex justify-center'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>
                        {/* Content */}
                        <div className='m-5 mt-5 lg:w-[65%]'>
                            <div className=' text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Is Blepharoplasty?</div>
                            <div className=' text-[12px] md:text-[16px] lg:text-[16px] font-para font-[500] '>Blepharoplasty is a corrective eyelid surgery that aims to :</div>
                            <ul className=' text-[12px] md:text-[16px] list-disc font-para lg:text-[16px] font-[500] md:leading-8 leading-6  ml-5'>
                                <li>Remove loose, sagging skin on the upper eyelids</li>
                                <li>Reduce puffiness or bags under the lower eyelids</li>
                                <li>Tighten and contour the muscles and tissues around the eyes</li>
                                <li>Improve symmetry and restore a more youthful, alert look</li>
                            </ul>
                            <div className='text-[12px] md:text-[16px] lg:text-[16px] font-para font-[500] pt-2 md:leading-7 leading-6'>While blepharoplasty won't eliminate dark circles or crow’s feet, it can be combined with other procedures like brow lifts or laser resurfacing for more comprehensive facial rejuvenation.
                                For patients whose upper eyelid skin affects their line of sight, this surgery also serves a functional purpose - improving both appearance and visual capacity.
                            </div>
                        </div>
                    </div>

                    {/* container 3 */}

                    <div className='mt-10 m-5 flex lg:flex-row flex-col-reverse items-center gap-10 '>
                        {/* Content */}
                        <div className='lg:w-[65%]'>
                            <div className=' text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Who Is an Ideal Candidate?</div>
                            <div className='text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para leading-6'>
                                <div className='md:my-2 '>You may be a good candidate for eyelid surgery if :</div>
                                <ul className='list-disc md:ml-10 ml-5 md:leading-8'>
                                    <li>You are generally healthy and over the age of 30</li>
                                    <li>You have loose, sagging eyelid skin or under-eye bags</li>
                                    <li>You feel that your eyes appear tired, heavy, or aged</li>
                                    <li>You have no serious eye conditions like glaucoma or chronic dry eye</li>
                                    <li>You have realistic expectations about the outcome</li>
                                </ul>
                                <div className='my-2 leading-7'>If you have thyroid disorders, diabetes, cardiovascular issues, or have undergone previous eye surgery, it’s important to discuss your medical history with your surgeon beforehand.</div>
                            </div>

                        </div>
                        {/* Img */}
                        <div className='lg:w-[35%]'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>
                    </div>

                    {/* container 4 */}

                    <div className='mt-10 flex lg:flex-row flex-col items-center gap-10'>
                        {/* Img */}
                        <div className='lg:w-[35%]'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>
                        {/* Content */}
                        <div className='mt-5 lg:w-[65%]'>
                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Preparing for the Procedure</div>
                            <div className='text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para leading-6'>
                                <div className='md:my-2 md:leading-8'>Before your blepharoplasty :</div>
                                <ul className='list-disc md:ml-10 ml-5 md:leading-8'>
                                    <li>You’ll undergo a medical evaluation or basic lab tests</li>
                                    <li>You may be advised to stop certain medications like aspirin, anti-inflammatories, and herbal supplements</li>
                                    <li>Smoking should be avoided to ensure proper healing</li>
                                    <li>You’ll need to arrange someone to accompany you home and stay with you after the surgery</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* container 5 */}

                    <div className='mt-10 m-5 flex lg:flex-row flex-col-reverse items-center gap-10'>

                        {/* Content */}
                        <div className='mt-5 lg:w-[65%]'>
                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent py-2'>How Eyelid Surgery Is Performed</div>
                            <div className='text-[12px] lg:text-[16px] md:text-[16px] font-[500] font-para leading-5 md:leading-7'>Blepharoplasty may involve your upper eyelids, lower eyelids, or both, depending on your needs. The procedure is performed under local anesthesia with sedation or, in some cases, general anesthesia.</div>
                            <div className='text-[15px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent py-2'>Upper Eyelid Blepharoplasty</div>
                            <ul className='list-disc font-para lg:text-[16px] md:text-[16px] text-[12px] ml-5 font-[500] md:ml-10 md:leading-8 leading-6'>
                                <li>Incisions are made within the natural eyelid crease</li>
                                <li>Excess skin, fat, and muscle are removed or repositioned</li>
                                <li>Incisions are closed with fine sutures for minimal visible scarring</li>
                            </ul>
                            <div className='text-[15px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent py-2'>Lower Eyelid Blepharoplasty</div>
                            <ul className='list-disc lg:text-[16px] md:text-[16px] text-[12px] ml-5 font-[500] font-para md:ml-10 md:leading-8 leading-6'>
                                <li>Incision is made just beneath the lower lash line or inside the lower lid (transconjunctival approach)</li>
                                <li>Fat deposits are removed or redistributed to smooth puffiness</li>
                                <li>Skin may be tightened, and the incision is closed</li>
                            </ul>
                            <div className='text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para pt-2'>A full procedure (upper + lower) typically takes around 1.5 to 2 hours.</div>
                        </div>

                        {/* Img */}
                        <div className='lg:w-[35%]'>
                            <img className='lg:w-[35%]' src={assets.eximg} alt="" />
                        </div>
                    </div>

                    {/* container 6 */}

                    <div className='mt-10 m-5 flex lg:flex-row flex-col items-center gap-10'>
                        
                        {/* Img */}
                        <div className='lg:w-[35%]'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>

                        {/* Content */}
                        <div className='lg:w-[65%]'>
                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent py-2'>Recovery and Aftercare</div>
                            <div className='text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para'>After surgery :</div>
                            <ul className='list-disc text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para md:ml-10 md:leading-8 leading-6 ml-5'>
                                <li>You may experience mild swelling, bruising, and tightness for a few days</li>
                                <li>You may experience mild swelling, bruising, and tightness for a few days</li>
                                <li>Stitches (if used) are usually removed after 5–7 days</li>
                                <li>Avoid strenuous activity, direct sun exposure, and eye strain for 1–2 weeks</li>
                            </ul>
                            <div className='text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para pt-2 leading-5 md:leading-7'>Most patients feel comfortable resuming public activities within 10–14 days. Full healing may take several weeks to a few months, but the results are long-lasting.</div>
                        </div>
                    </div>

                    {/* container 7 */}

                    <div className='flex lg:flex-row flex-col-reverse items-center gap-10 mt-10'>

                        {/* Content */}
                        <div className='lg:w-[65%]'>
                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent py-2'>Benefits of Blepharoplasty</div>
                            <ul className='list-disc text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para md:ml-10 md:leading-8 leading-6 ml-5'>
                                <li>Brighter, more youthful-looking eyes</li>
                                <li>Reduction of eyelid droopiness or under-eye bags</li>
                                <li>Improved symmetry of the eyes</li>
                                <li>In some cases, expanded field of vision</li>
                                <li>Boosted confidence and facial harmony</li>
                            </ul>

                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent lg:py-2 py-1'>Risks and Complications</div>
                            <div className='text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para pt-2 leading-5'>While complications are rare, it's important to be aware of possible risks :</div>
                            <ul className='list-disc lg:text-[16px] md:text-[16px] text-[12px] font-[500] font-para md:ml-10 md:leading-8 leading-6 ml-5'>
                                <li>Bleeding or bruising</li>
                                <li>Infection</li>
                                <li>Dry or irritated eyes</li>
                                <li>Scarring or pigmentation changes</li>
                                <li>Difficulty closing the eyes fully (temporary or permanent)</li>
                                <li>Eyelid asymmetry</li>
                                <li>Rare vision disturbances</li>
                            </ul>
                            <div className=' text-[12px] md:text-[16px] lg:text-[16px] font-[500] font-para pt-2 leading-5 md:leading-7'>These can be minimized through skilled surgical technique and adherence to postoperative instructions.</div>
                        </div>

                        {/* Img */}
                        <div className='lg:w-35%'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage contacts={contact[0]}/>
            </div>

            {/* faqs */}
            <div>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default SurgicalBlepharoplasty