'use client';

import Image from "next/image";
import Link from "next/link";
import { 
  Cake, Heart, Sparkles, Clock, ChevronRight, 
  ArrowRight, Star, Gift, Truck, Palette, 
  PartyPopper, Baby, HeartHandshake, Scale
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Heart,
    title: "Wedding Cakes",
    description: "Elegant, sophisticated cakes designed to be the perfect centerpiece for your special day. Our wedding cakes are crafted with meticulous attention to detail, ensuring each tier is a masterpiece that complements your wedding theme.",
    price: "From KES 15,000",
    features: [
      "Multi-tier designs",
      "Custom flavor options",
      "Sugar flower decorations",
      "Complementary tasting session",
      "Delivery and setup"
    ],
    color: "from-pink-400 to-rose-500",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800"
  },
  {
    id: 2,
    icon: PartyPopper,
    title: "Birthday Cakes",
    description: "Fun, creative cakes customized to match any theme or personality. From children's wonderlands to elegant adult celebrations, we bring your vision to life with vibrant colors and exciting designs.",
    price: "From KES 5,000",
    features: [
      "Any theme possible",
      "Custom character designs",
      "Age-appropriate designs",
      "Variety of flavors",
      "Quick turnaround"
    ],
    color: "from-purple-400 to-pink-500",
    image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=800"
  },
  {
    id: 3,
    icon: Gift,
    title: "Custom Orders",
    description: "Unique creations for any celebration, tailored to your specific vision. Whether it's an anniversary, graduation, or corporate event, we create one-of-a-kind cakes that make lasting impressions.",
    price: "From KES 8,000",
    features: [
      "Fully customized design",
      "Any occasion covered",
      "Personalized decorations",
      "Special dietary options",
      "Consultation included"
    ],
    color: "from-amber-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800"
  },
  {
    id: 4,
    icon: Truck,
    title: "Cake Delivery",
    description: "Professional delivery service ensuring your cake arrives safely and on time. We handle all aspects of transportation to guarantee your cake maintains its beauty from our studio to your venue.",
    price: "From KES 500",
    features: [
      "City-wide delivery",
      "Safe handling guaranteed",
      "Setup at venue",
      "Flexible timing",
      "Tracking available"
    ],
    color: "from-emerald-400 to-teal-500",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
  },
  {
    id: 5,
    icon: Baby,
    title: "Baby Shower Cakes",
    description: "Adorable and elegant cakes celebrating the upcoming arrival. From gender reveals to cute baby themes, we create sweet centerpieces for your joyful celebration.",
    price: "From KES 6,000",
    features: [
      "Gender reveal cakes",
      "Soft pastel themes",
      "Cute animal designs",
      "Sprinkle decorations",
      "Complementary toppers"
    ],
    color: "from-blue-400 to-cyan-500",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800"
  },
  {
    id: 6,
    icon: HeartHandshake,
    title: "Corporate Cakes",
    description: "Professional cakes for business events, product launches, and company celebrations. Make your corporate event memorable with a custom-designed cake that represents your brand.",
    price: "From KES 10,000",
    features: [
      "Brand incorporation",
      "Professional designs",
      "Bulk orders welcome",
      "Corporate themes",
      "Event coordination"
    ],
    color: "from-indigo-400 to-purple-500",
    image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800"
  }
];

const flavors = [
  { name: "Classic Vanilla", description: "Rich vanilla bean cake with vanilla buttercream" },
  { name: "Chocolate Delight", description: "Dark chocolate cake with chocolate ganache" },
  { name: "Red Velvet", description: "Classic red velvet with cream cheese frosting" },
  { name: "Lemon Zest", description: "Light lemon cake with lemon curd filling" },
  { name: "Carrot Cake", description: "Spiced carrot cake with cream cheese frosting" },
  { name: "Strawberry Dream", description: "Fresh strawberry cake with strawberry buttercream" },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cake-light via-cake-secondary to-cake-rose">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge mb-6">
              <Sparkles size={16} />
              <span>Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cakes for <span className="text-gradient-cake">Every Occasion</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              From elegant wedding cakes to fun birthday creations, we bring your dream cake to life 
              with premium ingredients and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card group"
              >
                <div className="relative h-64 overflow-hidden service-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <service.icon size={28} className="text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cake-primary to-cake-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gradient-gold font-bold">{service.price}</span>
                    <Link 
                      href="/contact"
                      className="flex items-center gap-1 text-cake-dark font-medium hover:text-cake-primary transition-colors"
                    >
                      Book Now
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="py-20 bg-gradient-to-br from-cake-light via-white to-cake-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <Cake size={16} />
              <span>Our Flavors</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Delicious <span className="text-gradient-primary">Flavors</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Every cake is made with premium ingredients and comes in a variety of delicious flavors to suit every palate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flavors.map((flavor, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-cake hover:shadow-cake-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${index % 3 === 0 ? 'from-pink-400 to-rose-500' : index % 3 === 1 ? 'from-amber-400 to-yellow-500' : 'from-purple-400 to-pink-500'} flex items-center justify-center`}>
                    <Cake size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-cake-primary transition-colors">
                      {flavor.name}
                    </h3>
                    <p className="text-sm text-gray-600">{flavor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see your favorite flavor? We can create custom flavors too!</p>
            <Link 
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Ask About Custom Flavors
              <ArrowRight size={20} />
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
            {[
              { step: "01", title: "Consultation", description: "Discuss your vision, preferences, and celebration details with our team" },
              { step: "02", title: "Design", description: "Receive a custom cake design proposal tailored to your requirements" },
              { step: "03", title: "Creation", description: "Our master bakers craft your cake with meticulous attention to detail" },
              { step: "04", title: "Delivery", description: "Your stunning cake is delivered fresh to your celebration venue" }
            ].map((item, index) => (
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
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%]">
                    <ChevronRight size={24} className="text-cake-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cake-primary via-cake-primaryDark to-cake-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Order Your Dream Cake?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Contact us today for a free consultation. Let's create something extraordinary for your special celebration!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-cake-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-cake-lg"
              >
                Get a Quote
              </Link>
              <Link 
                href="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

