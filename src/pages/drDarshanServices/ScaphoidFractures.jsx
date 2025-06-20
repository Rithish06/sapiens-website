import React from 'react'
import Faqs from '../../components/faqs/faqs'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import ContactPage from '../services/ContactPage/ContactPage'

const ScaphoidFractures = () => {

    const faqs = [
        {
            ques : "Can a scaphoid fracture heal on its own?",
            ans : "Some minor fractures may heal naturally, but medical supervision is essential to ensure proper alignment and recovery."
        },
        {
            ques : "How long does it take for a scaphoid fracture to heal?",
            ans : "Typically, healing takes 6 to 12 weeks, though it may take longer if the fracture is complex or delayed in diagnosis."
        },
        {
            ques : "Is surgery always required for a scaphoid fracture?",
            ans : "No, surgery is recommended only for displaced fractures or those not healing with conservative treatment."
        },
        {
            ques : "What happens if a scaphoid fracture is left untreated?",
            ans : "It can lead to nonunion, persistent pain, wrist instability, and even arthritis in the long term"
        },
        {
            ques : "Can I return to sports after a scaphoid fracture?",
            ans : "Yes, but only after complete healing and rehabilitation. Your doctor will guide you on a safe timeline for return."
        },
    ]

    return (
        <div>
            <Servicesbanner serviceName = "Scaphoid Fractures" />

            <div className='px-8 lg:px-20 mt-8'>
                {/* <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'></div> */}
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>A scaphoid fracture is one of the most common wrist injuries, typically caused by a fall onto an outstretched hand. It affects the scaphoid bone—a small but critical bone located on the thumb side of the wrist. Because this bone has limited blood supply, delayed or improper treatment can lead to poor healing, chronic pain, or long-term complications.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>At Sapiens Clinic, Malleshwaram, we provide specialized evaluation and treatment for scaphoid fractures, ensuring timely healing and restoration of wrist function.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>What Is a Scaphoid Fracture?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>The scaphoid connects the two rows of wrist bones and helps maintain stability and movement. When fractured, especially through trauma or impact, it may go unnoticed at first due to minimal swelling or mild symptoms.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>These fractures are classified as:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Non-displaced:</b> The bone is broken but remains properly aligned</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Displaced:</b> The bone fragments have shifted out of position, often requiring surgical correction</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Common Causes</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Falling on an outstretched hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Sports-related injuries (e.g., football, skateboarding, or cycling)</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Car or bike accidents</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Sudden impact or twisting injuries to the wrist</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Symptoms may develop gradually, which is why many scaphoid fractures go undiagnosed early. Watch out for:</div>
                        {/* <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'></div> */}
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Pain on the thumb side of the wrist, especially with movement</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Swelling or bruising around the wrist</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Tenderness in the “anatomical snuffbox” (a small hollow on the thumb side of the wrist)</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Difficulty gripping or lifting objects</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Reduced range of wrist motion</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Diagnosis</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Early detection is key to prevent complications. At the clinic, diagnosis may involve:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physical examination</b>: Checking wrist tenderness, swelling, and movement</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>X-rays</b>: Initial imaging; may not always show the fracture in the early phase</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>MRI or CT scan</b>: Used if X-rays are inconclusive or to determine the extent of fracture or displacement</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Treatment depends on the fracture's location, alignment, and how long it's been since the injury:</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Non-surgical Treatment</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Casting</b>: Using a splint or cast to allow the ligament to heal.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Immobilization</b>: Exercises to restore strength and flexibility.</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Regular monitoring</b>: Avoiding activities that exacerbate symptoms.</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Surgical Treatments</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Surgery may be necessary in cases of:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Displaced fractures</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Fractures not healing with conservative treatment</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Chronic fractures or non-unions</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Surgical options include:</b></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Internal fixation</b> using screws or pins to stabilize the bone</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Bone grafting</b> if the fracture shows signs of delayed healing or avascular necrosis</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Recovery & Rehabilitation</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>Recovery from a scaphoid fracture varies based on the treatment:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Healing time</b> ranges from 6 to 12 weeks for non-displaced fractures, and longer if surgery is performed</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Physiotherapy</b> helps restore wrist strength, flexibility, and function</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Gradual return to activities</b> ensures the bone has fully healed before resuming sports or heavy work</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Prevention Tips</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Use protective gear during sports or high-risk activities</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Practice fall-prevention techniques during physical activities</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Strengthen wrist and hand muscles with regular exercises</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Address wrist pain early to rule out hidden fractures</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Conclusion</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>A scaphoid fracture may seem minor at first, but without proper care, it can lead to significant wrist dysfunction. Early treatment not only ensures faster recovery but also reduces the risk of complications like nonunion or avascular necrosis. If you've suffered a wrist injury or are experiencing persistent wrist pain, consult Dr. Darshan Kumar A. Jain, Hand and Upper Limb Specialist at Sapiens Clinic, Malleshwaram, for expert diagnosis and personalized care.</div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <div className="mt-15">
                <Faqs faqs = {faqs} />
            </div>
        </div>
    )
}

export default ScaphoidFractures
