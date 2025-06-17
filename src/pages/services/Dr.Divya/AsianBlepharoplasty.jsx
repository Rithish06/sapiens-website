import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import ContactPage from '../ContactPage/ContactPage'


const AsianBlepharoplasty = () => {

    const faqs = [
        {
            ques: "How long do the results last?",
            ans: "Incisional blepharoplasty results are typically permanent. The non-incisional method may last 5-10 years or longer, depending on your skin type and aging process."
        },
        {
            ques: "Will there be visible scars?",
            ans: "No - incisions are placed within the eyelid’s natural fold and become nearly invisible after healing."
        },
        {
            ques: "Is the procedure painful?",
            ans: "The surgery is not painful. You’ll receive anesthesia, and any postoperative discomfort is minimal and short-lived."
        },
        {
            ques: "Can I combine this with other procedures?",
            ans: "Yes. Many patients choose to combine double eyelid surgery with ptosis repair, brow lift or skin rejuvenation for comprehensive results."
        },
        {
            ques: "Is it only for cosmetic reasons?",
            ans: "While many seek this surgery for aesthetic enhancement, others may benefit functionally - especially if excess skin weighs down the eyelid or affects vision."
        },

    ];

    const contact = [
        {
            heading: "Asian Blepharoplasty (Double Eyelid Surgery) in Malleshwaram, Bangalore",
            para: "Asian Blepharoplasty, also known as double eyelid surgery, is a delicate and precise procedure designed to create a natural-looking crease in the upper eyelid - enhancing eye definition without compromising your ethnic identity. At Sapiens Clinic, we approach this with a deep understanding of both anatomy and aesthetics, creating results that feel completely your own."
        }
    ]

    return (
        <div>
            <div>
                <div>
                    <Divyaservicebanner />
                </div>

                {/* container 1 */}
                <div className='lg:mx-20 xs:mt-25 md:mt-10 mx-5 mt-10'>
                    <div className='flex flex-col items-center lg:leading-7 leading-6'>
                        <div className="text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Asian Blepharoplasty (Double Eyelid Surgery) in Malleshwaram, Bangalore</div>
                        <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Define Your Natural Beauty with Subtle Precision</div>
                        <div className=' text-[12px] md:text-[16px] font-para font-[500] pt-5'>For many individuals of East Asian descent, the absence of a defined upper eyelid crease - known as a monolid - is a natural and beautiful feature. But for some, it can also give the eyes a smaller or heavier appearance, or lead to asymmetry that affects both look and confidence.
                            <b> Asian Blepharoplasty</b>, also known as <b>double eyelid surgery</b>, is a delicate and precise procedure designed to create a natural-looking crease in the upper eyelid - enhancing eye definition without compromising your ethnic identity. At <b>Sapiens Clinic</b>, we approach this with a deep understanding of both anatomy and aesthetics, creating results that feel completely your own.
                        </div>
                    </div>

                    <div className='mt-10'>

                        <div className='flex flex-col-reverse lg:flex-row items-center gap-10'>
                            <div className='lg:w-[65%]'>
                                <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Is Asian Blepharoplasty?</div>
                                <div className='text-[12px] md:text-[16px] font-[500] font-para leading-6 lg:pt-5'>
                                    <div>Asian blepharoplasty is a cosmetic eyelid surgery tailored specifically for individuals who naturally lack an upper eyelid crease. The goal is not to Westernize the eyes, but rather to enhance them - creating a <b>subtle, well-defined eyelid fold</b> that complements your natural features.</div>
                                    <div className='pt-3'>The procedure carefully addresses skin, fat, and muscle layers to form a crease that looks smooth, symmetrical, and aesthetically balanced. This can result in :</div>
                                    <ul className='list-disc ml-5 md:leading-8 pt-3'>
                                        <li>A more <b>open and refreshed eye appearance</b></li>
                                        <li><b>Balanced symmetry</b> between both eyes</li>
                                        <li><b>Smoother upper eyelids</b>, especially for makeup application</li>
                                        <li>A renewed sense of <b>confidence and natural harmony</b></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='lg:w-[35%]'>
                                <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                            </div>

                        </div>
                    </div>

                    {/* container 2 */}
                    <div className='mt-10 flex flex-col lg:flex-row items-center gap-10'>
                        <div className='lg:35%'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>

                        <div className='lg:w-[65%]'>
                            <div className=' text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Who Can Consider This Procedure ?</div>
                            <div className='text-[12px] md:text-[16px] font-para font-[500]'>
                                <div className='pt-2'>You may be a suitable candidate for Asian blepharoplasty if :</div>
                                <ul className='list-disc md:leading-7 leading-5 ml-5 pt-3'>
                                    <li>You have <b>monolids</b> or undefined eyelid creases</li>
                                    <li>You desire a <b>more open, youthful, and alert eye shape</b></li>
                                    <li>You’re looking to correct <b>asymmetry between your eyes</b></li>
                                    <li>You’re in <b>overall good health</b> with realistic expectations</li>
                                    <li>You’re seeking subtle improvement that <b>preserves your ethnic identity</b></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* container 3 */}

                    <div className='flex flex-col-reverse lg:flex-row items-center mt-10 gap-10'>
                        <div className='lg:w-[65%]'>
                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Techniques We Offer at Sapiens Clinic</div>
                            <div className=' text-[12px] md:text-[16px] font-para font-[500] md:leading-6 leading-5'>We believe that one approach does not fit all. That’s why we offer three different surgical techniques, selected based on your anatomy, skin type, and desired results.</div>
                            <div className='text-[14px] md:text-[16px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent pt-2'>1. Incisional Blepharoplasty</div>

                            <ul className='list-disc text-[12px] md:text-[16px] font-para font-[500] ml-5 md:leading-7 leading-5 pt-2'>
                                <li>Recommended for patients with <b>thicker skin</b>, excess fat, or sagging</li>
                                <li>Involves a fine incision along the natural eyelid line</li>
                                <li>Permanent results with defined creases and reshaped upper eyelids</li>
                            </ul>

                            <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent pt-2'>2. Non-Incisional (Suture) Technique</div>
                            <ul className='list-disc text-[12px] md:text-[16px] font-para font-[500] ml-5 md:leading-7 leading-5 pt-2'>
                                <li>Ideal for patients with <b>thin, elastic eyelid skin and minimal fat</b></li>
                                <li>Uses internal sutures (no skin cutting) to create the crease</li>
                                <li>Quicker recovery and minimal downtime, with natural-looking results</li>
                            </ul>


                            <div className='text-[14px] md:text-[20px] lg:text-[24px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent pt-2'>3. Partial Incision Technique</div>
                            <ul className='list-disc text-[12px] md:text-[16px] font-para font-[500] ml-5 md:leading-7 leading-5 pt-2'>
                                <li>A hybrid approach that combines subtle incisions with sutures</li>
                                <li>Balances permanence and minimal invasiveness</li>
                                <li>Suitable for those wanting a defined crease without full excision</li>
                            </ul>


                        </div>

                        <div className='lg:w-[35%]'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>
                    </div>

                    {/* container 4 */}

                    <div className='flex flex-col  lg:flex-row items-center mt-10 gap-10'>
                        <div className='lg:w-[35%]'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>
                        <div className='lg:w-[65%]'>
                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent pt-2'>What to Expect : Procedure & Recovery</div>
                            <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                                <ul className='list-disc ml-5 leading-5 md:leading-7'>
                                    <li><b>Surgical time </b>: 60-90 minutes, depending on technique</li>
                                    <li><b>Anesthesia </b>: Local anesthesia with mild sedation for comfort</li>
                                    <li><b>Recovery period </b>: Most patients return to light activities in 7–10 days</li>
                                    <li><b>Swelling and bruising </b>: Common in the first few days and gradually resolves</li>
                                    <li><b>Results </b>: Visible within weeks, with the final contour settling in 2–3 months</li>
                                </ul>

                                <div className='pt-2'>Postoperative care includes cold compresses, topical ointments, and avoiding strenuous activities for at least a week. Detailed instructions are provided to ensure a smooth recovery.</div>
                            </div>

                        </div>
                    </div>

                    {/* container 5 */}

                    <div className='flex flex-col-reverse lg:flex-row justify-end items-center mt-10 gap-10 '>
                        <div className='lg:w-[65%]'>
                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent pt-2'>Benefits of Asian Blepharoplasty</div>
                            <ul className='list-disc text-[12px] md:text-[16px] font-para font-[500] ml-5 leading-5  md:leading-7'>
                                <li>Enhanced definition and <b>refined eye contours </b></li>
                                <li>A more <b>rested and expressive appearance</b></li>
                                <li>Easier eyelid function for some patients</li>
                                <li>Results that <b>respect and preserve your natural ethnicity</b></li>
                                <li><b>Minimal scarring</b> with advanced surgical methods</li>
                                <li>Improved self-confidence and symmetry</li>
                            </ul>

                            <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent pt-2'>Possible Risks and Considerations</div>
                            <div className='text-[12px] md:text-[16px] font-para font-[500]'>While complications are rare in experienced hands, all surgeries carry some risks :</div>
                            <ul className='list-disc text-[12px] md:text-[16px] font-para font-[500] ml-5 leading-5  md:leading-7 pt-2'>
                                <li>Mild swelling or bruising</li>
                                <li>Temporary dryness or tightness</li>
                                <li>Slight asymmetry (usually self-resolving)</li>
                                <li>Infection or scarring (extremely uncommon)</li>
                                <li>Rarely, the need for a revision procedure</li>
                            </ul>
                            <div className='text-[12px] md:text-[16px] font-para font-[500] pt-2'>We take every step to ensure your safety, comfort, and aesthetic satisfaction.</div>
                        </div>

                        <div className='lg:w-[35%]'>
                            <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                        </div>
                    </div>
                </div>

                {/* container 6 */}
                <div>
                    <ContactPage contacts={contact[0]} />
                </div>

                {/* container 7 */}
                <div>
                    <Faqs faqs={faqs} />
                </div>
            </div>
        </div>
    )
}

export default AsianBlepharoplasty