import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const OrbitalLymphoma = () => {

    const faqs = [
        {
            ques: "Is orbital lymphoma always cancerous?",
            ans: "Yes, orbital lymphoma is a type of cancer, typically non-Hodgkin's B-cell lymphoma. However, it is usually slow-growing and treatable when detected early."
        },
        {
            ques: "How is orbital lymphoma different from other eye tumors?",
            ans: "Unlike many eye tumors that originate within the eyeball, orbital lymphoma arises in the surrounding soft tissues of the orbit."
        },
        {
            ques: "Can orbital lymphoma cause blindness?",
            ans: "If left untreated, it can compress the optic nerve or damage ocular structures, potentially leading to vision loss."
        },
        {
            ques: "Is surgery required to treat orbital lymphoma?",
            ans: "Surgery is typically used for biopsy and diagnosis. Treatment is usually managed with radiation and/or chemotherapy."
        },
        {
            ques: "How long is recovery after treatment?",
            ans: "Recovery varies, but most patients return to normal activities within a few weeks after radiation therapy. Long-term follow-up is essential."
        },
    ]

    return (
        <div>

            <Helmet>
                <title>Orbital lymphoma treatment in Bangalore | Dr. Divya D Sundaresh</title>
                <meta name="description" content='Dr. Divya D Sundaresh offers orbital lymphoma diagnosis and treatment in Bangalore, Karnataka with expert care and surgical precision.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Orbital Lymphoma Treatment' />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Orbital Lymphoma Treatment in Bangalore | Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Orbital lymphoma is a type of cancer that affects the tissues surrounding the eye (orbit). While it is typically non-Hodgkin's B-cell lymphoma, it can involve the eyelids, extraocular muscles, lacrimal gland, or the soft tissues behind the eye. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis and management of orbital lymphoma through a multidisciplinary approach involving oculoplastic surgeons and oncology experts.</div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What is Orbital Lymphoma?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Orbital lymphoma refers to a slow-growing tumor or mass in the eye socket. These tumors may develop without pain and often present as a swelling or palpable lump around the eye. In some cases, they may lead to protrusion of the eye (proptosis), drooping eyelid (ptosis), excessive tearing, or changes in vision. Most cases of orbital lymphoma are low-grade and do not spread rapidly, but early diagnosis and treatment are critical to avoid complications, including vision loss or systemic involvement.</div>
                    </div>
                </div>

                {/* container 3 */}

                <div className="flex flex-col-reverse lg:flex-row  gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Common Symptoms :</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Painless swelling around the eye</li>
                            <li>Bulging of one or both eyes</li>
                            <li>Ptosis (drooping eyelid)</li>
                            <li>Double vision</li>
                            <li>Redness or irritation</li>
                            <li>Visual disturbances</li>
                            <li>Increased tearing or watery eyes</li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                {/* container 4 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Who is at Risk?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">While orbital lymphoma can occur at any age, it is more common in individuals over the age of 60. Risk factors include :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Autoimmune conditions like rheumatoid arthritis or Sjögren's syndrome</li>
                                <li>A weakened immune system (e.g., post-transplant)</li>
                                <li>History of other lymphomas or hematologic disorders</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Diagnosis at Sapiens Clinic</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">At our Malleshwaram clinic, we use advanced diagnostic tools to detect orbital lymphoma :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Clinical evaluation by an oculoplastic surgeon</li>
                                <li>High-resolution imaging (MRI or CT scan)</li>
                                <li>Blood tests including CBC and inflammatory markers</li>
                                <li>Biopsy for histopathological confirmation</li>
                            </ul>
                            <div className="mt-2">In certain cases, a vitrectomy may be performed to obtain tissue samples from the orbit.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 6 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Orbital Lymphoma Treatment in Malleshwaram</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Treatment for orbital lymphoma depends on the type, location, and extent of the disease. At Sapiens Clinic, we work with oncology partners to provide personalized care plans. Treatment options include:</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">1. Radiation Therapy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Targeted external beam radiation is one of the most effective treatments for localized orbital lymphoma. It is often performed over a few weeks and has excellent outcomes in early-stage cases.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">2. Chemotherapy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">In cases where the lymphoma is more widespread or aggressive, chemotherapy may be recommended. It may be administered systemically or, in some cases, directly into the spinal fluid.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">3. Combined Treatment</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Some patients benefit from a combination of radiation and chemotherapy for optimal results.</div>
                    </div>
                </div>

                {/* container 7 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Aftercare and Follow-up</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Following treatment, regular follow-up is essential to :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Monitor recurrence</li>
                                <li>Manage potential side effects like dry eye or changes in vision</li>
                                <li>Ensure complete systemic recovery</li>
                            </ul>
                            <div className="mt-2">Patients may require periodic MRI or CT imaging and ophthalmologic evaluations to ensure long-term health.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 8 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* contnet */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Located in Malleshwaram, Sapiens Clinic offers :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Specialist oculoplastic and orbital care</li>
                                <li>Advanced diagnostic and surgical technology</li>
                                <li>Multidisciplinary treatment planning</li>
                                <li>Compassionate, patient-centered support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage />
            </div>

            {/* faqs */}
            <div>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default OrbitalLymphoma