import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const Exenteration = () => {

    const faqs = [
        {
            ques:"What conditions require orbital exenteration?",
            ans:"Orbital exenteration is typically performed to treat advanced or aggressive tumors of the orbit, such as ocular melanomas, basal cell carcinoma, squamous cell carcinoma, or life-threatening infections that involve the eye and surrounding structures."
        },
        {
            ques:"Will I lose vision after exenteration?",
            ans:"Yes, exenteration involves removal of the eye, resulting in complete loss of vision in the affected eye. Our team helps you prepare for this emotionally and offers prosthetic rehabilitation for cosmetic restoration."
        },
        {
            ques:"What type of anesthesia is used during the surgery?",
            ans:"Exenteration is usually performed under general anesthesia. In elderly patients or those with specific health conditions, local anesthesia with sedation may be considered."
        },
        {
            ques:"Can an artificial eye be placed after exenteration?",
            ans:"Yes. After healing, a custom-designed orbital prosthesis (external artificial eye) can be fitted for cosmetic purposes. This is often attached to spectacles or retained magnetically, depending on the reconstruction."
        },
        {
            ques:"How long is the recovery period after surgery?",
            ans:"Initial recovery takes about 2-3 weeks, with complete healing and prosthetic placement typically achieved in 6-8 weeks. Long-term follow-ups will be required for monitoring and any adjustments."
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
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Orbital Exenteration Surgery at Sapiens Clinic, Malleshwaram</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <div className="mt-2">Exenteration, or orbital exenteration, is a highly specialized surgical procedure used to remove the eye along with the surrounding tissues such as muscles, optic nerves, fatty tissue, and, in some cases, the eyelids. This surgery is usually recommended in advanced or aggressive tumors of the orbit that cannot be managed through conservative treatment methods. Depending on the extent of tissue removal, exenteration is classified as <b>total, subtotal, or extended</b>.</div>
                        <div className="mt-2">At <b>Sapiens Clinic, Malleshwaram</b>, we approach this delicate procedure with exceptional precision, balancing oncologic safety with post-operative function and aesthetics.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Orbital Exenteration?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">This procedure is often performed in the treatment of :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Advanced orbital cancers</li>
                                <li>Aggressive skin cancers around the eye</li>
                                <li>Life-threatening infections or recurrent tumors</li>
                            </ul>
                        </div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Types of Exenteration:</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li><b>Subtotal Exenteration</b>: Removes the eyeball, extraocular muscles, and adjacent tissue, preserving eyelid or conjunctiva where possible.</li>
                            <li><b>Total Exenteration</b>: Involves complete removal of the eye, eyelids, and orbital contents.</li>
                            <li><b>Extended Exenteration (Super Exenteration)</b>: May include removal of surrounding bone or tissues such as paranasal sinuses or intracranial extensions.</li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                {/* container 3 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Diagnosis and Evaluation</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Each patient undergoes thorough evaluation using :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>MRI with contrast</b> to assess soft tissue and intracranial involvement</li>
                                <li><b>High-resolution CT scan</b> to evaluate bone structures</li>
                                <li><b>PET-CT</b> for staging and to rule out distant metastasis</li>
                            </ul>

                            <div className="mt-2">Our team of oculoplastic surgeons, head and neck specialists, and radiologists collaborate to plan the safest and most effective approach for every patient.</div>
                        </div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Preparing for Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Before your surgery :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Discontinue blood thinners or immunosuppressants as advised</li>
                                <li>Refrain from eating or drinking 6 hours before the procedure</li>
                                <li>Our surgeon will walk you through every detail, including what to expect emotionally and functionally after the loss of vision in the affected eye</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 5 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Risks of Orbital Exenteration</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-7">
                            <div className="mt-2">Though rare, complications can include :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Recurrence of tumor</li>
                                <li>Sino-orbital fistula</li>
                                <li>Persistent discharge</li>
                                <li>Cerebrospinal fluid leak</li>
                                <li>Changes in facial contour and eyelid support</li>
                            </ul>

                            <div className="mt-2">The procedure requires an experienced surgical team, and at Sapiens Clinic, we are equipped with advanced facilities and specialists to manage these challenges confidently.</div>
                        </div>
                    </div>
                </div>

                {/* container 6 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Surgical Technique</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">The surgery is performed under general anesthesia. Using specialized tools, our surgeon carefully removes the orbital contents, preserving as much surrounding structure as medically appropriate. If required, portions of surrounding bone may also be excised.</div>
                            <div className="mt-2">Reconstruction planning is initiated in the same surgical setting. In cases where immediate reconstruction isn’t advisable, a staged approach is adopted for optimal healing and aesthetic restoration.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 7 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Post-Operative Care</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Clean the skin around the surgical site gently with sterile water</li>
                                <li>Sleep with your head elevated to reduce swelling</li>
                                <li>Avoid sneezing or blowing your nose forcefully for at least 6 weeks</li>
                                <li>Antibiotics and pain management will be provided</li>
                                <li>A custom ocular prosthesis can be fitted after healing—typically 6 to 8 weeks post-surgery</li>
                            </ul>

                            <div className="mt-2">Regular follow-ups are essential for early detection of any recurrence and for aesthetic refinement.</div>
                        </div>
                    </div>
                </div>

                {/* container 8 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Functional and Aesthetic Rehabilitation</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">We work with trained ocularists to custom design <b>prosthetic eyes or orbital prosthesis</b>, closely matching your natural appearance. These can be magnetically retained or attached to glasses, depending on your surgical reconstruction.</div>
                    </div>

                    {/* img */}
                </div>

                {/* container 9 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Cost of Exenteration Surgery in Malleshwaram</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">The cost varies based on :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Extent of surgery</li>
                                <li>Type of reconstruction required</li>
                                <li>Post-operative care and prosthetic needs</li>
                            </ul>

                            <div className="mt-2">At <b>Sapiens Clinic, Malleshwaram</b>, we offer personalized treatment plans with transparent costing after a detailed evaluation.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact-page */}
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

export default Exenteration