'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  MessageCircle, Facebook, Instagram, Twitter,
  Sparkles, ArrowRight, Loader2
} from 'lucide-react';

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
    { icon: MessageCircle, href: "https://wa.me/254701710837", label: "WhatsApp", color: "from-green-400 to-emerald-500" },
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
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-cake-lg">
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
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl p-6 shadow-cake-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
                <div className="relative h-64 bg-gradient-to-br from-cake-light to-cake-secondary rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
                    alt="Location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-cake-dark/40 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-cake-lg">
                      <MapPin size={32} className="mx-auto text-cake-primary mb-2" />
                      <p className="font-semibold text-gray-900">Creams on Cakes</p>
                      <p className="text-sm text-gray-600">Along Ndwaru Road, Off Naivasha Road</p>
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
              <div className="bg-gradient-to-br from-cake-primary to-cake-accent rounded-3xl p-8 text-white shadow-cake-lg">
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
                  <MessageCircle size={20} />
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
                a: "Yes, we offer free delivery within the city for orders above KES 10,000. For smaller orders, we can arrange delivery at an additional cost. We also offer setup at your venue."
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

