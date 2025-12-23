import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Eye, Shield, Clock, Phone, Mail, CheckCircle, Award, Users, Stethoscope, Search, Activity, MapPin, Sparkles } from 'lucide-react';

const ConjunctivalCyst = () => {
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
            title: "Cyst Removal Procedure",
            subtitle: "Simple & Minimally Invasive",
            description: "Conjunctival cyst removal is typically performed as a minor outpatient procedure under local anesthesia. The cyst is carefully excised or drained using fine surgical instruments, ensuring relief from irritation while maintaining the natural contour of the eye.",
            icon: <Stethoscope className="w-8 h-8" />
        },
        {
            title: "Recovery & Follow-Up Care",
            subtitle: "Comfortable Healing with Monitoring",
            description: "Most patients return to routine activities within a short period. Mild redness or watering may occur initially and is managed with prescribed eye drops. Follow-up visits help ensure proper healing, reduced recurrence risk, and a smooth ocular surface.",
            icon: <Activity className="w-8 h-8" />
        },
    ];

    const whyChooseUs = [
        {
            title: "Specialized Ocular Surface Expertise",
            description: "Our team has extensive experience in managing conjunctival cysts using safe, minimally invasive techniques that prioritize eye comfort and visual safety.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Accurate Diagnosis Before Treatment",
            description: "Each cyst is carefully evaluated to determine whether observation or removal is required, ensuring treatment is appropriate and effective.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Complete Care from Consultation to Recovery",
            description: "From your first evaluation to post-procedure follow-up, we provide clear guidance, symptom relief, and ongoing monitoring for optimal outcomes.",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "Safe, Modern Clinical Facility",
            description: "Our clinic is equipped to perform outpatient conjunctival cyst procedures in a comfortable, hygienic environment that follows strict safety standards.",
            icon: <MapPin className="w-6 h-6" />
        },
    ];

    const results = [
        "Relief from eye irritation and discomfort",
        "Smooth, healthy ocular surface",
        "Reduced redness and foreign-body sensation",
        "Improved comfort and confidence"
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
                            <Eye className="w-4 h-4 mr-2" />
                            Conjunctival Cyst Treatment
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                                Conjunctival Cyst Treatment
                            </span>
                            <br />
                            <span className="text-2xl md:text-4xl lg:text-5xl text-slate-200">in Bangalore</span>
                        </h1>

                        <p className="text-base md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Noticed a small, fluid-filled bump on the white part of your eye? Experiencing irritation, redness, or a constant feeling that something is stuck in your eye? Our conjunctival cyst treatment focuses on accurate diagnosis and gentle, minimally invasive removal to restore comfort and protect your eye surface.
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

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Conjunctival Cyst Treatment
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> That Restores Comfort</span>
                            </h2>

                            <div className="max-w-4xl mx-auto space-y-6">
                                <div className="bg-gradient-to-r from-white to-orange-50 rounded-2xl p-6 shadow-lg border border-orange-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">What Is a Conjunctival Cyst?</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        A conjunctival cyst is a small, fluid-filled swelling on the surface of the eye. It is usually harmless but can cause discomfort if it grows or gets irritated. Anyone can develop a conjunctival cyst, especially people with eye allergies, dry eyes, contact lens use, or a history of eye irritation or surgery.
                                    </p>
                                </div>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Redness, watering, irritation, foreign-body sensation, or discomfort while blinking or wearing contact lenses. If you notice these symptoms, visit Sapiens Clinic for expert evaluation and safe treatment.
                                </p>
                            </div>
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
                                            <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold">Expert Oculoplastic Surgeon</p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Dr. Divya Sundaresh is a highly experienced oculoplastic surgeon in Bangalore with specialized expertise in diagnosing and treating conjunctival cysts and ocular surface conditions. She has successfully managed a wide range of conjunctival cyst cases, from small asymptomatic lesions to cysts causing persistent discomfort.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-6 rounded-2xl">
                                        <p className="font-medium">
                                            With years of specialized training, she delivers exceptional results that improve both eye function and cosmetic appearance.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Proven Excellence</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl sm:text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Expert</div>
                                                <div className="text-sm text-gray-600">Oculoplastic Care</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Minimally</div>
                                                <div className="text-sm text-gray-600">Invasive Approach</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Specialized</div>
                                                <div className="text-sm text-gray-600">Eye Surface Care</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Trusted</div>
                                                <div className="text-sm text-gray-600">By Patients</div>
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

            {/* Treatment Procedures Section */}
            <section id="section-surgeries" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-surgeries'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium mb-6 border border-pink-200">
                                <Shield className="w-4 h-4 mr-2" />
                                Treatment Approach
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                How Conjunctival Cyst Removal
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Is Performed</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Each conjunctival cyst is managed based on its size, location, and symptoms. The goal of treatment is complete removal with minimal disturbance to surrounding eye tissue.
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
                                        <p className="text-gray-600 leading-relaxed">{procedure.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 border border-orange-200">
                            <p className="text-center text-gray-700 font-medium">
                                All procedures and recovery protocols are planned under the guidance of Dr. Divya Sundaresh to ensure safety and optimal outcomes.
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
                                Why Choose Our
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Conjunctival Cyst Clinic</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Choosing the right specialist for conjunctival cyst treatment is essential for long-term comfort and eye health. Our clinic combines expertise, precision care, and patient-focused treatment planning.
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

            {/* Call to Action Section */}
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
                                        Transform Your Comfort with
                                        <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> Expert Conjunctival Cyst Treatment</span>
                                    </h2>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Don't let a conjunctival cyst cause constant eye irritation or discomfort. If you're experiencing redness, a visible bump on the white of the eye, or a persistent foreign-body sensation, timely treatment can restore comfort and protect your eye health. Our specialized conjunctival cyst care focuses on accurate diagnosis and safe, minimally invasive treatment to help you feel at ease again.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <p className="text-orange-200 font-medium">
                                            Dr. Divya Sundaresh and the experienced clinical team provide expert conjunctival cyst treatment with a focus on precision, safety, and long-term results. Patients across Bangalore and nearby regions have regained comfortable, irritation-free daily life through timely care and proper follow-up.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Results You Can Expect:</h3>
                                        <div className="space-y-3">
                                            {results.map((result, index) => (
                                                <div key={index} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                    <span className="text-slate-300">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button onClick={scrolltoForm} className="cursor-pointer w-full py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                                        Schedule Consultation Now
                                    </button>
                                </div>
                            </div>
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

export default ConjunctivalCyst