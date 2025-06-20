import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../../assets/assets'
import Faqs from '../../../../components/faqs/faqs'
import ContactPage from '../../ContactPage/ContactPage'

const OrbitalDisease = () => {

    const faqs = [
        {
            ques: "Can orbital diseases affect my vision permanently?",
            ans: "Yes, if left untreated, some conditions like orbital tumors or thyroid eye disease can impair or even permanently damage your vision."
        },
        {
            ques: "Are all orbital tumors cancerous?",
            ans: "No. Many orbital tumors are benign, but evaluation and sometimes biopsy are required to confirm."
        },
        {
            ques: "Is surgery always required for orbital disease?",
            ans: "Not always. Some conditions respond well to medication or observation. Surgery is only advised when necessary."
        },
        {
            ques: "What is the success rate of orbital decompression surgery?",
            ans: "When performed by an experienced surgeon, it’s a highly effective procedure with significant relief in symptoms and cosmetic improvement."
        },
        {
            ques: "How soon should I seek help if I notice eye bulging or discomfort?",
            ans: "Immediately. Early evaluation helps preserve vision and avoid complications."
        },
    ]

    return (
        <div>
            <div>
                <Divyaservicebanner servicename = 'Orbital Disease Treatment'/>
            </div>

            <div className="lg:mx-20 mx-5 sx:mt-29 md:mt-10 mt-10">

                {/* container 1 */}
                {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent text-center">Orbital Disease Treatment in Malleshwaram</div> */}
                <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-2">Expert Diagnosis and Advanced Care at Sapiens Clinic</div>
                <div className="text-[12px] md:text-[16px] font-[500] font-para mt-2">Do your eyes appear unusually large or sunken?
                    Do they feel sore, red, or persistently irritated?
                    Is there a change in eye position, swelling around the eye, or discomfort that doesn’t go away?
                    These could be signs of an orbital disease, a condition that affects the bony socket (orbit) surrounding your eye. At Sapiens Clinic in Malleshwaram, our oculoplastic and orbital surgeons offer expert care for a wide range of orbital disorders with accurate diagnosis and advanced surgical treatments.
                </div>

                {/* container 2 */}

                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 mt-10 items-center">
                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">What Are Orbital Diseases?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para">
                            <div className="mt-2">The orbit contains essential structures like the eyeball, muscles, nerves, and blood vessels. Orbital diseases affect this area due to infections, tumors, thyroid dysfunction, trauma, or autoimmune conditions. Left untreated, these conditions can cause vision loss or structural deformities.</div>
                            <div className="mt-2">The most common orbital conditions we treat include :</div>
                            <ul className="list-disc leading-7 ml-5 mt-2">
                                <li><b>Thyroid Eye Disease (Graves’ Orbitopathy)</b>: Autoimmune inflammation that pushes the eye forward (proptosis), causes eyelid retraction, or double vision.</li>
                                <li><b>Orbital Tumors</b> (like cavernous hemangioma or orbital lymphoma): These may cause the eye to protrude or displace, and can be benign or malignant.</li>
                                <li><b>Orbital Inflammation and Cellulitis</b></li>
                                <li><b>Traumatic Orbital Fractures</b></li>
                                <li><b>Vascular Malformations</b></li>
                                <li><b>Orbital Abscess or Hematoma</b></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* container 3 */}

                <div className="flex lg:flex-row flex-col-reverse lg:gap-10 gap-5 mt-10 items-center">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Treatment Options for Orbital Diseases</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para ">
                            <div className="mt-2">Treatment depends on the cause and severity of the disease. Our team offers :</div>
                            <ul className="list-disc leading-7 ml-5 mt-2">
                                <li><b>Medical management</b>: Includes steroid therapy, immunosuppressants, or antibiotics for inflammatory or infectious conditions.</li>
                                <li><b>Orbital Decompression Surgery</b>: Done for thyroid eye disease to relieve pressure in the orbit and allow the eye to move back into place.</li>
                                <li><b>Orbitotomy</b>: A specialized surgery to remove orbital tumors or biopsy suspicious growths.</li>
                                <li><b>Enucleation or Exenteration </b>(in rare, severe cancer cases): Removal of the eye or orbit contents, followed by prosthetic rehabilitation.</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}
                </div>

                {/* container 4 */}

                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 mt-10 items-center">
                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}

                    {/* content */}
                    <div className="">
                        <div className="">
                            <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">What Is Thyroid Eye Disease?</div>
                            <div className="text-[12px] md:text-[16px] font-[500] font-para">
                                <div className="mt-2">This is an autoimmune condition that causes swelling of the eye muscles and tissues. It may lead to :</div>
                                <ul className="list-disc leading-7 ml-5 mt-2 ">
                                    <li>Bulging eyes (proptosis)</li>
                                    <li>Eyelid retraction</li>
                                    <li>Difficulty closing the eyes</li>
                                    <li>Redness, tearing, or double vision</li>
                                </ul>
                                <div className="mt-2 leading-7">We offer both <b>medical management and surgical correction</b>, including decompression, squint correction and eyelid repositioning.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className=" flex lg:flex-row flex-col-reverse lg:gap-10 gap-5 mt-10 items-center">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Recovery After Orbital Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para">
                            <div className="mt-2 leading-7">Orbital surgeries are highly precise and are performed by our experienced oculoplastic surgeons. After surgery, you may experience swelling or bruising, which typically subsides within a couple of weeks.</div>
                            <div className="mt-2">Post-surgical care includes :</div>
                            <ul className="list-disc leading-7 ml-5 mt-2">
                                <li>Cold compresses to reduce swelling</li>
                                <li>Prescription eye drops and oral medications</li>
                                <li>Regular follow-ups to monitor healing</li>
                                <li>Protective eyewear during the recovery phase</li>
                            </ul>

                            <div className="mt-2">Recovery times can vary from <b>two weeks to a few months</b>, depending on the procedure and individual healing response.</div>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}
                </div>

                {/* container 6 */}

                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 mt-5 items-center">
                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Why Choose Sapiens Clinic, Malleshwaram?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para">
                            <div className="mt-2 leading-7">Our clinic is equipped with advanced diagnostic tools and a specialized oculoplastic team experienced in managing complex orbital cases. We focus on :</div>
                            <ul className="list-disc leading-7 ml-5 mt-2">
                                <li>Early detection through thorough imaging and clinical evaluation</li>
                                <li>Minimally invasive surgical techniques wherever possible</li>
                                <li>Comprehensive post-operative support and prosthetic rehabilitation when needed</li>
                            </ul>
                            <div className="mt-2 leading-7">At Sapiens Clinic, we combine precision medicine with compassionate care to restore both eye function and facial symmetry.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage/>
            </div>
            <div>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default OrbitalDisease; 