import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Hand, Shield, Clock, Star, Phone, Mail, CheckCircle, Award, Users, Stethoscope, Search, Activity, MapPin, Zap, AlertCircle } from 'lucide-react';
import NewContactForm from '../services/ContactPage/NewContactForm';

const HandSwellingsPage = () => {
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

    const swellingTypes = [
        {
            title: "Ganglion Cysts",
            description: "Fluid-filled swellings commonly seen near joints or tendons of the wrist and hand. These cysts may change in size and can sometimes cause pain, stiffness, or reduced grip strength.",
            icon: <Star className="w-8 h-8" />
        },
        {
            title: "Lipomas",
            description: "Soft, slow-growing fatty lumps beneath the skin. Though usually painless and harmless, they may require removal if they enlarge or press on nearby structures.",
            icon: <Activity className="w-8 h-8" />
        },
        {
            title: "Dupuytren's Contracture",
            description: "Thickening of tissue in the palm that forms nodules or cords, gradually pulling fingers inward and affecting hand function.",
            icon: <Hand className="w-8 h-8" />
        },
        {
            title: "Epidermoid (Sebaceous) Cysts",
            description: "Small lumps under the skin caused by blocked hair follicles. These are typically painless but may become inflamed or infected.",
            icon: <AlertCircle className="w-8 h-8" />
        },
        {
            title: "Carpal Boss",
            description: "A firm, bony swelling on the back of the hand near the wrist joint. Often mistaken for a cyst, it is linked to joint stress or repetitive use.",
            icon: <Shield className="w-8 h-8" />
        },
    ];

    const treatmentOptions = [
        {
            title: "Observation",
            description: "Small, painless, benign lumps may only require monitoring",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Medications",
            description: "Anti-inflammatory medicines or injections to reduce pain and swelling",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Aspiration",
            description: "Draining fluid from cystic swellings such as ganglion cysts",
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Surgical Removal",
            description: "Recommended for recurrent, painful, growing, or function-limiting swellings",
            icon: <Shield className="w-6 h-6" />
        },
    ];

    const whyChooseUs = [
        {
            title: "Specialist Hand Surgeon",
            description: "Focused expertise in hand and upper-limb conditions with years of experience.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Precise Diagnosis",
            description: "Advanced imaging and clinical assessment for accurate identification.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Complete Care",
            description: "From observation to surgical treatment, we provide comprehensive solutions.",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "Function-Preserving Approach",
            description: "Protecting movement, sensation, and strength during every treatment.",
            icon: <Hand className="w-6 h-6" />
        },
        {
            title: "Convenient Location",
            description: "Easy access in Malleshwaram, Bangalore with flexible appointment scheduling.",
            icon: <MapPin className="w-6 h-6" />
        },
    ];

    const faqs = [
        {
            ques: "Are all lumps on the hand dangerous?",
            ans: "Most hand lumps are benign, but any persistent or growing swelling should be evaluated to rule out underlying issues."
        },
        {
            ques: "Can cysts or lumps return after removal?",
            ans: "Some swellings, like ganglion cysts, can recur. Proper treatment and follow-up help reduce recurrence risk."
        },
        {
            ques: "Do all hand swellings need surgery?",
            ans: "No. Many can be managed with observation, medication, or aspiration. Surgery is advised only when necessary."
        },
        {
            ques: "How do I know if a lump needs urgent attention?",
            ans: "Seek evaluation if the lump is painful, growing rapidly, causing numbness, or limiting hand movement."
        },
        {
            ques: "How long is recovery after surgical removal?",
            ans: "Most patients resume light activities within a few days to weeks, depending on the procedure and hand usage."
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
                            <Hand className="w-4 h-4 mr-2" />
                            Hand Swellings, Lumps & Bumps
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                                Swellings, Lumps & Bumps of the Hand
                            </span>
                            <br />
                            <span className="text-2xl md:text-4xl lg:text-5xl text-slate-200">Treatment in Bangalore</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Are hand lumps or swellings affecting your grip, movement, or confidence? Expert evaluation and treatment help restore comfort and normal hand function safely.
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
                                If you've noticed a lump, bump, or swelling on your hand or wrist, it's important not to ignore it. While many hand swellings are benign, some can interfere with movement, compress nerves, or worsen over time. At Sapiens Clinic, Bangalore, Karnataka, we offer expert assessment and personalized care for all types of hand swellings-helping you regain comfort, confidence, and normal hand use.
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
                                            <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold">Orthopedic Hand & Upper Limb Specialist</p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Dr. Darshan Kumar A. Jain is an experienced hand surgeon in Bangalore with extensive expertise in diagnosing and treating swellings, lumps, and soft-tissue conditions of the hand and wrist. Using advanced clinical evaluation and microsurgical techniques, he ensures precise treatment while preserving hand strength, sensation, and mobility.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-6 rounded-2xl">
                                        <p className="font-medium">
                                            With a patient-first approach, he focuses on treating not just the lump itself, but the underlying cause-helping patients return safely to daily activities and work.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Trusted Hand Care Expertise</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Specialist</div>
                                                <div className="text-sm text-gray-600">Hand Surgery</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Advanced</div>
                                                <div className="text-sm text-gray-600">Microsurgery</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Precision</div>
                                                <div className="text-sm text-gray-600">Diagnosis</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Patient-First</div>
                                                <div className="text-sm text-gray-600">Approach</div>
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

            {/* Common Types Section */}
            <section id="section-types" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-types'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium mb-6 border border-pink-200">
                                <AlertCircle className="w-4 h-4 mr-2" />
                                Common Conditions
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Common Types of Hand Swellings
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> We Treat</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From benign cysts to functional hand conditions, we diagnose and treat all types of hand lumps and swellings
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {swellingTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-orange-100"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {type.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnosis Section */}
            <section id="section-diagnosis" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-100 transition-all duration-1000 ${isVisible['section-diagnosis'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-gradient-to-r from-white to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 rounded-full text-sm font-medium mb-6 border border-orange-200">
                                        <Search className="w-4 h-4 mr-2" />
                                        Accurate Diagnosis
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Accurate Diagnosis for
                                        <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Hand Lumps</span>
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Diagnosis begins with a detailed clinical examination of the hand and wrist. Depending on the swelling, further tests may be advised to ensure accurate identification and appropriate treatment planning.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Diagnostic Tests</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700"><strong>X-rays</strong> to assess bony involvement</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700"><strong>Ultrasound or MRI</strong> to determine size, depth, and tissue type</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700"><strong>Aspiration or biopsy</strong> when fluid or tissue analysis is required</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-600 text-sm">
                                        These investigations help identify whether the lump is cystic, solid, inflammatory, or requires further treatment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Options Section */}
            <section id="section-treatment" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-treatment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 rounded-full text-sm font-medium mb-6 border border-orange-200">
                                <Shield className="w-4 h-4 mr-2" />
                                Treatment Solutions
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Treatment Options for
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Hand Swellings</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Treatment depends on the type of swelling, symptoms, and impact on hand function
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {treatmentOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {option.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{option.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 border border-orange-200">
                            <p className="text-center text-lg text-gray-800 font-medium">
                                Our goal is not just removal, but safe recovery with preserved hand movement and strength.
                            </p>
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
                                Why Choose Sapiens Clinic for
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Hand Lumps & Swellings?</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Finding the right hand specialist in Bangalore is essential for accurate diagnosis and effective treatment. Our clinic combines expert evaluation with personalized care to ensure the best outcomes.
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

            {/* When to Book Section */}
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
                                        When Should You See a
                                        <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> Hand Specialist?</span>
                                    </h2>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        You should consult a hand specialist if you notice any of the following:
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <p className="text-orange-200 font-medium">
                                            Early evaluation helps prevent complications and ensures timely treatment for optimal hand function.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Warning Signs:</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Restricted finger or wrist movement</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Tingling, numbness, or weakness in the hand</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                <span className="text-slate-300">Skin changes over the lump</span>
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
                            <p className="text-xl text-gray-600">Get answers to common questions about hand swellings and their treatment</p>
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

            <section ref={formRef} >
                <NewContactForm opdTiming="Mon to Sat 4:00 PM to 7:30 PM" formDescription="Don't let a hand lump or swelling affect your daily activities, work, or comfort. Whether it's painless or causing discomfort, expert evaluation can give you clarity and peace of mind." />
            </section>

            {/* Safety Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center text-center">
                        <Shield className="w-6 h-6 text-white mr-3" />
                        <p className="text-white font-semibold text-lg">
                            Expert diagnosis • Advanced microsurgery • Function-preserving treatment • Complete patient care
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
      `}</style>
        </div>
    );
};

export default HandSwellingsPage;