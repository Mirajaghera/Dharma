import React from "react";
import {
  PenTool,
  ChefHat,
  Layers,
  Armchair,
  Hammer,
  Briefcase,
} from "lucide-react";

const ServicesScreen: React.FC = () => {
  const services = [
    {
      title: "Interior Design",
      icon: PenTool,
      desc: "Transform your living spaces with our expert interior design services. We blend aesthetics with functionality to create stunning environments tailored to your lifestyle. From space planning and color consultation to furniture selection and décor styling, we handle every detail with precision.",
    },
    {
      title: "Modular Kitchen",
      icon: ChefHat,
      desc: "Experience the perfect blend of style and efficiency with our modular kitchen solutions. We design ergonomic layouts with premium finishes, soft-close cabinets, durable countertops, and smart storage solutions. Every kitchen is customized to maximize space and enhance your cooking experience.",
    },
    {
      title: "PVC Furniture",
      icon: Layers,
      desc: "Discover our range of water-resistant, termite-proof PVC furniture perfect for modern homes. Ideal for kitchens, bathrooms, and balconies, our PVC solutions offer exceptional durability, easy maintenance, and contemporary designs that withstand humidity and harsh conditions.",
    },
    {
      title: "Wooden Furniture",
      icon: Armchair,
      desc: "Elevate your interiors with our handcrafted wooden furniture made from premium timber. From elegant dining sets and comfortable sofas to custom wardrobes and study tables, each piece is designed to add warmth, character, and timeless elegance to your home.",
    },
    {
      title: "False Ceiling",
      icon: Hammer,
      desc: "Enhance your ceilings with our innovative false ceiling designs. We offer POP, gypsum, and wooden ceiling solutions with integrated lighting options. Create stunning visual effects, improve acoustics, and add a touch of sophistication to any room.",
    },
    {
      title: "Turnkey Projects",
      icon: Briefcase,
      desc: "Leave everything to us with our comprehensive turnkey project services. From initial concept to final handover, we manage the entire project lifecycle including design, material procurement, execution, and quality control. Sit back while we transform your vision into reality.",
    },
  ];

  return (
    <div className="bg-[#F6F8FA] min-h-screen pb-12 sm:pb-16 md:pb-24 pt-24 sm:pt-28 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#2C3852] mb-3 sm:mb-4">
            Our Expertise
          </h1>
          <p className="text-[#9FA6B2] text-sm sm:text-base px-4 sm:px-0">
            We offer a comprehensive suite of interior services designed to meet
            the rigorous demands of modern corporate and residential standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-[#D9E1EC] border-b-4 border-b-[#C7A76A] feature-card group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F6F8FA] rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#2C3852] transition-colors duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C3852] group-hover:text-[#C7A76A] transition-colors duration-300" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-[#2C3852] mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-[#3B4A69] text-xs sm:text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
