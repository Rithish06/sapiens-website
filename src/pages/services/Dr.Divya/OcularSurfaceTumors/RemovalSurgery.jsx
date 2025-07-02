import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import { FaQ } from 'react-icons/fa6'
import Faqs from '../../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const RemovalSurgery = () => {

    const faqs = [
        {
            ques: "Are conjunctival cysts dangerous?",
            ans: "Benign cysts are not harmful but may cause discomfort. Removal is simple and effective."
        },
        {
            ques: "What causes conjunctival tumors?",
            ans: "Factors may include UV exposure, genetic mutations, or underlying conditions like PAM."
        },
        {
            ques: "Can these conditions lead to blindness?",
            ans: "If left untreated, malignant tumors can compromise vision. Early removal prevents complications."
        },
        {
            ques: "Is surgery painful?",
            ans: "No, it’s typically done under local anesthesia and is well tolerated."
        },
        {
            ques: "Will there be visible scarring?",
            ans: "Scars are minimal and usually hidden within the natural folds of the eye."
        },
    ]


    return (
        <div>

            <Helmet>
                <title>Conjunctival cyst & tumor surgery Bangalore | Dr. Divya D Sundaresh</title>
                <meta name="description" content='Dr. Divya D Sundaresh offers conjunctival cyst and tumor removal surgery in Bangalore, Karnataka with advanced, eye-preserving techniques.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Conjunctival Cyst & Tumor Removal Surgery' />
            </div>

            <div className="lg:mx-10 md:mt-10 xs:mt-29 mx-5 mt-10">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Conjunctival Cyst & Tumor Removal Surgery in Malleshwaram</div> */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient mt-2">Comprehensive Ocular Surface Treatment at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul>
                            <li>Have you noticed a bump or discoloration on the white part of your eye?</li>
                            <li>Is there a small mass near your cornea or a pigmented spot that wasn’t there before?</li>
                            <li>Do you experience irritation while blinking or feel like something’s constantly in your eye?</li>
                        </ul>
                        <div className="mt-2">If you answered yes to any of these, it’s time to get your eyes examined. At <b>Sapiens Clinic, Malleshwaram</b>, we provide advanced care for <b>conjunctival cysts and tumors</b>, with expert diagnosis and safe, minimally invasive removal surgery when required.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Are Conjunctival Tumors and Cysts?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">The <b>conjunctiva</b> is the thin, transparent membrane covering the white of the eye and inner eyelids. It can develop both benign and malignant growths:</div>
                            <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Common Types Include :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Benign Conjunctival Cysts</b>: Fluid-filled sacs causing irritation, often resolved with minor surgery.</li>
                                <li><b>Ocular Surface Squamous Neoplasia (OSSN)</b>: A type of squamous carcinoma affecting the eye's surface.</li>
                                <li><b>Conjunctival Melanoma</b>: May arise from pigmented spots or Primary Acquired Melanosis (PAM).</li>
                                <li><b>Conjunctival Lymphoma</b>: Often appears as red, patchy areas and may mimic conjunctivitis.</li>
                            </ul>
                            <div className="mt-2">Early detection is critical, especially for malignant tumors. A biopsy is the first step in confirming whether a mass is benign or cancerous.</div>
                        </div>
                    </div>
                </div>

                {/* container 3 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Is Conjunctival Cyst or Tumor Removal Surgery Performed?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">At Sapiens Clinic, we use the most appropriate technique based on your diagnosis :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>For Cysts</b>: A simple outpatient <b>cyst removal surgery</b> is performed under local anesthesia. The cyst is carefully drained or excised to relieve discomfort and restore normal blinking.</li>
                                <li><b>For Tumors :</b>
                                    <ul className="list-disc ml-10 mt-2">
                                        <li><b>Wide excision biopsy</b> is done to remove the tumor along with a margin of healthy tissue.</li>
                                        <li><b>Cryotherapy</b> may be used to destroy residual abnormal cells by freezing.</li>
                                        <li><b>Mitomycin C eye drops </b>or <b>topical chemotherapy</b> may be prescribed post-surgery to reduce recurrence and minimize scarring.</li>
                                    </ul>
                                </li>
                            </ul>

                            <div className="mt-2">Our procedures are performed with a focus on <b>aesthetics and vision preservation</b>, ensuring optimal outcomes for both health and appearance.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 4 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Post-Surgery Recovery & Follow-up</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Your recovery will depend on the type and complexity of your surgery. Most patients can resume normal activities within a few days. You may experience :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Mild redness or irritation</li>
                                <li>Temporary swelling</li>
                                <li>Use of eye drops or ointment for healing</li>
                                <li>Follow-up visits to monitor recovery</li>
                            </ul>

                            <div className="mt-2">If a tumor was removed, additional treatments like <b>cryotherapy</b>, <b>interferon drops</b>, or <b>radiation therapy</b> may be recommended. Scars, if any, are discreet and well-managed by our oculoplastic team.</div>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic in Malleshwaram?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Skilled <b>oculoplastic and ocular oncology</b> team</li>
                                <li>Latest surgical tools and minimally invasive techniques</li>
                                <li>Safe and effective outcomes with natural cosmetic results</li>
                                <li>Local, trusted care with accessible follow-up</li>
                            </ul>

                            <div className="mt-2">At Sapiens Clinic, we treat more than just your symptoms-we focus on long-term eye health.</div>

                            <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-5">Take the First Step Toward Clearer, Healthier Eyes</div>
                            <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                                <div className="mt-2">If you notice any growths, redness, or discomfort on the surface of your eye, don't ignore the signs. <b>Book your consultation at Sapiens Clinic in Malleshwaram</b> to get expert evaluation and personalized treatment options for conjunctival cysts or tumors.</div>
                                <div className="mt-2">Your vision matters-and early action makes all the difference.</div>
                            </div>
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

export default RemovalSurgery