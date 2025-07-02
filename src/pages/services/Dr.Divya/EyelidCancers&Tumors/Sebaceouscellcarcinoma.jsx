import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import { FaQ } from 'react-icons/fa6'
import Faqs from '../../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const Sebaceouscellcarcinoma = () => {

    const faqs = [
        {
            ques: "Why does sebaceous carcinoma mostly affect the eyelids?",
            ans: "The eyelids contain a high density of meibomian glands, making them a common site for sebaceous cancer."
        },
        {
            ques: "Can sebaceous carcinoma be misdiagnosed?",
            ans: "Yes. It is often mistaken for styes or chalazions, especially in its early stages. Biopsy is crucial for correct diagnosis."
        },
        {
            ques: "Is this cancer life-threatening?",
            ans: "If diagnosed and treated early, outcomes are excellent. However, delayed diagnosis can lead to local invasion or metastasis."
        },
        {
            ques: "What are the risk factors?",
            ans: "Advanced age, previous radiation exposure, weakened immunity, and certain genetic conditions."
        },
        {
            ques: "Will the surgery affect how my eye looks?",
            ans: "Our oculoplastic team uses precise reconstruction techniques to restore both form and function with minimal cosmetic compromise."
        },
    ]

    return (
        <div>

            <Helmet>
                <title>Sebaceous carcinoma eyelid surgery Bangalore | Dr. Divya D Sundaresh.</title>
                <meta name="description" content='Dr. Divya D Sundaresh performs sebaceous carcinoma eyelid surgery in Bangalore, Karnataka with precise removal and reconstructive care.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='Sebaceous Carcinoma Eyelid Surgery' />
            </div>

            <div className="lg:mx-20 md:mt-10 xs:mt-29 mx-5 mt-10">
                <div className="flex flex-col items-center">
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Sebaceous Carcinoma Eyelid Surgery in Malleshwaram</div> */}
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Expert Diagnosis & Surgical Treatment at Sapiens Clinic</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                        <ul>
                            <li>Are you noticing a persistent, painless, yellowish growth on your eyelid?</li>
                            <li> Has it caused eyelash loss, occasional bleeding, or even distorted vision?</li>
                            <li> If you’ve had similar growths previously removed but they keep coming back-this may not be a simple stye or chalazion.</li>
                        </ul>

                        <div className="mt-2">You could be dealing with <b>sebaceous carcinoma</b>, a rare but potentially aggressive eyelid cancer that requires prompt evaluation and expert care. At <b>Sapiens Clinic, Malleshwaram </b>, our experienced oculoplastic specialists offer comprehensive diagnosis, surgical treatment, and personalized recovery plans to help you regain comfort, vision, and confidence.</div>
                    </div>
                </div>


                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What is Sebaceous Carcinoma?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Sebaceous carcinoma is a <b>rare form of skin cancer</b> that arises from the sebaceous (oil-producing) glands in the skin. These glands are most abundant around the eyes—especially in the upper eyelids, where <b>meibomian glands</b> are concentrated. This cancer can often be mistaken for benign eyelid conditions like styes or cysts, which may delay diagnosis.</div>
                            <div className="mt-2">Unlike some slower-growing skin cancers, <b>sebaceous carcinoma can be locally aggressive and even metastasize</b>, making early detection critical.</div>
                        </div>
                    </div>

                    {/* img */}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* contnet */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Signs & Symptoms</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Sebaceous carcinoma may present as :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>A painless yellow or pinkish nodule on the eyelid</li>
                                <li>Eyelash loss at the site of the lesion</li>
                                <li>Bleeding or ulceration in the lesion</li>
                                <li>Recurring growth after past removal of stye/chalazion</li>
                                <li>Visual disturbances or double vision in advanced stages</li>
                            </ul>

                            <div className="mt-2">If any of these symptoms are present, we strongly recommend scheduling an evaluation at Sapiens Clinic.</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Diagnostic Evaluation</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">At Sapiens Clinic, Malleshwaram, our specialists conduct :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Detailed clinical eyelid examination</li>
                                <li>Imaging tests such as MRI or CT (if needed)</li>
                                <li>Biopsy with frozen section analysis to confirm diagnosis and define tumor margins</li>
                                <li>Lymph node assessment to evaluate potential spread</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Treatment Options at Sapiens Clinic</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">1. Mohs Micrographic Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">This advanced surgical method allows layer-by-layer removal of cancerous tissue with real-time microscopic analysis. It ensures complete tumor excision while preserving as much healthy tissue as possible—critical for eyelid function and appearance.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">2. Standard Surgical Excision with Frozen Section Control</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">In some cases, conventional excision with frozen pathology is preferred. Tissue is removed and checked immediately to confirm clear margins before proceeding with reconstruction.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">3. Reconstructive Eyelid Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Depending on the size and location of the tumor, we may use :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b> Tenzel flap</b></li>
                                <li><b>Hughes procedure</b></li>
                                <li><b>Mustarde or Cutler-Beard flaps</b> to restore eyelid function and symmetry.</li>
                            </ul>
                        </div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">4. Radiation Therapy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Used in patients where surgery isn’t feasible or as an adjunct in high-risk cases. Multiple sessions may be needed.</div>
                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">5. Cryotherapy & Laser Treatments</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Less commonly used but effective in select early-stage or superficial lesions.</div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery After Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Recovery depends on the size of the tumor and the type of surgical reconstruction. Most patients experience mild swelling and discomfort that resolves in a few days.We provide :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Post-operative eye care instructions</li>
                                <li>Medications for comfort and infection prevention</li>
                                <li>Regular follow-ups to ensure healing and monitor for recurrence</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic in Malleshwaram?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Dedicated oculoplastic experts with advanced eyelid cancer experience</li>
                                <li>On-site diagnostics and pathology</li>
                                <li>Reconstructive and cosmetic eyelid surgery specialists</li>
                                <li>Personalized post-surgery care plans</li>
                                <li>Located conveniently in the heart of Malleshwaram</li>
                            </ul>

                            <div className="mt-2">If you’re noticing an unusual eyelid growth or a persistent mass that keeps returning, don’t delay. <b>Early treatment could save your sight-and your peace of mind. Book a consultation today at Sapiens Clinic, Malleshwaram.</b></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content-part */}
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

export default Sebaceouscellcarcinoma