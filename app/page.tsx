'use client';

import { useState, useEffect } from 'react';
import Hero from "@/components/ui/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  Cake, Heart, Sparkles, Clock, ChevronRight, 
  ArrowRight, Star, Play, Quote, CheckCircle,
  ArrowLeft, Gift, Truck, Palette, Award
} from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah W.",
    role: "Wedding Cake Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Creams on Cakes created the most stunning wedding cake! It was absolutely perfect and tasted amazing. My guests couldn't stop talking about it. Thank you for making my special day even more memorable!",
    achievement: "Stunning Wedding Cake"
  },
  {
    id: 2,
    name: "Michael K.",
    role: "Birthday Party",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Ordered a custom themed cake for my daughter's 5th birthday. They exceeded all expectations! The design was intricate and beautiful, and the taste was divine. Highly recommend!",
    achievement: "5-Star Experience"
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Anniversary Celebration",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "The best cake I've ever had! The attention to detail is incredible, and the team is so professional. They perfectly captured what I wanted for my anniversary celebration.",
    achievement: "Perfect Design"
  }
];

// Gallery images - Elegant cakes from Unsplash
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800", alt: "Wedding Cake" },
  { src: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=800", alt: "Birthday Cake" },
  { src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800", alt: "Custom Cake" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800", alt: "Chocolate Cake" },
];

// Features data
const features = [
  {
    icon: Cake,
    title: "Custom Designs",
    description: "Every cake is uniquely designed to match your vision and celebration theme",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: Gift,
    title: "Premium Ingredients",
    description: "We use only the finest, freshest ingredients for exceptional taste and quality",
    color: "from-amber-400 to-yellow-500"
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary delivery within the city to ensure your cake arrives safely",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: Palette,
    title: "Any Theme",
    description: "From elegant weddings to fun kids' parties, we bring any theme to life",
    color: "from-purple-400 to-pink-500"
  }
];

// Process steps
const processSteps = [
  { step: "01", title: "Consultation", description: "Discuss your vision, preferences, and celebration details with our team" },
  { step: "02", title: "Design", description: "Receive a custom cake design proposal tailored to your requirements" },
  { step: "03", title: "Creation", description: "Our master bakers craft your cake with meticulous attention to detail" },
  { step: "04", title: "Delivery", description: "Your stunning cake is delivered fresh to your celebration venue" }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <Sparkles size={16} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Crafted with <span className="text-gradient-cake">Excellence</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We combine artistry, premium ingredients, and exceptional service to create cakes that are true masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-cake-light via-white to-cake-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-cake-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600"
                  alt="Cake Baking"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cake-primary to-cake-accent text-white rounded-2xl p-6 shadow-cake-lg animate-bounce-slow">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              
              {/* Stats Badge */}
              <div className="absolute -top-6 -left-6 glass rounded-2xl p-5 shadow-cake">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cake-primary/20 to-cake-accent/20 rounded-xl flex items-center justify-center">
                    <Award size={28} className="text-cake-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-sm text-gray-600">Cakes Delivered</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 badge">
                <Heart size={16} />
                <span>About Creams on Cakes</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Creating <span className="text-gradient-primary">Sweet Memories</span> Since 2019
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At Creams on Cakes, we believe every celebration deserves a stunning centerpiece. Our passion for baking and design has helped us create thousands of unforgettable cakes for birthdays, weddings, and special occasions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Each cake is crafted with love, using only the finest ingredients to ensure both beauty and taste exceed your expectations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: CheckCircle, text: "100% Fresh Ingredients" },
                  { icon: CheckCircle, text: "Custom Designs" },
                  { icon: CheckCircle, text: "Free Delivery" },
                  { icon: CheckCircle, text: "Satisfaction Guaranteed" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cake-primary to-cake-accent rounded-full flex items-center justify-center">
                      <item.icon size={14} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link 
                  href="/about"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Learn More About Us
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <Sparkles size={16} />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Cakes for <span className="text-gradient-gold">Every Occasion</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From elegant wedding cakes to fun birthday creations, we bring your dream cake to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Wedding Cakes",
                description: "Elegant, sophisticated cakes designed to be the perfect centerpiece for your special day",
                color: "from-pink-400 to-rose-500",
                image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600"
              },
              {
                icon: Cake,
                title: "Birthday Cakes",
                description: "Fun, creative cakes customized to match any theme or personality",
                color: "from-purple-400 to-pink-500",
                image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600"
              },
              {
                icon: Gift,
                title: "Custom Orders",
                description: "Unique creations for any celebration, tailored to your specific vision",
                color: "from-amber-400 to-yellow-500",
                image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="service-card group"
              >
                <div className="relative h-56 overflow-hidden service-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent`}></div>
                  <div className={`absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <service.icon size={28} className="text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      href="/services"
                      className="flex items-center gap-1 text-cake-dark font-medium hover:text-cake-primary transition-colors"
                    >
                      Learn More
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Services
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <Sparkles size={16} />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Cake in <span className="text-gradient-cake">4 Simple Steps</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From consultation to delivery, we make the process smooth and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div 
                key={index}
                className="relative text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${index === 0 ? 'from-pink-400 to-rose-500' : index === 1 ? 'from-amber-400 to-yellow-500' : index === 2 ? 'from-emerald-400 to-teal-500' : 'from-purple-400 to-pink-500'} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${index === 0 ? 'from-pink-400 to-rose-500' : index === 1 ? 'from-amber-400 to-yellow-500' : index === 2 ? 'from-emerald-400 to-teal-500' : 'from-purple-400 to-pink-500'} text-2xl font-bold rounded-full flex items-center justify-center shadow-cake transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}>
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                
                {/* Arrow connector for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%]">
                    <ChevronRight size={24} className="text-cake-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-cake-roseLight via-cake-primaryLight to-cake-rose relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-4 border border-cake-primary/20 shadow-sm"
            >
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-gray-800">Client Testimonials</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            >
              What <span className="text-gradient-primary">Clients Say</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Real stories from real celebrations made special with our cakes.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#DDAAAE] shadow-cake-lg"
            >
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cake-primary/20 rounded-full flex items-center justify-center text-cake-dark hover:bg-cake-primary/30 transition-all duration-300 hover:scale-110 border border-cake-primary/30"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cake-primary/20 rounded-full flex items-center justify-center text-cake-dark hover:bg-cake-primary/30 transition-all duration-300 hover:scale-110 border border-cake-primary/30"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>

              {/* Testimonial Content */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Quote size={48} className="text-cake-primary" />
                </div>
                
                <motion.p 
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-800 font-light italic"
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>
                
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <div className="relative w-16 h-16">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="rounded-full object-cover border-2 border-cake-primary"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="font-bold text-lg text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</div>
                  </div>
                  <div className="ml-4 bg-gradient-to-br from-cake-primary to-cake-accent px-4 py-2 rounded-xl font-bold text-sm text-white">
                    {testimonials[currentTestimonial].achievement}
                  </div>
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentTestimonial(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-cake-primary to-cake-accent w-8' 
                        : 'bg-cake-primary/30 hover:bg-cake-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <Sparkles size={16} />
              <span>Our Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Stunning <span className="text-gradient-primary">Creations</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A glimpse of our custom cake designs crafted with love and precision.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl group ${
                  index === 0 || index === 3 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 lg:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Full Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Order Your Dream Cake?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today for a free consultation. Let's create something extraordinary for your special celebration!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Quote
              </Link>
              <Link href="/gallery" className="btn-secondary inline-flex items-center gap-2">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

