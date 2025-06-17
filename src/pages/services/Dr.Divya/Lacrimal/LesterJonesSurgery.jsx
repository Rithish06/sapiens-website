import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const LesterJonesSurgery = () => {

    const faqs = [
        {
            ques:"Is the Lester Jones tube visible? ",
            ans:"The tube is typically well-hidden in the inner corner of the eye and rarely noticeable."
        },
        {
            ques:"Will I feel the tube inside my eye? ",
            ans:"Most patients do not feel the tube once the area has healed."
        },
        {
            ques:"How long does the tube last? ",
            ans:"It can remain in place for many years but may occasionally need replacement or repositioning."
        },
        {
            ques:"Can I wear contact lenses after surgery? ",
            ans:"You may resume wearing contacts after healing, but this will be determined during follow-up visits."
        },
        {
            ques:"Is this surgery permanent? ",
            ans:"The tube provides a long-term solution, but regular follow-up is needed to ensure it remains functional."
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
                <Divyaservicebanner />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Lester Jones Surgery at Sapiens Clinic, Malleshwaram</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">What is Lester Jones Surgery?</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Lester Jones surgery is a specialized procedure performed to treat severe tear drainage system obstruction, particularly when the canalicular ducts are blocked and traditional DCR surgeries have failed. Named after the Lester Jones tube used in the procedure, this surgery involves placing a tiny, polished Pyrex glass tube that bypasses the blocked drainage system and allows tears to flow directly from the eye into the nasal cavity.</div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Lester Jones Surgery?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">At Sapiens Clinic, Malleshwaram, we bring together extensive expertise in oculoplastic surgery and advanced minimally invasive techniques to ensure patients receive world-class care for complex tear duct disorders. Our team specializes in personalized treatments for patients with canalicular obstruction, offering advanced solutions such as Lester Jones surgery when other treatments are not effective.</div>
                    </div>

                    {/*img  */}
                </div>

                {/* container 3 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}

                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Who Needs Lester Jones Surgery?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">You may be a candidate for this procedure if you experience :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Persistent watery eyes (epiphora)</li>
                                <li>Failed outcomes from prior DCR surgeries</li>
                                <li>Severe canalicular scarring or trauma</li>
                                <li>Congenital absence of puncta or canaliculi</li>
                            </ul>

                            <div className="mt-2">Lester Jones surgery is typically reserved for cases where other interventions cannot restore natural tear drainage.</div>
                        </div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">The Procedure</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Performed under local or general anaesthesia, the procedure involves :</div>
                            <ol className="list-decimal ml-5 mt-2">
                                <li>Creating a precise passage from the inner corner of the eye into the nasal cavity</li>
                                <li>Inserting a Lester Jones tube through this new channel</li>
                                <li>Positioning and securing the tube to maintain proper tear flow</li>
                            </ol>

                            <div className="mt-2">In some cases, a previous or simultaneous DCR surgery may be performed to prepare the nasal passage.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 5 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Advantages of the Lester Jones Procedure</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Highly effective for complex or irreversible canalicular obstructions</li>
                            <li>Quick recovery with minimal discomfort</li>
                            <li>Maintains natural tear flow through an artificial route </li>
                            <li>Avoids external scars with endonasal approaches</li>
                        </ul>
                    </div>
                </div>

                {/* container 6 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* contnet */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Aftercare & Recovery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">After surgery :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Mild bruising or swelling is common and usually resolves within 1–2 weeks</li>
                                <li>Antibiotic drops and oral medications are prescribed to prevent infection</li>
                                <li>Patients are advised not to rub the eyes, blow the nose, or swim for at least 3–4 weeks</li>
                                <li>Special cleaning techniques (such as saline rinses) are recommended to maintain the tube</li>
                            </ul>

                            <div className="mt-2">Follow-up visits are necessary to ensure the tube stays in place and functions correctly. The tube may remain permanently or require periodic replacement.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 7 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Possible Risks</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">While the Lester Jones procedure is generally safe, potential risks include :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Tube displacement or blockage</li>
                                <li>Infection or nasal bleeding</li>
                                <li>Scarring or visible tube (rare)</li>
                                <li>Dry eye or foreign body sensation</li>
                            </ul>
                            <div className="mt-2">Our team monitors you closely post-surgery to address these issues promptly.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage contacts={contact}/>
            </div>

            {/* faqs */}
            <div>
                <Faqs faqs={faqs}/>
            </div>
        </div>
    )
}

export default LesterJonesSurgery