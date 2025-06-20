import React from 'react'
import Faqs from '../../components/faqs/faqs'
import Servicesbanner from '../../components/services-banner/Servicesbanner'
import ContactPage from '../services/ContactPage/ContactPage'
const StiffnessOfHandJoints = () => {

    const faqs = [
        {
            ques : 'Why do my fingers feel stiff in the morning?',
            ans : "Morning stiffness is often a sign of inflammatory arthritis but can also happen after prolonged inactivity. If it lasts more than 30 minutes daily, it's best to get evaluated."
        },
        {
            ques : 'Can stiffness be reversed completely?',
            ans : 'Yes, in many cases - especially if treated early. With guided physiotherapy, splinting, and (when needed) minor procedures, patients regain excellent hand function.'
        },
        {
            ques : 'I had a fracture a few months ago. Why is my hand still stiff?',
            ans : 'Stiffness after immobilization is common. You may need guided rehab or treatment for underlying scar tissue or joint contracture.'
        },
        {
            ques : 'Do I always need surgery for stiff hands?',
            ans : 'Not at all. Surgery is usually a last resort. Most cases respond well to conservative treatment and rehab, especially when addressed early.'
        },
        {
            ques : 'Can diabetes cause hand stiffness?',
            ans : 'Yes. In diabetic patients, hand stiffness may be due to glycation of soft tissues. It needs to be managed with exercises, glucose control and sometimes injections or therapy.'
        },
    ]

    return (
        <div>

            <Servicesbanner serviceName = "Stiffness of Hand Joints" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Helping Your Hands Move Freely Again</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Imagine waking up and finding your fingers hard to move. You try to stretch, but they feel locked or tight. You want to pick up your cup of tea, but your wrist won’t bend easily. If this sounds familiar, you may be experiencing joint stiffness in the hand, a common yet often underestimated issue that can interfere with even the simplest daily activities.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>At Sapiens Clinic, we help people get their mobility back - with an accurate diagnosis, a personalized treatment approach, and the right support every step of the way.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>What Is Joint Stiffness of the Hand?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Joint stiffness refers to a loss of flexibility and ease of movement in one or more of the finger, thumb, or wrist joints. It may be mild and occur only in the mornings or after inactivity, or it may be more persistent - making tasks like writing, typing, cooking or holding a phone difficult.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>It’s not a condition by itself but often a symptom of an underlying issue like injury, arthritis, post-surgical scar formation or chronic inflammation. The earlier it's addressed, the better the outcome.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Common Causes of Stiff Hand Joints</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Stiffness can be due to mechanical, inflammatory, or structural issues. Some of the most common causes we see include:</div>
                        
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-5'><b>1. Post-Injury or Post-Surgery Stiffness</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>After a fracture, ligament injury, or surgical procedure (like tendon repair or joint fixation), the hand may stiffen up - especially if the area was immobilized for a long time without rehabilitation.</div>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>2. Inflammatory Conditions</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Autoimmune diseases like rheumatoid arthritis, psoriatic arthritis, or lupus cause chronic inflammation that can damage joints and surrounding soft tissues, leading to morning stiffness, swelling, and joint pain.</div>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>3. Osteoarthritis</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>With age or overuse, the cartilage in your joints wears down. This “wear-and-tear” arthritis can lead to stiffness, especially in the finger joints, thumb base, or wrist.</div>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>4. Diabetes-Related Stiffness</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>People with diabetes may develop diabetic cheiroarthropathy, a condition where the skin thickens and the joints feel tight, especially in the fingers.</div>

                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>5. Tendon Adhesions or Contractures</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Sometimes the issue is not in the joint itself, but in the tendons or soft tissues around it. Trigger finger, Dupuytren’s contracture, or tenosynovitis can all restrict movement and cause locking or catching of fingers.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Symptoms to Look Out For</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'></div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Stiff fingers or wrist, especially in the morning or after rest</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Difficulty making a fist or fully opening the hand</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Pain or tightness when trying to move fingers</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Swelling around the joints</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Fingers that feel “locked” or catch during movement</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Reduced grip strength or clumsiness with hand tasks</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>If these symptoms last more than a few days or worsen with time, it’s time to see a specialist.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>How Stiffness Is Diagnosed?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Diagnosis isn’t just about an X-ray. At Sapiens Clinic, we start with a thorough physical examination to assess joint movement, tendon function, and areas of tenderness. Based on what we find, we may suggest:</div>
                        <ul className='mt-5  list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>X-rays - to rule out arthritis or old fractures</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>MRI or Ultrasound - for tendon or ligament involvement</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Blood tests - if autoimmune causes like RA are suspected</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Identifying the underlying cause is essential to provide the most effective and personalized treatment.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options: What We Offer</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>We believe in treating the cause, not just the symptom. Once we identify what’s behind the stiffness, your treatment may include:</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b> 1. Physical Therapy & Rehabilitation</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Gentle exercises to stretch the fingers, mobilize the wrist, and retrain normal hand movements. We also guide you on using heat/cold therapy at home and ergonomic hand positioning.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>2. Medications</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Anti-inflammatory tablets or topical gels can help in cases where swelling is contributing to the stiffness. If autoimmune inflammation is present, immunosuppressants may be needed.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>3. Splinting or Taping</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Supportive splints may be used to position joints correctly and relieve strain - especially in conditions like trigger finger or early Dupuytren’s.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>4. Steroid Injections</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>For stubborn inflammatory stiffness, a corticosteroid injection into the joint or tendon sheath can reduce pain and improve motion within days.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'><b>5. Surgical Options (If Required)</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>When stiffness is due to tendon adhesions, contractures, or joint fusion, surgery may be needed to release scar tissue, repair tendons, or restore joint alignment.</div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4 font-[500]'>When it comes to treating hand stiffness, it’s not just about improving movement - it’s about restoring your independence and comfort in the little things you do every day. At Sapiens Clinic, your care is guided by Dr. Darshan Kumar A. Jain, a skilled orthopedic and hand specialist with years of experience managing complex joint and soft tissue conditions. His approach combines precision with a deep understanding of how hand stiffness impacts your quality of life-ensuring every treatment plan is not only medically sound but also practical for your lifestyle.</div>
                    </div>
                </div>
            </div>

            <ContactPage />

            <div className='mt-15'>
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default StiffnessOfHandJoints
