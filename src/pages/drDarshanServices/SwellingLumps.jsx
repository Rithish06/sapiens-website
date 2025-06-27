import React from 'react'
import Faqs from '../../components/faqs/faqs'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import ContactPage from '../services/ContactPage/ContactPage'
import { Helmet } from 'react-helmet'

const SwellingLumps = () => {

    const faqs = [
        {
            ques : "Are all lumps on the hand dangerous?",
            ans : "No, many hand lumps are benign. However, it’s important to get them evaluated to ensure proper diagnosis and management."
        },
        {
            ques : "Can cysts or lumps come back after removal?",
            ans : "Some types, like ganglion cysts, may recur even after treatment. Surgical removal reduces the chance of recurrence."
        },
        {
            ques : "Do all hand swellings need surgery?",
            ans : "Not necessarily. Treatment depends on the type, size and symptoms. Many swellings can be managed conservatively."
        },
        {
            ques : "How do I know if a lump needs urgent attention?",
            ans : "If the swelling is painful, growing rapidly, or associated with numbness or stiffness, it should be evaluated without delay."
        },
        {
            ques : "How long is recovery after surgical removal of a hand lump?",
            ans : "Recovery time varies based on the type and complexity of the procedure but typically ranges from a few weeks to a couple of months with minimal downtime."
        },
    ]

    return (
        <div>

            <Helmet>
                <title>Hand Lump Treatment in Bangalore | Dr. Darshan Kumar A Jain</title>
                <meta name='description' content='Dr. Darshan Kumar A Jain offers expert hand lump and swelling treatment in Bangalore, Karnataka with precision care.'/>
            </Helmet>

            <Servicesbanner serviceName = "Hand Swellings (Lumps and Bumps)" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'></div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Hand Swellings (Lumps and Bumps) Treatment in Malleshwaram, Bangalore</div> */}
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>A noticeable lump or swelling on the hand can raise concerns-whether it's painless or causing discomfort. While many of these bumps are harmless, some may interfere with hand function or indicate underlying issues. At Sapiens Clinic, we offer expert evaluation and comprehensive care for a wide range of hand swellings, ensuring your hand health is protected and restored.</div>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Common Types of Hand Swellings</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Ganglion Cysts</b>: These are fluid-filled sacs that usually form near joints or tendons in the wrist or hand. They may appear suddenly, change in size, and sometimes cause pain or restrict movement.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Lipomas</b>: Soft, fatty lumps under the skin that grow slowly and are generally painless. Though benign, they may need removal if they grow large or press on nearby structures.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Dupuytren’s Contracture</b>: A thickening of the connective tissue in the palm, forming firm nodules or cords that gradually pull fingers inward, affecting hand function.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Epidermoid Cysts</b>: Small lumps beneath the skin formed due to blocked hair follicles. These are typically slow-growing and painless but can become inflamed.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Carpal Boss</b>: A firm, immobile bony growth on the back of the hand near the base of the thumb or middle finger. It may be mistaken for a cyst but is related to joint stress or overuse.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms to Watch For</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>A visible lump or swelling on the hand or wrist</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Pain or tenderness during movement or at rest</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Restricted range of motion</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Changes in skin texture, color, or temperature over the swelling</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Tingling or numbness in the affected area</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Even if painless, any persistent or enlarging lump should be evaluated to rule out underlying issues.</div>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Diagnosis</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>A detailed physical examination is the first step. Depending on the appearance and behavior of the lump, your doctor may recommend:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Imaging tests</b> such as X-rays, ultrasound or MRI to determine the size, depth, and nature of the swelling</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Aspiration</b> or <b>biopsy</b> to collect fluid or tissue samples for lab analysis when needed</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>These steps help determine whether the swelling is cystic, solid, inflammatory, or potentially harmful.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Treatment is based on the type, size, symptoms, and functional impact of the swelling:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Observation</b>: Many benign swellings that don’t cause discomfort may only need periodic monitoring.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Medications</b>: Anti-inflammatory medicines or steroid injections may help reduce pain and swelling.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Aspiration</b>: In fluid-filled swellings like ganglion cysts, draining the fluid may offer relief.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Surgical Removal</b>: Required for recurring cysts, symptomatic lipomas, or any swelling affecting tendon, nerve, or joint function.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Our goal is to not just treat the swelling, but to restore comfort, mobility, and confidence in hand use.</div>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Prevention Tips</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Avoid repetitive strain or trauma to the hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Protect your hands during sports or labor-intensive work</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Treat minor injuries early to prevent cyst or scar tissue formation</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Maintain hand hygiene to reduce infection-related swellings</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Stay alert to changes in size, consistency, or behavior of existing lumps</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Most hand swellings are non-threatening, but a few can impact how you use your hand every day. If you notice a lump that’s growing, painful or affecting your hand movement, don’t wait to get it checked. For expert evaluation, accurate diagnosis and advanced treatment options, consult Dr. Darshan Kumar A. Jain, Hand and Upper Limb Specialist at Sapiens Clinic, Malleshwaram.</div>
                    </div>
                </div>
            </div>

            <div className='mt-15'>
                <Faqs faqs = {faqs} />
            </div>
        </div>
    )
}

export default SwellingLumps
