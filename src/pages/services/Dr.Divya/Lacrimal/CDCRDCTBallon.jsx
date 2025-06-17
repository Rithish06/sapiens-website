import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const CDCRDCTBallon = () => {

    const faqs = [
        {
            ques: "How do I know if I need a lacrimal surgery? ",
            ans: "If you experience persistent watery eyes, infections, or swelling near the inner eye corner, a lacrimal evaluation is recommended."
        },
        {
            ques: "Is the Jones Tube in CDCR visible or uncomfortable? ",
            ans: "The Jones Tube is not visible externally and is generally well tolerated. Patients are guided on how to protect and clean it."
        },
        {
            ques: "Will I need general anesthesia for these procedures? ",
            ans: "While some procedures may be performed under local anesthesia, more extensive surgeries like CDCR or DCT are usually done under general anesthesia for comfort."
        },
        {
            ques: "What is the recovery time? ",
            ans: "Recovery varies by procedure: Balloon Dacryoplasty may need 112 days; CDCR and DCT usually require 1-2 weeks of rest with longer follow-up."
        },
        {
            ques: "Will there be visible scars? ",
            ans: "No, procedures like endoscopic CDCR and Balloon Dacryoplasty leave no external scars. Even with external procedures, scarring is minimal and well-managed."
        },
    ]

    const contact = [
        {
            heading: "Why Choose Sapiens Clinic for Lacrimal Procedures?",
            para: "What is Balloon Dacryoplasty? Balloon dacryoplasty is a less invasive treatment for partial nasolacrimal duct obstruction, often performed in younger patients or early-stage blockages. The procedure uses a fine balloon catheter to gently widen the blocked tear duct."
        }
    ]
    return (
        <div>
            <div>
                <Divyaservicebanner />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                <div className="flex flex-col items-center">

                    {/* container 1 */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-orange-gradient">Advanced Lacrimal Procedures at Sapiens Clinic Malleshwaram</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">At Sapiens Clinic, Malleshwaram, we offer highly specialized care for patients dealing with excessive tearing, recurrent eye infections, or blocked tear ducts. Our expertise in lacrimal procedures such as <b>CDCR (Conjunctivodacryocystorhinostomy), DCT (Dacryocystectomy)</b> and <b>Balloon Dacryoplasty</b> ensures patients receive effective, minimally invasive and long-lasting relief.</div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[16px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">CDCR (Conjunctivodacryocystorhinostomy)</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2"><b>What is CDCR</b>? CDCR is a surgical treatment aimed at resolving severe canalicular obstruction-often caused by trauma, failed prior surgeries, or long-term use of certain medications. When the natural tear duct system is too damaged to repair, CDCR creates a new passage between the eye and nasal cavity using a small glass tube known as the <b>Jones Tube</b>.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">When is CDCR Needed?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Severe blockage of the canaliculi</li>
                                <li>Punctal agenesis (congenital absence of tear openings)</li>
                                <li>Post-surgical trauma</li>
                                <li>Tumors at the inner corner of the eyelid</li>
                            </ul>
                            <div className="mt-2"><b>Our Approach</b> at Sapiens Clinic, we specialize in <b>endoscopic CDCR</b>, a minimally invasive method that avoids external incisions, ensures optimal tube positioning, and promotes faster recovery. Our surgeons use high-definition nasal endoscopy for precision and safety.</div>
                            <div className="mt-2"><b>Postoperative Care</b> Patients are advised to :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Avoid nose-blowing and vigorous sneezing for 1 week</li>
                                <li>Protect the Jones Tube by gently placing a finger on the medial canthus when sneezing</li>
                                <li>Follow detailed cleaning instructions for the tube</li>
                                <li>Return for regular follow-ups every 6–12 months</li>
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
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">DCT (Dacryocystectomy)</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">What is DCT? DCT involves the surgical removal of the lacrimal sac and nasolacrimal duct. It is typically recommended for patients with :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Chronic or recurrent dacryocystitis</li>
                                <li>Lacrimal sac tumors</li>
                                <li>Autoimmune conditions (e.g., mucous membrane pemphigoid)</li>
                                <li>High-risk comorbidities such as cardiac disorders or severe dry eyes</li>
                            </ul>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">When is DCT Performed?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li>When other interventions like DCR are not suitable</li>
                                <li>In elderly patients where recurrent infection poses a risk to vision or general health</li>
                            </ul>

                            <div className="mt-2"><b>Procedure Highlights</b> Depending on your condition, our team may recommend an <b>extended</b> or <b>endoscopic DCT</b>. The choice depends on your anatomy, health history and the extent of the condition.</div>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Postoperative Recovery</div>
                        <ul className="text-[12px] md:text-[16px] font-[500] font-para list-disc ml-5 mt-2 leading-7">
                            <li>Expect some swelling and bruising for a few days</li>
                            <li>Follow antibiotic and anti-inflammatory medication guidelines</li>
                            <li>Avoid touching or rubbing the surgical site</li>
                        </ul>

                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Balloon Dacryoplasty</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2"><b>What is Balloon Dacryoplasty?</b> Balloon dacryoplasty is a less invasive treatment for partial <b>nasolacrimal duct obstruction</b>, often performed in younger patients or early-stage blockages. The procedure uses a fine balloon catheter to gently widen the blocked tear duct.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Why Choose Balloon Dacryoplasty?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <ul className="list-disc ml-5 mt-2">
                                <li>No external incisions</li>
                                <li>Minimal downtime</li>
                                <li>Suitable for patients where traditional surgery may not be necessary</li>
                            </ul>
                            <div className="mt-2"><b>Procedure Overview </b>A small deflated balloon is threaded through the tear duct. Once in place, the balloon is inflated to dilate the duct, restoring natural tear drainage. The balloon is then removed, completing the procedure in under 30 minutes.</div>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Aftercare</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Mild discomfort or tearing may occur for 1-2 days</li>
                            <li>Use prescribed lubricating drops</li>
                            <li>Avoid dusty or smoky environments for a few days</li>
                        </ul>
                    </div>
                    {/* img */}
                </div>

                {/* container 5 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Lacrimal Procedures?</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Located in the heart of <b>Malleshwaram</b>, easily accessible</li>
                            <li>Specialists trained in advanced oculoplastic and nasal endoscopic techniques</li>
                            <li>Minimally invasive options with quicker recovery</li>
                            <li>Personalized treatment plans with consistent follow-ups</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* contact */}
            <div>
                <ContactPage contacts={contact[0]} />
            </div>

            {/* faq */}
            <div>
                <Faqs faqs={faqs} />
            </div>

        </div>
    )
}

export default CDCRDCTBallon