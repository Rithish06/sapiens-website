import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const OrbitalTumors = () => {

    const faqs = [
        {
            ques:"What causes orbital tumors?",
            ans:"Orbital tumors can be congenital, benign, or malignant. They may arise from fat, muscle, glandular, nerve, or vascular tissue within the orbit. In some cases, they may result from metastasis of cancers elsewhere in the body."
        },
        {
            ques:"Are all orbital tumors cancerous?",
            ans:"No. Many orbital tumors, such as dermoid cysts and cavernous hemangiomas, are benign. However, some-like lymphoma or metastases-can be malignant and require more intensive treatment."
        },
        {
            ques:"How are orbital tumors diagnosed?",
            ans:"Diagnosis typically includes a clinical examination followed by imaging tests such as MRI or CT scans. In some cases, a biopsy may be performed to confirm the nature of the tumor."
        },
        {
            ques:"Will I lose my vision if I have an orbital tumor?",
            ans:"Not all orbital tumors cause vision loss. However, untreated tumors may press on the optic nerve or displace the eye, leading to vision changes. Early diagnosis and treatment can help prevent such complications."
        },
        {
            ques:"What is the recovery time after orbital tumor surgery?",
            ans:"Recovery depends on the type and extent of the surgery. Most patients return to daily activities within 2-4 weeks, but full healing and follow-up monitoring may continue for several months."
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
                <Divyaservicebanner servicename = 'Orbital Tumor Treatment'/>
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Orbital Tumor Treatment in Malleshwaram, Bangalore</div> */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Orbital Tumor Treatment in Malleshwaram, Bangalore</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Do your eyes appear larger than usual, misaligned, or feel persistently uncomfortable? Are you noticing restricted eye movements, chronic redness, or unexplained swelling around the eyes? <br />These may be signs of an <b>orbital tumor</b>—a mass developing within the bony socket (orbit) that houses the eye, its muscles, nerves, and supportive tissues. At <b>Sapiens Clinic, Malleshwaram</b>, our skilled oculoplastic surgeons offer comprehensive evaluation and cutting-edge surgical options to manage both benign and malignant orbital tumors safely and effectively.</div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Are Orbital Tumors?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Orbital tumors are abnormal growths that occur within the eye socket. They may develop from tissues like fat, muscles, glands, or nerves inside the orbit. Some tumors are benign, such as <b>cavernous hemangiomas</b>, while others like <b>orbital lymphoma</b> can be malignant. Early detection and treatment are crucial to prevent complications like vision loss, eye misalignment (proptosis), and damage to surrounding structures.</div>
                    </div>

                    {/* img */}
                </div>

                {/* container 2 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Signs & Symptoms of Orbital Tumors</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Bulging of one or both eyes (proptosis)</li>
                            <li>Eye movement restriction or double vision</li>
                            <li>Eyelid swelling or drooping</li>
                            <li>Chronic eye redness, pain, or discomfort</li>
                            <li>Sudden vision changes or loss</li>
                            <li>A visible mass near the eye</li>
                        </ul>

                        <div className="mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7"> If you experience any of these symptoms, it's essential to consult an orbital specialist without delay.</div>
                    </div> 
                </div>

                {/* container 3 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Diagnosis & Imaging</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Accurate diagnosis is the first step toward effective treatment. At Sapiens Clinic, we use high-resolution imaging including <b>CT scans and MRIs</b> to determine the tumor’s size, location, and nature. A biopsy may be recommended for definitive diagnosis, especially in suspected cancerous cases.</div>
                    </div>

                    {/* img */}
                </div>

                {/* container 4 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Treatment Options</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">1. Orbitotomy (Surgical Tumor Removal)</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 ">This surgery involves accessing the orbit through precise incisions to remove the tumor. Depending on its location, your surgeon may choose an anterior (front) or lateral (side) approach.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">2. Orbital Decompression</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 ">In cases where the tumor causes excessive pressure inside the orbit, decompression surgery helps relieve symptoms and preserve vision.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">3. Radiotherapy or Chemotherapy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 ">For malignant tumors like orbital lymphoma, a combination of surgery and oncology-based treatments may be recommended.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">4. Enucleation</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 ">In rare, severe cases where the tumor affects the entire eye and threatens life, complete eye removal may be necessary. This is followed by fitting a natural-looking artificial eye for cosmetic restoration.</div>
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery & Postoperative Care</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Recovery depends on the type and extent of the surgery. Most patients experience swelling and bruising, which typically subside within a few weeks. You’ll be advised to :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Use prescribed eye drops or oral medications</li>
                                <li>Avoid heavy lifting and strenuous activities</li>
                                <li>Protect your eyes from sunlight and external trauma</li>
                                <li>Attend regular follow-up appointments to monitor healing and ensure the tumor hasn’t recurred</li>
                            </ul>

                            <div className="mt-2">Our surgical team ensures personalized recovery plans and ongoing support.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 6 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Located in <b>Malleshwaram</b>, Sapiens Clinic is a trusted destination for oculoplastic and orbital surgeries. Our focus on patient safety, precision, and natural cosmetic outcomes makes us a preferred choice for orbital tumor management. We combine <b>advanced diagnostics, minimally invasive techniques</b>, and compassionate care to help restore comfort, function, and confidence.</div>
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book a Consultation</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you suspect an orbital mass or have been referred for further evaluation, <b>schedule a consultation with our orbital specialist</b> today. Early intervention can prevent vision loss and reduce the need for aggressive treatment.</div>
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

export default OrbitalTumors