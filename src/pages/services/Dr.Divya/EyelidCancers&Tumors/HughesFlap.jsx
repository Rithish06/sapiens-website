import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const HughesFlap = () =>{

    const faqs = [
        {
            ques:"Is Hughes flap surgery painful?",
            ans:"It’s performed under anesthesia, so there is minimal discomfort. Mild swelling and tightness are common postoperatively."
        },
        {
            ques:"Will my eyelids be stuck together during healing?",
            ans:"Yes, temporarily, to ensure proper integration of the tissue. This is reversed in the second stage of surgery."
        },
        {
            ques:"Are the results long-lasting?",
            ans:"When done correctly, the Hughes flap provides durable and natural-looking outcomes."
        },
        {
            ques:" Can the procedure restore both eyelid function and appearance?",
            ans:"Yes, that’s the key goal-restoring protection, mobility and aesthetic balance."
        },
        {
            ques:"Will I need additional surgeries?",
            ans:"In some complex cases, minor refinements might be needed but most patients require no further intervention after flap separation."
        },
    ]
    
    
    const contact = [
        {
            heading:"",
            para:""
        }
    ]
  return (
    <div>
        <div>
            <Divyaservicebanner servicename = 'Hughes Flap Surgery'/>
        </div>

        <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">
            <div className="flex flex-col items-center">
                {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Hughes Flap Surgery in Malleshwaram</div> */}
                <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient mt-2">Advanced Eyelid Reconstruction for Larger Lower Eyelid Defects</div>
                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Reconstructing the delicate anatomy of the eyelids requires surgical precision, artistic finesse, and a deep understanding of ocular function. At <b>Sapiens Clinic, Malleshwaram</b>, our team offers <b>Hughes Flap Surgery</b> for patients who have large full-thickness lower eyelid defects-often due to tumor excision, trauma, or congenital conditions. This proven two-stage technique restores both the <b>functionality</b> and <b>cosmetic harmony</b> of the eyelid.</div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Hughes Flap Surgery?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2"><b>Hughes Flap Surgery</b> is a specialized two-stage reconstructive procedure used to treat <b>defects involving more than 50% of the lower eyelid margin</b>. This technique involves borrowing tissue (a tarsoconjunctival flap) from the <b>upper eyelid’s inner layer</b> and advancing it downward to rebuild the <b>posterior lamella</b> of the lower eyelid. A <b>skin graft</b> or <b>skin-muscle flap</b> is then used to reconstruct the outer (anterior) layer. After 4 to 6 weeks, the temporary connection between the eyelids is carefully separated in the second stage.</div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">When Is Hughes' Flap Needed?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">This procedure is recommended for :</div>
                        <ul className="list-disc">
                            <li>Large lower eyelid defects from <b>tumor excision</b></li>
                            <li><b>Sebaceous gland carcinoma, basal cell carcinoma</b>, or <b>squamous cell carcinoma</b></li>
                            <li>Post-traumatic full-thickness lower eyelid injuries</li>
                            <li>Reconstruction needs where primary closure or smaller flaps are insufficient</li>
                        </ul>
                    </div>
                </div>

                {/* img */}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}

                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How the Procedure Works</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Stage 1: Reconstruction</div>
                    <ul className=" list-disc ml-5 text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <li>A flap of the <b>inner upper eyelid</b> (tarsoconjunctival tissue) is carefully advanced to cover the defect in the lower eyelid.</li>
                        <li>A <b>full-thickness skin graft</b> is placed to reconstruct the outer layer, usually harvested from the upper eyelid or retroauricular area (behind the ear).</li>
                        <li>The eyelids remain temporarily joined to allow proper healing and vascular integration.</li>
                    </ul>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Healing Period (4–6 Weeks):</div>
                    <ul className=" list-disc ml-5 text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <li>The eye is protected with a bandage or shield.</li>
                        <li>Medication and antibiotic ointments are prescribed.</li>
                        <li>Patients should avoid heavy lifting, eye strain, and exposure to water.</li>
                    </ul>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Stage 2: Flap Division</div>
                    <ul className=" list-disc ml-5 text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <li>The surgeon separates the temporary connection, reestablishes the eyelid margin, and refines the contour.</li>
                        <li>Minor adjustments are made to improve both form and function.</li>
                    </ul>

                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Benefits of Hughes Flap Surgery</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li><b>Restores functional protection</b> of the eye surface</li>
                        <li>Provides <b>aesthetic symmetry</b> by recreating a natural eyelid margin</li>
                        <li>Uses <b>biocompatible tissue</b> from your own eyelid, improving healing outcomes</li>
                        <li>Ideal for larger defects that cannot be repaired with simpler techniques</li>
                    </ul>
                </div>

                {/* img */}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery and Aftercare</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Patients typically return home the same day after surgery but require follow-up visits. Postoperative care includes :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Eye protection with a patch or shield</li>
                            <li>Cold compresses for swelling</li>
                            <li>Prescribed antibiotic drops or ointments</li>
                            <li>Strict avoidance of rubbing, facial massages, or water exposure</li>
                            <li>Refraining from smoking, as it delays healing</li>
                            <li>Scheduled separation of the flap at 4-6 weeks post-surgery</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10 ">
                {/* contnent */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic, Malleshwaram?</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li>Oculoplastic specialists with deep expertise in <b>eyelid and orbital reconstruction</b></li>
                        <li>Customized surgical plans based on <b>defect size, location, and patient needs</b></li>
                        <li>Emphasis on preserving <b>visual function</b> while ensuring <b>cosmetic harmony</b></li>
                        <li>Trusted by patients in Malleshwaram for <b>comprehensive eyelid care</b></li>
                    </ul>
                </div>

                {/* img */}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book a Consultation</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you’ve undergone tumor removal, trauma, or suffer from significant eyelid defects, Hughes flap surgery could be the solution you need. Visit Sapiens Clinic, Malleshwaram for a detailed evaluation. Call now to schedule your consultation with our expert oculoplastic team.</div>
                </div>
            </div>
        </div>

        {/* contact-page */}
        <div>
            <ContactPage contacts={contact[0]}/>
        </div>

        {/* faqs */}
        <Faqs faqs={faqs}/>
    </div>
  )
}

export default HughesFlap