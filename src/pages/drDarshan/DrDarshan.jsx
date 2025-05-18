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

const DrDarshan = () => {

    const comp = useRef();
    const revealContainer = useRef();
    const fadexElement = useRef();
    const bounceElements = useRef([]);
    const sideScrollElement = useRef();

    useGSAP(() => {
        // Configure ScrollTrigger globally
        ScrollTrigger.config({
            ignoreMobileResize: true,
            limitCallbacks: true
        });

        // Reveal animation
        if (revealContainer.current) {
            gsap.fromTo(
                revealContainer.current,
                { clipPath: "inset(0% 100% 10% 0%)", opacity: 0 },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    opacity: 1,
                    ease: "power2.out",
                    duration: 3,
                    scrollTrigger: {
                        trigger: revealContainer.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                        onEnter: () => ScrollTrigger.refresh(),
                        markers: true // Enable temporarily for debugging
                    }
                }
            );
        }

        // Fade and scale animation
        if (fadexElement.current) {
            gsap.fromTo(
                fadexElement.current,
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: fadexElement.current,
                        start: "top 85%",
                        end: "top 40%",
                        scrub: true,
                        toggleActions: "play none none none",
                        markers: true // Enable temporarily for debugging
                    }
                }
            );
        }

        // Bounce animation
        if (bounceElements.current.length) {
            bounceElements.current.forEach((el) => {
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
                            toggleActions: "play none none none",
                            markers: true // Enable temporarily for debugging
                        }
                    }
                );
            });
        }

        // Side scroll animation
        if (sideScrollElement.current) {
            gsap.fromTo(
                sideScrollElement.current,
                { y: 50, scale: 0.5 },
                {
                    y: 0,
                    scale: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: sideScrollElement.current,
                        start: "top 60%",
                        end: "top 30%",
                        toggleActions: "restart none none none",
                        scrub: true,
                        markers: true // Enable temporarily for debugging
                    }
                }
            );
        }

        // Refresh ScrollTrigger after all animations are set up
        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, { scope: comp });

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
            title: "MBBS",
            subtitle: "[M S Ramaiah Medical College]",
        },
        {
            title: "M S in Orthopaedics",
            subtitle: "[Kasturba Medical College (KMC), Manipal, Manipal University]"
        },
        {
            title: "FNB (Fellow of National Board / Board certified Fellow in Hand & Reconstructive Microsurgery)",
            subtitle: "University of Washington (2009)"
        },
        {
            title: "Fellowship in Hand and Reconstructive Microsurgery Department,",
            subtitle: "National University Hospital (NUH), Singapore"
        },
        {
            title: "Post Graduate Diploma in Hospital & Health Management",
            subtitle: "(PGDHHM- IGNOU)"
        },
        {
            title: "Diploma in tissue banking,",
            subtitle: "National University Hospital and School, Singapore"
        },
        {
            title: "Observership in Hand Surgery Institut De La Main,",
            subtitle: "Paris Observership in Shoulder & Elbow surgery at Royal National Orthopaedic Hospital (RNOH), London"
        },
        {
            title: "MNAMS",
            subtitle: ""
        },
    ];

    const speciality = [
        {
            color: "#FFD68A",
            text: "Surgeries of the wrist, elbow"
        },
        {
            color: "#C0A5FF",
            text: "Wrist and elbow arthroscopy"
        },
        {
            color: "#FF9A8D",
            text: "Elbow replacement/ arthroplasty"
        },
        {
            color: "#B6FEB4",
            text: "Brachial plexus & peripheral nerve surgery"
        },
        {
            color: "#925C5C",
            text: "Complex trauma of the upper limb"
        },
        {
            color: "#75B8EE",
            text: "Microvascular surgeries"
        },
        {
            color: "#88FFF5",
            text: "Shoulder trauma/arthroscopy/ replacement"
        },
    ]

    const upperLimbSurgery = [
        {
            link: '',
            text: 'Carpal tunnel syndrome'
        },
        {
            link: '',
            text: 'Stiffness of joints of the hand.'
        },
        {
            link: '',
            text: 'Dupuytren’s disease'
        },
        {
            link: '',
            text: 'De Quervain’s tenosynovitis'
        },
        {
            link: '',
            text: 'Infections of the hand.'
        },
        {
            link: '',
            text: 'Sports injuries of the hand.'
        },
        {
            link: '',
            text: 'Ganglion'
        },
        {
            link: '',
            text: 'Scaphoid fractures'
        },
        {
            link: '',
            text: 'Scaphoid non unions'
        },
        {
            link: '',
            text: 'Scapholunate ligament injury'
        },
        {
            link: '',
            text: 'Radius fracture'
        },
        {
            link: '',
            text: 'Tuberculosis'
        },
    ]

    const upperLimbSurgery2 = [
        {
            link: '',
            text: 'Tendon transfers ( for hand )'
        },
        {
            link: '',
            text: 'Wrist arthroscopy'
        },
        {
            link: '',
            text: 'Birth Defects.'
        },
        {
            link: '',
            text: 'Cubital tunnel syndrome'
        },
        {
            link: '',
            text: 'Cerebral palsy'
        },
        {
            link: '',
            text: 'Tumors of hand'
        },
        {
            link: '',
            text: 'Post burns contracture'
        },
        {
            link: '',
            text: 'Vascular anomalies'
        },
        {
            link: '',
            text: 'UCL injury'
        },
        {
            link: '',
            text: 'Glomus tumors'
        },
        {
            link: '',
            text: 'Giant cell tumor (GCT)'
        },
        {
            link: '',
            text: 'Congenital anomalies'
        },
    ]

    const upperLimbSurgery3 = [
        {
            link: '',
            text: 'Injury to the hand/wrist with a fracture or a ligament injury.'
        },
        {
            link: '',
            text: 'Swellings (lumps and bumps) of the hand.'
        },
        {
            link: '',
            text: 'Kienbock’s disease (Avascular necrosis of lunate)'
        },
        {
            link: '',
            text: 'TFCC (Triangular Fibrocartilage Complex) injury'
        },
        {
            link: '',
            text: 'Arthritis involving the finger, wrist and elbow.'
        },
        {
            link: '',
            text: 'Treatment of various problems of hand, wrist and elbow by keyhole surgery/ arthroscopy'
        },
    ]

    const elbow = [
        {
            link: "",
            text: "Fractures(Humerus/radius/ulna)"
        },
        {
            link: "",
            text: "Arthritis of elbow"
        },
        {
            link: "",
            text: "Elbow arthroscopy"
        },
        {
            link: "",
            text: "Stiff elbow"
        },
        {
            link: "",
            text: "Synovitis of elbow"
        },
        {
            link: "",
            text: "Ligament repair or reconstruction of elbow"
        },
        {
            link: "",
            text: "Elbow replacement/ Elbow arthroplasty"
        },
    ]

    const Shoulder = [
        {
            link: "",
            text: "Shoulder arthroscopy"
        },
        {
            link: "",
            text: "Shoulder replacement/ arthroplasty"
        },
        {
            link: "",
            text: "Shoulder dislocation"
        },
        {
            link: "",
            text: "Shoulder instability"
        },
        {
            link: "",
            text: "Rotator cuff tear"
        },
        {
            link: "",
            text: "Labral tear"
        },
        {
            link: "",
            text: "SLAP injuries"
        },
    ]

    const congenital = [
        {
            link: "",
            text: "Pollicization"
        },
        {
            link: "",
            text: "Syndactyly separation"
        },
        {
            link: "",
            text: "Malunion"
        },
        {
            link: "",
            text: "Tendon transfer"
        },
        {
            link: "",
            text: "Rheumatoid arthritis"
        },
        {
            link: "",
            text: "Synovectomy"
        },
        {
            link: "",
            text: "Nonunion"
        },
        {
            link: "",
            text: "Work related upper limb disorders (WRULD)."
        },
    ]

    const nerve = [
        {
            link: "",
            text: "Nerve repair"
        },
        {
            link: "",
            text: "Nerve reconstruction"
        },
        {
            link: "",
            text: "Brachial plexus injury "
        },
        {
            link: "",
            text: "Radial, ulnar, median nerve palsy"
        },
        {
            link: "",
            text: "Cerebral palsy"
        },
        {
            link: "",
            text: "Spastic or deformity of upper limb"
        },
        {
            link: "",
            text: "Spastic or deformity of upper limb"
        },
        {
            link: "",
            text: "Nerve related problems affecting the hand, brachial plexus injuries, nerve injuries"
        },
    ]

    const reconstructive = [
        {
            link: "",
            text: "Flaps cover to upper or lower limbs"
        },
        {
            link: "",
            text: "VIC (Volkman’s Ischemic Contracture)"
        },
        {
            link: "",
            text: "Vascularized bone grafts for non-unions"
        },
        {
            link: "",
            text: "Free flaps"
        },
        {
            link: "",
            text: "Reconstruction for the limbs"
        },
        {
            link: "",
            text: "Toe transfers"
        },
        {
            link: "",
            text: "Vascularised free fibula"
        },
        {
            link: "",
            text: "Joint transfers"
        },
        {
            link: "",
            text: "Complex reconstruction requiring both soft tissue and bone"
        },
        {
            link: "",
            text: "Tendon transfers"
        },
    ]

    const publications = [
        {
            link: "",
            text: "Closed rupture of the extensor indicis tendon: an unusual cause of swelling over the dorsum of the hand. Jain DK, Bhardwaj P, Sabapathy SR. J Hand Surg Eur Vol. 2012 Jun;37(5):471-2."
        },
        {
            link: "",
            text: "An epidemiological study of traumatic brachial plexus injury patients treated at an Indian centre. Jain DK, Bhardwaj P, Venkataramani H, Sabapathy SR. Indian J Plast Surg. 2012 Sep;45(3):498-503."
        },
        {
            link: "",
            text: "A useful modification of plaster back slab to offload pressure from reconstructions of heel and elbow. Venkataramani H, Jain DK, Sabapathy SR. Indian J Plast Surg. 2012 Sep;45(3):588-9."
        },
        {
            link: "",
            text: "Two peg spade plate for distal radius fractures: A novel technique. Jain DK. Indian J Orthop. 2016 Mar-Apr;50(2):221"
        },
        {
            link: "",
            text: "Assessment of usefulness of Anthropometric Data for predicting the scaphoid   and the screw length: A New Technique. Jain DKA, Shetty N, Naveen Kumar L, Sundaresh DC. J Hand Surg Asian Pac Vol. 2017 Dec; 22(4):435-440."
        },
        {
            link: "",
            text: "Ulnar Nerve Innervation to Triceps: A Cadaveric Study and a Technical Note on Partial Triceps to Biceps Transfer: Darshan Kumar A Jain, Sathish T Kumar, Naresh Shetty. Indian J Orthop. 2018 Mar-Apr; 53(2):353-56. "
        },
        {
            link: "",
            text: "Darshan Kumar A. Jain, Harshit Bhaskar Shetty, Rohith Gopalakrishna Bhat, Bucket-Handle Tear of the Triangular Fibrocartilage Complex: Surgical Technique With Clinical and Radiologic Outcome, Arthroscopy Techniques,2025,103568,ISSN 2212-6287, https://doi.org/10.1016/j.eats.2025.103568."
        },
        {
            link: "",
            text: "Normative study of pediatric hand in an an Indian population and a novel method of measurement of first web space arc radius. Darshan Kumar A. Jain, Abhishek Sugumar K. International journal of Orthopedic Sciences. 2017 Jan Vol-3,issue 1: 1-4."
        },
        {
            link: "",
            text: "Treatment of mallet fracture by extension block pinning. Darshan Kumar A. Jain, Ashok Kumar P, Abhishek Sugumar K, Vivek Anand. International journal of Orhopedic Sciences. 2017 Jan Vol-3,issue 1: 5-8."
        },
        {
            link: "",
            text: "Prediction of palmaris longus tendon length: Study in Indian fresh frozen cadavers. Darshan Kumar A. Jain, Harshad Mohanlal Shah, Sandesh, Apatika Ashwini, Abilash Palla. 2017 Journal of Orthopedic Education. 2017 Jan Vol-3, No-1: 55-58."
        },
        {
            link: "",
            text: "Awareness of Hand surgical conditions and management, in general practioners and emergency department physicians in India. Darshan Kumar A. Jain, Abhishek Sugumar Kesav, Ashwini Varadharajan. Journal of Orthopedic Education. 2017 Jan Vol-3, No-1: 55-58."
        },
        {
            link: "",
            text: "Use of bone allografts in the management of upper limb fractures and their complications – A prospective study. Darshan Kumar A. Jain, Harish Kodi, Abilash Palla. Indian Journal of Orthopaedics Surgery. 2017 Mar vol-3, Issue-1:23-26 "
        },
        {
            link: "",
            text: "Treatment of distal humerus extra-articular fractures using a single 3.5m precontoured locking compression plate. Darshan Kumar A. Jain, Rahul P, Aubrey Conrad Franco. Journal of Karnataka Orthopaedic Association 2018 May-Aug;6(2):7-11."
        },
    ]

    const professional = [
        {
            img: assets.bos,
            bgColor: "#FEF0C3",
            text: 'Bangalore Orthodontic Society (BOS)'
        },
        {
            img: "",
            bgColor: "#D3C0FF",
            text: ''
        },
        {
            img: "",
            bgColor: "#FEE6DC",
            text: ""
        },
        {
            img: "",
            bgColor: "#BDC4FF",
            text: ""
        },
        {
            img: "",
            bgColor: "#DFF7EA",
            text: ""
        },
    ]

    useEffect(() => {
        // Load the Elfsight platform script
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.dataset.useServiceCore = '';
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Clean up
            document.body.removeChild(script);
        };
    }, []);

    return (
        <PageTransition>
            <div className='relative' ref={comp}>
                <img src={assets.drDarshanDesktopBanner} className='relative w-full h-auto hidden lg:block' alt="" />
                <img src={assets.drDarshanBannerTablet} className='relative w-full h-auto hidden md:block lg:hidden' alt="" />
                <img src={assets.drDarshanBannerMobile} className="relative w-full h-auto md:hidden" alt='' />

                <div className='flex justify-end absolute w-full top-20 md:top-28 lg:top-45 mxl:top-75 anime'>
                    <div className="w-full px-5 md:w-[60%]">
                        <div className='font-heading text-[18px] s:text-[22px] mm:text-[24px] lg:text-[30px] mxl:text-[44px] font-700 font-black'>Dr. Darshan Kumar A. Jain</div>
                        <div className='font-heading text-[10px] s:text-[12px] mm:text-[24px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px] mt-2'>MBBS, MS Ortho (KMC Manipal),</div>
                        <div className='font-heading text-[10px] s:text-[12px] mm:text-[24px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>FNB, Clinical Fellow National University Hospital, (Singapore),</div>
                        <div className='font-heading text-[10px] s:text-[12px] mm:text-[24px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>MNAMS, PGDHHM, Diploma in Tissue Banking (Singapore)</div>
                        <ul className='mt-5 ml-5 list-disc '>
                            <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Consultant Hand & Microsurgeon</li>
                            <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Consultant Upper Limb/ Upper Extremity Surgeon</li>
                            <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Specialist in Wrist & Elbow arthroscopy</li>
                            <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Specialist in Shoulder Surgery</li>
                            <li className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[40px]'>Professor in Orthopedics </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* container 2 */}
            <div className="flex flex-col mt-10 lg:flex-row lg:gap-0 reveal-container" ref={revealContainer}>
                <div className="w-full p-5 md:p-10 mxl:pl-20 lg:50%">
                    <div className="font-heading text-[28px] lg:text-[38px] font-[700] bg-orange-gradient">Hand Surgeon & Upper Elbow Microsurgery</div>
                    <div className='font-para text-[12px] lg:text-[16px] font-[500] mt-4'>Dr. Darshan Kumar A. Jain is a Hand & Microsurgeon and, Upper Limb Surgeon with expertise in managing various complex problems of hand. He has more than fifteen years of experience in treating the complex problems of Hand, wrist, elbow, shoulder & nerves.</div>
                    <div className='font-para text-[12px] lg:text-[16px] font-[500] mt-3'>Dr. Darshan Kumar A .Jain, completed his MS (Orthopaedics) from Kasturba Medical College (KMC), Manipal in 2009. 	He has spent four years to train exclusively in problems of Hand, Wrist and Upper limb surgery, and then became a Board Certified Fellow in Hand and Microvascular Surgery (FNB). Later on, further training was obtained to treat complex problems of upper limb trauma and wrist disorders at National University Hospital, Singapore. Later on, further training was obtained to treat problems of the wrist disorders at National University Hospital (NUH), Singapore. Further training was obtained in Royal National Orthopaedic Hospital (RNOH), London & Institut De La Maine, Paris in managing problems of the shoulder and elbow. He was the treating a treating Surgeon for Honorable Sri Vajubhai Rudabhai Vala (Former Governor of Karnataka 2014). He has trained several surgeons in wrist arthroscopy & Hand Surgery. He is a visiting faculty in prestigious IWAS (International Wrist Arthroscopy Society) wrist courses conducted at IRCAD, Strasbourg. He has performed thousands of complex surgeries in upper limb, wrist arthroscopy, congenital anomalies, peripheral nerve surgery, elbow & shoulder. He also has a post graduate diploma in Tissue banking. He has also been trained in advanced techniques of elbow replacement and elbow arthroscopy. </div>
                </div>
                <div className="w-full lg:50%">
                    <TimeLine educationData={educationData} />
                </div>
            </div>

            {/* container 3 */}
            <div className="lg:gap-0 p-5 md:p-10 mxl:p-20 fadex" ref={fadexElement}>

                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient">Specialty : Hand Surgery & Microsurgery</div>

                <div className="flex flex-col mt-10 lg:flex-row lg:gap-0">
                    <div className="w-full lg:50%">

                        {speciality.map((speciality, index) => (
                            <div key={index} className='flex items-center gap-4 mt-4'>
                                <div style={{ background: `${speciality.color}` }} className={`w-[30px] h-[30px] rounded-r-full`}></div>
                                <div className='font-para text-[12px] lg:text-[16px] font-[500]'>{speciality.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:50%">
                        {/* <img src="" alt="" /> */}
                        <div className='w-full h-300px lg:h-full bg-gray-300 rounded-2xl'></div>
                    </div>
                </div>
            </div>

            {/* container 4 */}

            <div className='relative lg:gap-0 px-5 md:p-10 mxl:px-20 mxl:py-10 bounce' ref={el => bounceElements.current[1] = el}>
                {/* Section Title */}
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient" ref={el => bounceElements.current[2] = el}>
                    Services provided
                </div>

                {/* Content Card */}
                <div className='relative bg-[#BDC4FF] p-5 md:p-10 mt-10 rounded-2xl overflow-hidden'>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient bounce" ref={el => bounceElements.current[4] = el}>
                        Upper limb Surgery : Hand & Wrist
                    </div>

                    {/* Grid List */}
                    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 mt-8 z-10 relative bounce" ref={el => bounceElements.current[5] = el}>
                        <div>
                            {
                                upperLimbSurgery.map((surgery, index) => (
                                    <div className="flex items-center gap-3 mt-5" key={index} >
                                        <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                        <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            {
                                upperLimbSurgery2.map((surgery, index) => (
                                    <div className="flex items-center gap-3 mt-5" key={index}>
                                        <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                        <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            {
                                upperLimbSurgery3.map((surgery, index) => (
                                    <div className="flex items-center gap-3 mt-5" key={index}>
                                        <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                        <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <img
                        src={assets.handImage}
                        alt="Hand Illustration"
                        className="absolute bottom-0 right-0 w-[150px] lg:w-[300px] mxl:w-[500px] opacity-90 pointer-events-none hidden lg:block"
                    />
                </div>
            </div>

            {/* container 5 */}

            <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 z-10 relative p-5 md:px-10 mxl:px-20'>
                <div className='bg-[#FEF0C3] p-5 md:p-8 rounded-2xl flex flex-col gap-4'>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient bounce" ref={el => bounceElements.current[6] = el}>
                        Elbow
                    </div>
                    <div className='bounce' ref={el => bounceElements.current[7] = el}>
                        {
                            elbow.map((surgery, index) => (
                                <div className="flex items-center gap-3 mt-5" key={index}>
                                    <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='bg-[#FEE6DC] p-5 md:p-8 rounded-2xl flex flex-col gap-4'  ref={el => bounceElements.current[8] = el}>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient bounce"  ref={el => bounceElements.current[9] = el}>
                        Shoulder
                    </div>
                    <div className='bounce'  ref={el => bounceElements.current[10] = el}>
                        {
                            Shoulder.map((surgery, index) => (
                                <div className="flex items-center gap-3 mt-5" key={index}>
                                    <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='bg-[#DFF7EA] p-5 md:p-8 rounded-2xl flex flex-col gap-4'  ref={el => bounceElements.current[11] = el}>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient bounce"  ref={el => bounceElements.current[12] = el}>
                        Congenital
                    </div>
                    <div className='bounce'  ref={el => bounceElements.current[13] = el}>
                        {
                            congenital.map((surgery, index) => (
                                <div className="flex items-center gap-3 mt-5" key={index}>
                                    <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* container 6 */}

            <div className='p-5 md:px-10 mxl:px-20 bounce'  ref={el => bounceElements.current[14] = el}>
                <div className='bg-[#D3C0FF] p-5 md:p-10 rounded-2xl'>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient bounce"  ref={el => bounceElements.current[15] = el}>
                        Peripheral nerve surgery
                    </div>
                    <div className='grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 mt-8 z-10 relative bounce'  ref={el => bounceElements.current[16] = el}>
                        {
                            nerve.map((surgery, index) => (
                                <div className="flex items-center gap-3 mt-5" key={index}>
                                    <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* container 7 */}

            <div className='mt-5 p-5 md:px-10 mxl:px-20 flex flex-col items-center bounce'  ref={el => bounceElements.current[17] = el}>
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient mb-5 bounce">
                    Reconstructive Surgery
                </div>
                <div className='bg-[#FEF0C3] w-full lg:w-[70%] p-5 rounded-2xl'>
                    {/* <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient">
                        Peripheral nerve surgery
                    </div> */}
                    <div className='grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-2 lg:gap-4 z-10 relative bounce'  ref={el => bounceElements.current[18] = el}>
                        {
                            reconstructive.map((surgery, index) => (
                                <div className="flex items-center gap-3 mt-5" key={index}>
                                    <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* container 8 */}

            <div className='p-10 md:p-20 mt-10 bg-[#B6FEB433]'>
                <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient">
                    Publications:
                </div>
                <div>
                    {
                        publications.map((surgery, index) => (
                            <div className="flex items-center gap-3 mt-3" key={index}>
                                <img src={assets.handDrag} className='w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]' alt="" />
                                <div className="text-[12px] lg:text-[16px] font-text font-[600]">{surgery.text}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='mt-10 lg:px-20 sideScroll'>
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient mb-5">
                    Consultation Locations
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center mt-10'>
                    <div className='w-[85%] border-1 border-black rounded-xl p-3 text-center mx-auto max-w-[390px] mxl:max-w-[590px]'>
                        <div className='bg-orange-gradient text-[24px] font-[700] mxl:text-[32px] font-heading'>Sapiens Clinic</div>
                        <div className='text-[16px] font-para font-[600] mxl:text-[24px]'>Mon to sat 12:00 noon to 8:00 PM, Sunday Holiday</div>
                    </div>

                    <div className='w-[85%] border-1 border-black rounded-xl p-3 text-center mx-auto  max-w-[390px] mxl:max-w-[590px]'>
                        <div className='bg-orange-gradient text-[24px] font-[700] mxl:text-[32px] font-heading'>Appollo Spectra - Koramangala</div>
                        <div className='text-[16px] font-para font-[600] mxl:text-[24px]'>Wednesday and Saturday, 10:00 AM to 1:00 PM</div>
                    </div>

                    <div className='w-[85%] border-1 border-black rounded-xl p-3 text-center mx-auto max-w-[390px] mxl:max-w-[590px]'>
                        <div className='bg-orange-gradient text-[24px] font-[700] mxl:text-[32px] font-heading'>Rxdx Healthcare, Whitefiled:</div>
                        <div className='text-[16px] font-para font-[600] mxl:text-[24px]'>Every Monday Morning, 10:00 AM to 12:00 PM</div>
                    </div>
                </div>
            </div>


            <div className='p-5 lg:px-25 mt-10'>
                <div
                    dangerouslySetInnerHTML={{
                        __html: `<div class="elfsight-app-2080cde5-0a10-4e2a-b2f1-767570414177"></div>`
                    }}
                />
            </div>

            <div className='p-5 lg:px-20 mt-5 '>
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient mb-5">
                    Professional Memberships
                </div>

                <div className='flex gap-10 flex-col items-center md:flex-row md:justify-center md:flex-wrap mt-10'>
                    {professional.map((prof, index) => (
                        <div key={index} className='w-[230px] h-[260px] rounded-2xl flex flex-col gap-3 items-center justify-center' style={{ background: prof.bgColor }}>
                            <img src={prof.img} className='w-[124px] h-auto' alt="" />
                            <div className='text-center text-black font-[700]'>{prof.text}</div>
                        </div>
                    ))}
                </div>

            </div>

            <Outlet />
        </PageTransition>
    )
}

export default DrDarshan
