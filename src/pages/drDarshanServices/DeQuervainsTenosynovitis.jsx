import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Hand, Shield, Clock, Star, Phone, Mail, CheckCircle, Award, Users, Stethoscope, Search, HandHeart, Activity, MapPin, Zap } from 'lucide-react';
import NewContactForm from '../services/ContactPage/NewContactForm';

const DeQuervainPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    const formRef = useRef();
    const learnmoreRef = useRef();

    const scrolltoForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrolltoContainer2 = () => {
        learnmoreRef.current?.scrollIntoView({ behavior: "smooth" });
    };

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
            title: "Non-Surgical Management",
            description: `
                <ul class="list-disc ml-6 space-y-2">
                    <li>Thumb and wrist splinting to allow tendon rest</li>
                    <li>Anti-inflammatory medications for pain and swelling relief</li>
                    <li>Activity modification to reduce repetitive strain</li>
                    <li>Ultrasound-guided steroid injections for targeted inflammation control</li>
                    <li>Hand therapy with guided stretching and strengthening exercises</li>
                </ul>
            `,
            icon: <HandHeart className="w-8 h-8" />
        },
        {
            title: "Surgical Care (When Required)",
            description: `
                <p class="mb-4">If symptoms persist despite adequate non-surgical care, a minor day-care surgical procedure may be recommended.</p>
                <p class="mb-3">This involves releasing the tight tendon sheath, allowing smooth tendon movement and lasting pain relief.</p>
                <p class="font-semibold text-orange-700">Recovery is usually quick, with gradual return to normal hand use.</p>
            `,
            icon: <Shield className="w-8 h-8" />
        },
    ];

    const whyChooseUs = [
        {
            title: "Specialist Hand Surgeon",
            description: "Focused expertise in wrist and tendon conditions with years of experience.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Precise Diagnosis",
            description: "Evidence-based clinical assessment including specialized tests like the Finkelstein test.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Complete Care",
            description: "From conservative management to surgery if needed-all under one roof.",
            icon: <HandHeart className="w-6 h-6" />
        },
        {
            title: "Function-Preserving",
            description: "Treatment focused on maintaining mobility, grip strength, and hand function.",
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Convenient Location",
            description: "Easy access in Malleshwaram, Bangalore with flexible appointment scheduling.",
            icon: <MapPin className="w-6 h-6" />
        },
    ];

    const symptoms = [
        "Persistent pain on the thumb side of the wrist",
        "Pain while gripping, lifting, or twisting movements",
        "Swelling or tenderness near the wrist base",
        "Reduced thumb or wrist movement",
        "Symptoms interfering with work, childcare, or daily activities"
    ];

    const faqs = [
        {
            ques: "What is De Quervain's Tenosynovitis?",
            ans: "It is an inflammation of the tendons on the thumb side of the wrist, causing pain during movement or gripping."
        },
        {
            ques: "Is this condition serious?",
            ans: "It is not dangerous, but untreated inflammation can worsen and interfere with hand function."
        },
        {
            ques: "Can it be treated without surgery?",
            ans: "Yes. Most cases improve with splinting, medications, injections, and activity modification."
        },
        {
            ques: "How long does recovery take?",
            ans: "Many patients notice improvement within weeks of treatment. Surgical recovery is usually quick with gradual return to normal use."
        },
        {
            ques: "Can De Quervain's come back?",
            ans: "Recurrence is uncommon with proper treatment and activity adjustments, though early care reduces risk significantly."
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
                            Thumb-Side Wrist Pain Relief
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                                De Quervain's Tenosynovitis
                            </span>
                            <br />
                            <span className="text-2xl md:text-4xl lg:text-5xl text-slate-200">Treatment in Bangalore</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Pain along the thumb side of your wrist shouldn't disrupt your daily life. Get expert evaluation and evidence-based treatment to relieve pain and restore movement.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button onClick={scrolltoForm} className="group px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer">
                                Schedule Consultation
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button onClick={scrolltoContainer2} className="px-8 py-4 border-2 border-orange-300/30 text-orange-200 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 backdrop-blur-sm transition-all duration-300 cursor-pointer">
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
                                If wrist pain near the base of your thumb is making simple actions uncomfortable, it's important not to ignore it. While early symptoms may seem mild, untreated De Quervain's Tenosynovitis can worsen over time and limit hand function. At Sapiens Clinic, Bangalore, Karnataka, we offer precise diagnosis and personalized care for thumb-side wrist pain-helping patients regain comfort, strength, and confidence in daily hand use.
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
                                        Dr. Darshan Kumar A. Jain is an experienced hand and upper-limb specialist in Bangalore with focused expertise in diagnosing and treating wrist and thumb tendon conditions such as De Quervain's Tenosynovitis. Using detailed clinical assessment and advanced non-surgical and surgical techniques, he ensures accurate treatment while preserving wrist mobility, grip strength, and hand function.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-6 rounded-2xl">
                                        <p className="font-medium">
                                            With a patient-first approach, treatment is planned around the individual's daily needs-whether related to work, caregiving, or lifestyle-aiming for safe recovery and long-term relief.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Trusted Hand Care Specialist</h4>
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">5000+</div>
                                                <div className="text-sm text-gray-600">Patients Treated</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">15+</div>
                                                <div className="text-sm text-gray-600">Years Experience</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Expert</div>
                                                <div className="text-sm text-gray-600">Hand Surgeon</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Complete</div>
                                                <div className="text-sm text-gray-600">Care Approach</div>
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

            {/* What is De Quervain's Section */}
            <section id="section-about" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium mb-6 border border-pink-200">
                                <Zap className="w-4 h-4 mr-2" />
                                Understanding the Condition
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                What Is
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> De Quervain's Tenosynovitis?</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 border border-orange-100 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Condition</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    De Quervain's Tenosynovitis occurs when the tendons running along the thumb side of the wrist become inflamed and irritated. These tendons pass through a narrow tunnel (sheath), and swelling within this space leads to pain, tenderness, and restricted movement.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    This condition can make routine tasks-such as lifting objects, writing, cooking, or holding a child-painful and difficult.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-8 border border-rose-100 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Causes</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Frequent lifting of infants (common in new mothers)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Prolonged mouse use or typing in desk jobs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Repetitive gripping or wrist-intensive activities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Fitness routines with wrist loading</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Hormonal changes (more common in women aged 30–50)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Options Section */}
            <section id="section-treatments" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-50 transition-all duration-1000 ${isVisible['section-treatments'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium mb-6 border border-pink-200">
                                <Shield className="w-4 h-4 mr-2" />
                                Treatment Services
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Treatment Options for
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> De Quervain's Tenosynovitis</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Treatment is planned based on symptom severity, duration, and impact on daily activities
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {procedures.map((procedure, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-orange-100"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <div className="text-white">
                                                {procedure.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{procedure.title}</h3>
                                        <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: procedure.description }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="section-whychoose" className={`py-20 bg-white transition-all duration-1000 ${isVisible['section-whychoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 rounded-full text-sm font-medium mb-6 border border-rose-200">
                                <Award className="w-4 h-4 mr-2" />
                                Why Choose Us
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Why Choose
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Sapiens Clinic?</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Specialist care focused on relieving pain, restoring movement, and helping you return to normal activities comfortably
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseUs.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100 group"
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
            <section id="section-when" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-50 transition-all duration-1000 ${isVisible['section-when'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                                        When Should You
                                        <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> See a Specialist?</span>
                                    </h2>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Early evaluation helps control inflammation and prevents long-term discomfort. Don't let thumb-side wrist pain limit your daily activities.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <p className="text-orange-200 font-medium">
                                            These symptoms indicate it's time to consult a hand specialist for proper diagnosis and treatment.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Watch for These Signs:</h3>
                                        <div className="space-y-3">
                                            {symptoms.map((symptom, index) => (
                                                <div key={index} className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-300">{symptom}</span>
                                                </div>
                                            ))}
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
                                        <p className="text-xl text-gray-600">Get answers to common questions Carpal Tunnel Syndrome and treatments</p>
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
            
                        
                        <section  ref={formRef} >
                                <NewContactForm formDescription="Don’t let wrist and thumb pain limit daily tasks, work, or comfort-expert care for De Quervain’s is just a call away." />
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
            
            export default DeQuervainPage;