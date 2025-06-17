import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'

const MohsSurgery = () => {

    const faqs = [
        {
            ques:"Is Mohs surgery painful?",
            ans:" It is done under local anesthesia and is generally well tolerated."
        },
        {
            ques:"Will I have a scar?",
            ans:" Yes, but the scar is often minimal and strategically placed. Our surgeons focus on both removal and cosmetic restoration."
        },
        {
            ques:"How long does the procedure take?",
            ans:"Anywhere from 2 to 6 hours depending on the extent of the tumor and how many layers need removal."
        },
        {
            ques:"Is Mohs surgery only for skin cancers on the face?",
            ans:" While it is most commonly used on the face, it can be used on any area requiring tissue preservation."
        },
        {
            ques:"Can skin cancer come back after Mohs? ",
            ans:"Mohs offers the lowest recurrence rate, but regular follow-ups are recommended for long-term monitoring."
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
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Mohs Surgery in Malleshwaram</div>
                    <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient mt-2">Precise Skin Cancer Removal with Optimal Cosmetic Outcomes</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you've been diagnosed with <b>skin cancer</b>-especially <b>basal cell carcinoma</b> or <b>squamous cell carcinoma</b>-Mohs surgery may be the most effective treatment option. At <b>Sapiens Clinic, Malleshwaram</b>, we offer Mohs micrographic surgery performed by skilled oculoplastic and facial skin surgeons, ensuring maximum removal of cancerous tissue with the <b>least possible damage to healthy skin</b>.</div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What Is Mohs Surgery?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2"><b>Mohs surgery</b> is a highly specialized, precision-based surgical method used to treat <b>certain skin cancers</b>, particularly :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Basal cell carcinoma (BCC)</b></li>
                                <li><b>Squamous cell carcinoma (SCC)</b></li>
                                <li>Other rare skin malignancies like <b>sebaceous carcinoma</b> and <b>keratoacanthoma</b></li>
                            </ul>

                            <div className="mt-2">This technique involves removing skin cancer layer by layer and examining each layer under a microscope until no cancer cells remain. It allows the highest cure rates while preserving as much healthy skin as possible-making it ideal for <b>facial areas like the eyelids, nose, lips, and scalp</b>.</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">When Is Mohs Surgery Recommended?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">At Sapiens Clinic, we may recommend Mohs surgery in the following situations :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Recurring or aggressive <b>basal or squamous cell carcinomas</b></li>
                                <li>Tumors located in <b>high-risk facial zones</b> (eyelids, nose, lips, or ears)</li>
                                <li>Skin cancers with <b>poorly defined borders</b></li>
                                <li><b>Rapidly growing</b> tumors or those that have shown signs of early spread</li>
                                <li>Rare skin cancers requiring precision removal to protect surrounding tissue</li>
                            </ul>
                        </div>
                    </div>

                    {/* img */}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Preparing for Mohs Surgery at Sapiens Clinic</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Once your skin lesion is evaluated and confirmed as a candidate for Mohs, your surgeon will guide you through pre-operative steps, including :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Discontinuing blood thinners</b>, aspirin, or supplements like fish oil and ginkgo (if advised)</li>
                                <li>Avoiding <b>smoking and alcohol</b> two weeks before surgery</li>
                                <li>Wearing comfortable clothing and <b>planning to stay at the clinic for several hours</b></li>
                                <li>Bringing a book or something to help pass time between tissue processing stages</li>
                            </ul>

                            <div className="mt-2">Your complete medical history will be reviewed, and necessary diagnostic scans or biopsy results will be assessed before proceeding.</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">The Mohs Surgery Procedure</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">Mohs surgery is performed under local anesthesia and may take several hours depending on tumor depth and location. The procedure involves :</div>
                            <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Step-by-Step Process :</div>
                            <ol className="list-decimal ml-5 mt-2">
                                <li><b>Tumor Mapping </b><br />The visible tumor is marked and a thin tissue layer is removed.</li>
                                <li><b>Microscopic Examination </b><br />The tissue is examined under a microscope to determine if cancer cells remain.</li>
                                <li><b>Layer-by-Layer Removal</b> <br />The process is repeated-removing only affected tissue-until margins are cancer-free.</li>
                            </ol>

                            <div className="mt-2">This process ensures <b>maximum preservation of healthy skin</b> and the highest cure rate among all skin cancer surgeries.</div>
                        </div>

                        <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Techniques Used :</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li><b>Fresh-tissue Mohs</b>: Tissue is immediately processed and examined on the same day.</li>
                            <li><b>Fixed-tissue Mohs</b>: Used when prior chemical fixation is needed (rarely done, mostly in special tumor types).</li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Post-Surgical Recovery & Care</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">
                            <div className="mt-2">You’ll be able to return home the same day. Most patients experience mild discomfort or swelling at the surgical site, which subsides within a few days.</div>
                            <div className="text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-orange-gradient">Key Instructions :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Use cold compresses if recommended</li>
                                <li>Avoid strenuous activity for 1–2 weeks</li>
                                <li>Take prescribed medications diligently</li>
                                <li>Refrain from smoking during healing</li>
                            </ul>

                            <div className="mt-2">In some cases, <b>reconstructive procedures</b> may be performed immediately or scheduled later to optimize cosmetic results, especially for facial lesions.</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* contnet */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Why Choose Sapiens Clinic for Mohs Surgery in Malleshwaram?</div>
                        <ul className="list-disc ml-5 mt-2 text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <li><b>Experienced oculoplastic and skin surgeons</b> specializing in precision cancer excision</li>
                            <li>Advanced surgical techniques focused on both <b>oncologic safety and cosmetic outcomes</b></li>
                            <li>Comprehensive pre- and post-operative care</li>
                            <li>Trusted by residents across Malleshwaram and West Bangalore for <b>facial skin cancer management</b></li>
                        </ul>
                    </div>

                    {/* img */}
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Book Your Consultation Today</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">If you’ve been diagnosed with skin cancer or are dealing with a recurring lesion, don’t wait. Visit Sapiens Clinic, Malleshwaram for expert consultation and Mohs surgical evaluation. Schedule your appointment today and take the first step toward healing-with clarity and confidence.</div>
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

export default MohsSurgery