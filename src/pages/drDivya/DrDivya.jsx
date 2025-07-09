import React, { useLayoutEffect, useRef } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { assets } from '../../assets/assets';
import TimeLine from '../../components/timline/Timeline'
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet'

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
            text: "Facial cosmetic procedures- Blepharoplasty, Brow lifts, Facelifts, Tissue fillers, Facial Rejuvenation, Facial Nerve Palsy"
        },
        {
            color: "#88FFF5",
            text: "Ophthalmic Oncology- Management of various eyes, eyelid, orbital & adnexal tumors, Management of Paediatric Eye cancers like Retinoblastoma, Neuroblastoma, Rhabdomyosarcoma and others."
        },
    ]

    {/* container 4 */}
    const Eyelid = [
        {
            link: '/dr-divya-sundaresh/eyelid',
            text: 'Eyelid',
            img: assets.Eyelid,
            alttext: "Eyelid by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "Do your eyes often feel tired, or do your eyelids appear droopy or puffy? Do you find yourself struggling with blurry vision or eye irritation? You might be experiencing an eyelid condition that requires professional attention. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis and treatment of various eyelid diseases to restore comfort, function and aesthetics to your eyes.",
            
        },
        {
            link: '/dr-divya-sundaresh/asian-blepharoplasty',
            text: 'Asian Blepharoplasty',
            img: assets.asianblepharoplasty,
            alttext: "Asian Blepharoplasty by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore ",
            txt: "Asian Blepharoplasty, also known as double eyelid surgery, is a delicate and precise procedure designed to create a natural-looking crease in the upper eyelid - enhancing eye definition without compromising your ethnic identity. At Sapiens Clinic, we approach this with a deep understanding of both anatomy and aesthetics, creating results that feel completely your own."

        },
        {
            link: '/dr-divya-sundaresh/entropion-repair',
            text: 'Entropion Repair',
            img: assets.entropionrepair,
            alttext: "Entropion Repair by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "Entropion is a condition where the eyelid turns inward, causing the eyelashes and skin to rub directly against the surface of the eye. This constant friction can lead to discomfort, redness, tearing, and in severe cases, corneal damage or vision loss."
        },
        {
            link: '/dr-divya-sundaresh/canthal-resection',
            text: 'Canthal Resection',
            img: assets.CanthalResection,
            alttext: "Canthal Resection by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "Canthal resection, also referred to as epicanthoplasty, is a specialized oculoplastic procedure designed to reshape and enhance the inner or outer corners of the eyes. This aesthetic eye surgery removes or repositions the epicanthic fold—a small skin fold near the inner eye—to create a more open, symmetric, and balanced appearance."
        },
        {
            link: '/dr-divya-sundaresh/canthopexy',
            text: 'Canthopexy',
            img: assets.Canthopexy,
            alttext: "Canthopexy by Dr. Divya Sundaresh at Sapiens Clinic,Bangalore",
            txt: "Canthopexy is a specialized oculoplastic procedure that lifts and tightens the outer corners of the eyes, providing both aesthetic enhancement and structural support. At Sapiens Clinic, Malleshwaram, we perform advanced canthopexy to correct sagging lower eyelids, improve eye symmetry and redefine the natural shape of the eyes for a refreshed, youthful appearance."
        },
        {
            link: '/dr-divya-sundaresh/epicanthoplasty',
            text: 'Epicanthoplasty',
            img: assets.Epicanthoplasty,
            alttext: "Epicanthoplasty by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "Epicanthoplasty is a specialized cosmetic eyelid procedure designed to correct the epicanthal fold - a skin fold that covers the inner corner of the eye, often seen in individuals of Asian descent. This fold can make the eyes appear smaller or give a cross-eyed look. Through epicanthoplasty, the fold is modified to reveal more of the medial canthus (inner eye corner), resulting in larger, more open eyes and a smoother, aesthetically pleasing contour."
        },
        {
            link: '/dr-divya-sundaresh/eyelid-retraction',
            text: 'Eyelid Malpositions',
            img: assets.EyelidMalpositions,
            alttext: "Eyelid Malpositions by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "If you’re facing any of these symptoms, you may be experiencing an eyelid malposition such as entropion or ectropion-conditions that require specialized attention to protect your vision and improve comfort."
        },
        {
            link: '/dr-divya-sundaresh/blepharophimosis',
            text: 'Blepharophimosis',
            img: assets.Blepharophimosis,
            alttext: "Blepharophimosis by Dr. Divya Sundaresh at Sapiens  Clinic, Bangalore",
            txt: "Blepharophimosis syndrome (BPES) is a rare congenital condition that primarily affects the eyelids, resulting in narrowed eye openings, droopy lids (ptosis), and a skin fold near the inner corner of the eyes (epicanthus inversus). These features not only affect the cosmetic appearance but can significantly impair vision and daily function, particularly in children."
        },
        {
            link: '/dr-divya-sundaresh/eyelid-synkinesis',
            text: 'Eyelid Synkinesis',
            img: assets.eyelidsynkinesis,
            alttext: "Eyelid Synkinesis by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "Eyelid synkinesis is a facial nerve disorder in which the eyelid moves involuntarily - often blinking or closing - when another part of the face is activated, such as during smiling or chewing. This occurs due to misdirected nerve regrowth following a facial nerve injury, leading to unintentional and often uncomfortable muscle movements. Though not life-threatening, it can be both functionally and emotionally distressing."
        },
        {
            link: '/dr-divya-sundaresh/eyelid-retraction',
            text: 'Eyelid Retraction',
            img: assets.EyelidRetraction,
            alttext: "Eyelid Retraction by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "Eyelid retraction occurs when the upper eyelid is pulled higher or the lower eyelid drops lower than its natural position, exposing more of the eye’s surface. This condition not only affects appearance but also causes discomfort, dryness, and in more severe cases, damage to the cornea. At Sapiens Clinic, Malleshwaram, we offer effective treatment options to restore eyelid function and protect eye health."
        },

    ]

    {/* container 5 */}


    const Orbit = [
        {
            link: '/dr-divya-sundaresh/orbital-disease',
            text: 'Orbit',
            img: assets.Orbit,
            alttext: "Orbit by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "These could be signs of an orbital disease, a condition that affects the bony socket (orbit) surrounding your eye. At Sapiens Clinic in Malleshwaram, our oculoplastic and orbital surgeons offer expert care for a wide range of orbital disorders with accurate diagnosis and advanced surgical treatments."
        },
        {
            link: '/dr-divya-sundaresh/orbital-decompression',
            text: 'Orbital Decompression',
            img: assets.orbitdecompression,
            alttext: "Orbital Decompression by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "At Sapiens Clinic, Malleshwaram, orbital decompression surgery is performed to relieve pressure within the eye socket (orbit) and to reposition bulging eyes caused by thyroid eye disease (Graves' orbitopathy). This specialized procedure increases the orbital space by removing sections of bone and when necessary, reducing orbital fat, helping restore comfort, eye appearance and vision quality."
        },
        {
            link: '/dr-divya-sundaresh/wall-decompression',
            text: '2 Wall Decompression',
            img: assets.WallDecompression,
            alttext: "2 Wall Decompression by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "Two-wall orbital decompression surgery is a critical oculoplastic procedure used to treat prominent eye bulging (proptosis), most commonly caused by thyroid eye disease. At Sapiens Clinic in Malleshwaram, we offer precise, personalized care to help alleviate the discomfort and visual complications caused by this condition. Our surgical approach creates additional space within the orbit, allowing the protruding eye to settle back into a more natural and functional position."
        },
        {
            link: '/dr-divya-sundaresh/wall-decompression-3',
            text: '3 and 4 Wall Decompression',
            img: assets.walldecompression3,
            alttext: "3 and 4 Wall Decompression by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "At Sapiens Clinic in Malleshwaram, we offer advanced 3 and 4 wall orbital decompression surgeries for patients experiencing severe thyroid eye disease (Graves’ orbitopathy) or exophthalmos (protruding eyes). These conditions can place immense pressure within the eye socket, affecting eye movement, vision and facial symmetry. Our goal with decompression surgery is to expand orbital space, relieve pressure on the optic nerve and restore both visual function and cosmetic balance."
        },

    ]

    {/* container 6 */}
    const Lacrimal = [
        {
            link: '/dr-divya-sundaresh/endoscopic-dcr',
            text: 'Endoscopic DCR',
            img: assets.endoscopicdcr,
            alttext: "Endoscopic DCR by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "At Sapiens Clinic, Malleshwaram, Endoscopic Dacryocystorhinostomy (DCR) is offered as a modern, minimally invasive solution for patients with tear duct blockages. When the nasolacrimal duct is obstructed-whether due to infection, inflammation or congenital factors-it can lead to watery eyes (epiphora), frequent eye infections, and discomfort. Our expert oculoplastic team performs this advanced procedure to restore natural tear drainage and eliminate symptoms without external incisions or scarring."
        },
        {
            link: '/dr-divya-sundaresh/cdcr-dct-ballon',
            text: 'CDCR DCT Ballon',
            img: assets.CdCRDCTBallon,
            alttext: "CDCR DCT Ballon by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "At Sapiens Clinic, Malleshwaram, we offer highly specialized care for patients dealing with excessive tearing, recurrent eye infections, or blocked tear ducts. Our expertise in lacrimal procedures such as CDCR (Conjunctivodacryocystorhinostomy), DCT (Dacryocystectomy) and Balloon Dacryoplasty ensures patients receive effective, minimally invasive and long-lasting relief."
        },
        {
            link: '/dr-divya-sundaresh/dacryoplasty',
            text: 'Dacryoplasty',
            img: assets.Dacryoplasty,
            alttext: "Dacryoplasty by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "Dacryoplasty is a minimally invasive procedure designed to treat nasolacrimal duct obstructions (NLDO), which can cause excessive tearing (epiphora) and recurrent eye infections. Utilizing balloon catheter technology, dacryoplasty gently dilates the blocked tear duct, restoring normal tear drainage without the need for extensive surgery."
        },
        {
            link: '/dr-divya-sundaresh/lester-jones-surgery',
            text: 'Lester Jones Surgery',
            img: assets.LesterJonesSurgery,
            alttext: "Lester Jones Surgery by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "Lester Jones surgery is a specialized procedure performed to treat severe tear drainage system obstruction, particularly when the canalicular ducts are blocked and traditional DCR surgeries have failed. Named after the Lester Jones tube used in the procedure, this surgery involves placing a tiny, polished Pyrex glass tube that bypasses the blocked drainage system and allows tears to flow directly from the eye into the nasal cavity."
        },
    ]

    {/* container 7*/}

    const OrbitalTumors = [
        {
            link: '/dr-divya-sundaresh/orbital-tumors',
            text: 'Orbital Tumors',
            img: assets.OrbitalTumors,
            alttext: "Orbital Tumors by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "These may be signs of an orbital tumor—a mass developing within the bony socket (orbit) that houses the eye, its muscles, nerves, and supportive tissues. At Sapiens Clinic, Malleshwaram, our skilled oculoplastic surgeons offer comprehensive evaluation and cutting-edge surgical options to manage both benign and malignant orbital tumors safely and effectively."
        },
        {
            link: '/dr-divya-sundaresh/cavernous-hemangioma',
            text: 'Cavernous Hemangioma',
            img: assets.CavernousHemangioma,
            alttext: "Cavernous Hemangioma by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "Cavernous hemangioma is one of the most common benign orbital tumors, often found within the eye socket (orbit). Though usually slow-growing and painless, this mass of blood vessels can cause visual disturbances, eye protrusion, or discomfort if it expands or shifts. At Sapiens Clinic, Malleshwaram, our oculoplastic and orbital specialists are equipped with the diagnostic precision and surgical expertise to manage cavernous hemangiomas effectively—prioritizing both function and aesthetics."
        },
        {
            link: '/dr-divya-sundaresh/orbital-lymphoma',
            text: 'Orbital Lymphoma',
            img: assets.OrbitalLymphoma,
            alttext: "Orbital Lymphoma by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "Orbital lymphoma is a type of cancer that affects the tissues surrounding the eye (orbit). While it is typically non-Hodgkin's B-cell lymphoma, it can involve the eyelids, extraocular muscles, lacrimal gland, or the soft tissues behind the eye. At Sapiens Clinic in Malleshwaram, we specialize in the diagnosis and management of orbital lymphoma through a multidisciplinary approach involving oculoplastic surgeons and oncology experts."
        },
        {
            link: '/dr-divya-sundaresh/pseudo-tumor',
            text: 'Pseudo tumor',
            img: assets.Pseudotumor,
            alttext: "Pseudo tumor by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "Do you experience persistent headaches, vision changes, dizziness, or pressure behind the eyes-yet imaging tests reveal no actual tumor? You could be facing a condition called Pseudotumor Cerebri, also known as Idiopathic Intracranial Hypertension (IIH). Though it mimics the symptoms of a brain tumor, no true mass exists. At Sapiens Clinic, Malleshwaram, our experienced ophthalmologists and specialists offer thorough diagnostic evaluations and advanced treatment options to preserve your vision and manage symptoms effectively."
        },
    ]

    {/* container 8 */}

    const OcularSurfaceTumors = [
        {
            link: '/dr-divya-sundaresh/ocular-surface-tumors',
            text: 'Ocular Surface Tumors',
            img: assets.OculusSurfaceTumor,
            alttext: "Ocular Surface Tumors by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "Ocular surface tumors are abnormal growths that can appear on the front of the eye or within the orbit-the bony cavity that houses the eyeball. These tumors can be benign (non-cancerous) or malignant (cancerous) and may affect structures such as the conjunctiva, sclera, or surrounding tissues. Left untreated, they can displace the eye (a condition called proptosis), restrict eye movement, impair vision, and in rare cases, lead to significant ocular damage."
        },
        {
            link: '/dr-divya-sundaresh/conjuctival-cyst',
            text: 'Conjuctival Cyst',
            img: assets.conjunctivalcyst,
            alttext: "Conjuctival Cyst by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "If you notice any of these signs, it may be time to consult an oculoplastic specialist. At Sapiens Clinic, Malleshwaram, we offer expert care for conjunctival cysts and tumors, combining precision diagnostics and minimally invasive surgery."
        },
        {
            link: '/dr-divya-sundaresh/removal-surgery',
            text: 'Removal Surgery',
            img: assets.RemovalSurgery,
            alttext: "Removal Surgery by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "If you answered yes to any of these, it’s time to get your eyes examined. At Sapiens Clinic, Malleshwaram, we provide advanced care for conjunctival cysts and tumors, with expert diagnosis and safe, minimally invasive removal surgery when required."
        },

    ]

    {/* container 9 */}
    const EyelidCancers = [
        {
            link: '/dr-divya-sundaresh/sebaceous-cell-carcinoma',
            text: 'Sebaceous cell carcinoma',
            img: assets.sebaceouscarcinoma,
            alttext: "Sebaceous cell carcinoma by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "You could be dealing with sebaceous carcinoma, a rare but potentially aggressive eyelid cancer that requires prompt evaluation and expert care. At Sapiens Clinic, Malleshwaram, our experienced oculoplastic specialists offer comprehensive diagnosis, surgical treatment, and personalized recovery plans to help you regain comfort, vision, and confidence."
        },
        {
            link: '/dr-divya-sundaresh/malignant-melanomas',
            text: 'Malignant melanomas',
            img: assets.melgnantmelonama,
            alttext: "Malignant melanomas by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "What may seem like a harmless mole could actually be malignant melanoma, a rare but serious form of eyelid cancer. At Sapiens Clinic, Malleshwaram, our oculoplastic specialists provide prompt evaluation and treatment for eyelid melanomas using advanced surgical techniques that prioritize both medical and cosmetic outcomes."
        },
        {
            link: '/dr-divya-sundaresh/mohs-surgery',
            text: 'Mohs Surgery',
            img: assets.MohsSurgery,
            alttext: "Mohs Surgery by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "If you've been diagnosed with skin cancer-especially basal cell carcinoma or squamous cell carcinoma-Mohs surgery may be the most effective treatment option. At Sapiens Clinic, Malleshwaram, we offer Mohs micrographic surgery performed by skilled oculoplastic and facial skin surgeons, ensuring maximum removal of cancerous tissue with the least possible damage to healthy skin."
        },
        {
            link: '/dr-divya-sundaresh/tenzels-flap',
            text: 'Tenzels flap',
            img: assets.TenzelsFlap,
            alttext: "Tenzels flap by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "The eyelids are more than just a cosmetic feature-they play a vital role in protecting your eyes, maintaining moisture, and enabling smooth vision. Whether due to skin cancer, trauma, or a previous surgical excision, defects in the lower eyelid can affect both your eye function and appearance. At Sapiens Clinic, Malleshwaram, we offer Tenzel flap surgery-a proven "
        },
        {
            link: '/dr-divya-sundaresh/hughes-flap',
            text: 'Hughes Flap',
            img: assets.Hughesflap,
            alttext: "Hughes Flap by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "Reconstructing the delicate anatomy of the eyelids requires surgical precision, artistic finesse, and a deep understanding of ocular function. At Sapiens Clinic, Malleshwaram, our teamoffers Hughes Flap Surgery for patients who have large full-thickness lower eyelid defects-often due to tumor excision, trauma, or congenital conditions. This proven two-stage technique restores both the functionality and cosmetic harmony of the eyelid. "
        },
        {
            link: '/dr-divya-sundaresh/cutler-beard-flap',
            text: 'Cutler Beard Flap',
            img: assets.Cutlerbreadflaps,
            alttext: "Cutler Beard Flap by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",
            txt: "Eyelid reconstruction demands surgical precision, especially when the upper eyelid is severely affected by tumors, trauma, or congenital defects. At Sapiens Clinic, Malleshwaram, we offer Cutler-Beard Flap Surgery, a two-stage lid-sharing procedure designed to restore both the form and function of the upper eyelid when more than 50% of the lid is lost."
        },
        {
            link: '/dr-divya-sundaresh/mustardes-flap',
            text: 'Mustardes Flap',
            img: assets.MustardesFlap,
            alttext: "Mustardes Flap by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "The Mustarde flap, also known as the Mustarde cheek rotational flap, is a specialized reconstructive procedure used to correct large full-thickness defects around the lower eyelid, cheek, and eyelid-cheek junction. At Sapiens Clinic, Malleshwaram, we perform this technique with the goal of restoring eyelid mobility, maintaining ocular protection, and achieving aesthetically pleasing results for patients affected by trauma, skin cancers, or post-surgical defects."
        },

    ]

    {/* container 10 */}

    const RetinalTumors = [
        {
            link: '/dr-divya-sundaresh/choroidal-metastasis',
            text: 'Choroidal Metastasis',
            img: assets.ChoroidalMetastasis,
            alttext: "Choroidal Metastasis by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "These could be early signs of choroidal metastasis-a rare but serious condition where cancer spreads to the choroid layer of the eye. At Sapiens Clinic, Malleshwaram, we offer advanced diagnostics and targeted treatments for choroidal metastasis under the care of our experienced ocular specialists."
        },
        {
            link: '/dr-divya-sundaresh/choroidal-melanoma',
            text: 'Choroidal Melanoma',
            img: assets.ChoroidalMelanoma,  
            alttext: "Choroidal Melanoma by Dr. Divya Sundaresh at Sapiens Clinic, Malleshwaram, Bangalore",  
            txt: "These symptoms may be signs of choroidal melanoma, a rare but serious type of eye cancer. At Sapiens Clinic, Malleshwaram, our expert ocular oncology team provides accurate diagnosis and advanced treatment to help preserve your vision and overall eye health."
        },
        {
            link: '/dr-divya-sundaresh/enucleation',
            text: 'Enucleation',
            img: assets.Enucleation,
            alttext: "Enucleation by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "Enucleation is a specialized surgical procedure performed to remove the entire eyeball in cases where the eye is severely damaged, painful or affected by malignancy. At Sapiens Clinic, Malleshwaram, our expert oculoplastic team performs enucleation with precision and care, ensuring optimal socket reconstruction for future prosthetic placement and cosmetic restoration."
        },
        {
            link: '/dr-divya-sundaresh/evisceration',
            text: 'Evisceration',
            img: assets.Evisceration,
            alttext: "Evisceration by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore Karnataka",
            txt: "Evisceration is a specialized surgical procedure involving the removal of the intraocular contents while preserving the outer shell of the eye (sclera) and optic nerve. In some cases, the cornea may also remain intact. At Sapiens Clinic, Malleshwaram, this procedure is performed when preserving the eye’s structure offers better cosmetic results and socket support for prosthesis."
        },
        {
            link: '/dr-divya-sundaresh/exenteration',
            text: 'Exenteration',
            img: assets.Exenteration,
            alttext: "Exenteration by Dr. Divya Sundaresh at Sapiens Clinic, Bangalore",
            txt: "Exenteration, or orbital exenteration, is a highly specialized surgical procedure used to remove the eye along with the surrounding tissues such as muscles, optic nerves, fatty tissue, and, in some cases, the eyelids. This surgery is usually recommended in advanced or aggressive tumors of the orbit that cannot be managed through conservative treatment methods. Depending on the extent of tissue removal, exenteration is classified as total, subtotal, or extended."
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
    ]

    // useEffect(() => {
    //     // Load the Elfsight platform script
    //     const script = document.createElement('script');
    //     script.src = 'https://static.elfsight.com/platform/platform.js';
    //     script.dataset.useServiceCore = '';
    //     script.defer = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         // Clean up
    //         document.body.removeChild(script);
    //     };
    // }, []);

    const professional = [
        {
            img: assets.aios,
            bgColor: "#FEF0C3",
            text: 'All India Ophthalmic Society'
        },
        {
            img: assets.bosOpthal,
            bgColor: "#DFF7EA",
            text: 'Bangalore Ophthalmic Society'
        },
        {
            img: assets.opai,
            bgColor: "#FEE6DC",
            text: 'OPAI'
        },
        {
            img: assets.kos,
            bgColor: "#BDC4FF",
            text: 'KARNATAKA OPHTHALMIC SOCIETY'
        },
    ]

    return (
        <PageTransition>

			<Helmet>
				<title>Dr. Divya Sundaresh | Oculoplasty Specialist Bangalore</title>
				<meta name="description" content="Leading oculoplasty & eye surgeon in Bangalore. Expert in eyelid, lacrimal & orbital surgery across South India." />
				<meta name="keywords" content="Dr Divya Sundaresh Bangalore, oculoplasty specialist in Bangalore, best eye surgeon Karnataka, lacrimal surgery expert India, eyelid surgery Bangalore, orbital surgery doctor Bangalore, ophthalmologist Malleshwaram, tear duct surgery Bangalore, oculoplastic surgeon South India" />
			</Helmet>

            <div ref={containerRef}>
                {/* container 1 */}

                <div className='relative'>
                    <img src={assets.drDivyaBanner} className='relative w-full h-auto hidden lg:block' alt="Dr. Divya Sundaresh, ophthalmologist at Sapiens Clinic, Bangalore Karnataka" />
                    <img src={assets.drDivyaBannerTablet} className='relative w-full h-auto hidden sm:block lg:hidden' alt="Dr. Divya Sundaresh, ophthalmologist at Sapiens Clinic, Bangalore Karnataka" />
                    <img src={assets.drDivyaBannerMobile} className="relative w-full h-auto sm:hidden" alt='Dr. Divya Sundaresh, ophthalmologist at Sapiens Clinic, Bangalore Karnataka' />

                    <div className='flex justify-end absolute w-full top-20 sm:top-28 lg:top-45 mxl:top-75 anime'>
                        <div className="w-full px-5 sm:w-[60%]">
                            <h1 className='font-heading text-[18px] s:text-[24px] lg:text-[30px] mxl:text-[44px] font-700 font-black'>Dr. Divya Sundaresh</h1>
                            <div className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px] mt-2'>DO, DNB, FICO, FRCS (Glas), FAICO (Oculoplasty),</div>
                            <div className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>Ex Medical Officer, Aravind Eye Hospital</div>
                            {/* <div className='font-heading text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-400 mxl:leading-[32px]'>MNAMS, PGDHHM, Diploma in Tissue Banking (Singapore)</div> */}
                            <ul className='mt-5 ml-5 list-disc '>
                                <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Ophthalmology Consultant</li>
                                <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Specialist in Orbit & Oculoplasty</li>
                                <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Specialist in Lacrimal Surgeries</li>
                                <li className='font-para text-[10px] s:text-[12px] lg:text-[18px] mxl:text-[20px] font-[500] mxl:leading-[40px]'>Specialsit in Ocular Oncology </li>
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
                            <img src={assets.contactOpthalmology} className='w-[100%] h-auto md:w-[350px] max-w-[500px]' alt="Ophthalmology treatment by Dr. Divya Sundaresh at Sapiens Clinic Bangalore, Karnataka" />
                        </div>
                    </div>
                    <div className="w-full lg:50%">
                        <TimeLine educationData={educationData} />
                    </div>
                </div>

                {/* container 3 */}
                <div className="lg:gap-0 p-5 md:p-10 mxl:p-20 fadex" ref={fadexRef}>

                    <h2 className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient">Specialised Expertise in Orbit & Oculoplasty</h2>

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
                <div className='p-5 lg:px-20 bounce' ref={(el) => addBounceRef(el, 1)}>
                    <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services Provided
                    </div>

                    <h2 className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center my-10 bounce">
                        <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Eyelid</span>
                    </h2>

                    {/* Grid List */}
                    <div className="flex flex-wrap gap-[50px] justify-center bounce" ref={(el) => addBounceRef(el, 3)}>
                        {
                            Eyelid.map((surgery, index) => (
                                <Link to={surgery.link}>
                                    <div className='flex flex-col items-center cursor-pointer' key={index}>
                                        <img src={surgery.img} className='relative w-[120px] h-[120px] object-cover rounded-full' alt={surgery.alttext} />
                                        <div className='group realtive -mt-[60px] w-[230px] h-[230px] bg-[#D9D9D9] flex justify-center items-end rounded-t-full hover:bg-[#B22726] transition-all duration-500' >
                                            <div className='h-[65%] w-[80%]'>
                                                <div className='text-[14px] font-[700] font-para text-center group-hover:text-white trasition-transform duration-500'>{surgery.text}</div>
                                                <div className='text-[12px] font-[500] mt-2 font-para group-hover:text-white trasition-transform duration-500'>
                                                    {surgery.txt.length > 120 ? surgery.txt.substring(0, 120) + "..." : surgery.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* container 5 */}
                <div className='p-5 lg:px-20 bounce' ref={(el) => addBounceRef(el, 1)}>
                    {/* <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services provided
                    </div> */}

                   
                        <h2 className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center my-10 bounce">
                            <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Orbit</span>
                        </h2>


                    {/* Grid List */}
                    <div className="flex flex-wrap gap-[50px] justify-center bounce" ref={(el) => addBounceRef(el, 3)}>
                        {
                            Orbit.map((surgery, index) => (
                                <Link to={surgery.link}>
                                    <div className='flex flex-col items-center cursor-pointer' key={index}>
                                    <img src={surgery.img} className='relative w-[120px] h-[120px] object-cover rounded-full' alt={surgery.alttext} />
                                        <div className='group realtive -mt-[60px] w-[230px] h-[230px] bg-[#D9D9D9] flex justify-center items-end rounded-t-full hover:bg-[#B22726] transition-all duration-500' >
                                            <div className='h-[65%] w-[80%]'>
                                                <div className='text-[14px] font-[700] font-para text-center group-hover:text-white trasition-transform duration-500'>{surgery.text}</div>
                                                <div className='text-[12px] font-[500] mt-2 font-para group-hover:text-white trasition-transform duration-500'>
                                                    {surgery.txt.length > 120 ? surgery.txt.substring(0, 120) + "..." : surgery.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* container 6 */}
                <div className='p-5 lg:px-20 bounce' ref={(el) => addBounceRef(el, 1)}>
                    {/* <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services provided
                    </div> */}

                    <h2 className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center my-10 bounce">
                        <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Lacrimal</span>
                    </h2>

                    {/* Grid List */}
                    <div className="flex flex-wrap gap-[50px] justify-center bounce" ref={(el) => addBounceRef(el, 3)}>
                        {
                            Lacrimal.map((surgery, index) => (
                                <Link to={surgery.link}>
                                    <div className='flex flex-col items-center cursor-pointer' key={index}>
                                     <img src={surgery.img} className='relative w-[120px] h-[120px] object-cover rounded-full' alt={surgery.alttext} />
                                        <div className='group realtive -mt-[60px] w-[230px] h-[230px] bg-[#D9D9D9] flex justify-center items-end rounded-t-full hover:bg-[#B22726] transition-all duration-500' >
                                            <div className='h-[65%] w-[80%]'>
                                                <div className='text-[14px] font-[700] font-para text-center group-hover:text-white trasition-transform duration-500'>{surgery.text}</div>
                                                <div className='text-[12px] font-[500] mt-2 font-para group-hover:text-white trasition-transform duration-500'>
                                                    {surgery.txt.length > 120 ? surgery.txt.substring(0, 120) + "..." : surgery.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>


                {/* container 7 */}
                <div className='p-5 lg:px-20 bounce' ref={(el) => addBounceRef(el, 1)}>
                    {/* <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services provided
                    </div> */}

                   
                        <h2 className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center my-10 bounce">
                            <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Orbital Tumors</span>
                        </h2>
                    

                    {/* Grid List */}
                    <div className="flex flex-wrap gap-[50px] justify-center bounce" ref={(el) => addBounceRef(el, 3)}>
                        {
                            OrbitalTumors.map((surgery, index) => (
                                <Link to={surgery.link}>
                                    <div className='flex flex-col items-center cursor-pointer' key={index}>
                                     <img src={surgery.img} className='relative w-[120px] h-[120px] object-cover rounded-full' alt={surgery.alttext} />
                                        <div className='group realtive -mt-[60px] w-[230px] h-[230px] bg-[#D9D9D9] flex justify-center items-end rounded-t-full hover:bg-[#B22726] transition-all duration-500' >
                                            <div className='h-[65%] w-[80%]'>
                                                <div className='text-[14px] font-[700] font-para text-center group-hover:text-white trasition-transform duration-500'>{surgery.text}</div>
                                                <div className='text-[12px] font-[500] mt-2 font-para group-hover:text-white trasition-transform duration-500'>
                                                    {surgery.txt.length > 120 ? surgery.txt.substring(0, 120) + "..." : surgery.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>


                {/* container 8 */}
                <div className='p-5 lg:px-20 bounce' ref={(el) => addBounceRef(el, 1)}>
                    {/* <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services provided
                    </div> */}

                    
                        <h2 className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center my-10 bounce">
                            <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Ocular Surface Tumors</span>
                        </h2>
                        

                    {/* Grid List */}
                    <div className="flex flex-wrap gap-[50px] justify-center bounce" ref={(el) => addBounceRef(el, 3)}>
                        {
                            OcularSurfaceTumors.map((surgery, index) => (
                                <Link to={surgery.link}>
                                    <div className='flex flex-col items-center cursor-pointer' key={index}>
                                    <img src={surgery.img} className='relative w-[120px] h-[120px] object-cover rounded-full' alt={surgery.alttext} />
                                        <div className='group realtive -mt-[60px] w-[230px] h-[230px] bg-[#D9D9D9] flex justify-center items-end rounded-t-full hover:bg-[#B22726] transition-all duration-500' >
                                            <div className='h-[65%] w-[80%]'>
                                                <div className='text-[14px] font-[700] font-para text-center group-hover:text-white trasition-transform duration-500'>{surgery.text}</div>
                                                <div className='text-[12px] font-[500] mt-2 font-para group-hover:text-white trasition-transform duration-500'>
                                                    {surgery.txt.length > 120 ? surgery.txt.substring(0, 120) + "..." : surgery.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* container 9 */}
                <div className='p-5 lg:px-20 bounce' ref={(el) => addBounceRef(el, 1)}>
                    {/* <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services provided
                    </div> */}

                    <h2 className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center my-10 bounce">
                        <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Eyelid Cancers & Tumors</span>
                    </h2>

                    {/* Grid List */}
                    <div className="flex flex-wrap gap-[50px] justify-center bounce" ref={(el) => addBounceRef(el, 3)}>
                        {
                            EyelidCancers.map((surgery, index) => (
                                <Link to={surgery.link}>
                                    <div className='flex flex-col items-center cursor-pointer' key={index}>
                                        <img src={surgery.img} className='relative w-[120px] h-[120px] object-cover rounded-full' alt={surgery.alttext} />
                                        <div className='group realtive -mt-[60px] w-[230px] h-[230px] bg-[#D9D9D9] flex justify-center items-end rounded-t-full hover:bg-[#B22726] transition-all duration-500' >
                                            <div className='h-[65%] w-[80%]'>
                                                <div className='text-[14px] font-[700] font-para text-center group-hover:text-white trasition-transform duration-500'>{surgery.text}</div>
                                                <div className='text-[12px] font-[500] mt-2 font-para group-hover:text-white trasition-transform duration-500'>
                                                    {surgery.txt.length > 120 ? surgery.txt.substring(0, 120) + "..." : surgery.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>


                {/* container 10*/}
                <div className='p-5 lg:px-20 bounce' ref={(el) => addBounceRef(el, 1)}>
                    {/* <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient bounce" ref={(el) => addBounceRef(el, 2)}>
                        Services provided
                    </div> */}

                    <h2 className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient text-center my-10 bounce">
                        <span className='border-[2px] border-[#EF7F1A] py-2 px-8 rounded-tl-[50px] rounded-br-[50px]'>Retinal Tumors</span>
                    </h2>

                    {/* Grid List */}
                    <div className="flex flex-wrap gap-[50px] justify-center bounce" ref={(el) => addBounceRef(el, 3)}>
                        {
                            RetinalTumors.map((surgery, index) => (
                                <Link to={surgery.link}>
                                    <div className='flex flex-col items-center cursor-pointer' key={index}>
                                        <img src={surgery.img} className='relative w-[120px] h-[120px] object-cover rounded-full' alt={surgery.alttext} />
                                        <div className='group realtive -mt-[60px] w-[230px] h-[230px] bg-[#D9D9D9] flex justify-center items-end rounded-t-full hover:bg-[#B22726] transition-all duration-500' >
                                            <div className='h-[65%] w-[80%]'>
                                                <div className='text-[14px] font-[700] font-para text-center group-hover:text-white trasition-transform duration-500'>{surgery.text}</div>
                                                <div className='text-[12px] font-[500] mt-2 font-para group-hover:text-white trasition-transform duration-500'>
                                                    {surgery.txt.length > 120 ? surgery.txt.substring(0, 120) + "..." : surgery.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* container 11 */}
                <div className='p-10 md:p-20 mt-10 bg-[#FFD46633]'>
                    <div className="font-heading text-[20px] lg:text-[24px] font-[700] bg-orange-gradient">
                        Paper Presentations:
                    </div>

                    <div className='px-8 mt-5'>
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

                {/* container 12 */}
                <div className='p-10  md:p-20  bg-[#B6FEB433]'>
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


            <div className='p-5 lg:px-20 mt-5 '>
                <div className="font-heading text-[28px] text-center lg:text-[38px] font-[700] bg-orange-gradient mb-5">
                    Professional Memberships
                </div>

                <div
                    className="relative overflow-hidden w-full py-10"
                    ref={containerRef}
                >
                    <div className='flex gap-10 flex-wrap items-center md:flex-row md:flex-wrap md:justify-center mt-10'>
                        {professional.map((prof, index) => (
                            <div
                                key={index}
                                className='w-[140px] h-[160px] md:w-[230px] md:h-[260px] rounded-2xl flex flex-col gap-3 items-center justify-center px-1 flex-shrink-0'
                                style={{ background: prof.bgColor }}
                            >
                                <img src={prof.img} className='w-[80px] md::w-[124px] h-auto' alt={prof.text} />
                                <div className='text-center text-black font-[700] font-para text-[12px] md:text-[16px]'>{prof.text}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </PageTransition>
    )
}

export default DrDivya
