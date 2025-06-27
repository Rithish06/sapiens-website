import React from 'react'
import Faqs from '../../components/faqs/faqs'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import Contact from '../contactUs/Contact'
import ContactPage from '../services/ContactPage/ContactPage'
import { Helmet } from 'react-helmet'

const CarpalTunnel = () => {

    const faqs = [
        {
            ques: "Will this go away on its own?",
            ans: "Early cases sometimes settle down with rest and splinting, but if symptoms persist beyond a few weeks, it’s best to get it evaluated."
        },
        {
            ques: "How long does recovery take after surgery?",
            ans: "Many return to light activities within 1-2 weeks. Full recovery and strength may take a few months, depending on your hand use."
        },
        {
            ques: "Is the injection painful?",
            ans: "A steroid injection is quick and tolerable - most patients describe it as a pinch. Relief can be almost immediate or take a few days."
        },
        {
            ques: "Can I use a mouse and keyboard after treatment?",
            ans: "Yes, though some ergonomic adjustments may be recommended. Our team will guide you through supportive tools and hand positioning."
        },
        {
            ques: "How do I know if I need surgery?",
            ans: "If symptoms are severe, or you’ve lost sensation or hand strength, surgery may be the best long-term option. We’ll help you decide based on your condition, not just a report."
        },
    ]

    return (

        <div className='min-h-[100vh]'>
            <Helmet>
                <title>Carpal Tunnel Specialist in Bangalore | Dr. Darshan Jain</title>
                <meta name="description" content="Get expert treatment for carpal tunnel syndrome in Bangalore from Dr. Darshan Kumar A Jain, hand & nerve specialist." />
            </Helmet>
            <div className='relative'>
                <Servicesbanner serviceName="Carpal Tunnel Syndrome" />
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                {/* <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'></div> */}
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Say Goodbye to Wrist Numbness & Tingling with Expert Care at Sapiens Clinic</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>If your fingers often feel numb, your wrist hurts when you type, or you keep dropping things without reason - it might not just be tiredness. These are classic signs of Carpal Tunnel Syndrome, a common but often overlooked nerve condition of the hand.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>At Sapiens Clinic, Malleshwaram, we help you find relief and regain normal hand function with accurate diagnosis and personalized treatment that works for your lifestyle.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'></div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>What is Carpal Tunnel Syndrome?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Carpal Tunnel Syndrome (CTS) happens when the median nerve, which runs through a narrow passage in the wrist called the carpal tunnel, gets compressed. This nerve controls sensation in the thumb, index, middle, and half of the ring finger, as well as some hand muscles. When it’s pinched, you’ll experience symptoms that can range from mildly annoying to deeply disruptive.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Common Symptoms</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Numbness or tingling in the fingers - especially the thumb, index, and middle</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Pain that travels from the wrist into the arm</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Weakness in the hand or difficulty gripping objects</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Symptoms that worsen at night or after repetitive hand use</li>
                        </ul>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Causes and Risk Factors</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>This condition often develops gradually and can be caused by a combination of factors:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Repetitive hand or wrist movements (like typing, texting, or using tools)</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Prolonged wrist flexion or extension during sleep or work</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Wrist injuries or fractures</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Pregnancy-related swelling</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Diabetes, thyroid dysfunction or inflammatory arthritis.</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>It’s more common in women and people between 30 to 60 years old.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>How We Diagnose It</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>We start with a physical exam and simple in-clinic tests to reproduce your symptoms. Depending on your condition, we may recommend nerve studies to confirm how severely the nerve is compressed. This helps us design a treatment plan that’s right for you - not just the textbook version.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options at Sapiens Clinic</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Non-Surgical Care</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Most patients respond well to conservative treatments, especially in early stages:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Night Splinting</b>:  Keeps your wrist in a neutral position while you sleep</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity Modification</b>: Avoiding or adjusting triggering movements</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Anti-inflammatory Medication</b>: To reduce swelling and ease discomfort</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Corticosteroid Injections</b>: For stronger, longer-lasting relief</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Hand Therapy</b>: Gentle exercises to improve flexibility and reduce pressure</li>
                        </ul>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Surgical Care</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>For persistent or advanced cases, a small outpatient procedure called carpal tunnel release may be advised. It relieves pressure on the nerve by cutting the ligament pressing on it - allowing the nerve to breathe, so to speak. Most people recover quickly and experience significant improvement.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Why Sapiens Clinic?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>You’re not just a wrist. We listen to your lifestyle, your work, your routine - and then craft treatment that suits you. From diagnosis to recovery, everything is done with personal attention and the right mix of science and simplicity.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>With extensive experience in hand and wrist conditions, Dr. Darshan Kumar A. Jain leads the care here with a focus on restoring movement, relieving pain and preventing recurrence.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Ready to Get Back to a Pain-Free Life?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>If your wrist symptoms are slowing you down or making everyday tasks uncomfortable, it’s time to act. Carpal Tunnel Syndrome is treatable - and the earlier, the better.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Reach out to Sapiens Clinic, Malleshwaram today to book your consultation. Healing starts with one step.</div>
                    </div>
                </div>
            </div>

            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default CarpalTunnel
