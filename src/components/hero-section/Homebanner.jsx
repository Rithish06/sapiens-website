import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';

const HomeBanner = ({learnMoreFunction}) => {
	const slidesRef = useRef([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = 2;
	const intervalTime = 4000;

	const showSlide = (newIndex) => {
		const current = slidesRef.current[currentSlide];
		const next = slidesRef.current[newIndex];

		// Fade out current
		gsap.to(current, {
			opacity: 0,
			duration: 1,
		});

		// Fade in next
		gsap.to(next, {
			opacity: 1,
			duration: 1,
		});

		setCurrentSlide(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (currentSlide + 1) % totalSlides;
			showSlide(nextIndex);
		}, intervalTime);

		return () => clearInterval(interval);
	}, [currentSlide]);

	useEffect(() => {
		slidesRef.current.forEach((slide, idx) => {
			gsap.set(slide, { opacity: idx === 0 ? 1 : 0 });
		});
	}, []);

	return (
		<div className="relative w-screen overflow-hidden">
			{/* Slides Container */}
			<div className="relative w-full">
				{/* Slide 1 */}
				<div
					ref={(el) => (slidesRef.current[0] = el)}
					className="relative w-full"
				>
					<div className="relative">
						<img
							src={assets.homeBannerDesktop}
							className="hidden md:block w-full h-auto md:mt-0 lg:mt-0 md:mb-25"
							alt="Slide 1"
						/>
						<img
							src={assets.homeBannerBgMobile}
							className="md:hidden w-full h-auto s:h-[500px] mt-10"
							alt="Slide 1 Mobile"
						/>
						<div className="absolute inset-0 flex flex-col justify-start gap-2 lg:gap-1.5 mxl:gap-2 s:mt-[10%] px-2 md:px-5 lg:px-10 z-20 top-[10%] md:top-1 lg:top-[12%] mxl:top-[20%]">
							<h2 className="text-[16px] font-heading font-[700] s:text-[19px] md:text-[22px] lg:text-[28px] mxl:text-[44px] text-white">
								Dr. Darshan Kumar A. Jain
							</h2>
							<div className="text-[10px] font-heading font-[600] s:text-[12px] md:text-[16px] lg:text-[18px] mxl:text-[24px] text-white">
								MBBS, MS, FNB, MNAMS, PGDHHM
							</div>
							<div className="font-para text-[8px] text-white w-[230px] s:w-[280px] lg:w-1/2 s:text-[9px] lg:text-[12px] mxl:text-[16px]  mt-2">
								Dr. Darshan Kumar A. Jain is a highly experienced hand surgeon in Malleshwaram, Bangalore, specializing in the treatment of various upper limb conditions. With expertise in managing hand injuries, wrist pain, elbow issues, brachial nerve conditions and shoulder-related problems, Dr. Darshan Kumar A. Jain is committed to delivering advanced care for patients seeking effective solutions.
							</div>
							<div className="font-para text-[8px] text-white w-[230px] s:w-[280px] lg:w-1/2 s:text-[9px] lg:text-[12px] mxl:text-[16px] mt-2">
								As a board-certified Hand Surgery Specialist, Dr. Darshan Kumar A. Jain provides personalized treatment plans that focus on improving mobility, reducing pain, and enhancing overall quality of life. Whether you're dealing with finger pain, hand cramps, or require microsurgery for hand injuries, Dr. Darshan Kumar A. Jain ensures comprehensive care designed to meet your specific needs.
							</div>
							<div className="flex gap-6 mt-3 md:mt-2 lg:mt-4 mxl:mt-5">
								<Link to="/dr-darshan-kumar-a-jain" className="bg-[#EF7F1A] px-3 py-2 text-[12px] rounded-sm font-para font-[800] lg:text-[14px] lg:px-4 lg:py-2.5 text-white cursor-pointer">
									Learn More
								</Link>
								<Link to="/contact-clinic-bangalore">
									<button className="bg-white px-3 py-2 text-[12px] rounded-sm font-para font-[800] lg:text-[14px] lg:px-4 lg:py-2.5 text-[#001F3F] cursor-pointer">
										Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
					<img src={assets.drdarshan} className="w-full h-auto md:hidden" alt="" />
				</div>

				{/* Slide 2 */}
				<div
					ref={(el) => (slidesRef.current[1] = el)}
					className="absolute top-0 left-0 w-full opacity-0"
				>
					<div className="relative">
						<img
							src={assets.drDivyaHomeBanner}
							className="hidden md:block w-full h-auto md:mt-0 lg:mt-0"
							alt="Slide 1"
						/>
						<img
							src={assets.homeBannerBgMobile}
							className="md:hidden w-full h-auto s:h-[500px]"
							alt="Slide 1 Mobile"
						/>
						<div className="absolute inset-0 flex flex-col justify-start gap-2 lg:gap-1.5 mxl:gap-2 s:mt-[10%] px-2 md:px-5 lg:px-10 z-20 top-[10%] md:top-1 lg:top-[12%] mxl:top-[20%]">
							<h2 className="text-[16px] font-heading font-[700] s:text-[19px] md:text-[22px] lg:text-[28px] mxl:text-[44px] text-white">
								Dr. Divya Sundaresh
							</h2>
							<div className="text-[10px] font-heading font-[600] s:text-[12px] md:text-[16px] lg:text-[18px] mxl:text-[24px] text-white">
								DO, DNB, FICO, FRCS (Glas), FAICO (Oculoplasty),
							</div>
							<div className="font-para text-[8px] text-white w-[230px] s:w-[280px] lg:w-1/2 s:text-[9px] lg:text-[12px] mxl:text-[16px]  mt-2">
								Dr. Divya D Sundaresh, an experienced ophthalmologist in Bangalore, specializes in orbit surgery, oculoplasty and facial aesthetics. As a leading eye specialist in Malleshwaram, she also excels in treating conditions like cataracts, eye injuries, squint eye and eye allergies.
							</div>
							<div className="font-para text-[8px] text-white w-[230px] s:w-[280px] lg:w-1/2 s:text-[9px] lg:text-[12px] mxl:text-[16px] mt-2">
								Whether you need a comprehensive eye checkup, eye test, or require advanced treatments like cataract surgery or retina surgery, Dr. Divya D Sundaresh provides expert care to improve vision and maintain eye health.
							</div>
							<div className="flex gap-6 mt-3 lg:mt-4 mxl:mt-6">
								<Link to="/dr-divya-sundaresh" className="bg-[#EF7F1A] px-3 py-2 text-[12px] rounded-sm font-para font-[800] lg:text-[14px] lg:px-4 lg:py-2.5 text-white cursor-pointer">
									Learn More
								</Link>
								<Link to="/contact-clinic-bangalore">
									<button className="bg-white px-3 py-2 text-[12px] rounded-sm font-para font-[800] lg:text-[14px] lg:px-4 lg:py-2.5 text-[#001F3F] cursor-pointer">
										Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
					<img src={assets.drDivyaHomePageBannerImage} className="w-full h-auto md:hidden" alt="" />
				</div>

				{/* Single Pagination Container */}
				<div className="absolute -mt-26 w-full left-1/2 -translate-x-1/2 flex gap-2 z-50 justify-end md:justify-center pr-10 md:relative md:bottom-6 lg:bottom-10"
					style={{
						top: 'calc(25% + 300px)', // Adjust based on your content height
						'@media (minWidth: 768px)': {
							top: 'unset',
							bottom: '18%'
						}
					}}>
					{[0, 1].map((i) => (
						<button
							key={i}
							onClick={() => showSlide(i)}
							className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === i ? "bg-yellow-500 scale-125" : "bg-white/50"
								}`}
						></button>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;





// import React from 'react';
// import { assets } from '../../assets/assets';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
//import 'swiper/css/pagination';
// import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';

// const Homebanner = () => {
//   return (
//     <div className="relative">
//       <Swiper
//         spaceBetween={30}
//         effect={'creative'}
//         grabCursor={true}
//         loop={true}
//         speed={600}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//           waitForTransition: true,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectCreative, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div className='relative w-full'>
//             {/* Content and Image */}
//             <div className='w-full z-3 lg:absolute'>
//               <div className='w-full h-full'>
//                 <img src={assets.homeBannerDesktop} className='hidden md:block w-full h-auto' alt="" />
//                 <img src={assets.homeBannerBgMobile} className='relative top-8 w-full h-[475px] md:hidden' alt="" />
//               </div>
//               <div className="absolute top-23 left-2 w-full h-full flex flex-col">
//                 <div className='font-heading text-[19px] text-white mt-2'>Dr. Darshan Kumar A. Jain</div>
//                 <div className='font-heading text-[12px] text-white mt-2'>MBBS, MS, FNB, MNAMS, PGDHHM</div>
//                 <div className='font-para text-[9px] text-white w-[76%] mt-2'>Dr. Darshan Kumar A. Jain is a highly experienced hand surgeon...</div>
//                 <div className='font-para text-[9px] text-white w-[76%] mt-2'>As a board-certified Hand Surgery Specialist...</div>
//                 <div className="w-full flex justify-between">
//                   <div className="flex gap-6 mt-6">
//                     <button className='bg-[#EF7F1A] px-4 py-2 rounded-sm text-white'>Learn More</button>
//                     <button className='bg-white px-4 py-2 rounded-sm text-[#001F3F]'>Contact Us</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:relative lg:flex lg:justify-end lg:items-end lg:h-[99vh]">
//               <img src={assets.drdarshan} className='w-full h-auto lg:w-[50%] lg:h-[75%] md:hidden' alt="" />
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           {/* Copy similar layout or create another content */}
//           <div className='relative w-full'>
//             <div className='relative w-full'>
//             {/* Content and Image */}
//             <div className='w-full z-3 lg:absolute'>
//               <div className='w-full h-full'>
//                 <img src={assets.homeBannerDesktop} className='hidden md:block w-full h-auto' alt="" />
//                 <img src={assets.homeBannerBgMobile} className='relative top-8 w-full h-[475px] md:hidden' alt="" />
//               </div>
//               <div className="absolute top-23 left-2 w-full h-full flex flex-col">
//                 <div className='font-heading text-[19px] text-white mt-2'>Dr. Darshan Kumar</div>
//                 <div className='font-heading text-[12px] text-white mt-2'>MBBS, MS, FNB, MNAMS, PGDHHM</div>
//                 <div className='font-para text-[9px] text-white w-[76%] mt-2'>Dr. Darshan Kumar A. Jain is a highly experienced hand surgeon...</div>
//                 <div className='font-para text-[9px] text-white w-[76%] mt-2'>As a board-certified Hand Surgery Specialist...</div>
//                 <div className="w-full flex justify-between">
//                   <div className="flex gap-6 mt-6">
//                     <button className='bg-[#EF7F1A] px-4 py-2 rounded-sm text-white'>Learn More</button>
//                     <button className='bg-white px-4 py-2 rounded-sm text-[#001F3F]'>Contact Us</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:relative lg:flex lg:justify-end lg:items-end lg:h-[99vh]">
//               <img src={assets.drdarshan} className='w-full h-auto lg:w-[50%] lg:h-[75%] md:hidden' alt="" />
//             </div>
//           </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Homebanner;
