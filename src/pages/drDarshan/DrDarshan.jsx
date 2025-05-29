import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { assets } from '../../assets/assets';
import TimeLine from '../../components/timline/Timeline'
import { Outlet } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

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

    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const contentRef = useRef(null);

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
                        markers: false // Enable temporarily for debugging
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
                        // toggleActions: "play none none none",
                        markers: false // Enable temporarily for debugging
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
                            // toggleActions: "play none none none",
                            markers: false // Enable temporarily for debugging
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
                        // toggleActions: "restart none none none",
                        scrub: true,
                        markers: false // Enable temporarily for debugging
                    }
                }
            );
        }

        // Refresh ScrollTrigger after all animations are set up
        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, { scope: comp });

    const handleMouseEnter = () => animationRef.current?.pause();
    const handleMouseLeave = () => animationRef.current?.play();

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
            text: 'Carpal tunnel syndrome',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Stiffness of joints of the hand.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Dupuytren’s disease',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'De Quervain’s tenosynovitis',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Infections of the hand.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Sports injuries of the hand.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Ganglion',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Scaphoid fractures',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Scaphoid non unions',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Scapholunate ligament injury',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Radius fracture',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Tuberculosis',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Tendon transfers ( for hand )',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Wrist arthroscopy',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Birth Defects.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Cubital tunnel syndrome',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Cerebral palsy',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Tumors of hand',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Post burns contracture',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Vascular anomalies',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'UCL injury',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Glomus tumors',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Giant cell tumor (GCT)',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Congenital anomalies',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Injury to the hand/wrist with a fracture or a ligament injury.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Swellings (lumps and bumps) of the hand.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Kienbock’s disease (Avascular necrosis of lunate)',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'TFCC (Triangular Fibrocartilage Complex) injury',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Arthritis involving the finger, wrist and elbow.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Treatment of various problems of hand, wrist and elbow by keyhole surgery/ arthroscopy',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Injury to the hand/wrist with a fracture or a ligament injury.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Swellings (lumps and bumps) of the hand.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Kienbock’s disease (Avascular necrosis of lunate)',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'TFCC (Triangular Fibrocartilage Complex) injury',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Arthritis involving the finger, wrist and elbow.',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: '',
            text: 'Treatment of various problems of hand, wrist and elbow by keyhole surgery/ arthroscopy',
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
    ]
    const elbow = [
        {
            link: "",
            text: "Fractures (Humerus/radius/ulna)",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Arthritis of elbow",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Elbow arthroscopy",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Stiff elbow",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Synovitis of elbow",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Ligament repair or reconstruction of elbow",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Elbow replacement/ Elbow arthroplasty",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
    ]

    const Shoulder = [
        {
            link: "",
            text: "Shoulder arthroscopy",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Shoulder replacement/ arthroplasty",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Shoulder dislocation",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Shoulder instability",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Rotator cuff tear",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Labral tear",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "SLAP injuries",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
    ]

    const congenital = [
        {
            link: "",
            text: "Pollicization",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Syndactyly separation",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Malunion",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Tendon transfer",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Rheumatoid arthritis",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Synovectomy",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Nonunion",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Work related upper limb disorders (WRULD).",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
    ]

    const nerve = [
        {
            link: "",
            text: "Nerve repair",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Nerve reconstruction",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Brachial plexus injury ",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Radial, ulnar, median nerve palsy",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Cerebral palsy",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Spastic or deformity of upper limb",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Spastic or deformity of upper limb",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Nerve related problems affecting the hand, brachial plexus injuries, nerve injuries",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
    ]

    const reconstructive = [
        {
            link: "",
            text: "Flaps cover to upper or lower limbs",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "VIC (Volkman’s Ischemic Contracture)",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Vascularized bone grafts for non-unions",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Free flaps",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Reconstruction for the limbs",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Toe transfers",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Vascularised free fibula",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Joint transfers",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Complex reconstruction requiring both soft tissue and bone",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
        },
        {
            link: "",
            text: "Tendon transfers",
            img: assets.egImage,
            txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aspernatur natus in atque, non magnam inventore, ratione quo veritatis veniam suscipit rerum reiciendis itaque exercitationem neque blanditiis hic vero aliquam."
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
            img: assets.ioa,
            bgColor: "#D3C0FF",
            text: 'Indian Orthopaedic Association (IOA).'
        },
        {
            img: assets.issh,
            bgColor: "#FEE6DC",
            text: "Indian Society for Surgery of the Hand (ISSH)."
        },
        {
            img: assets.koa,
            bgColor: "#BDC4FF",
            text: "Karnataka Orthopaedic Association (KOA)."
        },
        {
            img: assets.pos,
            bgColor: "#DFF7EA",
            text: "Pediatric Orthopedic Society (POS)"
        },
        {
            img: assets.iwas,
            bgColor: "#F9BDFF",
            text: "International Wrist Arthroscopy Society (IWAS)"
        },
        {
            img: assets.ao,
            bgColor: "#DFEFF7",
            text: "AO"
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

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        if (!container || !content) return;

        const items = Array.from(content.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            content.appendChild(clone);
        });

        let totalWidth = 0;
        items.forEach(item => {
            totalWidth += item.offsetWidth + 40;
        });

        gsap.set(content, { x: 0 });

        animationRef.current = gsap.to(content, {
            x: -totalWidth / 2,
            duration: 20,
            ease: "none",
            repeat: -1,
            onRepeat: function () {
                gsap.set(content, { x: 0 });
            }
        });

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [professional]);

    return (
        <PageTransition>
            <div className='relative' ref={comp}>
                <img src={assets.drDarshanDesktopBanner} className='relative w-full h-auto hidden lg:block' alt="" />
                <img src={assets.drDarshanBannerTablet} className='relative w-full h-auto hidden sm:block lg:hidden' alt="" />
                <img src={assets.drDarshanBannerMobile} className="relative w-full h-auto sm:hidden" alt='' />

                <div className='flex justify-end absolute w-full top-20 sm:top-28 lg:top-45 mxl:top-75 anime'>
                    <div className="w-full px-5 sm:w-[60%]">
                        <div className='font-heading text-[18px] s:text-[22px] mm:text-[24px] lg:text-[30px] mxl:text-[44px] font-700 font-black'>Dr. Darshan Kumar A. Jain</div>
                        <div className='font-heading text-[10px] s:text-[12px] mm:text-[24px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px] mt-2'>MBBS, MS Ortho (KMC Manipal),</div>
                        <div className='font-heading text-[10px] s:text-[12px] mm:text-[24px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>FNB, Clinical Fellow National University Hospital, (Singapore),</div>
                        <div className='font-heading text-[10px] s:text-[12px] mm:text-[24px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>MNAMS, PGDHHM, Diploma in Tissue Banking (Singapore)</div>
                        <ul className='mt-5 ml-5 list-disc '>
                            <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Consultant Hand & Microsurgeon</li>
                            <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Consultant Upper Limb/ Upper Extremity Surgeon</li>
                            <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Specialist in Wrist & Elbow arthroscopy</li>
                            <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Specialist in Shoulder Surgery</li>
                            <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Professor in Orthopedics </li>
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

            <div className='relative lg:gap-0 px-5 md:px-0 md:py-0 mxl:py-10 bounce' ref={el => bounceElements.current[1] = el}>
                {/* Section Title */}
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient" ref={el => bounceElements.current[2] = el}>
                    Services provided
                </div>

                {/* upperLimb */}

                <div className='relative py-5 md:p-10 rounded-2xl overflow-hidden'>
                    <div className="font-heading text-[12px] mm:text-[16px] md:text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center bounce" ref={el => bounceElements.current[3] = el}>
                        <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Upper limb Surgery : Hand & Wrist</span>
                    </div>

                    <div className="realtive mt-8 z-10 relative bounce" ref={el => bounceElements.current[4] = el}>
                        <div className='realtive flex flex-wrap justify-center gap-5'>
                            {
                                upperLimbSurgery.map((surgery, index) => (
                                    <div className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                        <div className='relative'>
                                            <img src={surgery.img} className='w-full' alt="" />
                                            <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[40px] h-[40px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                                <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                            </div>
                                        </div>

                                        <div className='mt-1'>
                                            <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.text}</div>
                                            <div className='text-[14px] font-[500] font-para'>
                                                {surgery.txt.length > 100 ? `${surgery.txt.substring(0, 100)}...` : `surgery.txt`}
                                            </div>
                                        </div>

                                        {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* container 5 */}

            {/* <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 z-10 relative p-5 md:px-10 mxl:px-20'>
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
                <div className='bg-[#FEE6DC] p-5 md:p-8 rounded-2xl flex flex-col gap-4' ref={el => bounceElements.current[8] = el}>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient bounce" ref={el => bounceElements.current[9] = el}>
                        Shoulder
                    </div>
                    <div className='bounce' ref={el => bounceElements.current[10] = el}>
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
                <div className='bg-[#DFF7EA] p-5 md:p-8 rounded-2xl flex flex-col gap-4' ref={el => bounceElements.current[11] = el}>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient bounce" ref={el => bounceElements.current[12] = el}>
                        Congenital
                    </div>
                    <div className='bounce' ref={el => bounceElements.current[13] = el}>
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
            </div> */}

            {/* container 5 */}

            <div className='relative p-5 md:p-10 rounded-2xl overflow-hidden'>
                <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center bounce" ref={el => bounceElements.current[7] = el}>
                    <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Elbow</span>
                </div>

                <div className="relative mt-8 z-10 bounce" ref={el => bounceElements.current[8] = el}>
                    <div className='realtive flex flex-wrap justify-center gap-5'>
                        {
                            elbow.map((surgery, index) => (
                                <div className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative'>
                                        <img src={surgery.img} className='w-full' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[40px] h-[40px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.text}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.txt.length > 110 ? `${surgery.txt.substring(0, 110)}...` : `surgery.txt`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* conatiner 6 */}

            <div className='relative p-5 md:p-10 rounded-2xl overflow-hidden'>
                <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center bounce" ref={el => bounceElements.current[7] = el}>
                    <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Shoulder</span>
                </div>

                <div className="relative mt-8 z-10 bounce" ref={el => bounceElements.current[8] = el}>
                    <div className='realtive flex flex-wrap justify-center gap-5'>
                        {
                            Shoulder.map((surgery, index) => (
                                <div className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative'>
                                        <img src={surgery.img} className='w-full' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[40px] h-[40px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.text}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.txt.length > 110 ? `${surgery.txt.substring(0, 110)}...` : `surgery.txt`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='relative p-5 md:p-10 rounded-2xl overflow-hidden'>
                <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center bounce" ref={el => bounceElements.current[9] = el}>
                    <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Congenital</span>
                </div>

                <div className="relative mt-8 z-10 bounce" ref={el => bounceElements.current[8] = el}>
                    <div className='realtive flex flex-wrap justify-center gap-5'>
                        {
                            congenital.map((surgery, index) => (
                                <div className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative'>
                                        <img src={surgery.img} className='w-full' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[40px] h-[40px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.text}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.txt.length > 110 ? `${surgery.txt.substring(0, 110)}...` : `surgery.txt`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* container 6 */}

            <div className='relative p-5 md:p-10 rounded-2xl overflow-hidden'>
                <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center bounce" ref={el => bounceElements.current[11] = el}>
                    <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Peripheral nerve surgery</span>
                </div>

                <div className="relative mt-8 z-10 bounce" ref={el => bounceElements.current[8] = el}>
                    <div className='realtive flex flex-wrap justify-center gap-5'>
                        {
                            nerve.map((surgery, index) => (
                                <div className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative'>
                                        <img src={surgery.img} className='w-full' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[40px] h-[40px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.text}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.txt.length > 110 ? `${surgery.txt.substring(0, 110)}...` : `surgery.txt`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* container 7 */}

            <div className='relative p-5 md:p-10 rounded-2xl overflow-hidden'>
                <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center bounce" ref={el => bounceElements.current[13] = el}>
                    <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Reconstructive Surgery</span>
                </div>

                <div className="relative mt-8 z-10 bounce" ref={el => bounceElements.current[8] = el}>
                    <div className='realtive flex flex-wrap justify-center gap-5'>
                        {
                            reconstructive.map((surgery, index) => (
                                <div className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative'>
                                        <img src={surgery.img} className='w-full' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[40px] h-[40px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.text}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.txt.length > 100 ? `${surgery.txt.substring(0, 110)}...` : `surgery.txt`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
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

            <div className='relative'>
                <div className='realtive'>
                    <img src={assets.locationBg} className='realtive w-full md:h-[450px] lg:h-[500px] mxl:h-[650px] hidden md:block' alt="" />
                    <img src={assets.locationBgMobile} alt="" className='w-full h-[840px] md:hidden' />
                </div>
                <div className="absolute top-0 z-5 flex flex-col items-center gap-15 md:gap-30 justify-center px-5 py-15 md:flex-row">
                    <img src={assets.locationImage} className='w-[90%] md:w-[40%]' alt="" />

                    <div className='flex flex-col gap-5 lg:gap-10'>
                        <div className='text-[24px] text-white text-center md:text-left font-[700] font-heading mt-5 lg:text-[40px]'>Consultation Locations</div>

                        <div className='flex gap-3 items-start mt-4'>
                            <img src={assets.locationSvg} alt="" />
                            <div>
                                <div className='font-logo text-[30px] font-[400] text-white lg:text-[44px] leading-9'>Sapiens Clinic</div>
                                <div className='font-para text-[14px] font-[600] text-white mt-1 lg:text-[16px]'>Mon to sat 12:00 noon to 8:00 PM, Sunday Holiday</div>
                            </div>
                        </div>

                        <div className='flex gap-3 items-start mt-4'>
                            <img src={assets.locationSvg} alt="" />
                            <div>   
                                <div className='font-heading text-[16px] font-[700] text-white lg:text-[22px]'>Apollo Spectra - Koramangala</div>
                                <div className='font-para text-[14px] font-[600] text-white mt-1 lg:text-[16px]'>Wednesday and Saturday, 10:00 AM to 1:00 PM</div>
                            </div>
                        </div>

                        <div className='flex gap-3 items-start mt-4'>
                            <img src={assets.locationSvg} alt="" />
                            <div>
                                <div className='font-heading text-[16px] font-[700] text-white lg:text-[22px]'>Rxdx Healthcare, Whitefiled</div>
                                <div className='font-para text-[14px] font-[600] text-white mt-1 lg:text-[16px]'>Every Monday Morning, 10:00 AM to 12:00 PM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className='p-5 lg:px-25 mt-10'>
                <div
                    dangerouslySetInnerHTML={{
                        __html: `<div class="elfsight-app-4da7b5d7-a323-48ec-9858-ae01cfc8aba2"></div>`
                    }}
                />
            </div>

            <div className='py-5 mt-5 '>
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient mb-5">
                    Professional Memberships
                </div>

                <div
                    className="relative overflow-hidden w-full py-10"
                    ref={containerRef}
                >
                    <div
                        ref={contentRef}
                        className='flex gap-10 items-center md:flex-row md:justify-center md:flex-nowrap mt-10'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {professional.map((prof, index) => (
                            <div
                                key={index}
                                className='w-[230px] h-[260px] rounded-2xl flex flex-col gap-3 px-1 items-center justify-center flex-shrink-0'
                                style={{ background: prof.bgColor }}
                            >
                                <img src={prof.img} className='w-[124px] h-auto' alt={prof.text} />
                                <div className='text-center text-black font-[700]'>{prof.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <img src={surgery.img} className='w-full' alt="" /> */}
            <Outlet />
        </PageTransition>
    )
}

export default DrDarshan
