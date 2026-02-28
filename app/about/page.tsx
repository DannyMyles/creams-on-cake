'use client';

import Image from "next/image";
import Link from "next/link";
import { 
  Cake, Heart, Sparkles, Clock, Award, Users, 
  ArrowRight, Star, Truck, Palette
} from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years Experience', icon: Clock },
  { value: '1000+', label: 'Cakes Delivered', icon: Cake },
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '4.9', label: 'Average Rating', icon: Star },
];

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cake is crafted with passion and attention to detail, ensuring it becomes the highlight of your celebration."
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "We use only the finest, freshest ingredients to create cakes that taste as amazing as they look."
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Your vision is our command. We bring any theme or design to life with our expert cake artistry."
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Free delivery within the city ensures your cake arrives safely and on time for your special event."
  }
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cake-light via-cake-secondary to-cake-rose">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge mb-6">
              <Heart size={16} />
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Creating <span className="text-gradient-cake">Sweet Memories</span> Since 2019
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Creams on Cakes, we believe every celebration deserves a stunning centerpiece. 
              Our passion for baking and design has helped us create thousands of unforgettable cakes 
              for birthdays, weddings, and special occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-cake-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600"
                  alt="Cake making"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cake-primary to-cake-accent text-white rounded-2xl p-6 shadow-cake-lg">
                <div className="text-3xl font-bold">2019</div>
                <div className="text-sm">Established</div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Creams on Cakes began as a small home-based bakery in 2019 with a simple mission: 
                to create stunning, delicious cakes that make every celebration extra special. 
                What started as a passion project quickly grew into one of the most sought-after 
                cake studios in the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, our team of master bakers and cake designers continues to push the boundaries 
                of cake artistry, combining traditional baking techniques with modern design innovations. 
                Each cake that leaves our studio is a unique masterpiece, crafted with meticulous 
                attention to detail and made with the finest ingredients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We&apos;re proud to have been part of over 1000 celebrations, creating sweet memories 
                that last a lifetime. Our commitment to quality, creativity, and customer satisfaction 
                remains at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-cake-dark via-cake-darkLight to-cake-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                  <stat.icon size={32} className="text-cake-primary" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <Award size={16} />
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our commitment to excellence drives everything we do, from the ingredients we use 
              to the final delivery of your cake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="feature-card">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cake-primary to-cake-accent flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-[#E0ACB0]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;d love to hear about your celebration and create something extraordinary for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={20} />
              </Link>
              <Link href="/gallery" className="btn-secondary inline-flex items-center gap-2">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

