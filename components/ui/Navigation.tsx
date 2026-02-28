'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, Clock, Menu, X, Cake, Star
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cake-dark via-cake-darkLight to-cake-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cake-primary/20 to-cake-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        <div className="container mx-auto px-4 relative z-10 text-[#80595C]">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
            <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-2 mb-2 md:mb-0">
              <div className="flex items-center gap-2 group">
                <div className="p-1.5 bg-cake-primary/20 rounded-lg group-hover:bg-cake-primary/30 transition-colors">
                  <Phone size={14} className="text-cake-primary" />
                </div>
                <a 
                  href="tel:+254701710837"
                  className="hover:text-cake-primary transition-colors duration-300"
                >
                  +254 701 710837
                </a>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-2 group">
                <div className="p-1.5 bg-cake-accent/20 rounded-lg group-hover:bg-cake-accent/30 transition-colors">
                  <Mail size={14} className="text-cake-accent" />
                </div>
                <a 
                  href="mailto:creamsoncakes@gmail.com"
                  className="hover:text-cake-accent transition-colors duration-300"
                >
                  creamsoncakes@gmail.com
                </a>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-2 text-cake-accent font-medium">
                <div className="relative">
                  <Clock size={14} />
                  <span className="absolute inset-0 animate-pulse bg-cake-accent rounded-full opacity-50"></span>
                </div>
                8:00 AM - 9:00 PM (Mon-Sat)
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} className="text-cake-accent fill-cake-accent" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-cake' 
            : 'bg-white shadow-soft'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cake-primary/30 to-cake-accent/30 rounded-full blur-xl"></div>
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cake-primary to-cake-accent rounded-full flex items-center justify-center shadow-cake-lg">
                  <Cake size={24} className="text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gradient-cake font-display">
                  Creams on Cakes
                </span>
                <span className="text-xs text-gray-500 -mt-1">Premium Cake Designs</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 font-medium transition-all duration-300 relative ${
                    isActiveLink(item.href)
                      ? 'text-cake-primary'
                      : 'text-gray-800 hover:text-cake-primary'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cake-primary to-cake-accent transition-all duration-300 ${
                      isActiveLink(item.href) ? 'w-full' : 'w-0 hover:w-full'
                    }`}></span>
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary flex items-center gap-2 hover:shadow-cake-lg transform hover:-translate-y-1"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-cake-dark animate-rotate" />
              ) : (
                <Menu size={24} className="text-cake-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {navigation.main.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-0">
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-4 font-semibold transition-all duration-300 ${
                        isActiveLink(item.href) ? 'text-cake-primary' : 'text-gray-800 hover:text-cake-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;

