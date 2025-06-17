import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const EndoscopicDCR = () => {

    const faqs = [
        {
            ques:"Is Endoscopic DCR painful?",
            ans:"No, the procedure is performed under anaesthesia and most patients report minimal discomfort during recovery."
        },
        {
            ques:"Will there be any visible scars?",
            ans:"No, endoscopic DCR is entirely internal with no cuts on the skin."
        },
        {
            ques:"How long does the silicone stent stay in place?",
            ans:"The stent is typically removed 6–12 weeks after the procedure."
        },
        {
            ques:"What if tearing persists after surgery?",
            ans:"Our team evaluates and addresses any residual issues through follow-up or revision if needed."
        },
        {
            ques:"Can this surgery treat infections too?",
            ans:"Yes. Endoscopic DCR clears the blocked duct, resolving chronic infections like dacryocystitis."
        },
    ]

    const contact =[
        {
            heading:"Recovery and Postoperative Care",
            para:"Recovery from Endoscopic DCR is typically smooth and well-tolerated. Our team provides a customized post-surgery care plan which includes"
        }
    ]
    return (
        <div>
            <div>
                <Divyaservicebanner />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-20 mt-10 mx-5">
                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Endoscopic DCR Surgery in Malleshwaram</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Restoring Comfort and Natural Tear Flow at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">At Sapiens Clinic, Malleshwaram, Endoscopic Dacryocystorhinostomy (DCR) is offered as a modern, minimally invasive solution for patients with tear duct blockages. When the nasolacrimal duct is obstructed-whether due to infection, inflammation or congenital factors-it can lead to watery eyes (epiphora), frequent eye infections, and discomfort. Our expert oculoplastic team performs this advanced procedure to restore natural tear drainage and eliminate symptoms without external incisions or scarring.</div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    <div className="">
                        {/* content */}
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">When is Endoscopic DCR Recommended?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Endoscopic DCR is typically advised in the following situations :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Persistent watery eyes due to nasolacrimal duct obstruction</li>
                                <li>Chronic dacryocystitis (infection in the tear sac)</li>
                                <li>Recurrent mucous or pus-like eye discharge</li>
                                <li>Failed response to conservative therapies like massage or antibiotics</li>
                                <li>Preference for a scar-free, internal surgical approach</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 3 */}

                <div className="flex flex-col lg:flex-col items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}

                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">The Endoscopic DCR Procedure</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">This procedure is performed under local or general anaesthesia. A nasal endoscope is gently inserted to visualize the lacrimal sac through the nasal cavity. A new drainage pathway is then created between the lacrimal sac and nasal mucosa-without any external cuts. A small silicone tube is placed temporarily to maintain patency and is usually removed after 6–12 weeks.</div>
                        <div className="flex flex-col lg:flex-row gap-10 mt-5">
                            <div className="">
                                <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Benefits at Sapiens Clinic Malleshwaram :</div>
                                <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                                    <li>No external incision or visible scarring</li>
                                    <li>Preservation of eyelid muscle function</li>
                                    <li>Faster healing and reduced trauma</li>
                                    <li>Option to address nasal pathology simultaneously</li>
                                </ul>
                            </div>

                            <div className="">
                                <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Recovery and Postoperative Care</div>
                                <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                                    <div className="mt-2">Recovery from Endoscopic DCR is typically smooth and well-tolerated. Our team provides a customized post-surgery care plan which includes :</div>
                                    <ul className="list-disc ml-5 mt-2">
                                        <li>Nasal saline irrigation for 5-7 days</li>
                                        <li>Antibiotic eye drops and nasal sprays</li>
                                        <li>Avoiding blowing the nose for at least a week</li>
                                        <li>Regular follow-up to monitor healing and stent position</li>
                                    </ul>

                                    <div className="mt-2">Patients are usually discharged the same day and can resume light activity within 24–48 hours.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Potential Risks</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Although rare, potential complications may include :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Mild nasal bleeding</li>
                                <li>Persistence of tearing</li>
                                <li>Infection or scarring</li>
                                <li>Premature displacement of the stent</li>
                                <li>Rare cases of orbital trauma or inadequate drainage</li>
                            </ul>

                            <div className="mt-2">These risks are minimized when performed by experienced oculoplastic surgeons like the team at Sapiens Clinic.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 5 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Endoscopic DCR in Malleshwaram?</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7 ">
                            <li>Specialized Oculoplastic Surgeons with deep expertise in lacrimal surgeries</li>
                            <li>Advanced nasal endoscopy equipment for precise surgical access</li>
                            <li>Personalized care and follow-up tailored to each patient’s anatomy and needs</li>
                            <li>Minimally invasive technique for aesthetic and functional recovery</li>
                        </ul>
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

export default EndoscopicDCR