import React from 'react'
import Faqs from '../../components/faqs/faqs'

const CarpalTunnel = () => {

    const faqs = [
        {
            ques : "What should I do if I have a red, swollen finger that’s painful to move?",
            ans : "You may have an infection in the tendon sheath or fingertip. Avoid using the hand and seek medical attention immediately."
        },
        {
            ques : "Can a hand infection heal without antibiotics?",
            ans : "Superficial infections may respond to good hygiene, but most require antibiotics to avoid spreading."
        },
        {
            ques : "How do I know if my hand infection is serious?",
            ans : "If you experience spreading redness, fever, or worsening pain, it could be a deeper infection needing urgent care."
        },
        {
            ques : "Will I need surgery for a hand infection?",
            ans : "Only if the infection involves tendons, joints, or bones, or if an abscess is present that needs drainage."
        },
        {
            ques : "How long does it take to recover from a hand infection?",
            ans : "Most superficial infections improve in a few days with treatment. Deeper infections may take several weeks and sometimes require rehabilitation."
        },
    ]

    return (
        <div className='min-h-[100vh]'>
            <div className='text-[24px] font-[600] bg-orange-gradient font-heading lg:text-[36px] text-center'>Infections of the hand</div>
            <div className='px-20'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Hand Infection Treatment in Malleshwaram</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>Even a small injury to the hand can become serious if an infection develops. Hand infections can spread quickly due to the complex anatomy of tendons, joints, and nerves, often resulting in pain, swelling, and loss of function if not treated early. Whether caused by a cut, bite or underlying health condition, early diagnosis and timely care are essential to prevent long-term damage.</div>
                </div>
            </div>

            <div className='px-20'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>What Causes Hand Infections?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px]'>Most hand infections begin with a break in the skin - even tiny ones. Common causes include:</div>
                        <ul className='mt-5'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Cuts or puncture wounds</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Animal or human bites</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Untreated blisters or hangnails</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Contaminated injuries</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Spread of infection from another body part</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px]'>In some cases, conditions like diabetes or compromised immunity can increase the risk and severity of infection.</div>
                    </div>
                    
                </div>
            </div>

            <div className='px-20 mt-10'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Common Types of Hand Infections</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Paronychia</b>: Infection around the fingernail, often due to nail trauma or biting</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Felon</b>: Deep fingertip infection causing intense pressure and swelling</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Cellulitis</b>: A widespread skin infection that appears red, swollen, and warm</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Flexor Tenosynovitis</b>: Involves infection within the tendon sheath, severely affecting finger motion</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Septic Arthritis</b>: Infection inside a joint, which can lead to cartilage damage</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Osteomyelitis</b>: A serious bone infection that may require surgical care</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-20 mt-10'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms to Look Out For</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Swelling, redness or warmth in the hand or fingers</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Sharp or throbbing pain, especially when moving the hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Pus or discharge from a wound</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Difficulty bending or straightening a finger</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Fever or chills in advanced cases</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Ignoring these symptoms may allow the infection to progress deeper into tissues, tendons, or bones.</div>
                    </div>
                </div>
            </div>

            <div className='px-20 mt-10'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Diagnosis</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>A thorough clinical exam is the first step. Based on your symptoms, your doctor may order:</div>
                        <ul className='mt-5'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Blood tests</b> to check for signs of infection</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Wound cultures</b> to identify the bacteria causing it</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>X-rays or MRIs</b> to evaluate whether deeper structures are involved</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-20 mt-10'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Treatment depends on how deep and severe the infection is. Options may include:</div>
                        <ul className='mt-5'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Antibiotics</b>: Oral or IV antibiotics are commonly prescribed to clear the infection</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Drainage</b>: For abscesses or collections of pus, minor procedures may be done to relieve pressure</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immobilization</b>: A splint may be used to rest the hand and reduce irritation</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Surgical intervention</b>: Deep infections involving tendons or bones might require urgent surgery to prevent complications</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Delays in treatment can lead to tendon rupture, joint stiffness, or permanent loss of movement.</div>
                    </div>
                </div>
            </div>

            <div className='px-20 mt-10'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery & Care</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></div>With early intervention, most hand infections resolve without complications. Recovery time depends on the type and severity of the infection, but rest, medication adherence, and proper wound care are key. Your healthcare provider will monitor healing and may recommend physiotherapy to restore motion if required.
                        <ul className='mt-5'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></div>
                    </div>
                </div>
            </div>

            <div className='px-20 mt-10'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Prevention Tips</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Clean even minor wounds immediately</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Avoid biting nails or cuticles</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Wear protective gloves when handling sharp or soiled objects</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Keep chronic conditions like diabetes well-controlled</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Don’t ignore signs like redness, swelling, or pus</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-20 mt-10'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Hand infections can progress quickly if ignored, leading to serious complications such as tendon damage, joint stiffness, or even permanent loss of function. What starts as a small injury can affect deeper structures like nerves, bones, or joints if not treated promptly. If you’re experiencing persistent pain, swelling, or signs of infection in your hand or fingers, don’t delay seeking expert care. For accurate diagnosis, focused treatment, and long-term recovery support, consult Dr. Darshan Kumar A. Jain, renowned Hand and Upper Limb Specialist at Sapiens Clinic, Malleshwaram.</div>
                    </div>
                </div>
            </div>

            <div className='mt-15'>
                <Faqs faqs = {faqs} />
            </div>
        </div>
    )
}

export default CarpalTunnel
