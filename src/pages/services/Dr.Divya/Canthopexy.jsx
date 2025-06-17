import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs';
import ContactPage from '../ContactPage/ContactPage';

const Canthopexy = () => {

    const faqs =[
        {
            ques:"Is the procedure painful?",
            ans:"It’s typically performed under local anesthesia. Any post-op discomfort is minor and manageable with medication."
        },
        {
            ques:"How long do the results last?",
            ans:"Results are long-lasting, especially when performed in healthy, stable eyelid anatomy."
        },
        {
            ques:"Can the surgery be reversed?",
            ans:"Since it structurally alters the eye’s lateral support, reversal is complex. Proper pre-evaluation is key to achieving desired outcomes."
        },
        {
            ques:"Will there be scars?",
            ans:"Incisions are hidden in the natural folds near the eyelid corner and usually fade well over time."
        },
        {
            ques:"When can I wear contact lenses again?",
            ans:"We recommend waiting at least 2–3 weeks before resuming contact lens use, once healing is complete."
        }
    ];

    const contact = [
        {
            heading:"",
            para:""
        }
    ]


    return (
        <div>
            <div>
                <Divyaservicebanner />
            </div>
            <div className='lg:mx-20 xs:mt-29 md:mt-10 mt-10 mx-5'>

                {/* container 1 */}
                <div className=' flex flex-col items-center'>
                    <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Canthopexy Surgery in Malleshwaram, Bangalore</div>
                    <div className='text-[18px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Rejuvenate Droopy Eyes and Restore Youthful Eye Contours</div>
                    <div className='text-[12px] md:text-[16px] font-[500] font-para leading-7'><b>Canthopexy</b> is a specialized oculoplastic procedure that lifts and tightens the outer corners of the eyes, providing both aesthetic enhancement and structural support. At <b>Sapiens Clinic, Malleshwaram</b>, we perform advanced canthopexy to correct sagging lower eyelids, improve eye symmetry and redefine the natural shape of the eyes for a refreshed, youthful appearance.
                        Whether due to aging, laxity, or a cosmetic preference, many individuals seek this minimally invasive treatment to enhance the definition and alignment of the eyes - without compromising their natural expressions.
                    </div>
                </div>

                {/* container 2 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>
                    {/* img */}
                    <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div>
                    
                    {/* content */}
                    <div className='lg:w-[65%]'>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Is Canthopexy?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para mt-5 leading-7'>Canthopexy is a corrective eyelid procedure that focuses on repositioning and strengthening the outer corner of the eye (lateral canthus). With age or anatomical variations, the lower eyelid can begin to droop or sag, causing aesthetic concerns and sometimes discomfort. This condition may make the eyes appear tired, asymmetric, or prematurely aged.
                            By gently lifting and tightening the lower lid, canthopexy helps restore a smoother eyelid contour and offers improved support to the eye. It can also be combined with other procedures like blepharoplasty or canthoplasty for comprehensive aesthetic correction.
                        </div>
                    </div>

                </div>

                {/* container 3 */}

                <div className='flex lg:flex-row flex-col-reverse md:gap-10 items-center gap-5 mt-10'>

                    {/* content */}
                    <div className='lg:w-[65%]'>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Who Is an Ideal Candidate?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5'>Canthopexy may be right for you if you :</div>
                            <ul className='list-disc leading-7 ml-5'>
                                <li>Have sagging or droopy lower eyelids</li>
                                <li>Desire a more defined or lifted outer eye shape</li>
                                <li>Experience eyelid laxity due to aging</li>
                                <li>Seek a subtle “almond-shaped” or cat-eye contour</li>
                                <li>Are in good general health and have <b> realistic expectations</b></li>
                            </ul>

                            <div className='mt-5'>Candidates should <b>not have active eye infections</b> and must disclose any previous eye surgeries or chronic conditions for proper evaluation.</div>
                        </div>
                    </div>

                    {/* img */}
                    <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div>
                </div>

                {/* container 4 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-5'>

                    {/* img */}
                    <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div>

                    {/* content */}
                    <div className='lg:w-[65%]'>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Why Choose Canthopexy ?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para mt-5'>This procedure offers both functional and cosmetic benefits:</div>

                        <div className='flex lg:flex-row flex-col mt-5 gap-10'>
                            <div>
                                <div className='text-[14px] md:text[18px] lg:text-[20px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Advantages :</div>
                                <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc ml-5 mt-5 leading-7'>
                                    <li>Lifts and rejuvenates the lower eyelid, enhancing youthful appearance</li>
                                    <li>Reduces signs of fatigue and corrects sagging or outward-turning lids</li>
                                    <li>Enhances eye symmetry and improves overall facial harmony</li>
                                    <li>May reduce dry eye symptoms by improving eyelid support</li>
                                    <li>Often chosen to complement other eye surgeries or aesthetic goals</li>
                                </ul>
                            </div>

                            <div>
                                <div className='text-[14px] md:text-[18px] lg:text-[20px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Considerations :</div>
                                <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc ml-5 mt-5 leading-7'>
                                    <li>Recovery may take 2-4 weeks depending on healing</li>
                                    <li>Some swelling or bruising is normal post-surgery</li>
                                    <li>The changes to the eye shape are long-lasting and not easily reversible</li>
                                    <li>Requires precision and experience to avoid asymmetry</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* container 5 */}


                <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10'>

                    {/* content */}
                    <div className='lg:w-[65%]'>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>How the Procedure Is Performed</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5'>At Sapiens Clinic, the surgery is typically done under <b>local anesthesia with sedation</b>, ensuring patient comfort while minimizing downtime. The steps include :</div>
                            <ol className='list-decimal ml-5 mt-5 leading-8'>
                                <li>A small <b>incision is made near the outer corner of the eye</b></li>
                                <li>The <b>lateral canthus is lifted and secured</b> to the underlying bone (orbital rim) using fine sutures</li>
                                <li>The incision is carefully closed to ensure minimal scarring and optimal healing</li>
                            </ol>

                            <div className='mt-5'>The entire procedure takes about <b>30 to 60 minutes</b> and is performed as an outpatient procedure.</div>
                        </div>
                    </div>

                    {/* img */}
                    <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div>
                </div>

                {/* container 6 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>

                    {/* img */}
                    <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div>

                    {/* content */}
                    <div className='lg:w-[65%]'>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Preparing for Surgery</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5'>During your detailed pre-surgical consultation, our team will :</div>
                            <ul className='list-disc ml-5 leading-8 mt-5'>
                                <li>Assess your <b>eyelid structure and overall eye health</b></li>
                                <li>Review your medical history and current medications</li>
                                <li>
                                    Provide a <b>customized pre-op checklist</b>, which includes :
                                    <ul className='list-disc ml-5 leading-8 mt-2'>
                                        <li>Avoiding blood-thinning medications as advised</li>
                                        <li>Not using eye makeup on the day of surgery</li>
                                        <li>Arranging a caregiver to accompany you post-procedure</li>
                                        <li>Planning adequate rest and minimal screen time for the first few days</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* container 7 */}
                <div className='flex lg:flex-row flex-col-reverse md:gap-10 gap-5 mt-10'>

                    {/* content */}
                    <div className='lg:w-[65%]'>
                        <div className='text-[14px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Recovery & Aftercare</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5 leading-7'>Canthopexy recovery is generally quicker than many other eyelid procedures. Here’s what to expect :</div>
                            <ul className='list-disc leading-8 ml-5 mt-5'>
                                <li>Mild to moderate swelling and bruising for 1–2 weeks</li>
                                <li>Temporary sensitivity or dryness in the eyes</li>
                                <li>Avoiding contact lenses, eye rubbing, makeup, and heavy activities for at least 2 weeks</li>
                                <li>Keeping the head elevated while sleeping and using cold compresses to reduce swelling</li>
                                <li>Following prescribed topical ointments and oral medications as advised</li>
                            </ul>

                            <div className='mt-5 leading-7'>Stitches are usually removed after 5–7 days, and patients typically return to routine activities within 10–14 days.</div>
                        </div>
                    </div>

                    {/* img */}

                    <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div>

                </div>

                {/* container 8 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>
                    <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div>

                    <div className='lg:w-[65%]'>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Canthopexy vs. Other Eye Procedures</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5 leading-7'>Canthopexy is often confused with <b>canthoplasty</b>, but they differ in technique and intention. While canthoplasty <b>alters the shape of the eyelid</b>, canthopexy <b>strengthens and supports</b> the existing eyelid position without changing its natural anatomy. It’s also commonly combined with procedures like :</div>
                            <ul className='list-disc ml-5 leading-8 mt-5'>
                                <li><b>Blepharoplasty</b> (eyelid lift)</li>
                                <li><b>Epicanthoplasty</b> (inner corner reshaping)</li>
                                <li><b>Botox or fillers</b> for brow lifting or wrinkle softening</li>
                            </ul>

                            <div className='mt-5 leading-7'>At Sapiens Clinic, we guide you in selecting the right combination based on your aesthetic goals and structural needs.</div>
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
                <Faqs faqs={faqs}/>
            </div>
        </div>
    )
}

export default Canthopexy