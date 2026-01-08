// import React from 'react'
// import Divyaservicebanner from '../../../components/services-banner/Divyaservicebanner'
// import { assets } from '../../../assets/assets'
// import Faqs from '../../../components/faqs/faqs'
// import ContactPage from '../ContactPage/ContactPage'
// import { Helmet } from 'react-helmet'

// const EntropionRepair = () => {

//     const faqs = [
//         {
//             ques: "What happens if entropion is left untreated?",
//             ans: "It can cause corneal damage, infections, and eventual loss of vision due to constant friction."
//         },
//         {
//             ques: "Is entropion repair surgery painful?",
//             ans: " No, the procedure is performed under local anesthesia with minimal discomfort. Mild swelling is expected post-op."
//         },
//         {
//             ques: "Can entropion come back after surgery?",
//             ans: " While rare, recurrence is possible, especially in cases with underlying inflammatory disease. Regular follow-ups help monitor recovery."
//         },
//         {
//             ques: "How soon can I resume normal activities?",
//             ans: " Most patients return to routine life within 7–10 days. Heavy lifting or eye rubbing should be avoided for 2 weeks."
//         },
//         {
//             ques: "Is surgery the only solution?",
//             ans: " Not always. In early or mild cases, conservative treatments can help manage symptoms. Surgery is recommended for lasting relief."
//         },
//     ]


//     return (
//         <div>

//             <Helmet>
//                 <title>Dr. Divya D Sundaresh - Entropion Repair Specialist Bangalore</title>
//                 <meta name="description" content='Dr. Divya D Sundaresh provides expert entropion repair in Bangalore, Karnataka to restore eyelid alignment and eye comfort.' />
//             </Helmet>
//             <div>
//                 <Divyaservicebanner servicename='Entropion Repair Surgery' />
//             </div>

//             {/* container 1 */}
//             <div className='xs:mt-29 md:mt-10 lg:mx-20 md:mx-10 mx-5  '>
//                 <div className='flex flex-col items-center mt-5'>
//                     {/* <div className="text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent">Entropion Repair Surgery in Malleshwaram, Bangalore</div> */}
//                     <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent '>Restore Comfort and Protect Your Vision from Inward-Turning Eyelids</div>
//                     <div className='text-[12px] md:text-[16px] font-[500] font-para mt-2  md:leading-7 leading-5 '>Entropion is a condition where the <b>eyelid turns inward</b>, causing the eyelashes and skin to rub directly against the surface of the eye. This constant friction can lead to discomfort, redness, tearing, and in severe cases, corneal damage or vision loss.
//                         Most commonly seen in older adults, especially those over 60, entropion requires timely evaluation and appropriate treatment to avoid long-term complications. At <b>Sapiens Clinic</b>, we offer advanced surgical and non-surgical solutions for entropion, ensuring comfort, safety, and lasting relief.
//                     </div>
//                 </div>

//                 {/* container 2 */}

//                 <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>
//                     {/* img */}
//                     {/* <div className='md:w-[50%]'>
//                         <img src={assets.eximg} alt="" />
//                     </div> */}

//                     {/* content */}
//                     <div className='md:leading-7 leading-5 w-[100%]' >
//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent py-2'>What Is Entropion?</div>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para'>Entropion occurs when the lower eyelid folds inward, leading to direct contact between the lashes and the eye’s surface. This causes irritation to the cornea, which may result in persistent redness, watery eyes, blurred vision, and a sensation of a foreign object in the eye.
//                             Entropion typically affects the lower eyelid, though in some cases both eyes may be involved. Left untreated, this condition can progressively damage the cornea, increasing the risk of infection and visual impairment.
//                         </div>
//                     </div>
//                 </div>

//                 {/* container 3 */}

//                 <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10'>

//                     {/* content */}
//                     <div>
//                         <div className='text-[19px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Types of Entropion</div>
//                         <div className=' text-[12px] md:text-[16px] font-[500] font-para'>
//                             <div className='py-2'>There are several causes of entropion :</div>
//                             <ul className='list-disc md:leading-7 leading-5 ml-5'>
//                                 <li><b>Involutional Entropion </b>: Most common in aging adults due to weakening of eyelid muscles and tissues.</li>
//                                 <li><b>Spastic Entropion</b> : Triggered by inflammation, infection, or trauma - often after eye surgery.</li>
//                                 <li><b>Cicatricial Entropion</b> : Caused by scar tissue formation from burns, surgeries, or chronic inflammation.</li>
//                                 <li><b>Congenital Entropion</b> : Present from birth due to structural abnormalities in the eyelid.</li>
//                                 <li><b>Mechanical Entropion</b> : Occurs when a growth or mass on the eyelid causes it to turn inward.</li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* img */}
//                     {/* <div className='xl:w-[50%]'>
//                         <img src={assets.eximg} alt="" />
//                     </div> */}
//                 </div>

//                 {/* container 4 */}

//                 <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>
//                     {/* img */}

//                     {/* <div className='xl:w-[50%]'>
//                         <img src={assets.eximg} alt="" />
//                     </div> */}

//                     {/* content */}
//                     <div>
//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Symptoms of Entropion</div>
//                         <div className=' text-[12px] md:text-[16px] font-[500] font-para pt-2'>
//                             <ul className='list-disc md:leading-7 leading-5 ml-5'>
//                                 <li>A gritty or foreign body sensation in the eye</li>
//                                 <li>Persistent tearing and eye redness</li>
//                                 <li>Light sensitivity and blurred vision</li>
//                                 <li>Eye pain or irritation</li>
//                                 <li>Eyelid crusting or discharge</li>
//                             </ul>

//                             <div className='py-2'>Initially, these symptoms may come and go. But as the eyelid continues to turn inward, the discomfort becomes more constant and severe.</div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* container 5 */}

//                 <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10 '>

//                     {/* content */}
//                     <div>
//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>What Causes Entropion?</div>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para'>
//                             <div className='py-2'>Entropion often results from age-related muscle laxity, but other causes include :</div>
//                             <ul className='list-disc ml-5 md:leading-7 leading-5 '>
//                                 <li>Past eye trauma or surgery</li>
//                                 <li>Infections or inflammatory conditions</li>
//                                 <li>Scarring from burns or autoimmune diseases</li>
//                                 <li>Genetic predisposition (in congenital cases)</li>
//                             </ul>
//                         </div>

//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Diagnosis at Sapiens Clinic</div>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para'>
//                             <div className='py-2'>A detailed eye examination is performed to identify the type and severity of entropion. Tests may include :</div>
//                             <ul className='list-disc md:leading-7 leading-5 ml-5'>
//                                 <li><b>Slit lamp exam</b> to inspect the eyelid margin and cornea</li>
//                                 <li><b>Snap-back test</b> to assess eyelid muscle tone</li>
//                                 <li><b>Distraction test</b> to evaluate lid laxity and positioning</li>
//                             </ul>
//                             <div className='py-2'>Ruling out similar conditions is also key to ensuring the right treatment plan.</div>
//                         </div>
//                     </div>

//                     {/* img */}

//                     {/* <div className='xl:w-[50%]'>
//                         <img src={assets.eximg} alt="" />
//                     </div> */}
//                 </div>

//                 {/* container 6 */}

//                 <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>

//                     {/* img */}
//                     {/* <div className='xl:w-[50%]'>
//                         <img src={assets.eximg} alt="" />
//                     </div> */}

//                     {/* content */}
//                     <div className=''>
//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Entropion Treatment Options</div>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para'>Treatment depends on the underlying cause and severity of symptoms. We offer both non-surgical and surgical options :</div>
//                         <div className='text-[14px] md:text-[16px] lg:text-[26px] font-heading font-[600] pt-2 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Non-Surgical Management (Short-term Relief)</div>
//                         <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc md:leading-7 leading-5 ml-5 pt-2'>
//                             <li><b>Lubricating Eye Drops and Ointments</b> : Help reduce friction and dryness</li>
//                             <li><b>Protective Soft Contact Lenses </b>: Act as a shield to prevent corneal irritation</li>
//                             <li><b>Tape Technique </b>: Temporarily repositions the eyelid outward</li>
//                             <li><b>Botox Injections</b> : Weaken overactive eyelid muscles causing the inward turn</li>
//                             <li><b>Eyelash Removal (Epilation) </b>: Reduces irritation by removing misdirected lashes</li>
//                         </ul>
//                         <div className=' text-[12px] md:text-[16px] font-[500] font-para py-2'>These methods offer symptom relief but are often temporary.</div>
//                     </div>
//                 </div>

//                 {/* container 7 */}

//                 <div className='flex flex-col-reverse lg:flex-row items-center gap-10 mt-10'>

//                     {/* content */}
//                     <div>
//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Entropion Repair Surgery</div>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para'>Surgery is the most effective and lasting solution for entropion. Performed under local anesthesia with sedation, the procedure repositions the eyelid to its natural alignment.</div>
//                         <div className='text-[14px] md:text-[16px] lg:text-[26px] font-heading font-[600] pt-2 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Surgical Techniques May Include:</div>
//                         <ul className='text-[12px] md:text-[16px] font-[500] font-para list-disc md:leading-7 leading-5 ml-5 py-2'>
//                             <li>Eyelid Tightening (lateral tarsal strip or wedge resection)</li>
//                             <li>Retractor Reinsertion to restore muscle function</li>
//                             <li>Orbicularis Muscle Adjustment to reduce abnormal muscle pull</li>
//                             <li>Eyelid Margin Reconstruction in cases with trauma or severe scarring</li>
//                         </ul>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para py-2'>Most procedures are performed as day-care surgeries, and patients go home the same day.</div>
//                     </div>

//                     {/* img */}
//                     {/* <div className='xl:w-[50%]'>
//                         <img src={assets.eximg} alt="" />
//                     </div> */}
//                 </div>

//                 {/* container 8 */}

//                 <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>

//                     {/* img */}
//                     {/* <div className='xl:w-[50%]'>
//                         <img src={assets.eximg} alt="" />
//                     </div> */}

//                     {/* content */}
//                     <div>
//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Recovery and Outlook</div>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para '>
//                             <ul className='list-disc md:leading-7 leading-5 ml-5'>
//                                 <li><b>Recovery Time</b> : 1–2 weeks for most patients</li>
//                                 <li><b>Post-op Care</b> : Cold compresses, antibiotics, and lubricants are advised</li>
//                                 <li><b>Results</b> : Most patients experience lasting relief from symptoms with restored eyelid function and eye protection</li>
//                             </ul>
//                             <div className='text-[12px] md:text-[16px] font-[500] font-para py-2'>Minor swelling or bruising is common in the early days but subsides quickly with proper care.</div>
//                         </div>

//                         <div className='text-[18px] md:text-[20px] lg:text-[30px] font-heading font-[600] pt-5 bg-gradient-to-b from-[#EF7F1A] to-[#B22726] bg-clip-text text-transparent'>Why Early Treatment Matters</div>
//                         <div className='text-[12px] md:text-[16px] font-[500] font-para'>
//                             <div className='py-2'>Untreated entropion can lead to :</div>
//                             <ul className=' list-disc md:leading-7 leading-5 ml-5'>
//                                 <li><b>Corneal abrasions or ulcers</b></li>
//                                 <li><b>Chronic infections</b></li>
//                                 <li><b>Scarring and permanent vision loss</b></li>
//                             </ul>
//                             <div className='text-[12px] md:text-[16px] font-[500] font-para py-2'>Prompt evaluation and surgical correction offer the best long-term outcomes.</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* contact-part */}
//             <div>
//                 <ContactPage />
//             </div>

//             {/* faqs */}
//             <div>
//                 <Faqs faqs={faqs} />
//             </div>
//         </div>
//     )
// }

// export default EntropionRepair



import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Eye, Shield, Clock, Star, Phone, Mail, CheckCircle, Award, Users, Stethoscope, Search, Activity, MapPin, Heart } from 'lucide-react';
import NewContactForm from '../ContactPage/NewContactForm';

const EntropionRepairPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    const formRef = useRef()
    const learnmoreRef = useRef()

    const scrolltoForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const scrolltoContaier2 = () => {
        learnmoreRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[id^="section-"]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const procedures = [
        {
            title: "Non-Surgical Management",
            subtitle: "Temporary Relief Options",
            description: `
                <ul class="list-disc ml-10">
                    <li>Lubricating eye drops and ointments to protect the eye surface</li>
                    <li>Taping or supportive measures in early or mild cases</li>
                    <li>Soft contact lenses to provide corneal protection</li>
                    <li>Botulinum toxin injections for temporary relief in select cases</li>
                </ul>
            `,
            icon: <Star className="w-8 h-8" />
        },
        {
            title: "Surgical Repair",
            subtitle: "Definitive Treatment",
            description: `
                <p>Entropion repair surgery is the most effective solution for permanent correction. The procedure involves tightening and repositioning the eyelid to restore its natural alignment away from the eye. Surgery is usually performed as a day-care procedure with minimal discomfort and smooth recovery.</p>
                <ul class="list-disc mt-5 ml-10">
                    <li>Eyelid tightening and repositioning</li>
                    <li>Restoration of normal muscle function</li>
                    <li>Protection of the eye surface</li>
                    <li>Fast recovery with natural-looking results</li>
                </ul>
            `,
            icon: <Shield className="w-8 h-8" />
        },
    ];

    const whyChooseUs = [
        {
            title: "Expert Ophthalmologist",
            description: "Specialized oculoplasty expertise with years of experience in treating eyelid disorders.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Precise Diagnosis",
            description: "Detailed eyelid examination to assess position, muscle tone, and eye surface health.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Complete Care",
            description: "Comprehensive treatment from initial evaluation to post-procedure follow-up.",
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: "Eye-Surface Protection First",
            description: "Focus on protecting your cornea and restoring normal eyelid function.",
            icon: <Eye className="w-6 h-6" />
        },
        {
            title: "Convenient Location",
            description: "Accessible Malleshwaram, Bangalore location with easy appointment scheduling.",
            icon: <MapPin className="w-6 h-6" />
        },
    ];

    const faqs = [
        {
            ques: "What happens if entropion is left untreated?",
            ans: "Untreated entropion can lead to chronic irritation, corneal damage, infections, and potentially permanent vision loss due to corneal scarring."
        },
        {
            ques: "Is entropion repair surgery safe?",
            ans: "Yes. It is a commonly performed, safe procedure when done by an experienced ophthalmologist with oculoplasty expertise."
        },
        {
            ques: "How long does recovery take after entropion repair?",
            ans: "Most patients recover within 1-2 weeks, with gradual improvement in comfort and appearance. Full healing typically occurs within a few weeks."
        },
        {
            ques: "Will the eyelid look natural after surgery?",
            ans: "Yes. The goal of surgery is functional correction with a natural eyelid position that protects your eye while maintaining normal appearance."
        },
        {
            ques: "Is entropion likely to recur after surgery?",
            ans: "Recurrence is uncommon when the underlying cause is properly addressed and the surgery is performed by an experienced specialist."
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-100 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>
                    <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-rose-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center mt-20">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-orange-200 text-sm mb-8 animate-fade-in border border-orange-300/30">
                            <Eye className="w-4 h-4 mr-2" />
                            Entropion Repair (Inward Turning Eyelid)
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                                Entropion Repair
                            </span>
                            <br />
                            <span className="text-2xl md:text-4xl lg:text-5xl text-slate-200">Expert Evaluation & Surgical Care in Bangalore</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Persistent eye irritation from inward-turning lids can be corrected-expert entropion repair restores comfort and confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button onClick={scrolltoForm} className="group px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer">
                                Schedule Consultation Today
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button onClick={scrolltoContaier2} className="px-8 py-4 border-2 border-orange-300/30 text-orange-200 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 backdrop-blur-sm transition-all duration-300 cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expert Treatment Section */}
            <section ref={learnmoreRef} id="section-expert" className={`py-20 transition-all duration-1000 ${isVisible['section-expert'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 rounded-full text-sm font-medium mb-6 border border-orange-200">
                                <Award className="w-4 h-4 mr-2" />
                                Expert Care
                            </div>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                                If you've noticed your lower eyelid turning inward, causing excessive tearing or irritation, it's important not to delay evaluation. While entropion often develops gradually, it can expose the eye surface and increase the risk of dryness, infections, and vision problems. At Sapiens Clinic, Bangalore, Karnataka, we offer expert assessment and personalized surgical care for entropion-helping restore eyelid function, eye health, and everyday comfort.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-white to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">Dr. Divya Sundaresh</h3>
                                            <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold">Consultant Ophthalmologist & Oculoplasty Specialist</p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Dr. Divya Sundaresh is an experienced ophthalmologist with specialized expertise in eyelid disorders and oculoplastic procedures. She is skilled in diagnosing and treating conditions such as entropion using precise surgical techniques that restore normal eyelid position while preserving eye health and facial harmony.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-6 rounded-2xl">
                                        <p className="font-medium">
                                            With a patient-centered approach, she focuses on both functional correction and long-term comfort-ensuring the eye remains protected, moist, and healthy after treatment.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Trusted Expertise</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Expert</div>
                                                <div className="text-sm text-gray-600">Oculoplasty Care</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Precise</div>
                                                <div className="text-sm text-gray-600">Surgical Techniques</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Patient-Centered</div>
                                                <div className="text-sm text-gray-600">Treatment Approach</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Complete</div>
                                                <div className="text-sm text-gray-600">Eye Care Solutions</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Entropion Section */}
            <section id="section-about" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-gradient-to-r from-white to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        What Is
                                        <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Entropion?</span>
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Entropion is a condition in which the lower eyelid turns inward, toward the eyeball. This causes the eyelashes and eyelid skin to rub against the cornea, leading to irritation, redness, tearing, and potential damage to the eye surface.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        The condition commonly affects older adults but may also occur due to scarring, muscle spasms, or previous eyelid surgery. Without treatment, it can cause corneal infections and vision problems.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Common Causes</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">Age-related weakening of eyelid muscles and tissues</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">Scarring from injury, burns, or previous surgery</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">Chronic eyelid inflammation or skin conditions</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">Muscle spasms or eyelid muscle disorders</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">Congenital factors (rare)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Services Section */}
            <section id="section-surgeries" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-100 transition-all duration-1000 ${isVisible['section-surgeries'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium mb-6 border border-pink-200">
                                <Shield className="w-4 h-4 mr-2" />
                                Treatment Options
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Treatment Options for
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Entropion</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Treatment depends on the severity of symptoms and the cause of eyelid malposition
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {procedures.map((procedure, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-orange-100"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <div className="text-white">
                                                {procedure.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{procedure.title}</h3>
                                        <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold mb-4">{procedure.subtitle}</p>
                                        <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: procedure.description }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="section-whychoose" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-whychoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 rounded-full text-sm font-medium mb-6 border border-rose-200">
                                <Award className="w-4 h-4 mr-2" />
                                Why Choose Us
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Why Choose Sapiens Clinic for
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Entropion Repair?</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Finding the right oculoplasty specialist in Bangalore is essential for effective entropion treatment and restored eye comfort. Our clinic combines expert diagnosis with precise surgical techniques to ensure safe procedures and lasting results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseUs.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* When to Book Section */}
            <section id="section-transform" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-100 transition-all duration-1000 ${isVisible['section-transform'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-rose-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
                            </div>

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                        When Should You
                                        <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> See an Eye Specialist?</span>
                                    </h2>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        You should consult an eye specialist if you experience any of the following symptoms:
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <p className="text-orange-200 font-medium">
                                            Early treatment helps prevent complications and protects long-term eye health. Don't wait until symptoms worsen.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Warning Signs:</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Inward turning of the lower eyelid</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Excessive tearing or watering</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Redness, irritation, or burning sensation</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Feeling of something in your eye</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Recurrent eye infections</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Blurred vision from corneal irritation</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={scrolltoForm} className="cursor-pointer w-full py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                                        Book Your Consultation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="section-faqs" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-50 transition-all duration-1000 ${isVisible['section-faqs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Frequently Asked
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Questions</span>
                            </h2>
                            <p className="text-xl text-gray-600">Get answers to common questions about entropion and its treatment options</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <button
                                        className="w-full p-6 text-left flex items-center justify-between group cursor-pointer"
                                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    >
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                                            {faq.ques}
                                        </h3>
                                        <ChevronDown
                                            className={`w-6 h-6 text-gray-500 group-hover:text-orange-600 transition-all duration-300 ${activeFaq === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="px-6 pb-6">
                                            <div className="h-px bg-gradient-to-r from-orange-200 to-pink-200 mb-4"></div>
                                            <p className="text-gray-600 leading-relaxed">{faq.ans}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            
            
            <section  ref={formRef} >
                <NewContactForm opdTiming="Mon to Sat 4:00 PM to 7:30 PM" formDescription="Don’t let inward-turning eyelids affect comfort or vision. Timely entropion repair can restore eye health and confidence."/>
            </section>

            {/* Safety Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center text-center">
                        <Shield className="w-6 h-6 text-white mr-3" />
                        <p className="text-white font-semibold text-lg">
                            Proven surgical techniques • Advanced technology • Experienced specialists • Comprehensive care
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                    @keyframes fade-in {
                      from { opacity: 0; transform: translateY(20px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    
                    .animate-fade-in {
                      animation: fade-in 0.8s ease-out;
                    }
                    
                    .bg-orange-gradient {
                      background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                      background-clip: text;
                    }
                  `}</style>
        </div>
    );
};

export default EntropionRepairPage;