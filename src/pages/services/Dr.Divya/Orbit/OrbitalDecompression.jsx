import React from 'react'
import Divyaservicebanner from '../../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../../assets/assets'
import Faqs from '../../../../components/faqs/faqs'

const OrbitalDecompression = () => {

    const faqs = [
        {
            ques:"Is orbital decompression surgery painful?",
            ans:"You’ll be under anesthesia during surgery. Post-operative discomfort is manageable with medications."
        },
        {
            ques:"How long does it take to recover?",
            ans:"Most patients resume regular activity in 2-3 weeks, though full healing may take longer depending on the extent of decompression."
        },
        {
            ques:"Can this surgery fix double vision?",
            ans:"In some cases, it may resolve pressure-related diplopia. In others, strabismus correction may be needed later."
        },
        {
            ques:"Will my eye appearance return to normal?",
            ans:"The surgery significantly reduces eye bulging and improves appearance, but some patients may need further eyelid or strabismus correction."
        },
        {
            ques:"Is this surgery covered by insurance?",
            ans:"If medically necessary (e.g., vision-threatening conditions), it may be partially or fully covered. We’ll assist you with documentation."
        },

    ]
    return (
        <div>
            <div>
                <Divyaservicebanner servicename = 'Orbital Decompression Surgery'/>
            </div>

            <div className="lg:mx-20 md:mt-10 mt-10 xs:mt-29 mx-5">

                {/* container 1 */}
                <div className="flex flex-col items-center">
                    <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Orbital Decompression Surgery in Malleshwaram</div>
                    <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7">At Sapiens Clinic, Malleshwaram, orbital decompression surgery is performed to relieve pressure within the eye socket (orbit) and to reposition bulging eyes caused by thyroid eye disease (Graves' orbitopathy). This specialized procedure increases the orbital space by removing sections of bone and when necessary, reducing orbital fat, helping restore comfort, eye appearance and vision quality.</div>
                </div>

                {/* container 2 */}

                <div className="flex lg:flex-row flex-col-reverse lg:gap-10 gap-5 mt-10 items-center">
                    {/* content */}
                    <div className="lg:w-[65%]">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">When is Orbital Decompression Needed?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para flex lg:flex-row flex-col gap-10 mt-5">
                            <div>
                                <div className="mt-2">Orbital decompression is most commonly performed for :</div>
                                <ul className="list-disc leading-7 ml-5 mt-2">
                                    <li>Thyroid Eye Disease (Graves’ disease)</li>
                                    <li>Bulging or protruding eyes (exophthalmos)</li>
                                    <li>Compressive optic neuropathy</li>
                                    <li>Orbital trauma or tumors</li>
                                    <li>Vision-threatening corneal exposure</li>
                                    <li>Cosmetic concerns due to asymmetry</li>
                                </ul>
                            </div>

                            <div>
                                <div>Thyroid eye disease often causes symptoms like :</div>
                                <ul className="list-disc leading-7 ml-5 mt-2">
                                    <li>Bulging or forward-set eyes</li>
                                    <li>Dryness or grittiness</li>
                                    <li>Difficulty closing the eyelids</li>
                                    <li>Double vision</li>
                                    <li>Pressure sensation behind the eye</li>
                                    <li>Vision changes due to optic nerve compression</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* img */}

                    <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div>
                </div>

                {/* container 3 */}

                <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-5 mt-10">
                    {/* img */}
                    <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div>

                    {/* content */}
                    <div className="lg:w-[65%]">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Surgical Approaches</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para">
                            <div className="mt-2 leading-7">Depending on the severity of symptoms and anatomical factors, your oculoplastic surgeon at Sapiens Clinic may recommend one of the following decompression techniques :</div>
                            <div className="mt-2"><b>1-Wall Decompression</b></div>
                            <div className="mt-2">Removes only the lateral wall to allow orbital contents to shift outward. Ideal for mild exophthalmos with fewer risks of double vision.</div>
                            <div className="mt-2"><b>2-Wall Decompression</b></div>
                            <div className="mt-2">Targets the medial and lateral walls. Often used in moderate cases for better symmetry and reduced risk of globe displacement.</div>
                            <div className="mt-2"><b>3- and 4-Wall Decompression</b></div>
                            <div className="mt-2">Reserved for severe cases. Removes the floor and roof in addition to lateral and medial walls. Requires precise planning due to potential impact on sinus and nerve structures.</div>
                        </div>
                    </div>
                </div>

                {/* container 4 */}

                <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-10 gap-5 mt-10">
                    {/* content */}
                    <div className="lg:w-[65%]">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Pre-Surgical Planning</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Before scheduling surgery, our team conducts thorough imaging and clinical assessments to determine the volume of decompression needed. Patients may be advised to stop medications like blood thinners weeks before the procedure and follow personalized preparation protocols.</div>

                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5">During the Surgery</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">Orbital decompression is performed under general anesthesia. Depending on the technique, the surgeon may make external incisions or use a minimally invasive endoscopic method through the nasal passages. The procedure typically takes 1–2 hours.</div>
                    </div>

                    {/* img */}
                    <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div>
                </div>

                {/* container 5 */}

                <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 mt-10 items-center">
                    {/* img */}
                    <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div>

                    {/* content */}
                    <div className="lg:w-[65%]">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Recovery and Aftercare</div>
                        <ul className="text-[12px] md:text-[16px] font-[500] font-para list-disc leading-7 ml-5 mt-2">
                            <li>Eye patch is removed 24 hours post-surgery.</li>
                            <li>Oral antibiotics and anti-inflammatory medications will be prescribed.</li>
                            <li>Swelling and bruising are common for 1-2 weeks.</li>
                            <li>Avoid heavy lifting, nose blowing, swimming or air travel for 3-4 weeks.</li>
                            <li>Sleep with head elevated for better fluid drainage.</li>
                        </ul>

                        <div className="text-[12px] md:text-[16px] font-[500] font-para mt-2 leading-7">Our Malleshwaram team provides personalized follow-up and will guide you through wound care, activity restrictions, and visual assessments during recovery.</div>
                    </div>
                </div>

                {/* container 6 */}

                <div className="flex lg:flex-row flex-col-reverse lg:gap-10 gap-5 mt-10 items-center">
                    {/* content */}
                    <div className="lg:w-[65%]">
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Potential Risks</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para">
                            <div className="mt-2">Although orbital decompression is generally safe in expert hands, potential risks include :</div>
                            <ul className="list-disc leading-7 ml-5 mt-2">
                                <li>Temporary or permanent double vision</li>
                                <li>Vision changes</li>
                                <li>Swelling or infection</li>
                                <li>Numbness of lips or gums</li>
                                <li>Uneven eye positioning (rare)</li>
                            </ul>
                        </div>

                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5">Why Choose Sapiens Clinic, Malleshwaram?</div>
                        <div className="text-[12px] md:text-[16px] font-[500] font-para leading-7 mt-2">With specialized expertise in oculoplastic and orbital surgeries, Sapiens Clinic offers advanced care in a modern, sterile and patient-focused environment. Our surgical planning is guided by imaging, cosmetic goals and functional priorities-ensuring safe, aesthetically pleasing outcomes.</div>
                    </div>

                    {/* img */}
                    <div className="lg:w-[35%]">
                        <img src={assets.eximg} alt="" className="lg:w-[84%]" />
                    </div>
                </div>
            </div>

            <div>
                <Faqs faqs={faqs}/>
            </div>
        </div>
    )
}

export default OrbitalDecompression