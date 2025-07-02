import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const ChoroidalMelanoma = () => {

    const faqs = [
        {
            ques: "How is choroidal melanoma diagnosed?",
            ans: "Diagnosis involves dilated eye examination, ultrasound imaging, OCT (optical coherence tomography), and sometimes angiography or biopsy."
        },
        {
            ques: "Can choroidal melanoma spread to other parts of the body?",
            ans: "Yes. In advanced stages, it may metastasize, especially to the liver."
        },
        {
            ques: "Can this cancer be treated without removing the eye?",
            ans: "Yes, smaller tumors can often be treated with radiation therapy. Enucleation is reserved for large or vision-threatening tumors."
        },
        {
            ques: "What are the side effects of treatment?",
            ans: "Radiation may cause dry eyes, inflammation, or cataract formation. Enucleation results in loss of vision in the affected eye but is cosmetically rehabilitated with a prosthesis."
        },
    ]


    return (
        <div>

            <Helmet>
                <title>Choroidal melanoma treatment Bangalore | Dr. Divya D Sundaresh</title>
                <meta name="description" content='Dr. Divya D Sundaresh provides expert choroidal melanoma treatment in Bangalore, Karnataka with precise diagnosis and advanced care.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Choroidal Melanoma Treatment' />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">
                {/* container 1 */}
                <div className="flex flex-col items-center">
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Choroidal Melanoma Treatment in Malleshwaram</div> */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Specialized Eye Cancer Care at Sapiens Clinic, Bangalore</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul>
                            <li>Are you noticing unusual <b>flashes of light</b>, <b> floaters</b>, or a <b>sudden drop in vision</b>?</li>
                            <li>Is there <b>pain or pressure</b> while moving your eyes?</li>
                            <li>Has your vision been distorted, or does it feel like there’s a shadow in your field of view?</li>
                        </ul>
                        <div className="mt-2">These symptoms may be signs of <b>choroidal melanoma</b>, a rare but serious type of eye cancer. At <b>Sapiens Clinic, Malleshwaram</b>, our expert ocular oncology team provides accurate diagnosis and advanced treatment to help preserve your vision and overall eye health.</div>
                    </div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Choroidal Melanoma?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Choroidal melanoma is a <b>malignant tumor</b> that forms in the <b>choroid</b>, a pigmented, blood-rich layer of tissue situated between the white part of your eye (sclera) and the retina. The choroid is responsible for supplying oxygen and nutrients to the retina, which is essential for normal vision.</div>
                            <div className="mt-2">This cancer is most commonly associated with :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Excessive sun exposure</b></li>
                                <li><b>Light-colored eyes</b></li>
                                <li><b>Family history of ocular tumors</b></li>
                                <li>Genetic conditions like<b> Xeroderma Pigmentosum</b></li>
                            </ul>
                            <div className="mt-2">Choroidal melanoma is typically painless in its early stages, making early detection through regular eye exams especially important.</div>
                        </div>
                    </div>
                </div>

                {/* container 3 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Signs and Symptoms</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Choroidal melanoma may not show obvious symptoms initially, but as the tumor grows, patients may experience :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Blurred or distorted vision</b></li>
                                <li><b>Blurred or distorted vision</b></li>
                                <li><b>Flashes</b>of light</li>
                                <li><b>Vision loss in part of the visual field</b></li>
                                <li><b>Eye pain or pressure, especially when the tumor grows large</b></li>
                            </ul>
                            <div className="mt-2">If left untreated, this tumor can lead to <b>vision loss</b>, <b>eye deformation</b>, and in some cases, may spread to other parts of the body.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 4 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">How Is Choroidal Melanoma Treated?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Treatment is based on the <b>size and location of the tumor</b>, as well as the patient’s overall health and vision in the affected eye.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Plaque Brachytherapy (Radiation Therapy)</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">This is one of the most effective treatments for <b>small to medium-sized tumors</b>. A tiny radiation disc (or "plaque") is surgically placed near the tumor. Over the course of several days, it delivers targeted radiation to shrink or destroy the tumor with minimal damage to surrounding tissues.</div>
                            <div className="mt-2">Radioactive elements used include <b>Iodine-125</b>, <b>Palladium-103</b>, or <b>Cobalt-60</b>.</div>
                        </div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">🔹 Enucleation (Surgical Eye Removal)</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">For larger tumors or when the tumor has caused irreversible vision loss, enucleation may be necessary. This procedure involves the removal of the eye while preserving the surrounding muscles and orbital structure.</div>
                            <div className="mt-2">A <b>custom prosthetic eye </b>is fitted after healing, offering a natural cosmetic appearance and movement, although vision is not restored.</div>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery After Treatment</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Recovery timelines vary depending on the procedure :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Radiation therapy</b> typically involves minimal downtime but may require ongoing follow-up to monitor side effects.</li>
                                <li><b>Enucleation</b> requires a longer healing period, followed by fitting of a prosthetic eye. Patients can expect a return to normal routine within a few weeks with proper care.</li>
                            </ul>

                            <div className="mt-2">Patients are advised to :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Avoid <b>exposure to heat or steam</b></li>
                                <li>Prevent rubbing or putting pressure on the treated eye</li>
                                <li>Use <b>prescribed medications</b> and eye drops regularly</li>
                                <li>Follow all <b>postoperative check-ups</b> diligently</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                {/* container 6 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Cost of Choroidal Melanoma Treatment in Malleshwaram</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-7">
                            <div className="mt-2">At <b>Sapiens Clinic, Malleshwaram</b>, the cost of choroidal melanoma treatment depends on :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Size and type of tumor</b></li>
                                <li>Whether radiation or surgery is chosen</li>
                                <li>Need for prosthetic eye</li>
                                <li>Diagnostic tests and follow-up visits</li>
                            </ul>

                            <div className="mt-2">A complete estimate is provided after evaluation, ensuring transparency and patient-focused planning. Our goal is to offer high-quality care without unnecessary costs.</div>
                        </div>
                    </div>
                </div>

                {/* container 7 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic?</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li>Located in <b>Malleshwaram</b>, accessible and trusted by families across Bangalore</li>
                            <li><b>Expert ocular oncologists</b> and <b>oculoplastic surgeons</b> under one roof</li>
                            <li>Advanced imaging, radiation planning, and surgical facilities</li>
                            <li>Personalized care plans to protect both vision and quality of life</li>
                            <li>Supportive recovery and follow-up care throughout your treatment journey</li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                {/* container 8 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book Your Consultation</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Early detection can save your vision and even your life. If you’re experiencing unexplained visual symptoms or have a history of cancer, don’t wait. Visit Sapiens Clinic in Malleshwaram</div>
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

export default ChoroidalMelanoma