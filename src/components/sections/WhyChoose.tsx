import React from "react";
import { Award, Shield, Clock } from "lucide-react";

const WhyChoose: React.FC = () => {
  const items = [
    {
      title: "Design Excellence",
      icon: Award,
      desc: "Award-winning conceptualization that blends aesthetics with functionality.",
    },
    {
      title: "Quality Assurance",
      icon: Shield,
      desc: "Strict quality control protocols using only premium grade materials.",
    },
    {
      title: "Timely Delivery",
      icon: Clock,
      desc: "Committed to meeting project milestones without compromising on detail.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-[#F6F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#2C3852] mb-3 sm:mb-4">
            Why Choose Dharma
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#C7A76A] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#3B4A69] max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            We deliver exceptional quality, design excellence, and
            client-focused solutions that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="feature-card p-5 sm:p-6 md:p-8 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#F6F8FA] rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#2C3852] transition-colors duration-300">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#C7A76A]" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-[#2C3852] mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-[#9FA6B2] leading-relaxed text-xs sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
