import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const Enucleation = () => {

    const faqs = [
        {
            ques: "Will I lose vision permanently?",
            ans: "Yes, enucleation involves the complete removal of the eye and results in permanent vision loss in that eye."
        },
        {
            ques: "Can my prosthetic eye move?",
            ans: "Yes, with proper implant placement, the prosthetic eye can mimic natural movement."
        },
        {
            ques: "Will my appearance change significantly?",
            ans: "Not much-our ocularist designs prostheses that closely match your natural eye and facial structure."
        },
        {
            ques: "How long will it take to recover?",
            ans: "Most patients resume light activities within 2 weeks, with complete healing in 4–6 weeks."
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
            <div>
                <Divyaservicebanner servicename = 'Enucleation Surgery'/>
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Enucleation Surgery at Sapiens Clinic, Malleshwaram</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Advanced Eyecare for Complex Ocular Conditions</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Enucleation is a specialized surgical procedure performed to <b>remove the entire eyeball</b> in cases where the eye is severely damaged, painful or affected by malignancy. At <b>Sapiens Clinic, Malleshwaram</b>, our expert oculoplastic team performs enucleation with precision and care, ensuring optimal socket reconstruction for future prosthetic placement and cosmetic restoration.</div>
                        <div className="mt-2">This surgery is most often considered when other vision-preserving treatments are no longer viable-such as in <b>retinoblastoma</b>, <b>large intraocular tumors</b> or <b>severe glaucoma</b>. While vision in the affected eye cannot be restored, the focus is on improving patient comfort, preventing further complications, and preparing the socket for a natural-looking prosthesis.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">When Is Enucleation Recommended?</div>
                        <div className="text-[12px] md:text-[18px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Ocular tumors</b> (e.g. Retinoblastoma, melanoma)</li>
                                <li><b>Severe eye trauma</b> or infection</li>
                                <li><b>Painful blind eye</b></li>
                                <li><b>Disfigured, non-functional eye</b> following other procedures</li>
                                <li><b>End-stage glaucoma</b> with uncontrolled pain</li>
                            </ul>

                            <div className="mt-2">Our approach ensures that every patient at Sapiens Clinic is carefully evaluated before proceeding. When enucleation is the best course of action, we ensure the procedure is done with maximum precision and post-surgical readiness.</div>
                        </div>
                    </div>
                </div>

                {/* container 3 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Understanding the Procedure</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Enucleation is typically done under <b>general anesthesia</b>. Once anesthetized, the surgeon performs an incision around the eye to access and carefully detach the <b>extraocular muscles</b> and <b>optic nerve</b>, while preserving the orbital structures that support future implant placement.</div>
                            <div className="mt-2">An <b>orbital implant</b>-made of biocompatible materials-is placed to maintain the eye socket's shape. Later, a <b>custom prosthetic eye</b> will be fitted for cosmetic restoration.</div>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient  mt-2">Types of Implant Fixation Techniques We Use :</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li><b>Imbrication Technique</b>: Overlapping rectus muscles to move with the prosthesis.</li>
                            <li><b>Myoconjunctival Technique</b>: Muscle suturing independent of conjunctival fornices.</li>
                            <li><b>Integrated Porous Implant Technique</b>: Advanced method with better central positioning and reduced risk of migration.</li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                {/* container 4 */}

                <div className="flex flex-col lg:flex-row items-center gap-10  mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Post-Surgical Care & Recovery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">After surgery :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>A <b>plastic conformer</b> is placed to preserve socket shape</li>
                                <li>A <b>dressing or eye patch</b> is applied and typically removed after 4–5 days</li>
                                <li><b>Artificial prosthesis</b> is fitted after 6–8 weeks, once healing is complete</li>
                            </ul>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Recovery Tips :</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Avoid touching or rubbing the surgical site</li>
                                <li>Keep the area dry for the first two weeks</li>
                                <li>Avoid swimming, steam, or strenuous physical activity</li>
                                <li>Use medications (antibiotic and anti-inflammatory drops/ointments) as prescribed</li>
                                <li>Sleep with your head elevated to reduce swelling</li>
                            </ul>
                            <div className="mt-2">Mild bleeding, watery discharge or discomfort may occur initially and is part of the normal healing process.</div>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Potential Risks</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Although rare under expert care, the following complications can arise :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Implant displacement or exposure</li>
                                <li>Infection or inflammation</li>
                                <li>Haemorrhage</li>
                                <li>Socket contraction or asymmetry</li>
                            </ul>
                            <div className="mt-2">Our team takes proactive steps to reduce these risks with meticulous surgical planning and attentive post-operative care.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 6 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Pre-Surgery Preparation</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Before enucleation, you will have a comprehensive consultation where :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Your <b>medical and ocular history</b> will be reviewed</li>
                                <li>Diagnostic tests and socket evaluations will be conducted</li>
                                <li>You’ll be guided on stopping blood-thinning medications (e.g., aspirin, warfarin) at least 2 weeks before surgery</li>
                            </ul>
                            <div className="mt-2">We ensure that you and your family are fully informed about what to expect, including the functional and cosmetic outcomes.</div>
                        </div>
                    </div>
                </div>


                {/* container 7 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic, Malleshwaram?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">At <b>Sapiens Clinic</b>, we understand the emotional and physical challenges associated with losing an eye. Our goal is to make this journey easier by offering :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>State-of-the-art surgical techniques</b></li>
                                <li><b>Custom prosthetic eye fitting</b></li>
                                <li><b>Comprehensive socket reconstruction</b></li>
                                <li><b>Supportive care from diagnosis to recovery</b></li>
                            </ul>

                            <div className="mt-2">Our oculoplastic specialists combine clinical precision with a compassionate, patient-focused approach to deliver the best outcomes-both medically and cosmetically.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 8 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Cost of Enucleation Surgery in Malleshwaram</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">The cost of enucleation surgery depends on :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Type of implant and fixation technique used</li>
                                <li>Severity of the condition</li>
                                <li>Surgeon’s expertise and post-operative support required</li>
                            </ul>

                            <div className="mt-2">At Sapiens Clinic, we offer <b>transparent consultation and pricing</b> after evaluating your individual needs. Our focus is on providing safe, effective, and compassionate care right here in Malleshwaram.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage contacts={contact[0]} />
            </div>

            {/* faqs */}
            <div>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default Enucleation