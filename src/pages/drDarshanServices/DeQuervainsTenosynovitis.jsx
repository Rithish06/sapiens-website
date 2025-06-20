import React from 'react'
import Servicesbanner from '../../components/services-banner/Servicesbanner';
import Faqs from '../../components/faqs/faqs';
import ContactPage from '../services/ContactPage/ContactPage';

const DeQuervainsTenosynovitis = () => {

    const faqs = [
        {
            ques: "Can De Quervain’s go away on its own?",
            ans: "Mild cases may improve with rest and avoiding strain, but chronic or worsening pain needs medical intervention."
        },
        {
            ques: "How long does recovery take after surgery?",
            ans: "Post-surgical recovery is typically 2-4 weeks. Most patients return to normal activities within a month, with hand therapy if needed."
        },
        {
            ques: "Is this condition permanent?",
            ans: "Not at all. With early treatment—whether conservative or surgical—most people regain full function without long-term issues."
        },
        {
            ques: "Can I still use my phone or laptop?",
            ans: "Yes, but usage might need to be limited for a while. The clinic offers practical advice on ergonomic adjustments and stretches to help."
        },
        {
            ques: "Does the treatment involve any injections?",
            ans: "If pain is moderate, corticosteroid injections may be recommended to reduce inflammation quickly and avoid surgery."
        }
    ];


    return (
        <div>
            <Servicesbanner serviceName="De Quervain’s Tenosynovitis" />

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Personalized Care for Lasting Wrist Pain Relief - At Sapiens Clinic</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Pain on the thumb side of your wrist when lifting, gripping, or holding something as light as your phone? You're not alone. This could be a sign of De Quervain’s Tenosynovitis - a condition that affects countless individuals who rely on their hands every day, from young mothers and IT professionals to athletes and artists.
                        </div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            At Sapiens Clinic, Malleshwaram, this condition is managed with empathy, expertise and evidence-based care focused on helping you regain comfort and mobility-without compromising your routine or lifestyle.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>What is De Quervain’s Tenosynovitis?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            De Quervain’s Tenosynovitis occurs when the tendons that run along the thumb side of the wrist become swollen and irritated. These tendons pass through a narrow tunnel (sheath) and when inflamed, they can cause sharp pain and restricted movement.
                        </div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>Common triggers include:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Repetitive wrist and thumb movements (texting, lifting, writing)</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>New mothers often experience this due to frequent lifting of their babies</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Certain sports or occupations that involve gripping or twisting</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Hormonal changes (more common in women aged 30-50)</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Without proper treatment, this can interfere with even the simplest of tasks-like brushing your hair, holding a pen or cooking.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Common Causes</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            This condition is often linked to repetitive strain, especially:
                        </div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>New mothers lifting their baby multiple times a day</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Desk job professionals using a mouse or typing frequently</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Fitness enthusiasts lifting weights or doing wrist-heavy workouts</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Artists or tailors who do precise wrist movements for hours</li>
                            {/* <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Even gardening, texting, or scrolling on your phone repeatedly can contribute.</li> */}
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'>Even gardening, texting, or scrolling on your phone repeatedly can contribute.</div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>How is it Diagnosed?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Diagnosis is typically done through a simple in-clinic physical exam. One commonly used method is the Finkelstein test - where the thumb is bent into the palm and the wrist is moved downward. If this movement causes pain, it’s a strong sign of De Quervain’s. No fancy tests or scans are usually needed unless another condition needs to be ruled out.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Treatment Options</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>a) Non-Surgical Management</b></div>
                        <div  className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Most cases improve with conservative measures like:</b></div>
                        <ul className='mt-5 list-disc pl-10'>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Thumb and wrist splints:</b> to immobilize the area and allow healing</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Anti-inflammatory medications:</b> to reduce swelling and ease discomfort</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Activity modifications:</b> avoiding repetitive wrist movements</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Ultrasound-guided steroid injections:</b> for targeted inflammation control</li>
                            <li className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-3'><b>Hand therapy:</b> strengthening and stretching exercises under expert guidance</li>
                        </ul>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'><b>b) Surgical Care (if needed)</b></div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            When pain persists despite all non-surgical options, a minor surgical procedure may be suggested. This involves releasing the tight sheath surrounding the tendons, allowing them to move freely without friction or inflammation. It's a day-care procedure with a quick recovery timeline.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Why Choose Sapiens Clinic in Malleshwaram?</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Sapiens Clinic offers a specialized and well-rounded approach to hand and wrist problems. The clinic is equipped with advanced diagnostic tools, expert therapists and a calm, patient-first atmosphere. From young mothers to working professionals, personalized care is at the heart of what they do.
                        </div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            All De Quervain’s treatments are led by Dr. Darshan Kumar A. Jain, one of Bangalore’s trusted names in orthopedic and hand surgery, known for his precise diagnosis and minimally invasive techniques.
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 lg:px-20 mt-8'>
                <div className='text-[18px] font-[600] bg-orange-gradient font-heading lg:text-[30px]'>Book an Appointment</div>
                <div className='flex flex-column lg:flex-row gap-[20px] lg:gap-[50px]'>
                    <div>
                        <div className='font-para text-[12px] lg:text-[16px] leading-[26px] mt-4'>
                            Don’t let wrist pain hold you back. Whether it’s interfering with daily chores, work or parenting, expert help is just a call away.
                        </div>
                    </div>
                </div>
            </div>

                <ContactPage />

            <div className="mt-15">
                <Faqs faqs={faqs} />
            </div>
        </div>
    )
}

export default DeQuervainsTenosynovitis
