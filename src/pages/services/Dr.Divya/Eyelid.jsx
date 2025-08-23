// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Eye, Shield, Clock, Star, Phone, Mail, MapPin, CheckCircle, Award, Users, Zap } from 'lucide-react';

// const EyelidSurgeryPage = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [activeFaq, setActiveFaq] = useState(null);
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('[id^="section-"]');
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const procedures = [
//     {
//       title: "Ptosis Surgery",
//       subtitle: "Restore Clear Vision",
//       description: "If your upper eyelids droop and block your sight, our ptosis surgery in Bangalore, Karnataka can lift them to their proper position. This ptosis repair procedure strengthens the muscles that lift your eyelids, giving you back the full field of vision you deserve.",
//       icon: <Eye className="w-8 h-8" />
//     },
//     {
//       title: "Blepharoplasty",
//       subtitle: "Rejuvenate Your Eyes",
//       description: "Our best blepharoplasty in Bangalore, Karnataka removes excess skin and fat from your eyelids, eliminating the tired, aged appearance. This eyelid lift surgery tightens loose skin and reduces puffiness, making your eyes look brighter and more alert.",
//       icon: <Star className="w-8 h-8" />
//     },
//     {
//       title: "Entropion & Ectropion",
//       subtitle: "End Eyelid Discomfort",
//       description: "When your eyelids turn inward or outward, it causes constant irritation and tearing. Our entropion correction and ectropion treatment procedures reposition your eyelids properly, eliminating discomfort and protecting your eyes from damage.",
//       icon: <Shield className="w-8 h-8" />
//     }
//   ];

//   const whyChooseUs = [
//     {
//       title: "Proven Surgical Expertise",
//       description: "Each procedure is performed with precision using the latest techniques that minimize scarring and recovery time.",
//       icon: <Award className="w-6 h-6" />
//     },
//     {
//       title: "Personalized Treatment Plans",
//       description: "We evaluate your specific condition and goals to recommend the most effective surgical approach.",
//       icon: <Users className="w-6 h-6" />
//     },
//     {
//       title: "Comprehensive Pre and Post-Care",
//       description: "From your initial consultation through complete healing, we guide you through every step of your journey.",
//       icon: <Shield className="w-6 h-6" />
//     },
//     {
//       title: "State-of-the-Art Facility",
//       description: "Our modern surgical suite meets the highest safety standards, giving you confidence in your care.",
//       icon: <Zap className="w-6 h-6" />
//     }
//   ];

//   const faqs = [
//     {
//       ques: "How serious are eyelid diseases?",
//       ans: "Some eyelid conditions are cosmetic, while others can threaten vision or indicate systemic health issues. An early diagnosis ensures better outcomes."
//     },
//     {
//       ques: "What is entropion?",
//       ans: "Entropion is when the eyelid turns inward, causing the eyelashes to rub against the eye, leading to irritation and discomfort."
//     },
//     {
//       ques: "Are eyelid surgeries safe?",
//       ans: "Yes. When performed by experienced oculoplastic surgeons, eyelid surgeries are generally safe and offer long-lasting results."
//     },
//     {
//       ques: "Are there non-surgical treatments available?",
//       ans: "Mild cases may be managed with lubricating drops or ointments, but structural issues often require surgical correction."
//     },
//     {
//       ques: "Will surgery affect how my eyes look?",
//       ans: "Yes - in a positive way. Most procedures restore a natural and refreshed appearance, often reversing signs of aging."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-teal-500/5"></div>
//           <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
//         </div>

//         <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-8 animate-fade-in">
//               <Eye className="w-4 h-4 mr-2" />
//               Professional Eyelid Surgery
//             </div>

//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-blue-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
//                 Professional Eyelid Surgery
//               </span>
//               <br />
//               <span className="text-3xl md:text-4xl lg:text-5xl text-slate-200">in Bangalore</span>
//             </h1>

//             <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Are droopy eyelids affecting your daily life? Do your eyes look tired even when you're well-rested? Our specialized eyelid surgery can restore both your vision and confidence with proven surgical techniques.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-teal-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
//                 Schedule Consultation Today
//                 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
//               </button>
//               <button className="px-8 py-4 border-2 border-slate-300/30 text-slate-200 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Expert Treatment Section */}
//       <section id="section-expert" className={`py-20 transition-all duration-1000 ${isVisible['section-expert'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
//                 <Award className="w-4 h-4 mr-2" />
//                 Expert Care
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Expert Eyelid Treatments
//                 <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent"> That Deliver Results</span>
//               </h2>

//               <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
//                 At our clinic, we understand that eyelid problems go beyond appearance concerns. When your upper eyelids block your vision or your lower eyelids turn inward causing discomfort, you need an experienced eyelid specialist in Bangalore, Karnataka who can provide lasting solutions.
//               </p>
//             </div>

//             <div className="bg-gradient-to-r from-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div className="space-y-6">
//                   <div className="flex items-center">
//                     <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl flex items-center justify-center mr-6">
//                       <Users className="w-8 h-8 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900">Dr. Divya Sundaresh</h3>
//                       <p className="text-teal-700 font-semibold">Skilled Oculoplastic Surgeon</p>
//                     </div>
//                   </div>

//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     Dr. Divya Sundaresh, our skilled oculoplastic surgeon in Bangalore, Karnataka has helped thousands of patients regain clear vision and youthful appearance through precise eyelid procedures.
//                   </p>

//                   <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white p-6 rounded-2xl">
//                     <p className="font-medium">
//                       With years of specialized training, she delivers exceptional results that improve both function and aesthetics.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
//                     <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Thousands of Successful Surgeries</h4>
//                     <div className="grid grid-cols-2 gap-4 text-center">
//                       <div class="bg-white rounded-2xl p-4 shadow-lg">
//                         <div class="text-2xl font-bold text-teal-600">5000+</div>
//                         <div class="text-sm text-gray-600">Happy Patients</div>
//                       </div>
//                       <div class="bg-white rounded-2xl p-4 shadow-lg">
//                         <div class="text-2xl font-bold text-blue-700">15+</div>
//                         <div class="text-sm text-gray-600">Years Experience</div>
//                       </div>
//                       <div class="bg-white rounded-2xl p-4 shadow-lg">
//                         <div class="text-2xl font-bold text-green-600">98%</div>
//                         <div class="text-sm text-gray-600">Success Rate</div>
//                       </div>
//                       <div class="bg-white rounded-2xl p-4 shadow-lg">
//                         <div class="text-2xl font-bold text-slate-700">24/7</div>
//                         <div class="text-sm text-gray-600">Support</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full opacity-80 animate-pulse"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Advanced Surgeries Section */}
//       <section id="section-surgeries" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-surgeries'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
//                 <Shield className="w-4 h-4 mr-2" />
//                 Advanced Procedures
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Advanced Eyelid Surgeries
//                 <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent"> We Perform</span>
//               </h2>

//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Our comprehensive surgical treatments address all types of eyelid conditions with precision and care.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {procedures.map((procedure, index) => (
//                 <div 
//                   key={index}
//                   className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100"
//                   style={{ animationDelay: `${index * 200}ms` }}
//                 >
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>

//                   <div className="relative z-10">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <div className="text-white">
//                         {procedure.icon}
//                       </div>
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{procedure.title}</h3>
//                     <p className="text-teal-700 font-semibold mb-4">{procedure.subtitle}</p>
//                     <p className="text-gray-600 leading-relaxed">{procedure.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section id="section-whychoose" className={`py-20 bg-gradient-to-r from-blue-50 to-indigo-100 transition-all duration-1000 ${isVisible['section-whychoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
//                 <Award className="w-4 h-4 mr-2" />
//                 Why Choose Us
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Why Choose Our
//                 <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Eyelid Surgery Center</span>
//               </h2>

//               <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//                 Finding the right eyelid doctor in Bangalore, Karnataka is crucial for achieving the results you want. Our surgical center combines advanced technology with personalized care to ensure your safety and satisfaction.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {whyChooseUs.map((item, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <div className="text-white">
//                       {item.icon}
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Transform Your Life Section */}
//       <section id="section-transform" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-transform'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
//               <div className="absolute inset-0">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
//               </div>

//               <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-6">
//                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//                     Transform Your Life with
//                     <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> Professional Eyelid Surgery</span>
//                   </h2>

//                   <p className="text-xl text-blue-100 leading-relaxed">
//                     Don't let eyelid problems limit your activities or confidence any longer. Whether you're struggling with vision obstruction, constant eye irritation, or appearance concerns, our specialized surgical treatments can provide the solution you've been seeking.
//                   </p>

//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                     <p className="text-blue-100 font-medium">
//                       Dr. Divya Sundaresh and our experienced team are ready to help you achieve clearer vision and renewed confidence. We've successfully treated patients from across Bangalore, Karnataka and surrounding areas, helping them return to their active lifestyles.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                     <h3 className="text-2xl font-bold mb-4 text-orange-300">Results You Can Expect:</h3>
//                     <div className="space-y-3">
//                       <div className="flex items-center">
//                         <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
//                         <span className="text-blue-100">Restored clear vision and field of sight</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
//                         <span className="text-blue-100">Elimination of eye irritation and discomfort</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
//                         <span className="text-blue-100">Youthful, refreshed appearance</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
//                         <span className="text-blue-100">Boosted confidence and quality of life</span>
//                       </div>
//                     </div>
//                   </div>

//                   <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
//                     Start Your Transformation Today
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="section-faqs" className={`py-20 bg-gradient-to-r from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible['section-faqs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Frequently Asked 
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
//               </h2>
//               <p className="text-xl text-gray-600">Get answers to common questions about eyelid surgery and treatments</p>
//             </div>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
//                 >
//                   <button
//                     className="w-full p-6 text-left flex items-center justify-between group"
//                     onClick={() => setActiveFaq(activeFaq === index ? null : index)}
//                   >
//                     <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                       {faq.ques}
//                     </h3>
//                     <ChevronDown 
//                       className={`w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${
//                         activeFaq === index ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>

//                   <div className={`overflow-hidden transition-all duration-300 ${
//                     activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                   }`}>
//                     <div className="px-6 pb-6">
//                       <div className="h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-4"></div>
//                       <p className="text-gray-600 leading-relaxed">{faq.ans}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-20 bg-gradient-to-r from-slate-50 via-teal-50 to-blue-50 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-200/20 to-slate-200/20 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative z-10 container mx-auto px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-8">
//                 <div className="text-center lg:text-left">
//                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                     Your Trusted Specialists in
//                     <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent"> Hands & Eyes</span>
//                   </h2>

//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     We offer advanced care for hand, upper limb, and eye conditions with a focus on precision and personalized treatment. Combining expert diagnostics, surgical expertise and a patient-first approach, our goal is to restore comfort, function and confidence for every individual we treat.
//                   </p>
//                 </div>

//                 <div className="grid md:grid-cols-3 gap-6">
//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
//                     <Phone className="w-10 h-10 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                     <h3 className="font-bold text-gray-900 mb-2">Phone Number</h3>
//                     <p className="text-teal-700 font-semibold">+91 78925 56378</p>
//                   </div>

//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
//                     <Mail className="w-10 h-10 text-blue-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                     <h3 className="font-bold text-gray-900 mb-2">Email Us Here</h3>
//                     <p className="text-blue-700 font-semibold text-sm">sapiensclinic@gmail.com</p>
//                   </div>

//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
//                     <Clock className="w-10 h-10 text-slate-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                     <h3 className="font-bold text-gray-900 mb-2">Evening OPD</h3>
//                     <p className="text-slate-700 font-semibold text-sm">Mon to Sat 4:00 PM to 7:30 PM</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Form */}
//               <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>

//                 <div className="relative z-10">
//                   <div className="text-center mb-8">
//                     <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
//                       <Mail className="w-4 h-4 mr-2" />
//                       Book Appointment
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Book an Appointment</h3>
//                     <p className="text-gray-600">Don't let eyelid problems hold you back. Whether it's interfering with daily activities, work or confidence, expert help is just a call away.</p>
//                   </div>

//                   <form className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div className="relative group">
//                         <input
//                           type="text"
//                           placeholder="First Name*"
//                           required
//                           className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-teal-300"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="text"
//                           placeholder="Last Name"
//                           className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-teal-300"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div className="relative group">
//                         <input
//                           type="tel"
//                           placeholder="Phone Number*"
//                           required
//                           className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-teal-300"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="email"
//                           placeholder="Email"
//                           className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-teal-300"
//                         />
//                       </div>
//                     </div>

//                     <div className="relative group">
//                       <textarea
//                         placeholder="Message*"
//                         required
//                         rows="4"
//                         className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 text-gray-900 resize-none bg-gray-50 focus:bg-white group-hover:border-teal-300"
//                       ></textarea>
//                     </div>

//                     <button
//                       type="submit"
//                       className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
//                     >
//                       Submit Now
//                       <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Safety Banner */}
//       <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-6">
//         <div className="container mx-auto px-6">
//           <div className="flex items-center justify-center text-center">
//             <Shield className="w-6 h-6 text-white mr-3" />
//             <p className="text-white font-semibold text-lg">
//               Proven surgical techniques • Advanced technology • Experienced specialists • Comprehensive care
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .bg-orange-gradient {
//           background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EyelidSurgeryPage;


import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Eye, Shield, Clock, Star, Phone, Mail, MapPin, CheckCircle, Award, Users, Zap } from 'lucide-react';

import { useForm } from 'react-hook-form';

const EyelidSurgeryPage = () => {
    const [activeTab, setActiveTab] = useState(0);
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
            title: "Ptosis Surgery",
            subtitle: "Restore Clear Vision",
            description: "If your upper eyelids droop and block your sight, our ptosis surgery in Bangalore, Karnataka can lift them to their proper position. This ptosis repair procedure strengthens the muscles that lift your eyelids, giving you back the full field of vision you deserve.",
            icon: <Eye className="w-8 h-8" />
        },
        {
            title: "Blepharoplasty",
            subtitle: "Rejuvenate Your Eyes",
            description: "Our best blepharoplasty in Bangalore, Karnataka removes excess skin and fat from your eyelids, eliminating the tired, aged appearance. This eyelid lift surgery tightens loose skin and reduces puffiness, making your eyes look brighter and more alert.",
            icon: <Star className="w-8 h-8" />
        },
        {
            title: "Entropion & Ectropion",
            subtitle: "End Eyelid Discomfort",
            description: "When your eyelids turn inward or outward, it causes constant irritation and tearing. Our entropion correction and ectropion treatment procedures reposition your eyelids properly, eliminating discomfort and protecting your eyes from damage.",
            icon: <Shield className="w-8 h-8" />
        }
    ];

    const whyChooseUs = [
        {
            title: "Proven Surgical Expertise",
            description: "Each procedure is performed with precision using the latest techniques that minimize scarring and recovery time.",
            icon: <Award className="w-6 h-6" />
        },
        {
            title: "Personalized Treatment Plans",
            description: "We evaluate your specific condition and goals to recommend the most effective surgical approach.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Comprehensive Pre and Post-Care",
            description: "From your initial consultation through complete healing, we guide you through every step of your journey.",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "State-of-the-Art Facility",
            description: "Our modern surgical suite meets the highest safety standards, giving you confidence in your care.",
            icon: <Zap className="w-6 h-6" />
        }
    ];

    const faqs = [
        {
            ques: "How serious are eyelid diseases?",
            ans: "Some eyelid conditions are cosmetic, while others can threaten vision or indicate systemic health issues. An early diagnosis ensures better outcomes."
        },
        {
            ques: "What is entropion?",
            ans: "Entropion is when the eyelid turns inward, causing the eyelashes to rub against the eye, leading to irritation and discomfort."
        },
        {
            ques: "Are eyelid surgeries safe?",
            ans: "Yes. When performed by experienced oculoplastic surgeons, eyelid surgeries are generally safe and offer long-lasting results."
        },
        {
            ques: "Are there non-surgical treatments available?",
            ans: "Mild cases may be managed with lubricating drops or ointments, but structural issues often require surgical correction."
        },
        {
            ques: "Will surgery affect how my eyes look?",
            ans: "Yes - in a positive way. Most procedures restore a natural and refreshed appearance, often reversing signs of aging."
        }
    ];


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        mode: 'onChange'
    });

    // Indian phone number validation regex
    const indianPhoneRegex = /^(\+91|91)?[6789]\d{9}$/;

    const onSubmit = async (data) => {
        try {
            // Simulate form submission
            console.log('Form Data:', data);
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Appointment request submitted successfully!');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    };

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
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-orange-200 text-sm mb-8 animate-fade-in border border-orange-300/30 mt-20">
                            <Eye className="w-4 h-4 mr-2" />
                            Professional Eyelid Surgery
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                                Professional Eyelid Surgery
                            </span>
                            <br />
                            <span className="text-3xl md:text-4xl lg:text-5xl text-slate-200">in Bangalore</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Are droopy eyelids affecting your daily life? Do your eyes look tired even when you're well-rested? Our specialized eyelid surgery can restore both your vision and confidence with proven surgical techniques.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button onClick={scrolltoForm} className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                                Schedule Consultation Today
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button onClick={scrolltoContaier2} className="px-8 py-4 border-2 border-orange-300/30 text-orange-200 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 backdrop-blur-sm transition-all duration-300">
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

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Expert Eyelid Treatments
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> That Deliver Results</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                                At our clinic, we understand that eyelid problems go beyond appearance concerns. When your upper eyelids block your vision or your lower eyelids turn inward causing discomfort, you need an experienced eyelid specialist in Bangalore, Karnataka who can provide lasting solutions.
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
                                            <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold">Skilled Oculoplastic Surgeon</p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Dr. Divya Sundaresh, our skilled oculoplastic surgeon in Bangalore, Karnataka has helped thousands of patients regain clear vision and youthful appearance through precise eyelid procedures.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-6 rounded-2xl">
                                        <p className="font-medium">
                                            With years of specialized training, she delivers exceptional results that improve both function and aesthetics.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Thousands of Successful Surgeries</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">5000+</div>
                                                <div className="text-sm text-gray-600">Happy Patients</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">15+</div>
                                                <div className="text-sm text-gray-600">Years Experience</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">98%</div>
                                                <div className="text-sm text-gray-600">Success Rate</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">24/7</div>
                                                <div className="text-sm text-gray-600">Support</div>
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

            {/* Advanced Surgeries Section */}
            <section id="section-surgeries" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-surgeries'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium mb-6 border border-pink-200">
                                <Shield className="w-4 h-4 mr-2" />
                                Advanced Procedures
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Advanced Eyelid Surgeries
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> We Perform</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our comprehensive surgical treatments address all types of eyelid conditions with precision and care.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
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
                                        <p className="text-gray-600 leading-relaxed">{procedure.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="section-whychoose" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-100 transition-all duration-1000 ${isVisible['section-whychoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 rounded-full text-sm font-medium mb-6 border border-rose-200">
                                <Award className="w-4 h-4 mr-2" />
                                Why Choose Us
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Why Choose Our
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Eyelid Surgery Center</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Finding the right eyelid doctor in Bangalore, Karnataka is crucial for achieving the results you want. Our surgical center combines advanced technology with personalized care to ensure your safety and satisfaction.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whyChooseUs.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100 group"
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

            {/* Transform Your Life Section */}
            <section id="section-transform" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-transform'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                                        Transform Your Life with
                                        <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> Professional Eyelid Surgery</span>
                                    </h2>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Don't let eyelid problems limit your activities or confidence any longer. Whether you're struggling with vision obstruction, constant eye irritation, or appearance concerns, our specialized surgical treatments can provide the solution you've been seeking.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <p className="text-orange-200 font-medium">
                                            Dr. Divya Sundaresh and our experienced team are ready to help you achieve clearer vision and renewed confidence. We've successfully treated patients from across Bangalore, Karnataka and surrounding areas, helping them return to their active lifestyles.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Results You Can Expect:</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Restored clear vision and field of sight</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Elimination of eye irritation and discomfort</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Youthful, refreshed appearance</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Boosted confidence and quality of life</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={scrolltoForm} className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                                        Start Your Transformation Today
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
                            <p className="text-xl text-gray-600">Get answers to common questions about eyelid surgery and treatments</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <button
                                        className="w-full p-6 text-left flex items-center justify-between group"
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

            {/* Contact Form Section */}
            <section className="py-20 bg-gradient-to-r from-orange-50 via-pink-50 to-rose-50 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <div className="text-center lg:text-left">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                        Your Trusted Specialists in
                                        <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Hands & Eyes</span>
                                    </h2>

                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        We offer advanced care for hand, upper limb, and eye conditions with a focus on precision and personalized treatment. Combining expert diagnostics, surgical expertise and a patient-first approach, our goal is to restore comfort, function and confidence for every individual we treat.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-orange-100">
                                        <Phone className="w-10 h-10 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="font-bold text-gray-900 mb-2">Phone Number</h3>
                                        <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold">+91 78925 56378</p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-orange-100">
                                        <Mail className="w-10 h-10 text-pink-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="font-bold text-gray-900 mb-2">Email Us Here</h3>
                                        <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold text-sm">sapiensclinic@gmail.com</p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-orange-100">
                                        <Clock className="w-10 h-10 text-rose-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="font-bold text-gray-900 mb-2">Evening OPD</h3>
                                        <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold text-sm">Mon to Sat 4:00 PM to 7:30 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-orange-100 relative overflow-hidden" ref={formRef}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full -translate-y-16 translate-x-16"></div>

                                <div className="relative z-10">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 rounded-full text-sm font-medium mb-4 border border-orange-200">
                                            <Mail className="w-4 h-4 mr-2" />
                                            Book Appointment
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Book an Appointment</h3>
                                        <p className="text-gray-600">Don't let eyelid problems hold you back. Whether it's interfering with daily activities, work or confidence, expert help is just a call away.</p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <input
                                                    {...register('firstName', {
                                                        required: 'First name is required',
                                                        minLength: {
                                                            value: 2,
                                                            message: 'First name must be at least 2 characters'
                                                        },
                                                        pattern: {
                                                            value: /^[A-Za-z\s]+$/,
                                                            message: 'First name should contain only letters'
                                                        }
                                                    })}
                                                    type="text"
                                                    placeholder="First Name*"
                                                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300 ${errors.firstName
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-orange-500'
                                                        }`}
                                                />
                                                {errors.firstName && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                                                )}
                                            </div>
                                            <div className="relative group">
                                                <input
                                                    {...register('lastName', {
                                                        pattern: {
                                                            value: /^[A-Za-z\s]*$/,
                                                            message: 'Last name should contain only letters'
                                                        }
                                                    })}
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300 ${errors.lastName
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-orange-500'
                                                        }`}
                                                />
                                                {errors.lastName && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <input
                                                    {...register('phoneNumber', {
                                                        required: 'Phone number is required',
                                                        pattern: {
                                                            value: indianPhoneRegex,
                                                            message: 'Please enter a valid Indian phone number (e.g., +919876543210 or 9876543210)'
                                                        }
                                                    })}
                                                    type="tel"
                                                    placeholder="Phone Number* (+91 or 10 digits starting with 6,7,8,9)"
                                                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300 ${errors.phoneNumber
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-orange-500'
                                                        }`}
                                                />
                                                {errors.phoneNumber && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
                                                )}
                                            </div>
                                            <div className="relative group">
                                                <input
                                                    {...register('email', {
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: 'Please enter a valid email address'
                                                        }
                                                    })}
                                                    type="email"
                                                    placeholder="Email"
                                                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300 ${errors.email
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-orange-500'
                                                        }`}
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <textarea
                                                {...register('message', {
                                                    required: 'Message is required',
                                                    minLength: {
                                                        value: 10,
                                                        message: 'Message must be at least 10 characters long'
                                                    },
                                                    maxLength: {
                                                        value: 500,
                                                        message: 'Message must not exceed 500 characters'
                                                    }
                                                })}
                                                placeholder="Message* (Describe your condition or concerns)"
                                                rows="4"
                                                className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900 resize-none bg-gray-50 focus:bg-white group-hover:border-orange-300 ${errors.message
                                                    ? 'border-red-500 focus:border-red-500'
                                                    : 'border-gray-200 focus:border-orange-500'
                                                    }`}
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleSubmit(onSubmit)}
                                            disabled={isSubmitting}
                                            className={`group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl font-bold text-lg transform transition-all duration-300 shadow-xl flex items-center justify-center gap-3 ${isSubmitting
                                                ? 'opacity-75 cursor-not-allowed'
                                                : 'hover:from-orange-600 hover:to-pink-700 hover:scale-105'
                                                }`}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit Now'}
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default EyelidSurgeryPage;