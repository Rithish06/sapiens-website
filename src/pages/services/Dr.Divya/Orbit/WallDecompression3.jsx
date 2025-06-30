import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../../assets/assets'
import ContactPage from '../../ContactPage/ContactPage'
import Faqs from '../../../../components/faqs/faqs'
import { Helmet } from 'react-helmet'

const WallDecompression3 = () => {

    const faqs = [
        {
            ques: "How long is the hospital stay after the surgery?",
            ans: "Most patients stay for 1-2 days post-surgery, depending on recovery speed."
        },
        {
            ques: "Will the surgery improve my vision?",
            ans: "Yes, especially if vision loss is related to optic nerve compression. It can also enhance eye alignment and cosmetic appearance."
        },
        {
            ques: "What type of anesthesia is used?",
            ans: "General anesthesia is used for comfort and surgical precision."
        },
        {
            ques: "How soon can I return to work or normal activities?",
            ans: "Patients can generally resume light activities after 1–2 weeks, but strenuous tasks should be avoided for 4 weeks."
        },
        {
            ques: "Is the result of the surgery permanent?",
            ans: "Yes, the structural correction is long-lasting. Additional procedures may be required if cosmetic or functional adjustments are needed later."
        },
    ]

    return (
        <div>

            <Helmet>
                <title>3 & 4 wall eye decompression surgery Bangalore | Dr. Divya D Sundaresh</title>
                <meta name="description" content='Dr. Divya D Sundaresh performs 3 & 4 wall eye decompression surgery in Bangalore, Karnataka to treat bulging eyes and orbital pressure.' />
            </Helmet>
            <div>
                <Divyaservicebanner servicename='3 and 4 Wall Orbital Decompression Surgery' />
            </div>

            <div className='lg:mx-20 xs:mt-20 md:mt-10 mx-5 mt-10'>

                {/* container 1 */}
                <div className="flex flex-col items-center mt-10">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">3 and 4 Wall Orbital Decompression Surgery in Malleshwaram</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5">At Sapiens Clinic in Malleshwaram, we offer advanced 3 and 4 wall orbital decompression surgeries for patients experiencing severe thyroid eye disease (Graves’ orbitopathy) or exophthalmos (protruding eyes). These conditions can place immense pressure within the eye socket, affecting eye movement, vision and facial symmetry. Our goal with decompression surgery is to expand orbital space, relieve pressure on the optic nerve and restore both visual function and cosmetic balance.</div>
                </div>

                {/* container 2 */}

                <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Understanding Orbital Anatomy</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5">The orbit is a tightly packed cavity formed by seven bones and surrounded by muscles, fat and nerves. Even a slight increase in muscle or tissue volume—common in Graves’ orbitopathy - can lead to pressure buildup, discomfort, bulging eyes, and optic nerve compression. 3 and 4 wall decompression surgeries are designed to alleviate this pressure by carefully removing specific orbital walls and/or orbital fat</div>
                    </div>
                </div>


                {/* container 3 */}

                <div className="flex flex-col-reverse lg:flex-row gap-10 mt-10 items-center">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">When Is 3 or 4 Wall Decompression Needed?</div>
                        <div className="text-[12px] md:text-[16px] font-para font-[500] leading-7">
                            <div className="mt-2">Our oculoplastic specialists may recommend this surgery in cases of :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li><b>Severe exophthalmos</b> where the eyeball protrudes significantly.</li>
                                <li><b>Vision-threatening Graves' orbitopathy</b>, especially with optic nerve compression.</li>
                                <li><b>Corneal exposure</b>, where eyelids cannot close fully, leading to drying and damage.</li>
                            </ul>

                            <div className="mt-2">These procedures are typically reserved for advanced cases where vision, eye comfort, and quality of life are significantly impacted.</div>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}
                </div>

                {/* container 4 */}

                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Who May Not Be Suitable for This Surgery?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5">
                            <div className="mt-2">While effective, this surgery may not be advised for patients with :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Chronic sinus infections</li>
                                <li>Bleeding disorders (e.g., hemophilia)</li>
                                <li>Compromised immune systems</li>
                                <li>Underdeveloped (atretic) sinuses</li>
                            </ul>

                            <div className="mt-2">A thorough preoperative evaluation is essential to determine eligibility.</div>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="lg:w-[65%]">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">What to Expect During the Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5">
                            <div className="mt-2">Performed under general anesthesia, this intricate procedure involves :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Making an incision along the crown of the head (bicoronal approach)</li>
                                <li>Carefully dissecting soft tissues to access and remove parts of the <b>lateral</b>, <b>medial</b>, <b>roof</b> and <b>floor</b> orbital walls (depending on whether 3 or 4 walls are involved)</li>
                                <li>Creating new space for orbital fat to shift, relieving pressure</li>
                                <li>Reconstructing the bone structure with precision</li>
                                <li>Placing drainage systems to minimize fluid buildup post-surgery</li>
                            </ul>
                            <div className="mt-2">The procedure usually takes 2-3 hours and is followed by a short hospital stay.</div>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}
                </div>

                {/* container 6 */}


                <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}

                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Potential Risks and Complications</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-5">
                            <div className="mt-2">As with any advanced surgery, there are risks, including :</div>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Double vision (diplopia)</li>
                                <li>Eyelid and conjunctival swelling</li>
                                <li>Haematoma or orbital bleeding</li>
                                <li>Visual disturbance or, rarely, loss of vision</li>
                                <li>Infection or delayed healing</li>
                            </ul>

                            <div className="mt-2">All patients receive close monitoring post-surgery to reduce risks and support safe recovery.</div>
                        </div>
                    </div>
                </div>

                {/* container 7 */}

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
                    {/* content */}
                    <div className="">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-orange-gradient">Recovery and Postoperative Care</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Antibiotic and anti-inflammatory medications will be prescribed</li>
                                <li>A protective eye pad is typically removed after 24 hours</li>
                                <li>Cold compresses and elevated sleeping position can help reduce swelling</li>
                                <li>Avoid nose-blowing, swimming, and intense physical activities for at least 4 weeks</li>
                                <li>Driving and screen use should be limited if double vision is present</li>
                            </ul>

                            <div className="mt-2">Regular follow-up visits are scheduled to monitor healing and ensure optimal results.</div>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div> */}
                </div>
            </div>

            {/* contact-part */}
            <div>
                <ContactPage />
            </div>

            {/* faq */}
            <div>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default WallDecompression3