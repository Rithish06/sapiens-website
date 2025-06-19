import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const Malignantmelanomas = () => {

    const faqs =[
        {
            ques:"What are early signs of eyelid melanoma?",
            ans:"A dark, persistent spot or patch on the eyelid that grows, bleeds, or changes shape. It may resemble a mole or stye."
        },
        {
            ques:"Is eyelid melanoma life-threatening?",
            ans:" It can be, if not treated early. Melanoma is known for its ability to spread quickly to other parts of the body."
        },
        {
            ques:"How do I know if the lesion is cancerous?",
            ans:" A biopsy is the definitive way to diagnose melanoma. Clinical features can suggest suspicion, but lab confirmation is necessary."
        },
        {
            ques:"What is the success rate of surgery?",
            ans:"When detected early and removed completely, the success rate is high. Follow-ups are crucial to monitor for recurrence."
        },
        {
            ques:"Will the surgery leave a visible scar?",
            ans:" Our oculoplastic surgeons use minimally invasive techniques to ensure excellent cosmetic and functional outcomes. Any scarring can be managed cosmetically after healing."
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
                <Divyaservicebanner servicename = 'Malignant Melanoma Eyelid Surgery'/>
            </div>

            <div className="lg:mx-20 md:mt-20 xs:mt-29 mx-5 mt-10">
                <div className="flex flex-col items-center">
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Malignant Melanoma Eyelid Surgery in Malleshwaram</div> */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient mt-2">Early Diagnosis & Expert Eyelid Tumor Removal at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul>
                            <li>Have you noticed a small, dark spot or lesion on your eyelid that seems to be growing, darkening, or occasionally bleeding?</li>
                            <li>Does it feel persistent, painless, and unfamiliar - yet easy to ignore?</li>
                        </ul>
                        <div className="mt-2">What may seem like a harmless mole could actually be <b>malignant melanoma</b>, a rare but serious form of eyelid cancer. At <b>Sapiens Clinic, Malleshwaram</b>, our oculoplastic specialists provide prompt evaluation and treatment for eyelid melanomas using advanced surgical techniques that prioritize both medical and cosmetic outcomes.</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Malignant Melanoma of the Eyelid?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2"><b>Malignant melanoma</b> is an aggressive skin cancer that arises from melanocytes—the pigment-producing cells in the skin. While it's relatively rare in the eyelid (accounting for just 1% of eyelid cancers), it is among the most dangerous due to its potential to spread quickly to other organs if not treated early.</div>
                            <div className="mt-2">These tumors typically appear as :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>A <b>dark spot or mole</b> on the eyelid that grows or changes shape</li>
                                <li>A <b>lesion that bleeds or crusts</b></li>
                                <li>A mass that may be confused with a benign mole or pigmented lesion</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-1- mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Early Detection Matters</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Malignant melanoma can spread (metastasize) to regional lymph nodes and distant organs like the lungs or liver if left untreated. Prompt removal before it spreads is <b>critical for survival and quality of life</b>.</div>
                            <div className="mt-2">At Sapiens Clinic, we take early signs seriously—using advanced diagnostics, surgical precision, and ongoing follow-up care to manage the condition comprehensively.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Is Eyelid Melanoma Treated?</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Surgical Removal</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Surgical excision is the primary and most effective treatment for eyelid melanoma. At Sapiens Clinic, we use :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Wide local excision with safety margins</b></li>
                                <li><b>Frozen section analysis </b>during surgery to confirm clear tumor boundaries</li>
                                <li><b>Lymph node evaluation </b>to check for early spread</li>
                            </ul>
                            <div className="mt-2">If the tumor is localized and thin, surgery alone may be curative.</div>
                        </div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Reconstructive Eyelid Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Depending on the size and location of the lesion, reconstructive surgery may be necessary to restore natural eyelid contour and function. Our oculoplastic team specializes in :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Functional and aesthetic eyelid reconstruction</li>
                                <li>Minimizing visible scarring</li>
                                <li>Maintaining blink and tear duct function</li>
                            </ul>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Additional Therapies (If Required)</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li><b>Immunotherapy</b></li>
                            <li><b>Targeted therapy</b></li>
                            <li><b>Radiation or chemotherapy</b>(in advanced or recurrent cases)</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery & Aftercare</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Most patients recover well after surgery, especially if the melanoma is caught early. Swelling and mild discomfort are common in the first few days. We recommend :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Keeping the surgical site clean and dry</li>
                                <li>Avoiding direct sun exposure during healing</li>
                                <li>Using prescribed ointments or eye drops</li>
                                <li>Attending follow-up visits to monitor for recurrence</li>
                            </ul>

                            <div className="mt-2">If needed, cosmetic procedures can be performed later to refine the surgical site.</div>
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
                            <li>Led by specialists in eyelid and oculoplastic surgery</li>
                            <li>On-site diagnostics and frozen section analysis</li>
                            <li>Personalized surgical plans for optimal outcomes</li>
                            <li>Trusted by patients across Malleshwaram and nearby areas for precision and care</li>
                            <li>Focus on function, aesthetics, and long-term recovery</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col-reverse items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book a Consultation Today</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you’ve noticed a concerning spot on your eyelid or are experiencing changes that don’t resolve, <b>don’t delay care. Visit Sapiens Clinic in Malleshwaram</b> for expert melanoma evaluation and treatment. <b>Schedule your appointment now</b>.</div>
                    </div>
                </div>
            </div>

            {/* content-part */}
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

export default Malignantmelanomas