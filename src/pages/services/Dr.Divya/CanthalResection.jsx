import React from 'react'
import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
import { assets } from '../../../assets/assets'
import Faqs from '../../../components/faqs/faqs'
import ContactPage from '../ContactPage/ContactPage'

const CanthalResection = () => {

    const faqs =[
        {
            ques:"Is canthal resection permanent?",
            ans:"Yes, the results are long-lasting. Minor revisions are rarely needed."
        },
        {
            ques:"Will there be visible scars?",
            ans:"Incisions are discreetly placed and usually heal into near-invisible lines over time."
        },
        {
            ques:"Can I combine this with other eye procedures?",
            ans:"Yes, especially with double eyelid surgery or ptosis correction for full eye reshaping."
        },
        {
            ques:"When can I return to work or regular life?",
            ans:"Most patients resume daily activities in 5–7 days, but strenuous tasks should be avoided for 2–3 weeks."
        }
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
                <Divyaservicebanner servicename ='Canthal Resection (Epicanthoplasty)'/>
            </div>

            <div className='lg:mx-20 xs:mt-29 md:mt-10 mt-10 mx-5'>

                {/* container 1 */}

                <div className='flex flex-col items-center'>
                    {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Canthal Resection (Epicanthoplasty) in Malleshwaram, Bangalore</div> */}
                    <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Eye Reshaping Surgery to Refine and Open Up the Inner Corners of the Eyes</div>
                    <div className='text-[12px] md:text-[16px] font-[500] font-para mt-2 leading-7'><b>Canthal resection</b>, also referred to as <b>epicanthoplasty</b>, is a specialized oculoplastic procedure designed to reshape and enhance the inner or outer corners of the eyes. This aesthetic eye surgery removes or repositions the <b>epicanthic fold</b>—a small skin fold near the inner eye—to create a more open, symmetric, and balanced appearance.
                        At <b>Sapiens Clinic, Malleshwaram</b>, we offer precise and natural-looking canthal correction to patients seeking to enhance their eye shape, reduce the intercanthal distance (space between the eyes), or complement double eyelid surgery. Whether performed on its own or combined with other eyelid procedures, the goal is always subtle transformation - not erasing ethnic identity, but refining natural beauty.
                    </div>
                </div>

                {/* container 2 */}
                <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10'>
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>What Is Canthal Resection (Epicanthoplasty)?</div>
                        <div className=' text-[12px] md:text-[16px] font-[500] font-para leading-7  mt-5'>This procedure focuses on <b>reshaping the medial or lateral canthus</b>, the inner and outer corners of the eye. The <b>epicanthic fold</b>, common in many East Asian individuals, can sometimes obscure the inner eye corner and give the eyes a shorter, rounded appearance. By gently repositioning the surrounding tissues, canthal resection enhances eye openness and symmetry.
                            It’s typically done for <b>cosmetic improvement</b>, but the changes can also contribute to improved eye balance and definition.
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 2 */}
                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>

                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                    
                    {/* content */}
                    <div className=''>
                        <div className=' text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>Types of Canthal Resection</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para mt-5'>We offer two approaches based on your aesthetic needs :</div>
                        <div className='flex md:flex-row flex-col md:gap-10 gap-5'>
                            <div>
                                <div className='text-[14px] md:text-[16px] lg:text-[26px] font-[600] font-heading pt-2 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>1. Medial Canthoplasty</div>
                                <ul className='list-disc text-[12px] md:text-[16px] font-para ml-5 font-[500] leading-7 mt-5'>
                                    <li>Focuses on the <b>inner corners</b> of the eyes</li>
                                    <li>Reduces the epicanthic fold</li>
                                    <li>Makes eyes appear <b>larger and more spaced evenly</b></li>
                                </ul>
                            </div>

                            <div>
                                <div className='text-[14px] md:text-[16px] lg:text-[26px] font-[600] font-heading pt-2 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>2. Lateral Canthoplasty</div>
                                <ul className='list-disc text-[12px] md:text-[16px] ml-5 font-[500] font-para leading-7 mt-5'>
                                    <li>Targets the <b>outer corners</b> of the eyes</li>
                                    <li>Corrects drooping or tired-looking eyes</li>
                                    <li>Gives the eyes a <b>more elongated, refreshed contour</b></li>
                                </ul>
                            </div>
                        </div>
                        <div className='text-[12px] md:text-[16px] font-para font-[500] mt-5'>In some cases, both techniques may be combined to achieve harmony between the inner and outer canthus, especially when paired with double eyelid surgery.</div>
                    </div>
                </div>

                {/* container 3 */}
                <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10'>
                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading  bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Who Should Consider This Procedure?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5'>Canthal resection is suitable for individuals who :</div>
                            <ul className='list-disc ml-5 leading-7  pt-2'>
                                <li>Have <b>prominent epicanthic folds</b> affecting their eye shape</li>
                                <li>Feel their eyes appear <b>narrow, asymmetrical or too far apart</b></li>
                                <li>Wish to achieve a <b>larger or brighter eye appearance</b></li>
                                <li>Are considering <b>double eyelid surgery</b> for a more refined overall outcome</li>
                                <li>Want to reduce signs of eye tiredness or heaviness</li>
                            </ul>

                            <div className='pt-2'>It is an <b>elective cosmetic surgery</b>, not performed for medical necessity. However, the psychological boost in confidence and facial balance can be significant.</div>
                        </div>
                    </div>

                    {/* img */}
                    {/* <div className='
                    lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                </div>

                {/* container 4 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>

                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Pre-Surgical Evaluation at Sapiens Clinic</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para '>
                            <div className='mt-5'>Your surgeon will:</div>
                            <ul className='list-disc ml-5 leading-7 pt-2'>
                                <li>Review your <b>eye anatomy, skin elasticity</b> and aesthetic goals</li>
                                <li>Measure <b>inner canthal distance</b> and plan how much tissue to reposition</li>
                                <li>Discuss your <b>medical history</b> and any prior eye surgeries</li>
                                <li>Explain the <b>procedure, benefits, limitations, and recovery details</b></li>
                            </ul>
                            <div className='pt-2'>You'll be asked to avoid <b>smoking and alcohol</b> for three weeks before surgery. Your customized surgical plan will ensure results that align with your facial features while prioritizing safety and precision.</div>
                        </div>
                    </div>
                </div>

                {/* container 5 */}

                <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10'>

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>The Canthal Resection Procedure</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5'>Performed under local anesthesia (with or without mild sedation), the surgery usually takes less than an hour. Here's how it works :</div>
                            <ul className='list-disc leading-7 ml-5 pt-2'>
                                <li>The surgeon marks the <b>medial or lateral canthus</b> depending on the type of epicanthoplasty being performed</li>
                                <li>A <b>small incision</b> is made, and excess skin or muscle is removed or repositioned</li>
                                <li>The underlying tissues are refined to open up the eye contour</li>
                                <li><b>Dissolvable or fine sutures</b> are used to close the incision discreetly</li>
                                <li>A short observation period follows before you can return home the same day</li>
                            </ul>
                            <div className='pt-2'>You can expect the full visit- including prep, procedure and post-care instructions - to take 2–3 hours.</div>
                        </div>
                    </div>

                    {/* img */}

                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                </div>

                {/* container 6 */}

                <div className='flex lg:flex-row flex-col items-center md:gap-10 gap-5 mt-10'>
                    {/* img */}
                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}

                    {/* content */}
                    <div className=''>
                        <div className=' text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Recovery & Aftercare</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para'>
                            <div className='mt-5'>Initial swelling or bruising around the eyes is normal and usually resolves in a few days. We’ll guide you with medications and care routines that include :</div>
                            <ul className='list-disc ml-5 leading-7 mt-2'>
                                <li><b>Cold compresses</b> to reduce swelling</li>
                                <li><b>Ointments, eye drops</b>, and oral antibiotics</li>
                                <li>Keeping the eye area clean with <b>saline solution</b></li>
                                <li>Sleeping with your head elevated to minimize puffiness</li>
                                <li>Avoiding <b>eye rubbing, makeup, contact lenses</b>, and sun exposure for at least 2 weeks</li>
                            </ul>

                            <div className='pt-2'><b>Sutures</b> are typically removed after 5–7 days, and final results settle in over the next few weeks.</div>
                        </div>
                    </div>
                </div>

                {/* container 7 */}

                <div className='flex lg:flex-row flex-col-reverse items-center md:gap-10 gap-5 mt-10'>

                    {/* content */}
                    <div className=''>
                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-[600] font-heading bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Results Can You Expect?</div>
                        <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc ml-5 leading-7 mt-5'>
                            <li>More <b>defined and open eye shape</b></li>
                            <li>Shorter intercanthal distance (for medial corrections)</li>
                            <li>Less “sleepy” or downward-turned appearance</li>
                            <li>Natural, symmetrical eye aesthetics</li>
                            <li>Minimal or hidden scarring with refined surgical techniques</li>
                        </ul>

                        <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent mt-5'>Are There Any Risks?</div>
                        <div className='text-[12px] md:text-[16px] font-[500] font-para mt-5'>
                            <div>With any surgery, risks are possible but rare when done by experienced oculoplastic surgeons :</div>
                            <ul className='list-disc ml-5 pt-2 leading-7'>
                                <li>Temporary swelling or bruising</li>
                                <li>Minor asymmetry during healing</li>
                                <li>Scar formation (minimal with proper care)</li>
                                <li>Infection or reaction to anesthesia (uncommon)</li>
                            </ul>

                            <div className='pt-2'>We provide full pre-op and post-op counseling to ensure you’re informed, comfortable and confident at every step.</div>
                        </div>
                    </div>

                    {/* img */}

                    {/* <div className='lg:w-[35%]'>
                        <img className='lg:w-[84%]' src={assets.eximg} alt="" />
                    </div> */}
                </div>
            </div>

            {/* container 8 */}
            {/* contact-part */}
            <div>
                <ContactPage contacts={contact[0]}/>
            </div>
            
            {/* container 9 */}
            <div>
                <Faqs faqs={faqs}/>
            </div>
        </div>
    )
}

export default CanthalResection