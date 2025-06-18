import React from 'react'
import Faqs from '../../components/faqs/faqs.jsx'

const HandandWristFracture = () => {

    const faqs = [
        {
            ques : "How do I know if it’s a fracture or just a sprain?",
            ans : "It’s difficult to tell without an X-ray. If there’s swelling, bruising, difficulty moving the hand, or pain that doesn't improve in a day or two - get it checked."
        },
        {
            ques : "Can ligament injuries heal on their own?",
            ans : "Some mild sprains can, but full tears often require structured treatment or surgery. Ignoring them can lead to chronic joint problems."
        },
        {
            ques : "Will I regain full hand movement after surgery?",
            ans : "Most patients do, especially with good rehabilitation. Physiotherapy is a key part of long-term recovery."
        },
        {
            ques : "Is surgery risky?",
            ans : "Every surgery carries some risk, but we use minimally invasive techniques whenever possible, focusing on faster healing and minimal scarring."
        },
        {
            ques : "Can I delay treatment and see how it goes?",
            ans : "We don’t recommend it. Delays in treatment can result in poor bone healing, joint stiffness, or long-term weakness."
        },
    ]

    return (
        <div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Regain Control, Strength and Comfort with Timely Intervention!</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Our hands do everything - from holding a pen to lifting a child, from typing emails to pouring coffee. An injury to the hand or wrist, even if it seems small at first, can bring life to a frustrating pause. Whether it’s a fracture or a ligament tear, ignoring it may lead to long-term stiffness, pain, or even permanent loss of function.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>At Sapiens Clinic in Malleshwaram, we specialize in accurate diagnosis and comprehensive treatment for hand and wrist injuries - so you can heal well, move freely and get back to doing what you love.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Types of Bone Injuries in the Hand and Wrist</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>a) Fractures (Broken Bones)</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Hand and wrist fractures occur when any of the 27 small bones in the hand or the 8 in the wrist crack, shift or break. These may be clean breaks, minor hairline cracks, or more complicated with multiple fragments.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Common types:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Distal radius fracture </b>(most common wrist fracture)</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Scaphoid fracture </b>(pain near the thumb base)</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Metacarpal/phalangeal fractures </b>(broken fingers or knuckles)</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>These injuries can be painful and, if ignored or mistreated, can lead to permanent deformities or arthritis.</div>
                    </div>
                </div>
            </div>

           <div className='px-8 lg:px-20 mt-8'>
                {/* <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'></div> */}
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>b) Ligament Injuries (Soft Tissue Tears)</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Ligaments are strong connective tissues that stabilize joints. A sudden twist, overstretch, or direct trauma can damage these structures, causing instability, weakness or chronic pain.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Examples include:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Scapholunate ligament tears</b> - leading to wrist instability</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>TFCC injuries</b> - pain on the little finger side of the wrist</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Thumb UCL tear (Skier’s thumb)</b> - common with sports falls</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>What Causes These Injuries?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Falling on an outstretched hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Sudden impact while playing sports</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Repetitive stress from typing, lifting, or tool use</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Direct blow or crush injury</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Twisting the wrist unnaturally during daily tasks</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>In some people, weak bones (osteoporosis) or existing joint issues make injuries more likely even with low-impact trauma.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'></div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Warning Signs You Shouldn't Ignore</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></div> */}
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Swelling or bruising around the wrist or fingers</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Sharp or aching pain when moving your hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>A popping sensation at the time of injury</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Reduced grip strength or instability</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>A finger or wrist that “looks wrong” or won’t move</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Numbness or tingling (suggesting nerve involvement)</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Even if it seems minor, don’t assume it'll go away on its own - hand injuries often worsen when left untreated.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>How We Diagnose Hand and Wrist Injuries</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>At Sapiens Clinic, diagnosis is never rushed. We begin with a careful physical examination to assess tenderness, swelling, range of motion and alignment. Based on your symptoms, we may recommend:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>X-rays</b> to check for fractures or joint displacement</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>MRI</b> or ultrasound to identify ligament injuries</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>CT scan</b> in cases of complex or non-healing fractures</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Getting to the root of your pain is the first step in proper healing.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>a) Non-Surgical Treatments</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Many injuries can be treated without surgery:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immobilization</b> with a splint or cast</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Pain and anti-inflammatory medication</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity modification</b> to avoid further strain</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Hand therapy</b> to improve motion, prevent stiffness, and regain strength</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>These methods work best when treatment begins early.</div>
                    </div>
                </div>

                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>b) Surgical Interventions</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>In cases where bones are displaced, ligaments are fully torn, or conservative treatment hasn’t worked, surgery might be required. We perform:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Fracture fixation</b> with plates, screws or wires</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Ligament reconstruction or repair</b></li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Arthroscopy</b> for precision and faster recovery with minimal scarring</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>These methods work best when treatment begins early.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Why Choose us forYour Hand or Wrist Injury?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Care at Sapiens Clinic is personal, focused, and built around your lifestyle - whether you’re an athlete, an artist, a professional, or a parent.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Treatment is led by Dr. Darshan Kumar A. Jain, an experienced orthopedic and hand surgeon known for his expertise in managing complex wrist injuries, fractures and ligament reconstructions. His approach combines skilled hands with a deep understanding of how injuries affect your day-to-day life.</div>
                    </div>
                </div>
            </div>

            <div className='mt-15'>
                <Faqs faqs={faqs}  />
            </div>

        </div>
    )
}

export default HandandWristFracture
