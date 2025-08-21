import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Eye, Hand, Shield, Clock, Star, Phone, Mail, CheckCircle, Award, Users, Zap, Stethoscope, Search, HandHeart, Activity, MapPin } from 'lucide-react';

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
            title: "Non-Surgical Treatments",
            subtitle: "",
            description: `
                <ul class = "list-disc ml-10" >
                    <li>Wrist splints to relieve night-time numbness and pain.</li>
                    <li>Targeted physiotherapy to restore mobility and reduce nerve pressure.</li>
                    <li>Steroid injections for quick inflammation relief.</li>
                    <li>Lifestyle adjustments to prevent symptoms from returning.</li>
                </ul>
                `,
            icon: <Star className="w-8 h-8" />
        },
        {
            title: "Carpal Tunnel Surgery",
            subtitle: "",
            description: `
                <p>If non-surgical options are not enough, Dr. Darshan Kumar A. Jain performs minimally invasive carpal tunnel release surgery to free the nerve and eliminate symptoms. This modern approach offers:</p>
                <ul class = "list-disc mt-5 ml-10">
                    <li>Smaller incisions</li>
                    <li>Less pain after surgery</li>
                    <li>Faster recovery times</li>
                </ul>
            `,
            icon: <Shield className="w-8 h-8" />
        },
    ];

    const whyChooseUs = [
        {
            title: "Expert Surgeon",
            description: "Expert care from a leading orthopedic hand surgeon with years of experience in treating carpal tunnel syndrome.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Precise Diagnosis",
            description: "Advanced diagnostic tools to pinpoint the exact cause and severity of your condition.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Comprehensive Care",
            description: "Complete treatment options, from non-surgical care to minimally invasive carpal tunnel release surgery.",
            icon: <HandHeart className="w-6 h-6" />
        },
        {
            title: "Faster Recovery",
            description: "Quick recovery plans so you can return to work and activities sooner.",
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Easy Access",
            description: "Convenient Bangalore, Karnataka location with easy appointment scheduling.",
            icon: <MapPin className="w-6 h-6" />
        },
    ];

    const faqs = [
        {
            ques: "Will this go away on its own?",
            ans: "Early cases sometimes settle down with rest and splinting, but if symptoms persist beyond a few weeks, it’s best to get it evaluated."
        },
        {
            ques: "How long does recovery take after surgery?",
            ans: "Many return to light activities within 1-2 weeks. Full recovery and strength may take a few months, depending on your hand use."
        },
        {
            ques: "Is the injection painful?",
            ans: "A steroid injection is quick and tolerable - most patients describe it as a pinch. Relief can be almost immediate or take a few days."
        },
        {
            ques: "Can I use a mouse and keyboard after treatment?",
            ans: "Yes, though some ergonomic adjustments may be recommended. Our team will guide you through supportive tools and hand positioning."
        },
        {
            ques: "How do I know if I need surgery?",
            ans: "If symptoms are severe, or you’ve lost sensation or hand strength, surgery may be the best long-term option. We’ll help you decide based on your condition, not just a report."
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-100">
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
                            <Hand className="w-4 h-4 mr-2" />
                            Carpal Tunnel Syndrome
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                                Carpal Tunnel Syndrome Treatment
                            </span>
                            <br />
                            <span className="text-2xl md:text-4xl lg:text-5xl text-slate-200"> in Bangalore, Karnataka</span>
                        </h1>

                        {/* <p className="text-[10px] md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            If numbness, tingling, or wrist pain is making it hard to work, sleep, or enjoy life, it’s time to visit a carpal tunnel specialist. At Sapiens Clinic, Bangalore, Karnataka, Dr. Darshan Kumar A. Jain offers advanced carpal tunnel syndrome treatment to give you fast relief, restore hand strength, and prevent permanent nerve damage.
                        </p> */}

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

                            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Expert Eyelid Treatments
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> That Deliver Results</span>
                            </h2> */}

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                                If numbness, tingling, or wrist pain is making it hard to work, sleep, or enjoy life, it’s time to visit a carpal tunnel specialist. At Sapiens Clinic, Bangalore, Karnataka, Dr. Darshan Kumar A. Jain offers advanced carpal tunnel syndrome treatment to give you fast relief, restore hand strength, and prevent permanent nerve damage.
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
                                            <h3 className="text-2xl font-bold text-gray-900">Dr. Darshan Kumar A. Jain</h3>
                                            <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold">Orthopedic Hand & Microsurgery Specialist</p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Dr. Darshan Kumar A. Jain, an experienced orthopedic hand surgeon in Bangalore, Karnataka, has successfully treated countless patients with complex hand conditions, including carpal tunnel syndrome. With a strong focus on precision and advanced microsurgical techniques, he helps patients regain strength, mobility, and confidence in their daily lives.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-6 rounded-2xl">
                                        <p className="font-medium">
                                            With years of expertise in hand surgery, he is committed to delivering exceptional results that restore both function and comfort.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Thousands of Successful Surgeries</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl sm:text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">5000+</div>
                                                <div className="text-sm text-gray-600">Happy Patients</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">15+</div>
                                                <div className="text-sm text-gray-600">Years Experience</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Specialist</div>
                                                <div className="text-sm text-gray-600">Hand & Wrist Care</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Trusted</div>
                                                <div className="text-sm text-gray-600">By Families</div>
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
                                Carpal Tunnel Treatment Services
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> We Provide</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                At our clinic, we offer comprehensive solutions personalized to your condition:
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
                                        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: procedure.description }}></p>
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
                                Why Choose Sapiens Clinic for Your
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Carpal Tunnel Treatment?</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Finding the right eyelid doctor in Bangalore, Karnataka is crucial for achieving the results you want. Our surgical center combines advanced technology with personalized care to ensure your safety and satisfaction.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        When to
                                        <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> Book an Appointment</span>
                                    </h2>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Don’t wait until symptoms get worse. You should see a carpal tunnel specialist in Bangalore, Karnataka  if you have:
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <p className="text-orange-200 font-medium">
                                            These are signs your nerve is under constant pressure and early treatment can save you from long-term damage.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Results You Can Expect:</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Persistent tingling or numbness in your fingers</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Wrist pain that disturbs sleep</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Weak grip or frequent dropping of objects</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Pain spreading from wrist to forearm</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={scrolltoForm} className="cursor-pointer w-full py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                                        Book an Appointment
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
                            <div ref={formRef} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
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

                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    placeholder="First Name*"
                                                    required
                                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number*"
                                                    required
                                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <textarea
                                                placeholder="Message*"
                                                required
                                                rows="4"
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 resize-none bg-gray-50 focus:bg-white group-hover:border-orange-300"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                                        >
                                            Submit Now
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