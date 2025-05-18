import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Homebanner from '../../components/hero-section/Homebanner'
import { assets } from '../../assets/assets'
import Flip from '../../components/flip-animation/Flip'
import Faqs from '../../components/faqs/faqs'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { useGSAP } from '@gsap/react'

// import { scrollAnimateFromTo } from '../../components/gsap'
import PageTransition from "../../components/PageTransition";

const Home = () => {

	const targetRef = useRef(null);
	// const comp = useRef();

	const handleLearnMoreClick = () => {
		if (targetRef.current) {
			const elementTop = targetRef.current.getBoundingClientRect().top;
			const offset = window.innerHeight * 0.4;
			window.scrollTo({
				top: window.pageYOffset + elementTop - offset,
				behavior: 'smooth',
			});
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

	const containerRef = useRef();
	const fadeInRef = useRef();
	const fadexRef = useRef();
	const sideScrollRef = useRef();
	const rotateRef = useRef();
	const rotateRevRef = useRef();
	const pinRef = useRef();

	// For multiple elements
	const bounceRefs = useRef([]);
	const zoomInRefs = useRef([]);

	useGSAP(() => {
		// ScrollTrigger configuration
		ScrollTrigger.config({
			ignoreMobileResize: true,
			limitCallbacks: true
		});

		// FadeIn animation
		if (targetRef.current) {
			gsap.fromTo(targetRef.current,
				{ scale: 0.5, opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 3,
					scrollTrigger: {
						trigger: targetRef.current,
						start: "top 85%",
						end: "top 40%",
						scrub: true,
						toggleActions: "play none none none",
						markers: false
					}
				}
			);
		}

		// Fade from left
		if (fadexRef.current) {
			gsap.fromTo(fadexRef.current,
				{ scale: 0.5, opacity: 0, x: -500 },
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 3,
					scrollTrigger: {
						trigger: fadexRef.current,
						start: "top 85%",
						end: "top 40%",
						scrub: true,
						toggleActions: "play none none none",
						markers: false
					}
				}
			);
		}

		// Bounce for multiple elements
		bounceRefs.current.forEach((el, index) => {
			if (!el) return;

			gsap.fromTo(el,
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
						scrub: 3,
						markers: false,
					}
				}
			);
		});

		// Side scroll
		if (sideScrollRef.current) {
			gsap.fromTo(sideScrollRef.current,
				{ x: 1200 },
				{
					x: 0,
					duration: 1.5,
					scrollTrigger: {
						trigger: sideScrollRef.current,
						start: "top 60%",
						end: "top 30%",
						toggleActions: "restart none none none",
						scrub: true,
						markers: false,
					}
				}
			);
		}

		// Zoom in for multiple elements
		zoomInRefs.current.forEach((el, index) => {
			if (!el) return;

			gsap.fromTo(el,
				{ scale: 3 },
				{
					scale: 1,
					duration: 1.5,
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
						end: "top 40%",
						toggleActions: "restart none none none",
						scrub: true,
						markers: false,
					}
				}
			);
		});

		// Rotate
		if (rotateRef.current) {
			gsap.fromTo(rotateRef.current,
				{ opacity: 0, x: -500 },
				{
					opacity: 1,
					duration: 1.5,
					x: 0,
					scrollTrigger: {
						trigger: rotateRef.current,
						start: "top 80%",
						end: "top 30%",
						toggleActions: "restart none none none",
						scrub: true,
						markers: false,
					}
				}
			);
		}

		// Reverse rotate
		if (rotateRevRef.current) {
			gsap.fromTo(rotateRevRef.current,
				{ opacity: 0, x: 500 },
				{
					opacity: 1,
					duration: 1.5,
					x: 0,
					scrollTrigger: {
						trigger: rotateRef.current, // NOTE: Keeping your original trigger
						start: "top 80%",
						end: "top 30%",
						toggleActions: "restart none none none",
						scrub: true,
						markers: false,
					}
				}
			);
		}

		// Pin animation
		if (pinRef.current) {
			gsap.fromTo(pinRef.current,
				{ opacity: 0, y: 100 },
				{
					scale: 1,
					duration: 1.5,
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: pinRef.current,
						start: "top 100%",
						end: "top 30%",
						toggleActions: "restart none none none",
						scrub: true,
						markers: false,
					}
				}
			);
		}
	}, { scope: containerRef });

	// Helper functions to manage ref arrays
	const addBounceRef = (el, index) => {
		if (el && !bounceRefs.current.includes(el)) {
			bounceRefs.current[index] = el;
		}
	};

	const addZoomInRef = (el, index) => {
		if (el && !zoomInRefs.current.includes(el)) {
			zoomInRefs.current[index] = el;
		}
	};


	const cards = [
		{
			img1: assets.fracture,
			img2: assets.fractureColor,
			name: "Fracture",
			bgColor: "#FEE9B4"
		},
		{
			img1: assets.microsurgery,
			img2: assets.microsurgeryColor,
			name: "Microsurgery",
			bgColor: "#B6FEB4"
		},
		{
			img1: assets.arthroscopy,
			img2: assets.arthroscopyColor,
			name: "Arthroscopy",
			bgColor: "#FCB4FE"
		},
		{
			img1: assets.fingertipInjuries,
			img2: assets.fingertipInjuriescolor,
			name: "Fingertip Injuries",
			bgColor: "#FEB4B5"
		},
		{
			img1: assets.jointReplacement,
			img2: assets.jointRepalcementColor,
			name: "Joint Replacement",
			bgColor: "#B4C0FE"
		},
		{
			img1: assets.birthDefects,
			img2: assets.birthDefectsColor,
			name: "Birth Defects",
			bgColor: "#B4FEFD"
		},
		{
			img1: assets.keyHoleWristSurgery,
			img2: assets.keyHoleWristSurgeryColor,
			name: "Key-hole wrist Surgery",
			bgColor: "#FEFAB4"
		},
	]

	const divyaCards = [
		{
			img1: assets.traumaCare,
			img2: assets.traumaCareColor,
			name: "Trauma Care",
			bgColor: "#B4C0FE"
		},
		{
			img1: assets.plasticSurgery,
			img2: assets.plasticSurgeryCOlor,
			name: "Ophthalmic Plastic Surgery",
			bgColor: "#B4FEFD"
		},
		{
			img1: assets.opthalmic,
			img2: assets.opthalmicOncologyColor,
			name: "Ophthalmic oncology",
			bgColor: "#FEB4B5"
		},
		{
			img1: assets.eyelid,
			img2: assets.eyelidColor,
			name: "Eyelid reconstructive surgeries",
			bgColor: "#FCB4FE"
		},
		{
			img1: assets.facial,
			img2: assets.facialCosmeticColor,
			name: "Facial Cosmetic procedures",
			bgColor: "#B6FEB4"
		},
		{
			img1: assets.eyeDisease,
			img2: assets.thyroidEyeDiseaseColor,
			name: "Thyroid Eye Disease",
			bgColor: "#FEE9B4"
		}
	]

	const faqs = [
		{
			ques: "Who is the best hand surgeon in Bangalore for trauma and reconstructive surgery?",
			ans: "Dr. Darshan Kumar A. Jain is a highly experienced hand surgeon in Bangalore, specializing in the treatment of hand trauma, wrist fractures, nerve injuries and reconstructive microsurgery. His expertise includes managing complex hand injuries, congenital hand deformities, and arthritis-related conditions using advanced surgical techniques. Patients suffering from severe hand injuries or conditions requiring specialized care can benefit from his precision-driven approach and personalized treatment plans."
		},
		{
			ques: "What are the best treatments for wrist fractures and ligament injuries?",
			ans: "Dr. Darshan Kumar A. Jain offers comprehensive treatment for wrist fractures and ligament injuries, ranging from non-surgical methods such as immobilization and physiotherapy to advanced surgical procedures like wrist arthroscopy and minimally invasive fixation techniques. Depending on the severity of the injury, treatments may include ligament repair, PRP injections for tissue healing and in complex cases, wrist reconstruction surgery to restore mobility and function."
		},
		{
			ques: "How is carpal tunnel syndrome treated by Dr. Darshan Kumar A. Jain?",
			ans: "Carpal tunnel syndrome is a condition caused by the compression of the median nerve in the wrist, leading to symptoms such as numbness, tingling, and weakness in the hand. Dr. Darshan Kumar A. Jain provides both non-surgical and surgical treatments for carpal tunnel syndrome. Initial management may include wrist splints, anti-inflammatory medications, and corticosteroid injections to relieve symptoms. In cases where conservative treatments are ineffective, he performs carpal tunnel release surgery, a procedure that relieves pressure on the median nerve and restores hand function."
		},
		{
			ques: "What is a trigger finger, and how is it treated?",
			ans: "Trigger finger is a condition in which one or more fingers become stuck in a bent position due to inflammation in the tendon sheath. Dr. Darshan Kumar A. Jain offers a range of treatment options, including splinting, anti-inflammatory medications, and corticosteroid injections to reduce swelling and improve finger movement. For severe cases where conservative treatments do not provide relief, he performs trigger finger release surgery, a minimally invasive procedure that restores normal finger function."
		},
		{
			ques: "How is tennis elbow and golfer’s elbow treated?",
			ans: "Tennis elbow and golfer’s elbow are common overuse injuries that cause pain and inflammation in the tendons of the elbow. Dr. Darshan Kumar A. Jain treats these conditions through a combination of physiotherapy, bracing, and medication to relieve pain and promote healing. For persistent cases, he may recommend platelet-rich plasma (PRP) injections to accelerate tissue repair. In cases where symptoms do not improve with non-surgical treatments, minimally invasive elbow surgery is performed to remove damaged tissue and restore elbow function."
		},
		{
			ques: "What are the treatments for wrist arthritis and joint pain?",
			ans: "Wrist arthritis can cause significant pain, stiffness, and loss of function. Dr. Darshan Kumar A. Jain offers a range of treatment options depending on the severity of the condition. Early-stage arthritis can be managed with medications, wrist splints, and physiotherapy. For moderate arthritis, corticosteroid injections may provide pain relief. In advanced cases, surgical interventions such as wrist fusion or joint replacement may be recommended to restore movement and reduce discomfort."
		},
		{
			ques: "Who is the best doctor for complex hand injuries and nerve repair in Bangalore?",
			ans: "Dr. Darshan Kumar A. Jain specializes in the treatment of complex hand injuries, including nerve damage and tendon injuries. He performs microsurgical nerve repair to restore sensation and function in patients who have suffered traumatic nerve injuries. He also offers tendon transfer surgeries for cases where muscle function has been compromised due to nerve damage. In cases of severe trauma, he provides advanced reconstructive surgeries, including reimplantation procedures for amputated fingers or limbs."
		},
		{
			ques: "What are the best treatments for pediatric hand deformities?",
			ans: "Dr. Darshan Kumar A. Jain provides specialized treatment for congenital hand deformities in children. Conditions such as syndactyly (fused fingers), polydactyly (extra fingers), and congenital limb abnormalities can affect a child’s hand function and appearance. He offers corrective surgeries to improve mobility and ensure proper hand development. Early intervention and customized treatment plans help children achieve better hand function and overall quality of life."
		},
		{
			ques: "What is oculoplasty, and what conditions does Dr. Divya D Sundaresh treat?",
			ans: "Oculoplasty is a specialized branch of ophthalmology that deals with surgical and non-surgical treatments for conditions affecting the eyelids, tear ducts, and orbit. Dr. Divya D Sundaresh specializes in treating eyelid drooping (ptosis), under-eye bags, tear duct blockages, orbital fractures, and tumors. She also performs cosmetic eye procedures, including blepharoplasty, to enhance the appearance of the eyes while maintaining natural function."
		},
		{
			ques: "How does Dr. Divya D Sundaresh treat droopy eyelids and under-eye bags?",
			ans: "Droopy eyelids and under-eye bags can affect both vision and facial aesthetics. Dr. Divya D Sundaresh offers blepharoplasty, a surgical procedure that removes excess skin and fat from the eyelids to restore a more youthful appearance. She also provides non-surgical options such as dermal fillers and laser treatments to reduce puffiness and improve skin texture around the eyes. Each treatment plan is customized to achieve natural and long-lasting results."
		},
		{
			ques: "What are the latest techniques for cataract surgery by Dr. Divya D Sundaresh?",
			ans: "Dr. Divya D Sundaresh performs advanced cataract surgery using the latest techniques, including laser-assisted cataract surgery and phacoemulsification. These procedures ensure precise removal of the cloudy lens and faster recovery for patients. She also offers premium intraocular lens (IOL) implants that enhance vision clarity and reduce dependency on glasses after surgery."
		},
		{
			ques: "How is a blocked tear duct treated?",
			ans: "A blocked tear duct can cause excessive tearing, discomfort, and recurrent eye infections. Dr. Divya D Sundaresh provides both non-surgical and surgical treatments based on the severity of the condition. Mild cases may be treated with tear duct massage, warm compresses, and medication. For persistent blockages, she performs a dacryocystorhinostomy (DCR) surgery, a minimally invasive procedure that creates a new drainage pathway to restore normal tear flow."
		},
		{
			ques: "What are the treatment options for eyelid tumors and eye trauma?",
			ans: "Dr. Divya D Sundaresh treats a variety of eyelid tumors, including benign and malignant growths. She performs surgical removal of tumors with careful reconstruction to maintain both function and appearance. In cases of eye trauma, she provides eyelid and orbital fracture repair to restore normal eye function and aesthetics. Her expertise in scarless eyelid surgery ensures minimal post-surgical marks while delivering effective treatment."
		},
		{
			ques: "Where can I get expert treatment for cataracts and vision correction in Bangalore",
			ans: "Dr. Divya D Sundaresh offers comprehensive eye care, including cataract surgery with premium intraocular lenses for patients looking to restore clear vision. She also provides laser-assisted vision correction procedures such as LASIK and PRK for those seeking freedom from glasses or contact lenses. Her approach focuses on precision, patient safety and long-term visual improvement."
		},
		{
			ques: "How can I book a consultation with Dr. Darshan Kumar A. Jain or Dr. Divya D Sundaresh?",
			ans: "Patients can schedule a consultation with Dr. Darshan Kumar A. Jain for hand surgery and microsurgery or Dr. Divya D Sundaresh for oculoplasty and cataract treatments at Sapiens Clinic in Malleshwaram, Bangalore. Appointments can be booked through the clinic’s official website or by calling the clinic directly. Early diagnosis and timely intervention ensure better treatment outcomes for various hand and eye conditions."
		},
	]

	return (
		<PageTransition>
			<div className='overflow-x-hidden' ref={containerRef}>
				<Homebanner learnMoreFunction={handleLearnMoreClick} />
				{/* Home */}

				<div className="px-[5%] pt-[3%] lg:px-[10%] lg:pt-5%">
					<div className="flex flex-col gap-10 items-center justify-center my-5 md:flex-row pin mt-20" ref = {pinRef}>
						<img src={assets.sapiensClinicImage} className='w-full h-auto md:w-[50%]' alt="" />
						<img src={assets.homeContainer2} className='w-full h-auto md:w-[50%]' alt="" />
					</div>

					<div className='my-10 fadeIn' ref={targetRef}>
						<div className='font-heading text-[22px lg:text-[40px] font-[700] color-black text-center '>Welcome to <span className='font-logo bg-orange-gradient w-[100%] pb-10'>Sapiens</span> Clinic</div>
						<div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center">Sapiens clinic is a center providing specialty care in Hand Surgery & Ophthalmology.<br />It is a “Center of Excellence in Hand Surgery”, with services provided by Dr. Darshan Kumar A. Jain & his team. Apart from treating Orthopedic problems, they are Super-specialized in the managing of problems of Hand, Wrist, Elbow, Shoulder & Nerves (Peripheral nerves & Brachial plexus).</div>
						<div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center">Dr. Divya Sundaresh is an Ophthalmologist, who routinely treats cataracts & super-specialized in oculoplasty, ophthalmic plastic surgery, trauma care, eyelid reconstructive surgeries, orbital surgeries, lacrimal surgeries, ophthalmic oncology, and facial cosmetic procedures.</div>
					</div>

					<div className="my-5 lg:px-5 fadex" ref={fadexRef}>
						<div className='bg-[#FFEDEDCC] rounded-2xl flex flex-col lg:flex-row gap-1 lg:gap-10 items-center lg:p-10 '>
							<div className='font-heading text-[22px] md:text-[40px] font-[700] color-black text-center w-full] lg:w-[33%]'>Advanced Care in<br /><span className='bg-orange-gradient' >Hand Surgery &Ophthalmology</span></div>
							<div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center w-full lg:w-[65%]">At Sapiens Clinic, we are committed to providing specialized medical care in hand surgery and ophthalmology in Malleshwaram, Bangalore. Our team of expert doctors ensures precise diagnosis and effective treatments for a range of conditions, from hand injuries, wrist pain, and limb surgeries to advanced eye care, including cataract surgery and retina treatments. With state-of-the-art technology and patient-centric care, we aim to be the best orthopedic and eye hospital in Bangalore</div>
						</div>
					</div>

					<div className='bounce' ref={(el) => addBounceRef(el, 1)}>
						<div className='font-heading text-[22px] md:text-[30px] font-[700] color-black text-center mt-15'>OUR DEPARTMENTS</div>
						<div className='font-heading text-[22px] md:text-[40px] font-[700] color-black text-center bg-orange-gradient mt-4'>Orthopedic</div>
						<div className='font-heading text-[20px] md:text-[30px] font-[600] color-black text-center bg-orange-gradient mt-4'>Expert Hand Surgery & Upper limb Care</div>
						<div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center">Our hand surgery and limb care department, led by Dr. Darshan Kumar A. Jain, offers expert treatment for hand injuries, wrist pain, fractures, nerve damage, and arthritis. Whether you need microsurgery for hand injuries, carpal tunnel syndrome treatment, or limb reconstruction surgery, we provide advanced medical solutions for faster recovery. As a top hand surgeon in Bangalore, Dr. Darshan Kumar A. Jain ensures that every patient receives personalized, high-quality orthopedic care.</div>
						<div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center">If you are experiencing hand pain, wrist swelling, finger cramps, or thumb pain, our clinic provides affordable hand surgery in Bangalore with a focus on precision and long-term relief. We also specialize in limb reconstruction surgery, fracture repair, and nerve injury treatments, making us a leading limb surgery clinic in Bangalore.</div>
					</div>

					<div className="mt-10 zoomIn" ref = {(el) => addZoomInRef(el, 1)}>
						<Flip cards={cards} />
					</div>

					<div className='mt-15 bounce' ref={(el) => addBounceRef(el, 2)}>
						<div className='font-heading text-[22px] md:text-[40px] font-[700] color-black text-center bg-orange-gradient mt-4'>Opthalmology</div>
						<div className='font-heading text-[20px] md:text-[30px] font-[600] color-black text-center bg-orange-gradient mt-4'>Comprehensive Eye Care & Ophthalmology Services</div>
						<div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center">Under the expertise of Dr. Divya D Sundaresh, Sapiens Clinic is recognized as a top eye hospital in Malleshwaram, Bangalore. We provide advanced ophthalmology treatments, including cataract surgery, retina care, squint eye correction and eye infection treatments. Whether you need a routine eye checkup or specialized eye surgery, our clinic ensures expert eye care services in Bangalore.</div>
						<div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center">We specialize in ophthalmology treatments for conditions like blurry vision, eye allergies and corneal disorders. Our eye specialists in Bangalore use cutting-edge techniques to deliver high-precision cataract surgery and retina treatments, ensuring improved vision and long-term eye health.</div>
					</div>

					<div className="mt-10 zoomIn" ref = {(el) => addZoomInRef(el, 2)}>
						<Flip cards={divyaCards} />
					</div>

					<div className='mt-15 flex items-center flex-col gap-1 lg:flex-row md:gap-1 mxl:gap-35'>
						<div className='flex flex-col gap-1 text-center rotate' ref={rotateRef}>
							<div className='text-[44px] md:text-[58px] font-[600] font-heading p-0 relative top-4'>Why Choose</div>
							<div className='text-[58px] md:text-[70px] bg-orange-gradient font-logo font-[400] p-0 relative bottom-4'>Sapiens Clinic?</div>
						</div>
						<ul className='ml-2 list-disc rotaterev' ref={rotateRevRef}>
							<li className='font-para font-[700] text-[12px] md:text-[16px] color-black mt-2'>Top Orthopedic & Eye Specialists in Bangalore</li>
							<li className='font-para font-[700] text-[12px] md:text-[16px] color-black mt-2'>Expert Hand Surgeon & Microsurgeon - Dr. Darshan Kumar A. Jain</li>
							<li className='font-para font-[700] text-[12px] md:text-[16px] color-black mt-2'>Best Ophthalmologist in Malleshwaram Bangalore - Dr. Divya D Sundaresh</li>
							<li className='font-para font-[700] text-[12px] md:text-[16px] color-black mt-2'>State-of-the-Art Facilities for Hand Surgery, Limb Reconstruction & Eye Care</li>
							<li className='font-para font-[700] text-[12px] md:text-[16px] color-black mt-2'>Affordable Eye & Hand Surgery in Bangalore with High Success Rates</li>
							<li className='font-para font-[700] text-[12px] md:text-[16px] color-black mt-2'>Personalized Care with Advanced Medical Technology</li>
						</ul>
					</div>
				</div>

				<div className="faqSection mt-15">
					<Faqs faqs={faqs} />
				</div>
			</div>
		</PageTransition>
	)
}

export default Home

// container
//<div className='p-5 lg:px-14'>
//
// <div className='font-heading text-[22px] md:text-[40px] font-[700] color-black text-center'>Welcome to <span>Sapiens</span> Clinic</div>
// * <div className="font-para text-[12px] md:text-[16px] color-black mt-5 text-center"></div>