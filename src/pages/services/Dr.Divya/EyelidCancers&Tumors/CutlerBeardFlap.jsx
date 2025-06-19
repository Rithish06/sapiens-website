import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const CutlerBeardFlap = () => {

    const faqs = [
        {
            ques:"How long does Cutler-Beard surgery take to complete?",
            ans:"The full procedure spans 6-8 weeks, including the flap creation and later division."
        },
        {
            ques:"Will I be able to see during the healing phase?",
            ans:"Since the eyelids remain temporarily connected, vision from the affected eye may be limited until flap division."
        },
        {
            ques:"Are scars visible after surgery?",
            ans:"Scars are minimal and generally well-concealed in the natural eyelid creases."
        },
        {
            ques:"What is the success rate of this surgery?",
            ans:"When performed by experienced oculoplastic surgeons, the Cutler-Beard flap offers excellent functional and cosmetic outcomes."
        },
        {
            ques:"Is it safe for older adults?",
            ans:"Yes, it is commonly performed in both younger and elderly patients, depending on the indication."
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
            <Divyaservicebanner servicename = 'Cutler-Beard Flap Surgery'/>
        </div>

        <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">
            <div className="flex flex-col items-center">
                {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Cutler-Beard Flap Surgery in Malleshwaram</div> */}
                <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient mt-2">Reconstructive Eyelid Surgery for Full-Thickness Upper Eyelid Defects</div>
                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Eyelid reconstruction demands surgical precision, especially when the upper eyelid is severely affected by tumors, trauma, or congenital defects. At <b>Sapiens Clinic, Malleshwaram</b>, we offer <b>Cutler-Beard Flap Surgery</b>, a two-stage lid-sharing procedure designed to restore both the form and function of the upper eyelid when more than 50% of the lid is lost.</div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Cutler-Beard Flap Surgery?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className=""><b>Cutler-Beard Flap</b> is a full-thickness reconstructive surgery that uses tissue from the <b>lower eyelid</b> to restore large defects of the <b>upper eyelid</b>. The lower eyelid acts as a donor site, providing a <b>skin-muscle-conjunctival flap</b> that bridges the gap in the upper eyelid. This approach is especially helpful in patients who have undergone extensive tumor removal from the upper lid.</div>
                        <div className="mt-2">Although the reconstructed eyelid may not function identically to the original, this procedure allows for excellent <b>protective coverage</b>, maintains <b>eyelid mobility</b>, and offers <b>aesthetic improvement</b>. To enhance structural support, materials like <b>tarsoconjunctival grafts, cartilage</b> or even <b>Achilles tendon allografts</b> may be used to replicate the missing tarsus.</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">When Is It Needed?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">The Cutler-Beard technique is typically used when :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>The upper eyelid defect involves more than <b>50–100%</b> of its horizontal length</li>
                            <li>Eyelid tumors (e.g., sebaceous carcinoma, melanoma) have necessitated wide excision</li>
                            <li>Other reconstruction options are not viable due to lack of sufficient local tissue</li>
                            <li>Preservation of eye protection and function is critical</li>
                        </ul>
                    </div>
                </div>

                {/* img */}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Preoperative Consultation at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Before surgery, you’ll undergo a detailed evaluation with our oculoplastic expert. This includes :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Assessment of the <b>defect size and location</b></li>
                            <li>Evaluation of overall ocular health</li>
                            <li>Discussion about <b>surgical stages, recovery time</b>, and <b>expected outcomes</b></li>
                        </ul>

                        <div className="mt-2">Pre-surgery instructions may include discontinuing <b>blood-thinning medications</b>, avoiding smoking, and preparing for a <b> two-stage recovery plan</b> that spans several weeks.</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10  mt-10">
                {/* content*/}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">The Cutler-Beard Flap Surgical Process</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Stage 1: Flap Advancement</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li>Under anesthesia, a <b>full-thickness flap</b> is carefully created from the lower eyelid.</li>
                        <li>This flap is tunneled beneath the existing tissue and positioned to <b>bridge the upper eyelid defect</b>.</li>
                        <li>A graft (e.g., tarsoconjunctival) may be added for structural reinforcement.</li>
                        <li>The flap remains connected to its original blood supply to promote healthy healing.</li>
                    </ul>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Healing Phase</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li>Over the next 6-8 weeks, the flap heals in place while maintaining eyelid coverage.</li>
                        <li>The upper and lower eyelids remain temporarily fused.</li>
                        <li>Antibiotics, eye ointments, and eye protection are provided to aid in recovery.</li>
                    </ul>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Stage 2: Flap Division and Refinement</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li>Once healing is sufficient, the flap is carefully <b>divided</b> and <b>final reshaping</b> of the eyelid is performed.</li>
                        <li>The goal is to achieve <b>functional movement</b> and <b>natural appearance</b> of the upper eyelid.</li>
                        <li>Any residual asymmetry or bulk may be refined in future touch-up procedures if needed.</li>
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
                        <div className="mt-2">Recovery from Cutler-Beard flap surgery is gradual and requires close monitoring :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Protective padding and medicated ointments are used to prevent infection</li>
                            <li>Avoid rubbing the eyes, exposure to dust, or any physical strain</li>
                            <li>Elevate your head while sleeping to minimize swelling</li>
                            <li>Follow-up visits are scheduled to monitor healing and flap viability</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What to Expect</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">While the Cutler-Beard technique is highly effective, patients should understand that :</div>
                        <ul className="list-disc ml-5 mt-2">
                            <li>The new upper eyelid may be thicker or firmer than the originaln</li>
                            <li>Touch-up surgeries may be necessary to enhance movement or cosmetic appearance</li>
                            <li>Outcomes vary depending on the extent of the defect and tissue healing</li>
                        </ul>

                        <div className="mt-2">That said, most patients regain a protective, aesthetically acceptable upper eyelid that maintains essential functions like blinking and corneal protection.</div>
                    </div>
                </div>

                {/* img */}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                {/* img */}

                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic, Malleshwaram?</div>
                    <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                        <li><b>Expertise in Oculoplastic Surgery</b> with a focus on eyelid and orbital reconstruction</li>
                        <li>Use of <b>modern microsurgical techniques</b> and <b>customized flap planning</b></li>
                        <li>Emphasis on <b>patient safety, preserving vision</b>, and <b>cosmetic outcome</b></li>
                        <li>Located in <b>Malleshwaram</b>, offering convenient care for patients across North Bangalore</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                {/* content */}
                <div className="">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book a Consultation</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you’ve been diagnosed with an upper eyelid tumor or defect requiring advanced reconstruction, Cutler-Beard Flap Surgery may be right for you. Visit <b>Sapiens Clinic, Malleshwaram</b>. Call today to schedule a detailed consultation with our oculoplastic team.Restore your eye health-with care that sees beyond the surface.</div>
                </div>

                {/* img */}
            </div>
        </div>

        {/* contact-part */}
        <div>
            <ContactPage contacts={contact[0]}/>
        </div>

        {/* faqs */}
        <Faqs faqs={faqs}/>
    </div>
  )
}

export default CutlerBeardFlap