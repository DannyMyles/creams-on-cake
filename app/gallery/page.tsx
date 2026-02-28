'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, X, ChevronLeft, ChevronRight, 
  Heart, ZoomIn, ArrowRight
} from 'lucide-react';

// Gallery images - High-quality elegant cake images from Unsplash
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=1200",
    alt: "Elegant White Wedding Cake",
    category: "Wedding",
    title: "White Elegance",
    description: "Classic white wedding cake with sugar flowers"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=1200",
    alt: "Pink Birthday Cake",
    category: "Birthday",
    title: "Pink Paradise",
    description: "Vibrant pink birthday cake with decorative topper"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=1200",
    alt: "Floral Theme Cake",
    category: "Custom",
    title: "Garden Bloom",
    description: "Beautiful floral themed cake for spring celebrations"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200",
    alt: "Chocolate Drip Cake",
    category: "Birthday",
    title: "Chocolate Dream",
    description: "Rich chocolate cake with gold drip effect"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200",
    alt: "Pink Macaron Cake",
    category: "Wedding",
    title: "Macaron Tower",
    description: "Elegant cake adorned with pink macarons"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1200",
    alt: "Gold Tiered Cake",
    category: "Wedding",
    title: "Golden Heights",
    description: "Luxurious gold-tiered wedding cake"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8fDA%3D",
    alt: "Unicorn Cake",
    category: "Birthday",
    title: "Magical Unicorn",
    description: "Fantasy unicorn cake for children's birthday"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200",
    alt: "Berry Cake",
    category: "Custom",
    title: "Berry Bliss",
    description: "Fresh berry topped cream cake"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=1200",
    alt: "Floral Wedding Cake",
    category: "Wedding",
    title: "Rose Garden",
    description: "Wedding cake adorned with edible sugar roses"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8fDA%3D",
    alt: "Tiered Cake with Flowers",
    category: "Wedding",
    title: "Floral Cascade",
    description: "Stunning cake with cascading fresh flowers"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1678473289821-1818e3f82e9a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern Minimalist Cake",
    category: "Custom",
    title: "Modern Art",
    description: "Sleek minimalist design cake"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1609968159836-f1c80babc584?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Rustic Naked Cake",
    category: "Wedding",
    title: "Rustic Beauty",
    description: "Elegant naked cake with fresh flowers"
  },
];

const categories = ["All", "Wedding", "Birthday", "Custom"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cake-light via-cake-secondary to-cake-rose">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge mb-6">
              <Sparkles size={16} />
              <span>Our Gallery</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stunning <span className="text-gradient-cake">Creations</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore our collection of custom-designed cakes, each crafted with passion 
              and precision to make your celebration unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#80595C] from-cake-primary to-cake-accent text-white shadow-cake-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-cake-primary/10 hover:text-cake-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2 w-fit">
                      {image.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Sparkles size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">No cakes found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div 
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1 bg-cake-primary/20 text-cake-primary rounded-full text-sm font-medium mb-2">
                {lightboxImage.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-300">{lightboxImage.description}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Inspired by What You See?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let&apos;s create something equally stunning for your special celebration. Contact us today for a free consultation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Order Your Cake
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/services"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

