import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Award, Users, Target } from "lucide-react";

const ServicesScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const servicesWithImages = [
    {
      name: "Interior Design",
      desc: "Transform spaces with elegant, functional design solutions that reflect your personal style.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "PVC Furniture",
      desc: "Water-resistant, durable modern furniture solutions perfect for kitchens and bathrooms.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Turnkey Project",
      desc: "Complete end-to-end project management from concept to completion with zero hassle.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Wooden Furniture",
      desc: "Handcrafted pieces that add warmth and character, built with precision using quality materials.",
      image:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "False Ceiling (POP)",
      desc: "Stunning ceiling designs with integrated lighting systems to elevate your space aesthetics.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Modular Kitchen",
      desc: "Smart, ergonomic kitchens with premium finishes, optimized storage, and modern appliances.",
      image:
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      desc: "We deliver exceptional quality in every project with attention to detail.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      desc: "Your vision is our priority. We work closely with you at every step.",
    },
    {
      icon: Target,
      title: "Timely Delivery",
      desc: "We respect your time and ensure projects are completed on schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section
        ref={sectionRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 z-[1]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-[#c7a76a] text-xs tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-[#c7a76a]" />
                About Us
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                DHARMA
                <span className="block text-[#c7a76a] mt-2">
                  Interior & Furniture
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mt-6 italic font-light">
                "Your Dream, Our Craft."
              </p>

              <p className="text-white/70 mt-8 text-base md:text-lg leading-relaxed">
                We are a passionate team dedicated to transforming spaces into
                beautiful, functional environments. With expertise in interior
                design and furniture craftsmanship, we bring your vision to life
                with precision and care.
              </p>
            </div>

            {/* Right - Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                  alt="Interior Design"
                  className="w-full h-[400px] md:h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-[#c7a76a]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer - Antra Style */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[#1a1a1a] text-xs tracking-[0.25em] uppercase font-semibold">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-3">
              Our <span className="text-[#c7a76a]">Expertise</span>
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left - Image Display (Hidden on mobile, shown on lg+) */}
            <div className="hidden lg:block relative order-2 lg:order-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl sticky top-32">
                {/* All images stacked, only active one visible */}
                {servicesWithImages.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeService === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Glassmorphism Description Box */}
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-white/20 backdrop-blur-xl rounded-xl p-4 lg:p-6 border border-white/30">
                  <span className="text-[#c7a76a] text-xs font-bold tracking-wider">
                    0{activeService + 1}
                  </span>
                  <h4 className="text-white text-lg lg:text-xl font-bold mt-1">
                    {servicesWithImages[activeService].name}
                  </h4>
                  <p className="text-white/80 text-xs lg:text-sm mt-2">
                    {servicesWithImages[activeService].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Service List */}
            <div className="order-1 lg:order-2">
              {servicesWithImages.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group cursor-pointer py-4 sm:py-5 md:py-6 border-b transition-all duration-500 ${
                    activeService === index
                      ? "border-[#c7a76a]/50"
                      : "border-[#1a1a1a]/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
                    {/* Number */}
                    <span
                      className={`text-xs sm:text-sm font-bold transition-all duration-500 ${
                        activeService === index
                          ? "text-[#c7a76a]"
                          : "text-[#1a1a1a]/30"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* Title */}
                    <h3
                      className={`flex-1 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition-all duration-500 ${
                        activeService === index
                          ? "text-[#c7a76a] translate-x-1 sm:translate-x-2"
                          : "text-[#1a1a1a]"
                      }`}
                    >
                      {service.name}
                    </h3>

                    {/* Arrow indicator */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeService === index
                          ? "bg-[#c7a76a] scale-100"
                          : "bg-transparent border border-[#1a1a1a]/20 scale-90"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ${
                          activeService === index
                            ? "text-white"
                            : "text-[#1a1a1a]/50"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            activeService === index
                              ? "M17 8l4 4m0 0l-4 4m4-4H3"
                              : "M7 17l9.2-9.2M17 17V7H7"
                          }
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile Image - Shows below active item on mobile only */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                      activeService === index
                        ? "max-h-64 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-48 sm:h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white/90 text-xs sm:text-sm">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#1a1a1a] text-xs tracking-[0.25em] uppercase font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-3">
              Our <span className="text-[#c7a76a]">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#f8f8f8] hover:bg-white hover:shadow-xl 
                  transition-all duration-300 border border-transparent hover:border-[#c7a76a]/20"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#c7a76a] to-[#a08050] rounded-full flex items-center justify-center">
                  <value.icon
                    className="w-8 h-8 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Get In <span className="text-[#c7a76a]">Touch</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phone */}
            <a
              href="tel:+918490924225"
              className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 
                hover:bg-white/10 hover:border-[#c7a76a]/30 transition-all duration-300 group"
            >
              <Phone className="w-10 h-10 text-[#c7a76a] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Call Us
              </span>
              <span className="text-white font-semibold text-lg">
                +91 84909 24225
              </span>
              <span className="text-white/40 text-sm mt-1">Manan Khunt</span>
            </a>

            {/* Email */}
            <a
              href="mailto:dharmainteriorandfurniture@gmail.com"
              className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 
                hover:bg-white/10 hover:border-[#c7a76a]/30 transition-all duration-300 group"
            >
              <Mail className="w-10 h-10 text-[#c7a76a] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Email Us
              </span>
              <span className="text-white font-medium text-sm text-center break-all">
                dharmainteriorandfurniture@gmail.com
              </span>
            </a>

            {/* Address */}
            <div
              className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 
                hover:bg-white/10 hover:border-[#c7a76a]/30 transition-all duration-300 group"
            >
              <MapPin className="w-10 h-10 text-[#c7a76a] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Visit Us
              </span>
              <span className="text-white font-medium text-sm text-center">
                219, Shyamal sanskruti, movdi pal road,
                <br />
                nr. Vagad chowk, Rajkot - 360004
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
