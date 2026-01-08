import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Hand, Shield, Clock, Phone, Mail, CheckCircle, Award, Users, Stethoscope, Search, HandHeart, Activity, MapPin, Zap, AlertTriangle } from 'lucide-react';
import NewContactForm from '../services/ContactPage/NewContactForm';

const HandInfectionPage = () => {
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
            title: "Medical Management",
            subtitle: "Early & Targeted Treatment",
            description: "In early or mild infections, treatment may include antibiotics, wound care, immobilization and close monitoring to control infection and reduce inflammation.",
            icon: <Stethoscope className="w-8 h-8" />
        },
        {
            title: "Surgical Drainage & Debridement",
            subtitle: "Precise Infection Control",
            description: "For abscesses or deep infections, surgical drainage is performed to remove pus and infected tissue. This helps reduce pain, stop infection spread, and promote faster healing while preserving vital hand structures.",
            icon: <Shield className="w-8 h-8" />
        },
        {
            title: "Recovery & Follow-Up Care",
            subtitle: "Functional Healing with Monitoring",
            description: "Recovery depends on the severity of infection. Most patients experience gradual improvement with proper care. Follow-up visits ensure infection resolution, wound healing and restoration of hand movement and strength.",
            icon: <Activity className="w-8 h-8" />
        },
    ];

    const whyChooseUs = [
        {
            title: "Specialized Hand Infection Expertise",
            description: "Extensive experience in treating superficial and deep hand infections using safe and effective techniques.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Accurate Diagnosis Before Treatment",
            description: "Careful assessment to identify the infection source and determine the most appropriate treatment approach.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Complete Care from Consultation to Recovery",
            description: "From diagnosis to healing, we provide continuous care focused on infection control and functional recovery.",
            icon: <HandHeart className="w-6 h-6" />
        },
        {
            title: "Safe, Modern Clinical Facility",
            description: "Our clinic is equipped for both medical and surgical management of hand infections, following strict safety and hygiene standards.",
            icon: <Shield className="w-6 h-6" />
        },
    ];

    const symptoms = [
        "Swelling, redness, or warmth in hand or fingers",
        "Pain that worsens or doesn't improve",
        "Pus or drainage from wound",
        "Difficulty moving fingers or stiffness",
        "Fever or signs of spreading infection"
    ];

    const faqs = [
        {
            ques : "What are the common symptoms of a hand infection?",
            ans : "Common symptoms include swelling, redness, pain, warmth, pus discharge, difficulty moving fingers, and worsening pain after an injury. Fever may occur in more severe infections."
        },
        {
            ques : "Is a hand infection serious?",
            ans : "Yes, hand infections can become serious if left untreated. They can spread quickly and lead to stiffness, loss of hand function, or permanent damage, making early treatment important."
        },
        {
            ques : "Can a hand infection heal on its own?",
            ans : "Mild infections may improve with early care, but most hand infections require medical treatment. Delaying treatment can allow the infection to worsen and spread to deeper structures."
        },
        {
            ques : "How is a hand infection diagnosed?",
            ans : "Diagnosis is based on clinical examination, medical history, and assessment of symptoms. In some cases, imaging or laboratory tests may be required to determine the depth and severity of infection."
        },
        {
            ques : "When is surgery required for a hand infection?",
            ans : "Surgery is required when there is an abscess (collection of pus), deep tissue infection, tendon involvement, joint infection, or when symptoms do not improve with medications alone."
        },
    ]

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
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Hand Infection Treatment
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                                Hand Infection Treatment
                            </span>
                            <br />
                            <span className="text-2xl md:text-4xl lg:text-5xl text-slate-200">in Bangalore</span>
                        </h1>

                        <p className="text-base md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Experiencing swelling, redness, pain, or pus in your hand or fingers? Noticing warmth, difficulty moving your fingers or worsening pain after a minor cut or injury? Our hand infection treatment focuses on early diagnosis and timely medical or surgical care to control infection, relieve pain, and restore hand function.
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
                                Expert Hand Infection Treatment
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> That Restores Function</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                                Hand infections may start small but can progress rapidly if left untreated. Infections can affect the skin, soft tissues, tendons, joints or bones, leading to severe pain, stiffness and functional impairment.
                            </p>

                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                At our Bangalore-based clinic, hand infections are carefully evaluated to identify the source, depth, and severity of infection. Based on this assessment, we provide prompt and effective treatment - ranging from medications to minor surgical procedures - to eliminate infection, prevent complications and preserve hand movement and strength.
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
                                            <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold">Expert Hand & Plastic Surgeon</p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Dr. Darshan Kumar A. Jain is a highly experienced hand and plastic surgeon in Bangalore with specialized expertise in diagnosing and treating all types of hand infections. He has successfully managed a wide range of cases, from superficial skin infections to deep-seated tendon and joint infections.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-6 rounded-2xl">
                                        <p className="font-medium">
                                            With advanced surgical training and a meticulous approach, he focuses on infection control, tissue preservation and functional recovery of the hand.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Proven Track Record</h4>
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
                                                <div className="text-sm text-gray-600">Hand Infections</div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Advanced</div>
                                                <div className="text-sm text-gray-600">Treatment Options</div>
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
                                Treatment Approac
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                How Hand Infection Treatment
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Is Performed?</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Hand infection treatment depends on the type, severity and structures involved. The primary goal is to control infection early and prevent long-term damage.
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
                                Why Choose Us?
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Why Choose Our
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Hand Infection Clinic?</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Choosing the right specialist for hand infection treatment is crucial to prevent complications and loss of hand function. Our clinic combines surgical expertise, early intervention and patient-focused care.
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
                                        Restore Hand Health with
                                        <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent"> Expert Hand Infection Treatment</span>
                                    </h2>

                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Don't ignore pain, swelling or redness in your hand. Early treatment of hand infections can prevent serious complications and permanent damage. Our specialized care ensures timely intervention, effective infection control, and safe recovery.
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <p className="text-orange-200 font-medium">
                                            Dr. Darshan Kumar A. Jain and the experienced clinical team provide comprehensive hand infection treatment with a focus on precision, safety, and long-term hand function. Patients across Bangalore and surrounding areas have regained pain-free hand movement and confidence through timely care.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">Warning Signs to Watch For:</h3>
                                        <div className="space-y-3">
                                            {symptoms.map((symptom, index) => (
                                                <div key={index} className="flex items-center">
                                                    <AlertTriangle className="w-5 h-5 text-orange-300 mr-3 flex-shrink-0" />
                                                    <span className="text-slate-300">{symptom}</span>
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

            {/* FAQ Section */}
            <section id="section-faqs" className={`py-20 bg-gradient-to-r from-orange-50 to-pink-50 transition-all duration-1000 ${isVisible['section-faqs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Frequently Asked
                                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Questions</span>
                            </h2>
                            <p className="text-xl text-gray-600">Get answers to common questions about Hand Infection surgery and treatments</p>
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

            <section ref={formRef}>
                <NewContactForm formDescription="Don’t ignore hand infections-early treatment prevents complications, restores function, and protects your daily work and comfort." />
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

export default HandInfectionPage