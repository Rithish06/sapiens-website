import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const Evisceration = () => {

    const faqs = [
        {
            ques:"Will I lose vision in the eye after evisceration?",
            ans:"Yes, evisceration is performed on a blind or severely damaged eye. The procedure does not preserve vision but helps relieve pain, prevent further complications, and allow for cosmetic rehabilitation with a prosthetic eye."
        },
        {
            ques:"How is evisceration different from enucleation?",
            ans:"Evisceration removes the contents of the eye but leaves the outer white layer (sclera) and optic nerve intact. Enucleation removes the entire eyeball. Evisceration typically offers better cosmetic outcomes and quicker recovery."
        },
        {
            ques:"Will I be able to wear a prosthetic eye after surgery?",
            ans:"Yes, a custom-fit ocular prosthesis can be placed after healing, usually 6–8 weeks post-surgery. It matches the appearance of your natural eye and moves in coordination with your remaining eye."
        },
        {
            ques:"Is evisceration painful?",
            ans:"The procedure is performed under anesthesia, so you won't feel pain during surgery. Mild discomfort or swelling is common afterward but is manageable with prescribed painkillers and cold compresses."
        },
        {
            ques:"How long is the recovery period?",
            ans:"Most patients recover enough to resume routine activities within 2 weeks. Full healing takes around 4-6 weeks, after which the prosthetic eye is fitted."
        },
    ]


    const contact =[
        {
            heading:"",
            para:""
        }
    ]
  return (
    <div>
        <div>
            <Divyaservicebanner servicename = 'Evisceration Surgery'/>
        </div>

        <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

            {/* container 1 */}
            <div className="flex flex-col items-center">
                {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Evisceration Surgery at Sapiens Clinic, Malleshwaram</div> */}
                <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Focused Surgical Precision. Compassionate Eye Care.</div>
                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Evisceration is a specialized surgical procedure involving the removal of the <b>intraocular contents</b> while preserving the <b>outer shell of the eye (sclera)</b> and <b>optic nerve</b>. In some cases, the <b>cornea may also remain intact</b>. At <b>Sapiens Clinic, Malleshwaram</b>, this procedure is performed when preserving the eye’s structure offers better cosmetic results and socket support for prosthesis.</div>
            </div>

            {/* container 2 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Is Evisceration Performed?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Evisceration is usually recommended in cases such as :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li><b>Painful blind eye</b></li>
                            <li><b>End-stage eye disease </b>(e.g., glaucoma, diabetic retinopathy)</li>
                            <li><b>Severe ocular trauma</b></li>
                            <li><b>Chronic intraocular infections </b>(e.g., endophthalmitis)</li>
                            <li><b>Failed previous eye surgeries</b></li>
                        </ul>
                        <div className="mt-2">This approach offers benefits such as :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Shorter surgical time</li>
                            <li>Less postoperative inflammation and scarring</li>
                            <li>Preservation of orbital anatomy</li>
                            <li>Improved implant motility and cosmetic outcomes</li>
                            <li>Reduced risk of superior sulcus hollowing</li>
                        </ul>
                    </div>
                </div>

                {/* img */}
            </div>

            {/* container 3 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Procedure Overview</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Performed under <b>retrobulbar anesthesia with sedation or general anesthesia</b>, evisceration involves :</div>
                        <ol className="list-decimal ml-5 mt-2">
                            <li>Making a <b>360° limbal peritomy</b> to access the inner eye.</li>
                            <li>Removing <b>intraocular contents</b> using surgical tools while leaving the <b>scleral shell intact</b>.</li>
                            <li>Preparing the scleral cavity and making precise <b>scleral windows</b> for improved implant integration.</li>
                            <li>Inserting a <b>biocompatible orbital implant</b> (typically 14mm–18mm) into the cavity</li>
                            <li>Closing the sclera, Tenon’s capsule, and conjunctiva with layered sutures.</li>
                            <li>Applying a <b>conformer</b> to maintain socket shape and <b>pressure patching</b> for healing support.</li>
                        </ol>

                        <div className="mt-2">An <b>ocular prosthesis</b> is fitted 6–8 weeks later once healing is complete.</div>
                    </div>
                </div>
            </div>

            {/* container 4 */}

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Potential Risks</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">While the procedure is safe under expert care, the following risks may occur :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li><b>Infection or hemorrhage</b></li>
                            <li><b>Implant extrusion or migration</b></li>
                            <li><b>Socket contraction</b></li>
                            <li><b>Upper eyelid drooping (ptosis)</b></li>
                            <li><b>Cyst formation</b></li>
                            <li><b>Lower lid laxity or ectropion</b></li>
                        </ul>

                        <div className="mt-2">At Sapiens Clinic, every effort is made to minimize complications through precision surgery and dedicated postoperative care.</div>
                    </div>
                </div>

                {/* img */}
            </div>

            {/* container 5 */}

            <div className="flex flex-col lg:flex-row items-center gpa-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-orange-gradient">Pre-Surgery Considerations</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Prior to the procedure :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>A full ocular and medical evaluation will be conducted.</li>
                            <li>You’ll be advised to <b>stop blood-thinning medications</b> (e.g., aspirin, warfarin) 2 weeks in advance.</li>
                            <li>Our oculoplastic team will walk you through the procedure, outcomes and prosthetic options.</li>
                        </ul>

                        <div className="mt-2">If you’re experiencing pain or cosmetic discomfort from a non-functional eye, our team will guide you through the next steps with clarity and support.</div>
                    </div>
                </div>
            </div>

            {/* container 6 */}

            <div className="flex flex-col-reverse lg:flex-row items-centet gap-10 mt-10">
                {/* contnet */}
                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                    <div className="mt-2">After surgery, you’ll be sent home with a conformer in place and medications for pain management and infection prevention.</div>

                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Your recovery plan includes :</div>
                    <ul className="list-disc ml-5 mt-2">
                        <li><b>Avoid rubbing the eyelid or applying pressure</b></li>
                        <li><b>Avoid water exposure and swimming</b> for 2 weeks</li>
                        <li><b>Apply antibiotic ointment </b>twice daily</li>
                        <li><b>No heavy lifting or strenuous activity </b>for at least 2 weeks</li>
                        <li><b>Regular follow-up visits</b>to monitor healing</li>
                    </ul>

                    <div className="mt-2">By week 6-8, our prosthetic team will design a <b>custom-fit artificial eye</b> for a natural look and improved comfort.</div>
                </div>

                {/* img */}
            </div>

            {/* container 7 */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* contnet */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic, Malleshwaram?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Our clinic specializes in oculoplastic surgery, offering advanced eye socket procedures with exceptional cosmetic and functional outcomes. Patients across Malleshwaram trust us for :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li><b>Expert-led surgeries</b>using state-of-the-art techniques</li>
                            <li><b>Custom prosthesis fitting</b></li>
                            <li><b>Compassionate care through every step</b></li>
                        </ul>

                        <div className="mt-2">We focus on preserving your quality of life-physically and emotionally-through a highly personalized care plan.</div>
                    </div>
                </div>
            </div>

            {/* container 8 */}

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Cost of Evisceration Surgery in Malleshwaram</div>
                    <div className="text-[12px] md:text-[16 px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">The cost depends on :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Type and size of implant used</li>
                            <li>Fixation technique selected</li>
                            <li>Complexity of the case</li>
                            <li>Surgeon’s expertise and follow-up requirements</li>
                        </ul>

                        <div className="mt-2">You’ll receive a transparent cost estimate after your initial consultation and evaluation.</div>
                    </div>
                </div>

                {/* img */}
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

export default Evisceration