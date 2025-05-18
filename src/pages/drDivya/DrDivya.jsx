import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { assets } from '../../assets/assets';
import TimeLine from '../../components/timline/Timeline'
import { Outlet } from 'react-router-dom';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { useGSAP } from '@gsap/react';

import PageTransition from "../../components/PageTransition";

const DrDivya = () => {

    // const comp = useRef();

    const containerRef = useRef();
    const revealRef = useRef();
    const fadexRef = useRef();
    const bounceRefs = useRef([]);

    useGSAP(() => {
        // Global ScrollTrigger config
        ScrollTrigger.config({
            ignoreMobileResize: true,
            limitCallbacks: true
        });

        // Reveal animation
        if (revealRef.current) {
            gsap.fromTo(
                revealRef.current,
                {
                    clipPath: "inset(0% 100% 10% 0%)",
                    opacity: 0,
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    opacity: 1,
                    ease: "power2.out",
                    duration: 3,
                    scrollTrigger: {
                        trigger: revealRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                        markers: false,
                        onEnter: () => ScrollTrigger.refresh()
                    }
                }
            );
        }

        // Fade + Scale animation with onUpdate logic
        if (fadexRef.current) {
            gsap.fromTo(
                fadexRef.current,
                {
                    scale: 0.5,
                    opacity: 0,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: fadexRef.current,
                        start: "top 85%",
                        end: "top 40%",
                        scrub: true,
                        // toggleActions: "play none none none",
                        markers: false,
                        onUpdate: (self) => {
                            if (self.progress > 0.1 && !self.animation.isActive()) {
                                self.animation.play();
                            }
                        }
                    }
                }
            );
        }

        // Bounce effect on each bounce element
        if (bounceRefs.current.length) {
            bounceRefs.current.forEach((el) => {
                if (!el) return;

                gsap.fromTo(
                    el,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 3,
                        ease: "bounce.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 60%",
                            end: "top 30%",
                            // toggleActions: "play none none none",
                            scrub: 3,
                            markers: false,
                            onEnter: () => {
                                gsap.to(el, {
                                    y: 0,
                                    opacity: 1,
                                    overwrite: "auto"
                                });
                            }
                        }
                    }
                );
            });
        }
        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, { scope: containerRef });

    // Helper function to add bounce refs
    const addBounceRef = (el, index) => {
        if (el && !bounceRefs.current.includes(el)) {
            bounceRefs.current[index] = el;
        }
    };


    useLayoutEffect(() => {
        gsap.fromTo(
            ".anime",
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }
        );
    }, []);

    const educationData = [
        {
            title: "MBBS (M S Ramaiah Medical College, Bangalore).",
            subtitle: "[M S Ramaiah Medical College] RGUHS",
        },
        {
            title: "D O (Aravind Eye Hospital and Postgraduate Institute Of Ophthalmology, Madurai)",
            subtitle: "D O (Aravind Eye Hospital and Postgraduate Institute Of Ophthalmology, Madurai) MGR University Institute Of Ophthalmology, Madurai",
        },
        {
            title: "DNB (B W Lions Superspeciality Eye Hospital, Bangalore) National Board Of Examinations, New Delhi",
            subtitle: "DNB (B W Lions Superspeciality Eye Hospital, Bangalore) National Board Of Examinations, New Delhi Eye Hospital, Bangalore",
        },
        {
            title: "FRCS (Glasg) (Fellow of Royal College of Physicians and Surgeons of Glasgow)",
            subtitle: "Surgeons of Glasgow",
        },
        {
            title: "FICO (Fellow International Council of Ophthalmology, UK.)",
            subtitle: "Fellow International Council of Ophthalmology, UK",
        },
        {
            title: "Oculoplasty (MO) at Aravind Eye Hospital,",
            subtitle: "Coimbatore",
        },
        {
            title: "Observer at Tan Tock Seng Hospital, Singapore",
            subtitle: "",
        },
        {
            title: "FAICO - Oculoplasty - Fellow of the All India Collegium of Ophthalmology   ",
            subtitle: "",
        },
    ]

    const speciality = [
        {
            color: "#FFD68A",
            text: "Ophthalmic plastic surgery is a branch of ophthalmology that fixes problems with the eye socket, eyelids, tear ducts, and face."
        },
        {
            color: "#C0A5FF",
            text: "Trauma Care – Eyelid & Canalicular laceration repair, Repair of Orbital (eye socket) and other facial fractures"
        },
        {
            color: "#FF9A8D",
            text: "Eyelid reconstructive Surgeries- Ptosis Correction Surgery, Ectropion & Entropion repair Eyelid Reconstructions."
        },
        {
            color: "#B6FEB4",
            text: "Orbital Surgery- Orbitotomies, Enucleation, Evisceration, Exenteration, Socket Reconstruction, Prosthetic Eyes, Dermis Fat Grafting."
        },
        {
            color: "#925C5C",
            text: "Orbital infections – such as Mucormycosis or the Black fungus disease."
        },
        {
            color: "#75B8EE",
            text: "Lacrimal Surgeries – It is Dacryocyctorhinostomy, Dacryocystectomy, Canalicular stenting, Silicone intubation."
        },
        {
            color: "#FFB18A",
            text: "Management of Thyroid Eye Disease (TED) and other Orbital Inflammatory Diseases."
        },
        {
            color: "#8095FF",
            text: "Facial cosmetic procedures- Blepharoplasty, Brow lifts, Facelifts, Botox, Tissue fillers, Facial Rejuvenation, Facial Nerve Palsy"
        },
        {
            color: "#88FFF5",
            text: "Ophthalmic Oncology- Management of various eyes, eyelid, orbital & adnexal tumors, Management of Paediatric Eye cancers like Retinoblastoma, Neuroblastoma, Rhabdomyosarcoma and others."
        },
    ]

    const services = [
        {
            link: '',
            text: 'Refraction/Glass testing'
        },
        {
            link: '',
            text: 'Pediatric eye check up'
        },
        {
            link: '',
            text: 'Diabetic retinopathy screening & surgery'
        },
        {
            link: '',
            text: 'Cataract evaluation & surgery'
        },
        {
            link: '',
            text: 'Ocular inflammation or uveitis'
        },
        {
            link: '',
            text: 'Glaucoma evaluation & management'
        },
        {
            link: '',
            text: 'Lid malposition'
        },
        {
            link: '',
            text: 'Thyroid eye disease'
        },
        {
            link: '',
            text: 'Facial and periocular Aesthetics'
        },
        {
            link: '',
            text: 'lacrimal sac surgery'
        },
        {
            link: '',
            text: 'Evisceration'
        },
        {
            link: '',
            text: 'Enucleation and rehabilitation'
        },
        {
            link: '',
            text: 'Ptosis surgery'
        },
        {
            link: '',
            text: 'Orbitotomies'
        },
    ]

    const presentations = [
        {
            link: "",
            text: "EYECON 2008: Surgical Management of Congenital Superior oblique palsy."
        },
        {
            link: "",
            text: "FUSION 2012: Retinoblastoma – An Epidemiological Perspective, at The International Masters’ Course in Pediatric Ophthalmology, Strabismus, Oculoplasty, Aesthetics, Dacryology and Ocular Oncology, organized by the LV Prasad Eye Institute, Hyderabad, from February 12-14, 2012."
        },
        {
            link: "",
            text: "OPAI – 2014: E-poster presentation – Cavernous Sinus Syndrome – A dilemma. – Sept-2014."
        },
        {
            link: "",
            text: "BOSSUMMIT 2015 - Panelist for Panel Discussion on Orbital Cellulitis & Lecture on Evaluation of Ptosis "
        },
        {
            link: "",
            text: "KOSCON 2019 – Ocular involvement in rhino-orbital Mucor mycosis. (Selected as the Best Oculoplasty paper)"
        },
        {
            link: "",
            text: "KOSCON 2019 - Orbital involvement in Hemophagocyctic lymphohistiocyctosis – A Case report. Poster presentation."
        },
        {
            link: "",
            text: "KOSCON 2019 - Ocular manifestations and management in an electrical injury: A case report – Poster presentation"
        },
        {
            link: "",
            text: "BOSSUMMIT 2019 – Tips & Tricks in Frontalis Sling surgery"
        },
        {
            link: "",
            text: "BOSSUMMIT 2021 – What do I do in a patient with Orbital Cellulitis "
        },
        {
            link: "",
            text: "KOSCON 2021 – Implants in Oculoplasty"
        },
        {
            link: "",
            text: "BOSSUMMIT 2022 - Tear drops in my eyes: is it joy or sadness?"
        },
        {
            link: "",
            text: "KOSCON 2022 – Eyelids for the General "
        },
        {
            link: "",
            text: "KOSCON 2022 – Free paper – PG thesis - Comparison of pre-corneal tear film and ocular surface in diabetics and non-diabetics"
        },
        {
            link: "",
            text: "AIOS Mid-Term 2023 – Best free paper award - External eye & ocular surface disease session – Paper on Impact of Eyecare training program on Knowledge, Attitude and Practice on Nurses"
        },
        {
            link: "",
            text: "KOSCON 2023 - Part of Local Organizing Committee and Faculty Talk on Orbital Infections"
        },
        {
            link: "",
            text: "KOSCON 2023 – Paper on the Impact of Eye Care training ICU Nurses"
        },
        {
            link: "",
            text: "OPAI 2023, Hyderabad – As Faculty – Talk on Wet lab training in Oculoplasty – Symposium in Orbit"
        },
        {
            link: "",
            text: "OPAI 2023 – Competitive Case presentation – Rare case of neonatal orbital cellulitis"
        },
        {
            link: "",
            text: "OPAI 2023 – Judge – Orbit Free paper session."
        },
        {
            link: "",
            text: "BOSSUMMIT 2024 – Faculty – Talk on Practicing the Patent Dacryocystorhinostomy in the Oculoplasty session."
        },
        {
            link: "",
            text: "OPAI – 2024 – Faculty – Talk on Socket reconstruction following facial trauma and chairperson – in the Socket session."
        },
        {
            link: "",
            text: "OPAI 2024 – Paper presentation – Orbital Gaint Cell tumour"
        },
    ]

    const publications = [
        {
            link: "",
            text: "Divya Dabir Sundaresh, Soumya Ramani, Thanuja G P. A comparison between anterior chamber intraocular lenses with those of retro- pupillary iris claw lenses: Visual outcome and complications.  Indian Journal of Clinical and Experimental Ophthalmology, January-March 2018;4(1):12-15. (First author – Index Copernicus)"
        },
        {
            link: "",
            text: "Ramani S, Pradeep TG, Sundaresh DD. Effect of wet-laboratory training on resident performed manual small-incision cataract surgery. Indian J Ophthalmol 2018; 66:793-7. (3rd author – Pubmed indexed)"
        },
        {
            link: "",
            text: "Ramani S, Pradeep TG, Sundaresh DD. Visual outcome following cataract surgery in patients with traumatic cataract in a tertiary hospital, South India. Indian Journal of Clinical and Experimental Ophthalmology Year: 2017, Volume: 3, Issue: 4.  480-484. (3rd author – Index Copernicus)"
        },
        {
            link: "",
            text: "Sundaresh DD, Mangala Gouri S R. Glial heterotopia in an adult: A rare orbital mass. Indian J Ophthalmol 2016; 64:843-4. (1st author – Pubmed indexed – case report)"
        },
        {
            link: "",
            text: "Ajay K, Saranya S, Sundaresh DD, Hithashree H R, Hemalatha B C, Krishnaswamy M, Shetty SB. Efficacy and safety of intraoperative intracameral mydriasis in manual small incision cataract surgery - A randomized controlled trial. Indian J Ophthalmol 2017; 65:584-8. (3rd author – pubmed indexed)"
        },
        {
            link: "",
            text: "Ajay K, Krishnaprasad R, Divya D S. Ophthalmic surgical training in Karnataka and Southern India: Present status and future interests from a survey of final-year residents. Indian J Ophthalmol 2015; 63:306-11. (3rd author – pubmed indexed)"
        },
        {
            link: "",
            text: "Abhishek Singh, Kavita Prasad M, Malavika Krishnaswamy, Sundaresh DD, et al. Comparison of Transconjunctival approach versus Infraorbital approach for infraorbital rim and orbital floor fractures – A prospective clinical study. Journal of Dental & Oro-facial research 2018;14(2):3 -19 (5th author – RUAS Journal)"
        },
        {
            link: "",
            text: "Non Covid Ophthalmic Emergency during the lockdown period of the Covid 19 pandemic. Devappa Namrata; G. P. Thanuja; Ananth Bhandary; Soumya Ramani; Divya D. Sundaresh; Ramaya M British Journal of Medical & Health Sciences (BJMHS)Vol. 2 Issue 9, September -2020 5th author – Pubmed indexed)"
        },
        {
            link: "",
            text: "Vijayan K., Sundaresh D., Ramanujam L. Ocular trauma in mid face fractures - An interdisciplinary approach. Clinical and Experimental Ocular Trauma and Infection. 2021; 3(1): 2-9. (2nd and Corresponding author – DOAJ indexed)"
        },
        {
            link: "",
            text: "Pradeep, Thanuja G; Sundaresh, Divya Dabir; Ramani, Soumya. Adoption of newer teaching methods to overcome challenges of training in ophthalmology residency during the COVID-19 pandemic, Indian Journal of Ophthalmology: May 2021 - Volume 69 - Issue 5 - p 1292-1297 doi: 10.4103/ijo.IJO_3063_20 (2nd & Corresponding author – pubmed indexed – Review article)"
        },
        {
            link: "",
            text: "Ramani, Soumya; Pradeep, Thanuja G; Sundaresh, Divya D; An update on the novel approaches towards skills assessment of ophthalmology residents in the Indian scenario, Indian Journal of Ophthalmology: April 2022 - Volume 70 - Issue 4 - p 1092-1098 doi: 10.4103/ijo.IJO_1034_21(3rd author, Pubmed indexed, review article)"
        },
        {
            link: "",
            text: "Ramani, Soumya; Anusha, Aynala; Sundaresh, Divya D; Shetty, Sathyendranath Collateral damage: Corneal injury due to mask use during the COVID-19 pandemic - A case series, Indian Journal of Ophthalmology: January 2022 - Volume 70 - Issue 1 - p 306-307 doi: 10.4103/ijo.IJO_1861_21(Case series, pubmed indexed, 3rd author)"
        },
        {
            link: "",
            text: "Ramani S., Sanjay Kulkarni A., Sundaresh D., N T M. An unusually large intraorbital wooden foreign body with an intact globe- “Bark”ing up the wrong tree. CEOTI. 2021; 3(3): 39-42. (Case report, DOAJ indexed, 3rd author)"
        },
        {
            link: "",
            text: "E-learning in ophthalmology among undergraduate medical students in India during the COVID-19 pandemic. Ksheeraja Y, Soumya Ramani, Ananth Bhandary, Divya D. Sundaresh Ophthalmol J 2021;6:137-142 DOI: 10.5603/OJ.2021.0025 (original article, DOAJ indexed, 4th author)"
        },
        {
            link: "",
            text: "Divya D Sundaresh, Soumya Ramani, Rachna Kotian. Ocular safety of hydroxychloroquine in prophylaxis of COVID-19. Ophthalmol J 2024; Vol. 9, 155–16. DOI: 10.5603/oj.93870"
        },
    ]
    return (
        <PageTransition>
            <div ref={containerRef}>
                {/* container 1 */}

                <div className='relative'>
                    <img src={assets.drDivyaBanner} className='relative w-full h-auto hidden lg:block' alt="" />
                    <img src={assets.drDivyaBannerTablet} className='relative w-full h-auto hidden md:block lg:hidden' alt="" />
                    <img src={assets.drDivyaBannerMobile} className="relative w-full h-auto md:hidden" alt='' />

                    <div className='flex justify-end absolute w-full top-20 md:top-28 lg:top-45 mxl:top-75 anime'>
                        <div className="w-full px-5 md:w-[60%]">
                            <div className='font-heading text-[18px] s:text-[24px] lg:text-[30px] mxl:text-[44px] font-700 font-black'>Dr. Divya Sundaresh</div>
                            <div className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px] mt-2'>DO, DNB, FICO, FRCS (Glas), FAICO (Oculoplasty),</div>
                            <div className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>Ex Medical Officer, Aravind Eye Hospital</div>
                            {/* <div className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>MNAMS, PGDHHM, Diploma in Tissue Banking (Singapore)</div> */}
                            <ul className='mt-5 ml-5 list-disc '>
                                <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Ophthalmology Consultant</li>
                                <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Specialist in Orbit & Oculoplasty</li>
                                <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Specialist in Lacrimal Surgeries</li>
                                <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Specialsit in Ocular Oncology </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* container 2 */}
                <div className="flex flex-col mt-10 lg:flex-row lg:gap-0 reveal-container" ref={revealRef}>
                    <div className="w-full p-5 md:p-10 mxl:pl-20 lg:50%">
                        <div className="font-heading text-[28px] lg:text-[38px] font-[700] bg-orange-gradient">About Doctor :</div>
                        <div className='font-para text-[12px] lg:text-[16px] font-[500] mt-4'>Dr. Divya Sundaresh has over 10 years of ophthalmology expertise. She did a Senior Housemanship in Ophthalmology at Regional Institute of Ophthalmology, Egmore, Chennai under Prof. Velayutham after graduating from Ramaiah Medical College. She earned her post-graduation ophthalmology degree from Aravind Eye Hospital in Madurai.</div>
                        <div className='font-para text-[12px] lg:text-[16px] font-[500] mt-3'>She specialises in orbital infections, orbital disorders such thyroid orbitopathy, eye lid reconstructions, face cosmetic procedures, and eye malignancies.</div>
                        <div className='flex justify-center mt-10'>
                            <img src={assets.contactOpthalmology} className='w-[100%] h-auto max-w-[500px]' alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:50%">
                        <TimeLine educationData={educationData} />
                    </div>
                </div>

                {/* container 3 */}
                <div className="lg:gap-0 p-5 md:p-10 mxl:p-20 fadex" ref={fadexRef}>

                    <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient">Specialised Expertise in Orbit & Oculoplasty</div>

                    <div className="flex flex-col mt-10 lg:flex-row lg:gap-0">
                        <div className="w-full">
                            {speciality.map((speciality, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 mt-4"
                                >
                                    <div
                                        style={{ background: speciality.color }}
                                        className="w-[30px] h-[30px] rounded-r-full flex-shrink-0"
                                    ></div>

                                    <div className="font-para text-[12px] lg:text-[16px] font-[500]">
                                        {speciality.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* container 4 */}
                <div className='p-5 lg:px-20 bounce'  ref={(el) => addBounceRef(el, 1)}>
                    <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services provided
                    </div>

                    {/* Grid List */}
                    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 mt-8 z-10 relative  bg-[#BDC4FF] p-5 rounded-2xl overflow-hidden bounce"  ref={(el) => addBounceRef(el, 3)}>
                        {
                            services.map((surgery, index) => (
                                <div className="flex items-center gap-3 mt-5" key={index}>
                                    <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* container 5 */}
                <div className='p-10 md:p-20 mt-10 bg-[#FFD46633]'>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient">
                        Paper presentations:
                    </div>

                    <div>
                        {
                            presentations.map((surgery, index) => (
                                <ul className="flex items-center gap-3 mt-3 list-disc" key={index}>
                                    {/* <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" /> */}
                                    <li className="text-[12px] lg:text-[16px] font-text font-[600]">{surgery.text}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>

                {/* container 6 */}
                <div className='p-10  md:p-20 mt-10 bg-[#B6FEB433]'>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient">
                        Publications:
                    </div>

                    <div>
                        {
                            publications.map((surgery, index) => (
                                <div className="flex items-center gap-3 mt-3" key={index}>
                                    {/* <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" /> */}
                                    <div className="text-[12px] lg:text-[16px] font-text font-[600]">{index + 1}. {surgery.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default DrDivya
