import React, { useState, useRef } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const NewContactForm = ({heading, description, opdTiming, formDescription}) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstname.trim()) {
      newErrors.firstname = 'First name is required';
    }
    
    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "service_b8jvt4d";
      const templateId = "template_c06irsg";
      const publicKey = "YOUR_PUBLIC_KEY"; // Add your EmailJS public key

      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: formData
        })
      });

      if (response.ok) {
        // Show success message
        alert("Email sent successfully!");

        // Google Ads conversion tracking
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-11415701805/V_4RCJK49-QaEK2St8Mq',
            value: 1.0,
            currency: 'INR',
            event_callback: function () {
              console.log('Google Ads conversion tracked');
            }
          });
          console.log("form submitted");
        }

        // Reset form
        setFormData({
          firstname: '',
          lastname: '',
          phonenumber: '',
          email: '',
          message: ''
        });
        setErrors({});
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
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
                    <p className="bg-gradient-to-r from-orange-600 to-pink-700 bg-clip-text text-transparent font-semibold text-sm">{opdTiming}</p>
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
                    <p className="text-gray-600">{formDescription}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <input
                          type="text"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          placeholder="First Name*"
                          className={`w-full px-4 py-4 border-2 ${errors.firstname ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300`}
                        />
                        {errors.firstname && <span className="text-xs text-red-400 mt-1 block">{errors.firstname}</span>}
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          placeholder="Last Name"
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <input
                          type="tel"
                          name="phonenumber"
                          value={formData.phonenumber}
                          onChange={handleChange}
                          placeholder="Phone Number*"
                          className={`w-full px-4 py-4 border-2 ${errors.phonenumber ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300`}
                        />
                        {errors.phonenumber && <span className="text-xs text-red-400 mt-1 block">{errors.phonenumber}</span>}
                      </div>
                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 bg-gray-50 focus:bg-white group-hover:border-orange-300"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message*"
                        rows="4"
                        className={`w-full px-4 py-4 border-2 ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-gray-900 resize-none bg-gray-50 focus:bg-white group-hover:border-orange-300`}
                      ></textarea>
                      {errors.message && <span className="text-xs text-red-400 mt-1 block">{errors.message}</span>}
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Now'}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewContactForm;