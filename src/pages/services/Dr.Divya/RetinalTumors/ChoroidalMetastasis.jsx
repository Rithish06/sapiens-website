import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const ChoroidalMetastasis = () => {

    const faqs = [
        {
            ques: "How is choroidal metastasis diagnosed?",
            ans: "Diagnosis typically involves a combination of detailed eye exams, fundus imaging, optical coherence tomography (OCT), and ultrasound scans. In some cases, biopsy or systemic imaging is also needed to identify the primary cancer source."
        },
        {
            ques: "What are the symptoms of choroidal metastasis?",
            ans: "Visual disturbances like blurry vision, floaters, light flashes, and bulging of the eye are common. Many patients have no symptoms until the tumor grows significantly."
        },
        {
            ques: "Can cancer in one eye spread to the other?",
            ans: "Yes, if the primary cancer is systemic and aggressive. That’s why early detection and complete evaluation of both eyes and the entire body are critical."
        },
        {
            ques: "What are the side effects of treatment?",
            ans: "Side effects depend on the treatment type and may include temporary vision loss, dry eyes, fatigue, or irritation. Your doctor will help manage them with supportive care."
        },
        {
            ques: "Is it always necessary to remove the eye?",
            ans: "No. Most cases are managed with chemotherapy or radiation. Enucleation is reserved for severe cases where other options are not effective."
        },
    ]

    return (
        <div>

            <Helmet>
                <title>Choroidal metastasis treatment Bangalore | Dr. Divya D Sundaresh</title>
                <meta name="description" content='Dr. Divya D Sundaresh offers choroidal metastasis treatment in Bangalore, Karnataka with advanced diagnostics and expert eye care.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Choroidal Metastasis Treatment' />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Choroidal Metastasis Treatment in Malleshwaram</div> */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Expert Diagnosis and Advanced Ocular Oncology Care at Sapiens Clinic, Bangalore</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul>
                            <li>Are you experiencing symptoms like <b>blurry vision</b>, <b>flashes of light</b>, or <b>floating spots</b> in your field of vision?</li>
                            <li>Does your <b>eyeball appear pushed forward</b> or shifted?</li>
                            <li>Have you had <b>breast, lung or any other cancer</b> in the past?</li>
                        </ul>

                        <div className="mt-2">These could be early signs of <b>choroidal metastasis</b>-a rare but serious condition where cancer spreads to the <b>choroid layer</b> of the eye. At <b>Sapiens Clinic, Malleshwaram</b>, we offer advanced diagnostics and targeted treatments for choroidal metastasis under the care of our experienced ocular specialists.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className="flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Choroidal Metastasis?</div>
                        <div className="text-[12px] md:text-[16px] font-para font-[500] leading-7 mt-2">
                            <div className="mt-2">The <b>choroid</b> is the vascular layer of the eye, located between the retina and the sclera. It plays a vital role in nourishing the eye. In some cases, <b>cancer from other parts of the body</b> commonly the <b>breast in women</b> or <b>lungs in men</b>-can spread to this layer through the bloodstream.</div>
                            <div className="mt-2">Choroidal metastasis is <b>painless</b> in its early stages and may go unnoticed until it causes visual symptoms such as :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Blurred or double vision</li>
                                <li>Increased light sensitivity</li>
                                <li>Floating spots or flashing lights</li>
                                <li>Changes in eye alignment or visible lesions</li>
                            </ul>

                            <div className="mt-2">Sometimes, this may be the <b>first indication of cancer in the body</b>, especially if the primary tumor has gone undetected.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 3 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Is Choroidal Metastasis Treated?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Treatment is highly personalized and depends on the size, location, and origin of the tumor.</div>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Chemotherapy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Systemic chemotherapy is used when the primary cancer is already known. Drugs such as <b>paclitaxel</b> and <b>cisplatin</b> are administered to inhibit the growth and spread of malignant cells. Chemotherapy may be used alone or alongside other therapies depending on the patient’s condition.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Radiation Therapy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2"><b>External beam radiation therapy</b> is one of the most common approaches for choroidal metastasis. High-energy X-rays or protons are directed at the tumor to damage cancer cells and prevent them from multiplying. This method is non-invasive and performed over multiple sessions.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Enucleation (Surgical Removal of the Eye)</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">In rare and advanced cases where the tumor has severely damaged the eye, surgical removal (enucleation) may be necessary. Though this is a last resort, it is done to prevent the cancer from spreading further.</div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">External beam radiation therapy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Recovery timelines vary depending on the type and extent of treatment :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Chemotherapy and radiation therapy typically involve <b>gradual recovery</b> over weeks or months.</li>
                                <li>If <b>enucleation</b> is performed, recovery will also involve adaptation to a prosthetic eye and ongoing follow-up care.</li>
                            </ul>

                            <div className="mt-2">Patients may experience <b>temporary fatigue, vision changes, or eye discomfort</b> during treatment, but our team at Sapiens Clinic is here to support you through every step with compassionate care and professional expertise.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 5 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Cost of Choroidal Metastasis Treatment in Malleshwaram</div>
                        <div className="text-[12px] md:text-[18px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">The cost of treatment depends on :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Size and location of the tumor</li>
                                <li>Whether chemotherapy, radiation or surgery is required</li>
                                <li>Type of diagnostic imaging and follow-up required</li>
                            </ul>

                            <div className="mt-2">At <b>Sapiens Clinic</b>, we provide a <b> personalized treatment plan and transparent pricing</b> after your initial evaluation. We focus on providing high-quality care with long-term visual outcomes and patient comfort in mind.</div>
                        </div>
                    </div>
                </div>

                {/* container 6 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Ocular Oncology?</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Located in <b>Malleshwaram</b> with easy access to expert care</li>
                            <li>Specialized in <b>ocular tumors</b>, <b>orbital cancers</b>, and <b>eye-preserving therapies</b></li>
                            <li>Advanced diagnostic imaging and treatment planning</li>
                            <li>Compassionate, multidisciplinary care from <b>retina and oculoplastic specialists</b></li>
                            <li>Ongoing follow-up and support throughout your recovery journey</li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                {/* container 7 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book a Consultation Today</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you or your loved one is experiencing unexplained visual symptoms or has a known cancer diagnosis- <b>schedule an appointment at Sapiens Clinic</b> in Malleshwaram for a complete ocular evaluation.</div>
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

export default ChoroidalMetastasis