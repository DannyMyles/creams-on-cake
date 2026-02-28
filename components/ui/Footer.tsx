'use client';

import Link from 'next/link';
import { 
  Phone, Mail, MapPin, 
  Facebook, Twitter, Linkedin, Instagram, 
  Clock, Sparkles, CheckCircle, Send,
  Cake, ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(-1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'from-pink-500 to-rose-500', label: 'Facebook' },
    { icon: Twitter, href: '#', color: 'from-sky-400 to-sky-500', label: 'Twitter' },
    { icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-700', label: 'LinkedIn' },
    { icon: Instagram, href: '#', color: 'from-pink-500 to-purple-500', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Birthday Cakes', href: '/services' },
    { name: 'Wedding Cakes', href: '/services' },
    { name: 'Custom Orders', href: '/services' },
    { name: 'Cupcakes', href: '/services' },
    { name: 'Cake Delivery', href: '/services' },
  ];

  const features = [
    { icon: Cake, text: 'Premium Ingredients', count: '100%' },
    { icon: Sparkles, text: 'Custom Designs', count: '500+' },
    { icon: Clock, text: 'Happy Clients', count: '1000+' },
    { icon: CheckCircle, text: 'On-Time Delivery', count: '99%' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 rounded-full bg-pink-400/30 animate-float"></div>
      <div className="absolute top-20 right-20 w-8 h-8 rounded-full bg-amber-400/30 animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/3 w-4 h-4 rounded-full bg-white/20 animate-float"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 border border-white/10 p-8 mb-16"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-600/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full translate-x-16 translate-y-16"></div>
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles size={16} />
                <span>Sweet Updates</span>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">
                Stay Updated with Our Latest Cakes
              </h3>
              <p className="text-gray-300 max-w-xl">
                Subscribe to our newsletter for exclusive cake designs, special offers, and baking tips delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full sm:w-80 px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative flex items-center gap-2">
                  {subscribed ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Subscribe</span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-amber-400/30 rounded-full blur-xl"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-pink-400 to-amber-400 rounded-full flex items-center justify-center shadow-cake-lg">
                  <Cake size={32} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent font-display">
                  Creams on Cakes
                </h3>
                <p className="text-sm text-gray-400">Premium Cake Designs</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Creating stunning custom cakes for birthdays, weddings, and special occasions. Every cake is crafted with love, premium ingredients, and meticulous attention to detail.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center gap-2">
                    <feature.icon size={16} className="text-pink-400" />
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </div>
                  <div className="text-xl font-bold mt-1">{feature.count}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold relative">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-pink-400 to-amber-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(-1)}
                >
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${isHovered === index ? 'from-pink-400 to-amber-400' : 'from-gray-600 to-gray-600'} transition-all duration-300`}></div>
                    <span className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold relative">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-amber-400 to-pink-400 rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  onMouseEnter={() => setIsHovered(index + 10)}
                  onMouseLeave={() => setIsHovered(-1)}
                >
                  <Link 
                    href={service.href} 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <ChevronRight size={14} className={`${isHovered === index + 10 ? 'text-pink-400' : 'text-gray-600'} transition-colors`} />
                    <span className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold relative">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-pink-400 to-amber-400 rounded-full"></span>
              Contact Us
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-2 bg-pink-400/20 rounded-lg">
                  <Phone size={18} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <a href="tel:+254701710837" className="font-medium hover:text-pink-400 transition-colors">
                    +254 701 710837
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-all duration-300">
                <div className="p-2 bg-amber-400/20 rounded-lg">
                  <MapPin size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Visit Us</p>
                  <p className="font-medium text-sm">Along Ndwaru Road,<br/>Off Naivasha Road</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-2 bg-pink-400/20 rounded-lg">
                  <Clock size={18} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Opening Hours</p>
                  <p className="font-medium text-sm">Mon - Sat: 8AM - 9PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow Our Journey</p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} <span className="text-white font-semibold">Creams on Cakes</span>. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Terms & Conditions
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-pink-400">♥</span>
              <span>in Kenya</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

