'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Cake, Star, Users, Clock, ChevronRight, 
  ArrowRight, Sparkles, Heart, Gift, Truck,
  CheckCircle, MapPin, Phone, Mail
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    if (heroRef.current) {
      const nextSection = heroRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
      }
    }
  };

  const stats = [
    { 
      value: '1000+', 
      label: 'Cakes Delivered',
      icon: Cake,
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50'
    },
    { 
      value: '5+', 
      label: 'Years Experience', 
      icon: Star,
      color: 'from-amber-400 to-yellow-500',
      bgColor: 'bg-amber-50'
    },
    { 
      value: '4.9', 
      label: 'Customer Rating', 
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-rose-50',
      suffix: '★'
    }
  ];

  const features = [
    { icon: Cake, label: 'Custom Designs', color: 'from-pink-400 to-rose-500' },
    { icon: Gift, label: 'Premium Ingredients', color: 'from-amber-400 to-yellow-500' },
    { icon: Truck, label: 'Free Delivery', color: 'from-emerald-400 to-teal-500' },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cake-light via-cake-secondary to-cake-rose">
      
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-pink-200/40 to-transparent blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-[30%] right-[-15%] w-[45%] h-[45%] rounded-full bg-gradient-to-bl from-amber-200/40 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-rose-200/30 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cake-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-cake-accent/5 to-transparent"></div>
      </div>

      {/* Floating Elements with enhanced animations */}
      <div className="absolute top-20 right-12 animate-float">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cake-primary/30 to-cake-accent/30 rounded-2xl blur-xl"></div>
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl shadow-cake-lg border border-white/50 flex items-center justify-center">
            <Cake size={36} className="text-cake-primary" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-40 left-8 animate-float-delayed">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cake-accent/30 to-cake-primary/30 rounded-2xl blur-xl"></div>
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl shadow-gold border border-white/50 flex items-center justify-center">
            <Gift size={32} className="text-cake-accent" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 left-8 animate-bounce-slow">
        <div className="w-4 h-4 rounded-full bg-cake-primary/50 shadow-lg shadow-cake-primary/50"></div>
      </div>
      
      <div className="absolute bottom-32 right-16 animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <div className="w-5 h-5 rounded-full bg-cake-accent/50 shadow-lg shadow-cake-accent/50"></div>
      </div>
      
      <div className="absolute top-1/4 right-1/3 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
        <div className="w-3 h-3 rounded-full bg-pink-400/40"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-5'}`}>
              
              {/* Enhanced Badge with glow */}
              <div className="inline-flex">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cake-primary to-cake-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cake-primary/15 to-cake-accent/15 text-cake-primaryDark px-6 py-3 rounded-full text-sm font-bold backdrop-blur-md border border-cake-primary/30">
                    <Sparkles size={18} className="animate-pulse" />
                    <span>Premium Custom Cakes</span>
                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight font-heading">
                <span className="block" style={{ animationDelay: '0.1s' }}>
                  Stunning Cakes for
                </span>
                <span className="block text-gradient-cake" style={{ animationDelay: '0.2s' }}>
                  Every Celebration
                </span>
                <span className="block text-cake-dark" style={{ animationDelay: '0.3s' }}>
                  Made with Love
                </span>
              </h1>

              {/* Description with better typography */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed" style={{ animationDelay: '0.3s' }}>
                Crafting exquisite custom cakes for birthdays, weddings, and special occasions. Each creation is a masterpiece designed to make your celebration unforgettable.
              </p>

              {/* Promotional Banner - Enhanced Styling */}
              <div className="flex flex-wrap items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 border border-emerald-400 rounded-xl shadow-lg" style={{ animationDelay: '0.32s' }}>
                <div className="p-2 bg-white/20 rounded-lg">
                  <Truck size={20} className="text-white" />
                </div>
                <span className="text-base font-bold text-white">Free delivery on all orders</span>
                <span className="text-xs text-emerald-100 bg-white/20 px-3 py-1 rounded-full font-semibold animate-pulse">Limited Time Offer</span>
              </div>

              {/* Feature highlights */}
              <div className="flex flex-wrap gap-4" style={{ animationDelay: '0.35s' }}>
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${feature.color}`}>
                      <feature.icon size={14} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Why Choose Us - Key Benefits - Enhanced Styling */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/60 shadow-cake-lg" style={{ animationDelay: '0.38s' }}>
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-cake-primary" />
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100">
                    <CheckCircle size={20} className="text-cake-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">100% Eggless Options</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                    <CheckCircle size={20} className="text-cake-accent flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Same-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <CheckCircle size={20} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Custom Design Experts</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-100">
                    <CheckCircle size={20} className="text-violet-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Fresh Ingredients Only</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2" style={{ animationDelay: '0.4s' }}>
                <Link 
                  href="/contact" 
                  className="group relative btn-primary flex items-center justify-center gap-2.5 text-lg px-10 py-4.5 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    <Cake size={22} className="group-hover:animate-bounce" />
                    Order Your Cake
                    <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
                <Link 
                  href="/gallery" 
                  className="btn-gold flex items-center justify-center gap-2.5 text-lg px-10 py-4.5 group"
                >
                  View Gallery
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/60" style={{ animationDelay: '0.5s' }}>
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`group relative p-5 rounded-2xl transition-all duration-500 cursor-pointer ${
                      false 
                        ? 'bg-white shadow-cake-lg scale-105' 
                        : 'bg-white/60 hover:bg-white hover:shadow-cake'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon size={24} className="text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 flex items-baseline gap-0.5">
                        <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                        <span className="text-sm text-cake-primary font-bold">{stat.suffix || '+'}</span>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-4 pt-4" style={{ animationDelay: '0.6s' }}>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-md">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900">1000+</span>
                  <span className="text-gray-600"> happy customers</span>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced card design */}
          <div className="lg:col-span-5 xl:col-span-5 relative">
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cake-primary/20 to-cake-accent/20 rounded-3xl blur-xl"></div>
              
              {/* Main image card */}
              <div className="relative card-modern overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 rounded-2xl shadow-cake-lg">
                <div className="relative h-[350px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
                    alt="Luxury Wedding Cake"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
                  
                  {/* Enhanced floating info cards */}
                  <div className="absolute top-5 right-5 glass-dark rounded-2xl p-4 shadow-cake-lg transform hover:scale-105 transition-all duration-300 animate-bounce-slow">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl shadow-lg">
                        <Cake size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">Custom Designs</div>
                        <div className="text-sm text-gray-300">Any Theme</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-5 left-5 glass-dark rounded-2xl p-4 shadow-cake-lg transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl shadow-lg">
                        <Truck size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">Free Delivery</div>
                        <div className="text-sm text-gray-300">Within City</div>
                      </div>
                    </div>
                  </div>

                  {/* Rating overlay */}
                  <div className="absolute bottom-5 right-5 glass-dark rounded-2xl p-4 transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.7s' }}>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl">
                        <Heart size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">4.9</div>
                        <div className="text-xs text-gray-300">Client Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quality badge */}
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-cake-primary to-cake-accent text-white rounded-2xl p-5 shadow-cake-lg transform hover:scale-105 transition-all duration-300 animate-bounce-slow z-20">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Star size={32} />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Premium</div>
                    <div className="text-sm text-white/90">Quality</div>
                  </div>
                </div>
              </div>

              {/* Ingredients badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-cake-lg transform hover:scale-105 transition-all duration-300 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl shadow-lg">
                    <Gift size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">Fresh Ingredients</div>
                  </div>
                </div>
              </div>

              {/* Decorative gradient orb */}
              <div className="absolute -z-10 top-1/2 -right-16 w-32 h-32 bg-gradient-to-br from-cake-primary/20 to-cake-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to explore"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-7 h-11 border-2 border-cake-primary/40 rounded-full flex items-start justify-center p-1.5 bg-white/50 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gradient-to-b from-cake-primary to-cake-accent rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;

