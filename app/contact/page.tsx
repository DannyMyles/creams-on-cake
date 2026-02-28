'use client';

import { useState } from "react";
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  Facebook, Instagram, Twitter,
  Sparkles, ArrowRight, Loader2
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      occasion: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 701 710837"],
      description: "Call us for quick inquiries",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["creamsoncakes@gmail.com"],
      description: "Send us an email anytime",
      color: "from-amber-400 to-yellow-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Along Ndwaru Road", "Off Naivasha Road"],
      description: "Visit our cake studio",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["8:00 AM - 9:00 PM", "Monday to Saturday"],
      description: "We're here to help",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const occasions = [
    "Birthday",
    "Wedding",
    "Anniversary",
    "Baby Shower",
    "Corporate Event",
    "Graduation",
    "Other"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "from-pink-500 to-rose-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "from-pink-500 to-purple-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "from-sky-400 to-sky-500" },
    { icon: FaWhatsapp, href: "https://wa.me/254701710837", label: "WhatsApp", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cake-light via-cake-secondary to-cake-rose">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge mb-6">
              <Sparkles size={16} />
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-gradient-cake">Touch</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ready to create your dream cake? We&apos;d love to hear from you! Reach out to discuss 
              your celebration and let&apos;s make something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-cake-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                ))}
                <p className="text-sm text-gray-500 mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-cake-lg self-start">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700">Message Sent Successfully!</p>
                    <p className="text-sm text-green-600">We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+254 700 000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select occasion</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell us about your cake requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-cake-lg">
                {/* Map Container */}
                <div className="relative h-[450px] w-full">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.82!2d36.83!3d-1.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f117e0e5e3a3b%3A0x1234567890abcdef!2sNdwaru%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Creams on Cakes Location Map"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                  
                  {/* Location Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 md:left-8 md:w-96">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-cake-lg border border-white/20">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-cake-primary to-cake-accent p-3 rounded-xl text-green-600 flex-shrink-0 shadow-lg">
                          <MapPin size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            Creams on Cakes
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            Along Ndwaru Road, Off Naivasha Road, Nairobi, Kenya
                          </p>
                          <a 
                            href="https://maps.google.com/?q=Ndwaru+Road+Naivasha+Road+Nairobi+Kenya" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cake-primary to-cake-accent px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                          >
                            Get Directions
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                      <div className="bg-gradient-to-br from-pink-100 to-rose-200 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Custom Designs</h4>
                        <p className="text-sm text-gray-600">Unique creations</p>
                      </div>
                    </div>
                    
                    <div className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                      <div className="bg-gradient-to-br from-amber-100 to-yellow-200 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Premium Quality</h4>
                        <p className="text-sm text-gray-600">Best ingredients</p>
                      </div>
                    </div>
                    
                    <div className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
                      <div className="bg-gradient-to-br from-emerald-100 to-teal-200 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Free Delivery</h4>
                        <p className="text-sm text-gray-600">Within the city</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Transport Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        <span>5 min from main road</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Easy access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Central location</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl p-8 shadow-cake-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Our Journey</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest cake designs, special offers, and behind-the-scenes content.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${social.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <social.icon size={18} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-gradient-to-br from-cake-primary to-cake-accent rounded-3xl p-8  shadow-cake-lg">
                <h3 className="text-xl font-bold mb-4">Need a Quick Response?</h3>
                <p className="mb-6 opacity-90">
                  For immediate assistance, reach out to us on WhatsApp. We typically respond within minutes!
                </p>
                <a
                  href="https://wa.me/254701710837?text=Hi! I'm interested in ordering a cake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-cake-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  <FaWhatsapp size={20} className="text-[#25D366]" />
                  Chat on WhatsApp 
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <Sparkles size={16} />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How far in advance should I order my cake?",
                a: "We recommend ordering at least 1-2 weeks in advance for standard cakes. For wedding cakes or complex custom designs, 2-4 weeks is ideal to ensure we have enough time to create your perfect cake."
              },
              {
                q: "Do you offer cake tastings?",
                a: "Yes! We offer complimentary tastings for wedding cakes. For other orders, you can choose from our standard flavor options which have been carefully tested and approved by our clients."
              },
              {
                q: "Do you deliver cakes?",
                a: "Yes, we offer free delivery within the city. We also offer setup at your venue to ensure your cake is displayed perfectly."
              },
              {
                q: "Can I customize the cake design?",
                a: "Absolutely! We specialize in custom designs. Simply share your vision with us during consultation, and our team will create a unique cake tailored to your preferences and celebration theme."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="group bg-gray-50 rounded-2xl p-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180">
                    <ArrowRight size={20} className="rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

