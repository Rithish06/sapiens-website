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
import { Link } from 'react-router-dom';

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
            name: "Carpal tunnel syndrome",
            image: assets.carpalTunnelImg,
            para: "If your fingers often feel numb, your wrist hurts when you type, or you keep dropping things without reason - it might not just be tiredness. These are classic signs of Carpal Tunnel Syndrome, a common but often overlooked nerve condition of the hand.",
            link: "carpal-tunnel-syndrome",
            seoLink: "carpal-tunnel-syndrome-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Stiffness of joints of the hand.",
            image: assets.Stiffnessofjointsofthehand,
            para: "Imagine waking up and finding your fingers hard to move. You try to stretch, but they feel locked or tight. You want to pick up your cup of tea, but your wrist won’t bend easily. If this sounds familiar, you may be experiencing joint stiffness in the hand, a common yet often underestimated issue that can interfere with even the simplest daily activities.",
            link: "stiffness-of-joints-of-the-hand",
            seoLink: "stiffness-of-joints-of-the-hand-treatment-in-malleshwaram-bangalore"
        },
        // {
        //     name: "Dupuytren’s disease",
        //     image: assets.egImage,
        //     para: "", 
        //     link: "dupuytrens-disease",
        //     seoLink: "dupuytrens-disease-treatment-in-malleshwaram-bangalore"
        // },
        {
            name: "Infections of the hand.",
            image: assets.InfectionOfTheHand,
            para: "Even a small injury to the hand can become serious if an infection develops. Hand infections can spread quickly due to the complex anatomy of tendons, joints, and nerves, often resulting in pain, swelling, and loss of function if not treated early. Whether caused by a cut, bite or underlying health condition, early diagnosis and timely care are essential to prevent long-term damage.",
            link: "infections-of-the-hand",
            seoLink: "infections-of-the-hand-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "De Quervain’s tenosynovitis",
            image: assets.DeQuervainsTenosynovitisSplints,
            para: "Pain on the thumb side of your wrist when lifting, gripping, or holding something as light as your phone? You're not alone. This could be a sign of De Quervain’s Tenosynovitis - a condition that affects countless individuals who rely on their hands every day, from young mothers and IT professionals to athletes and artists.",
            link: "de-quervains-tenosynovitis",
            seoLink: "de-quervains-tenosynovitis-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Swellings (lumps and bumps) of the hand.",
            image: assets.Swellinglumpsandbumps,
            para: "A noticeable lump or swelling on the hand can raise concerns-whether it's painless or causing discomfort. While many of these bumps are harmless, some may interfere with hand function or indicate underlying issues. At Sapiens Clinic, we offer expert evaluation and comprehensive care for a wide range of hand swellings, ensuring your hand health is protected and restored.",
            link: "swellings-lumps-and-bumps-of-the-hand",
            seoLink: "swellings-lumps-and-bumps-of-the-hand-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Kienbock’s disease (Avascular necrosis of lunate)",
            image: assets.KienbockDiseases,
            para: "Kienböck’s disease is a rare and progressive condition in which the lunate bone - one of the small bones in the wrist - loses its blood supply. Over time, this leads to bone death (avascular necrosis), collapse, and arthritis if left untreated. The disease can cause significant pain, stiffness, and loss of wrist function.",
            link: "kienbocks-disease-avascular-necrosis-of-lunate",
            seoLink: "kienbocks-disease-avascular-necrosis-of-lunate-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Scaphoid fractures",
            image: assets.ScaphoidFractures,
            para: "A scaphoid fracture is one of the most common wrist injuries, typically caused by a fall onto an outstretched hand. It affects the scaphoid bone—a small but critical bone located on the thumb side of the wrist. Because this bone has limited blood supply, delayed or improper treatment can lead to poor healing, chronic pain, or long-term complications.",
            link: "scaphoid-fractures",
            seoLink: "scaphoid-fractures-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Scaphoid non unions",
            image: assets.Scaphoidnonunion,
            para: "A scaphoid nonunion occurs when a fracture in the scaphoid bone fails to heal properly, leading to persistent pain, reduced wrist function, and potential long-term complications like arthritis. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating scaphoid nonunions, aiming to restore wrist functionality and alleviate discomfort.",
            link: "scaphoid-non-unions",
            seoLink: "scaphoid-non-unions-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Scapholunate ligament injury",
            image: assets.ScapholunateLigamentInjury,
            para: "The scapholunate ligament is a key stabilizer of the wrist, connecting the scaphoid and lunate bones. Injury to this ligament can lead to wrist instability, pain and if untreated, progressive arthritis. At Sapiens Clinic in Malleshwaram, we specialize in the accurate diagnosis and effective treatment of scapholunate ligament injuries, aiming to restore wrist function and alleviate discomfort.",
            link: "scapholunate-ligament-injury",
            seoLink: "scapholunate-ligament-injury-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Radius fracture",
            image: assets.RadiusFracture,
            para: "A radius fracture, particularly at the distal end near the wrist, is one of the most common orthopedic injuries, often resulting from falls or direct trauma. At Sapiens Clinic in Malleshwaram, we specialize in the accurate diagnosis and effective treatment of radius fractures, aiming to restore wrist function and alleviate discomfort.",
            link: "radius-fracture",
            seoLink: "radius-fracture-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "TFCC (Triangular Fibrocartilage Complex) injury",
            image: assets.TFCC,
            para: "Tendon transfer surgery is a specialized procedure aimed at restoring hand function lost due to nerve injuries, muscle damage, or congenital conditions. By redirecting functioning tendons to compensate for impaired ones, this surgery can significantly improve mobility and strength in the hand. At Sapiens Clinic in Malleshwaram, we offer expert evaluation and surgical solutions to help patients regain optimal hand function.",
            link: "tfcc-triangular-fibrocartilage-complex-injury",
            seoLink: "tfcc-triangular-fibrocartilage-complex-injury-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Tendon transfers ( for hand, )",
            image: assets.tendonTransfer,
            para: "Tendon transfer surgery is a specialized procedure aimed at restoring hand function lost due to nerve injuries, muscle damage, or congenital conditions. By redirecting functioning tendons to compensate for impaired ones, this surgery can significantly improve mobility and strength in the hand. At Sapiens Clinic in Malleshwaram, we offer expert evaluation and surgical solutions to help patients regain optimal hand function.",
            link: "tendon-transfers-for-hand",
            seoLink: "tendon-transfers-for-hand-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Wrist arthroscopy",
            image: assets.WristArthroscopy,
            para: "Wrist arthroscopy is a minimally invasive surgical procedure that allows orthopedic specialists to diagnose and treat various wrist conditions with precision. At Sapiens Clinic in Malleshwaram, we utilize advanced arthroscopic techniques to provide effective solutions for patients experiencing wrist pain, instability or limited mobility.",
            link: "wrist-arthroscopy",
            seoLink: "wrist-arthroscopy-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Cubital tunnel syndrome",
            image: assets.CubitalTunnelSyndrome,
            para: "Cubital Tunnel Syndrome is a condition characterized by compression or irritation of the ulnar nerve as it passes through the cubital tunnel on the inside of the elbow. This compression can lead to numbness, tingling, and pain in the forearm and hand, particularly affecting the ring and little fingers. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis and treatment of Cubital Tunnel Syndrome, offering both non-surgical and surgical options tailored to individual patient needs.",
            link: "cubital-tunnel-syndrome",
            seoLink: "cubital-tunnel-syndrome-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Cerebral palsy",
            image: assets.CerebralPalsy,
            para: "Cerebral Palsy (CP) is a group of neurological disorders that affect movement, muscle tone, and posture. It is caused by damage to the developing brain, often before birth, and manifests in early childhood. At Sapiens Clinic in Malleshwaram, we provide comprehensive evaluation and individualized treatment plans to support children and adults living with CP.",
            link: "cerebral-palsy",
            seoLink: "cerebral-palsy-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Tumors of hand",
            image: assets.tumorsonhand,
            para: "Hand tumors encompass a variety of growths that can develop in the tissues of the hand, including skin, fat, nerves, blood vessels, tendons, ligaments and bones. While most hand tumors are benign (non-cancerous), some can be malignant (cancerous) necessitating prompt evaluation and management. At Sapiens Clinic in Malleshwaram, we offer comprehensive assessment and personalized treatment plans for individuals presenting with hand tumors, ensuring optimal functional and aesthetic outcomes.",
            link: "tumors-of-hand",
            seoLink: "tumors-of-hand-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Post burns contracture",
            image: assets.postburnsContracture,
            para: "Post-burn contractures are a common complication following deep burns, leading to the tightening of skin and underlying tissues. This condition can significantly impair movement, especially when it affects joints and may also cause aesthetic concerns. At Sapiens Clinic in Malleshwaram, we offer comprehensive evaluation and individualized treatment plans to restore function and improve quality of life for individuals affected by post-burn contractures.",
            link: "post-burns-contracture",
            seoLink: "post-burns-contracture-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Vascular anomalies",
            image: assets.VasularAnomalies,
            para: "Vascular anomalies are a diverse group of disorders characterized by abnormal development of blood vessels, including arteries, veins, capillaries, and lymphatic vessels. These anomalies can present at birth or develop later in life, affecting various parts of the body and potentially leading to functional and aesthetic concerns. At Sapiens Clinic in Malleshwaram, we offer comprehensive evaluation and individualized treatment plans for patients with vascular anomalies, aiming to restore function and improve quality of life.",
            link: "vascular-anomalies",
            seoLink: "vascular-anomalies-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "UCL injury",
            image: assets.UCLinjury,
            para: "Ulnar Collateral Ligament (UCL) injuries are prevalent among athletes engaged in overhead throwing activities, such as baseball, javelin, and tennis. These injuries can lead to elbow instability and pain, affecting performance and daily activities. At Sapiens Clinic in Malleshwaram, we provide comprehensive evaluation and personalized treatment plans to address UCL injuries effectively.",
            link: "ucl-injury",
            seoLink: "ucl-injury-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Glomus tumors",
            image: assets.GlomusTumorNail,
            para: "Glomus tumors are rare, benign vascular neoplasms arising from the glomus body, a thermoregulatory shunt concentrated in the fingers and toes. These tumors most commonly occur under the fingernails (subungual region) and are characterized by severe pain, tenderness, and sensitivity to cold. At Sapiens Clinic in Malleshwaram, we offer comprehensive evaluation and personalized treatment plans for individuals presenting with glomus tumors, ensuring optimal functional and aesthetic outcomes.",
            link: "glomus-tumors",
            seoLink: "glomus-tumors-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Giant cell tumor (GCT)",
            image: assets.GaintCellTumor,
            para: "Giant Cell Tumors (GCTs) are rare, typically benign bone tumors known for their aggressive local behavior. They predominantly affect young adults and can lead to significant bone destruction if not addressed promptly. At Sapiens Clinic in Malleshwaram, we specialize in the comprehensive evaluation and management of GCTs, aiming to preserve function and prevent recurrence.",
            link: "giant-cell-tumor-gct",
            seoLink: "giant-cell-tumor-gct-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Tuberculosis",
            image: assets.Tuberculosis,
            para: "Tuberculosis (TB) of the hand is a rare manifestation of extrapulmonary TB, often presenting diagnostic challenges due to its nonspecific symptoms. At Sapiens Clinic in Malleshwaram, we specialize in the comprehensive evaluation and management of hand TB, aiming to restore function and prevent complications.",
            link: "tuberculosis",
            seoLink: "tuberculosis-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Congenital anomalies",
            image: assets.congenitalAnomalies,
            para: "Congenital anomalies of the upper limb encompass a diverse group of conditions present at birth, affecting the hand, wrist and elbow. These anomalies can range from minor differences to significant malformations, impacting function and appearance. At Sapiens Clinic in Malleshwaram, we specialize in the comprehensive evaluation and management of these conditions, aiming to enhance functionality and quality of life for our patients.",
            link: "congenital-anomalies",
            seoLink: "congenital-anomalies-treatment-in-malleshwaram-bangalore"
        }
    ]

    const elbow = [
        // { 
        //     name: "Fractures(Humerus/radius/ulna)", 
        //     image: assets.egImage, 
        //     para: "", 
        //     link: "fractures-humerus-radius-ulna", 
        //     seoLink: "fractures-humerus-radius-ulna-treatment-in-malleshwaram-bangalore" 
        // },
        {
            name: "Elbow replacement/ Elbow arthroplasty",
            image: assets.ElbowReplacement,
            para: "Elbow replacement, or elbow arthroplasty, is a surgical procedure to replace damaged parts of the elbow joint with artificial components. This intervention is considered when conservative treatments fail to alleviate severe elbow pain and dysfunction caused by conditions like arthritis, fractures, or other joint diseases. At Sapiens Clinic in Malleshwaram, we specialize in comprehensive evaluation and management of elbow conditions, aiming to restore function and improve quality of life for our patients.",
            link: "elbow-replacement-elbow-arthroplasty",
            seoLink: "elbow-replacement-arthroplasty-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Elbow arthroscopy",
            image: assets.ElbowArthroscopyth,
            para: "Elbow arthroscopy is a minimally invasive surgical procedure that allows orthopedic surgeons to diagnose and treat various elbow joint conditions using small incisions and specialized instruments. At Sapiens Clinic in Malleshwaram, we offer advanced elbow arthroscopy techniques to address a range of elbow disorders, aiming to restore function and alleviate pain with reduced recovery times.",
            link: "elbow-arthroscopy",
            seoLink: "elbow-arthroscopy-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Synovitis of elbow",
            image: assets.ElbowSynovitis,
            para: "Synovitis of the elbow is a condition characterized by inflammation of the synovial membrane-the lining of the elbow joint. This inflammation can lead to pain, swelling, and reduced mobility, affecting daily activities. At Sapiens Clinic in Malleshwaram, we specialize in the comprehensive evaluation and management of elbow synovitis, aiming to restore function and improve quality of life for our patients.",
            link: "synovitis-of-elbow",
            seoLink: "synovitis-of-elbow-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Ligament repair or reconstruction of elbow",
            image: assets.LigamentRepairorReconstruction,
            para: "Elbow ligament injuries, particularly to the ulnar collateral ligament (UCL) can significantly impair arm function, especially in athletes and individuals engaged in repetitive arm movements. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis and treatment of elbow ligament injuries, offering both conservative and surgical options tailored to each patient's needs.",
            link: "ligament-repair-or-reconstruction-of-elbow",
            seoLink: "ligament-repair-or-reconstruction-of-elbow-treatment-in-malleshwaram-bangalore"
        }
    ]

    const Shoulder = [
        {
            name: "Shoulder arthroscopy",
            image: assets.shoulderarthroscopy,
            para: "Shoulder arthroscopy is a minimally invasive surgical procedure that allows orthopedic surgeons to diagnose and treat various shoulder joint conditions using small incisions and specialized instruments. At Sapiens Clinic in Malleshwaram, we offer advanced shoulder arthroscopy techniques to address a range of shoulder disorders, aiming to restore function and alleviate pain with reduced recovery times.",
            link: "shoulder-arthroscopy",
            seoLink: "shoulder-arthroscopy-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Shoulder replacement/ arthroplasty",
            image: assets.ShoulderReplacementArthroplasty,
            para: "Shoulder replacement, or shoulder arthroplasty, is a surgical procedure aimed at relieving pain and restoring function in severely damaged shoulder joints. At Sapiens Clinic in Malleshwaram, we offer advanced shoulder replacement options tailored to individual patient needs, ensuring optimal outcomes and improved quality of life.",
            link: "shoulder-replacement-arthroplasty",
            seoLink: "shoulder-replacement-arthroplasty-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Rotator cuff tear",
            image: assets.NormalRotatorCuffFront,
            para: "A rotator cuff tear is a common shoulder injury that can cause pain, weakness, and limited mobility. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating rotator cuff tears, aiming to restore shoulder function and improve quality of life.",
            link: "rotator-cuff-tear",
            seoLink: "rotator-cuff-tear-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Labral tear",
            image: assets.AnatomyofLabralTear,
            para: "A labral tear involves damage to the ring of cartilage (labrum) that surrounds the shoulder socket (glenoid) contributing to joint stability. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating labral tears, aiming to restore shoulder function and alleviate pain.",
            link: "labral-tear",
            seoLink: "labral-tear-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "SLAP injuries",
            image: assets.slapInjuries,
            para: "A SLAP (Superior Labrum Anterior to Posterior) injury refers to a tear of the labrum, the ring of cartilage that surrounds the shoulder socket. This type of injury can cause pain, instability, and decreased range of motion in the shoulder. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating SLAP injuries to restore shoulder function and improve quality of life.",
            link: "slap-injuries",
            seoLink: "slap-injuries-treatment-in-malleshwaram-bangalore"
        }
    ]

    const congenital = [
        {
            name: "Pollicization",
            image: assets.pollicization,
            para: "Pollicization is a specialized surgical procedure designed to reconstruct a functional thumb by transforming an existing finger, typically the index finger, into a thumb. This surgery is crucial for individuals born without a thumb (congenital thumb aplasia) or those who have lost their thumb due to trauma. At Sapiens Clinic in Malleshwaram, we offer expert care in performing pollicization to restore hand function and enhance quality of life.",
            link: "pollicization",
            seoLink: "pollicization-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Malunion",
            image: assets.MalunionFracture,
            para: "Malunion refers to a condition where a fractured bone heals in an incorrect position, leading to deformity, functional impairment, and discomfort. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating malunions to restore proper alignment and function to the affected limb.",
            link: "malunion",
            seoLink: "malunion-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Tendon transfer",
            image: assets.tendonTransfer,
            para: "Tendon transfer surgery is a specialized procedure aimed at restoring lost muscle function by rerouting tendons from functioning muscles to compensate for paralyzed or damaged ones. At Sapiens Clinic in Malleshwaram, we offer expert care in performing tendon transfers to enhance mobility and improve quality of life for our patients.",
            link: "tendon-transfer",
            seoLink: "tendon-transfer-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Synovectomy",
            image: assets.synovectomy,
            para: "Synovectomy is a surgical procedure aimed at removing inflamed synovial tissue from joints, commonly performed to alleviate pain and improve mobility in conditions like rheumatoid arthritis. At Sapiens Clinic in Malleshwaram, we specialize in both arthroscopic and open synovectomy techniques, tailored to each patient's specific needs.",
            link: "synovectomy",
            seoLink: "synovectomy-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Nonunion",
            image: assets.NonUnion,
            para: "Nonunion refers to a fracture that fails to heal within the expected timeframe, leading to persistent pain, instability, and functional limitations. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating nonunion fractures, aiming to restore bone integrity and improve patient outcomes.",
            link: "nonunion",
            seoLink: "nonunion-treatment-in-malleshwaram-bangalore"
        }
    ]

    const nerve = [
        {
            name: "Nerve repair",
            image: assets.NerveRepair,
            para: "Work-Related Upper Limb Disorders (WRULD) encompass a range of musculoskeletal conditions affecting the shoulders, arms, wrists, and hands, often resulting from repetitive tasks, sustained postures, or excessive force in occupational settings. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis, treatment, and prevention of WRULD, aiming to alleviate symptoms and enhance workplace well-being.",
            link: "nerve-repair",
            seoLink: "nerve-repair-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Nerve reconstruction",
            image: assets.NerveReconstruction,
            para: "Nerve reconstruction surgery is a specialized procedure aimed at repairing damaged nerves to restore function and alleviate pain. At Sapiens Clinic in Malleshwaram, we offer advanced surgical techniques tailored to each patient's needs, ensuring optimal recovery and improved quality of life.",
            link: "nerve-reconstruction",
            seoLink: "nerve-reconstruction-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Nerve related problems affecting the hand, brachial plexus injuries, nerve injuries",
            image: assets.egImage,
            para: "Nerve-related issues in the upper limb, encompassing conditions like brachial plexus injuries and peripheral nerve injuries, can significantly impair hand and arm function. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating these complex conditions, aiming to restore mobility, reduce pain, and enhance quality of life.",
            link: "nerve-related-problems-affecting-the-hand-brachial-plexus-injuries-nerve-injuries",
            seoLink: "nerve-related-problems-hand-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Birth related Brachial plexus",
            image: assets.BirthRelatedBrachialPlexus,
            para: "Birth-related brachial plexus injuries (BRBPI) occur when the network of nerves transmitting signals from the spinal cord to the shoulder, arm, and hand is damaged during childbirth. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and treating BRBPI, aiming to restore function and improve quality of life for affected infants.",
            link: "birth-related-brachial-plexus",
            seoLink: "birth-related-brachial-plexus-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Cerebral palsy",
            image: assets.CerebralPalsy,
            para: "Cerebral palsy (CP) encompasses a group of neurological disorders that affect movement, muscle tone and posture, resulting from damage to the developing brain, often before birth. At Sapiens Clinic in Malleshwaram, we specialize in diagnosing and managing CP, aiming to enhance mobility, independence and quality of life for individuals affected by this condition.",
            link: "cerebral-palsy",
            seoLink: "cerebral-palsy-treatment-in-malleshwaram-bangalore"
        }
    ]

    const reconstructive = [
        {
            name: "Flaps cover to upper or lower limbs",
            image: assets.FlapsCoverToUpperOrLowerLimbs,
            para: "Flap coverage is a critical surgical technique employed to restore form and function in limbs affected by trauma, infection, tumors, or congenital anomalies. At Sapiens Clinic in Malleshwaram, we specialize in advanced flap reconstruction procedures for both upper and lower limbs, aiming to preserve limbs, enhance mobility and improve quality of life.",
            link: "flaps-cover-to-upper-or-lower-limbs",
            seoLink: "flaps-cover-upper-lower-limbs-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Vascularized bone grafts for non-unions",
            image: assets.VascularisedFreeFibula,
            para: "Flap coverage is a critical surgical technique employed to restore form and function in limbs affected by trauma, infection, tumors, or congenital anomalies. At Sapiens Clinic in Malleshwaram, we specialize in advanced flap reconstruction procedures for both upper and lower limbs, aiming to preserve limbs, enhance mobility and improve quality of life.",
            link: "vascularized-bone-grafts-for-non-unions",
            seoLink: "vascularized-bone-grafts-non-unions-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Free flaps",
            image: assets.FreeFlab,
            para: "Free flap reconstruction is an advanced microsurgical technique used to restore form and function in areas affected by trauma, cancer resection, or congenital anomalies. At Sapiens Clinic in Malleshwaram, we specialize in this intricate procedure, aiming to achieve optimal aesthetic and functional outcomes for our patients.",
            link: "free-flaps",
            seoLink: "free-flaps-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Vascularised free fibula",
            image: assets.VascularisedFreeFibula,
            para: "The vascularized free fibula graft (VFFG) is a sophisticated microsurgical technique employed to reconstruct extensive bone defects resulting from trauma, tumor resection, or congenital anomalies. At Sapiens Clinic in Malleshwaram, we specialize in this advanced procedure, aiming to restore skeletal integrity and function in complex cases.",
            link: "vascularised-free-fibula",
            seoLink: "vascularised-free-fibula-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Complex reconstruction requiring both soft tissue and bone",
            image: assets.ComplexReconstructionRequiringBothSoftTissueAndBone,
            para: "Complex reconstruction involving both soft tissue and bone is a specialized surgical approach aimed at restoring form and function in patients with extensive injuries, tumor resections, or congenital anomalies. At Sapiens Clinic in Malleshwaram, we offer advanced reconstructive procedures tailored to address these multifaceted challenges, ensuring optimal outcomes for our patients.",
            link: "complex-reconstruction-requiring-both-soft-tissue-and-bone",
            seoLink: "complex-reconstruction-soft-tissue-bone-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "VIC (Volkman’s Ischemic Contracture)",
            image: assets.VOLKMANNSISCHEMICCONTRACture,
            para: "Volkmann’s Ischemic Contracture (VIC) is a serious medical condition characterized by a permanent flexion deformity of the hand and wrist, resulting from prolonged muscle and nerve ischemia in the forearm. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis, management, and surgical correction of VIC, aiming to restore function and improve the quality of life for our patients.",
            link: "vic-volkmans-ischemic-contracture",
            seoLink: "vic-volkmans-ischemic-contracture-treatment-in-malleshwaram-bangalore"
        },
        {
            name: "Reconstruction for the limbs",
            image: assets.LimbReconstruction,
            para: "Limb reconstruction surgery is a specialized field aimed at restoring the form and function of limbs affected by trauma, congenital anomalies, infections, or tumors. At Sapiens Clinic in Malleshwaram, we offer advanced reconstructive procedures tailored to address complex limb deformities, ensuring optimal outcomes for our patients.",
            link: "reconstruction-for-the-limbs",
            seoLink: "reconstruction-for-the-limbs-treatment-in-malleshwaram-bangalore"
        }
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

                <div className="flex flex-col mt-10 lg:flex-row lg:items-center lg:gap-0">
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
                        {/* <div className='w-full h-300px lg:h-full bg-gray-300 rounded-2xl'></div> */}
                        <img src={assets.specialityImg} className='w-full h-280px lg:h-full rounded-2xl' />
                    </div>
                </div>
            </div>

            {/* container 4 */}

            <div className='relative lg:gap-0 px-5 md:px-0 md:py-0 mxl:py-10 bounce' ref={el => bounceElements.current[1] = el}>
                {/* Section Title */}
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient" ref={el => bounceElements.current[2] = el}>
                    Services Provided
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
                                    <Link to={surgery.link} className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                        <div className='relative w-[200px]'>
                                            <img src={surgery.image} className='w-[200px] h-[130px] rounded-[10px] object-cover' alt="" />
                                            <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[35px] h-[35px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                                <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                            </div>
                                        </div>

                                        <div className='mt-1'>
                                            <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.name}</div>
                                            <div className='text-[14px] font-[500] font-para'>
                                                {surgery.para.length > 100 ? `${surgery.para.substring(0, 100)}...` : ``}
                                            </div>
                                        </div>

                                        {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                    </Link>
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
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.name}</div>
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
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.name}</div>
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
                                    <div className="text-[12px] lg:text-[16px] font-text font-[700]">{surgery.name}</div>
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
                                <Link to={surgery.link} className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative w-[200px]'>
                                        <img src={surgery.image} className='w-[200px] h-[130px] rounded-[10px] object-cover' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[35px] h-[35px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.name}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.para.length > 110 ? `${surgery.para.substring(0, 110)}...` : `surgery.para`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </Link>
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
                                <Link to={surgery.link} className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative w-[200px]'>
                                        <img src={surgery.image} className='w-[200px] h-[130px] rounded-[10px] object-cover' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[35px] h-[35px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.name}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.para.length > 110 ? `${surgery.para.substring(0, 110)}...` : `surgery.para`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </Link>
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
                                <Link to={surgery.link} className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative w-[200px]'>
                                        <img src={surgery.image} className='w-[200px] h-[130px] rounded-[10px] object-cover' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[35px] h-[35px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.name}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.para.length > 110 ? `${surgery.para.substring(0, 110)}...` : `surgery.para`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </Link>
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
                                <Link to={surgery.link} className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative w-[200px]'>
                                        <img src={surgery.image} className='w-[200px] h-[130px] rounded-[10px] object-cover' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[35px] h-[35px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.name}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.para.length > 110 ? `${surgery.para.substring(0, 110)}...` : `surgery.para`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </Link>
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
                                <Link to={surgery.link} className={`group relative w-[100%] md:w-[45%] lg:w-[30%] flex items-center gap-3 mt-5 bg-[#D9D9D9] p-2 rounded-2xl hover:bg-[#FFE7BB] cursor-pointer transition-all duration-500`} key={index} >

                                    <div className='relative w-[200px]'>
                                        <img src={surgery.image} className='w-[200px] h-[130px] rounded-[10px] object-cover' alt="" />
                                        <div className='absolute top-[79.5%] right-0 bg-[#D9D9D9] text-[30px] w-[35px] h-[35px] rounded-full flex justify-center items-center group-hover:bg-[#FFE7BB] transition-transform duration-500'>
                                            <FaArrowRight className='w-[20px] h-[20px] rotate-[-45deg] text-[#EF7F1A] group-hover:rotate-0 transition-transform duration-500' />
                                        </div>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='text-[16px] text-[#B22726] font-[700] font-para'>{surgery.name}</div>
                                        <div className='text-[14px] font-[500] font-para'>
                                            {surgery.para.length > 100 ? `${surgery.para.substring(0, 110)}...` : `surgery.para`}
                                        </div>
                                    </div>

                                    {/* <div className='absolute bottom-12 w-full'>
                                            
                                        </div> */}
                                </Link>
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
                                <div className='text-center text-black font-[700]'>{prof.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <img src={surgery.image} className='w-full' alt="" /> */}
            <Outlet />
        </PageTransition>
    )
}

export default DrDarshan
