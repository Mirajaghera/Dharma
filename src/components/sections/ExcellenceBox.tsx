import React from "react";
import { Layers, Users, CheckCircle, PenTool } from "lucide-react";

const ExcellenceBox: React.FC = () => {
  const items = [
    {
      title: "Premium Materials",
      desc: "Top-grade materials ensuring exceptional durability.",
      icon: Layers,
    },
    {
      title: "Skilled Designers",
      desc: "Expert creativity combined with functional precision.",
      icon: Users,
    },
    {
      title: "Transparent Process",
      desc: "Clear timelines, honest communication, no hidden costs.",
      icon: CheckCircle,
    },
    {
      title: "Personalized Approach",
      desc: "Tailored designs to match your unique style and space.",
      icon: PenTool,
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2C3852] to-[#3B4A69] p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-[#C7A76A] opacity-10 rounded-full blur-3xl -mr-8 sm:-mr-16 -mt-8 sm:-mt-16"></div>

          <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3 sm:mb-4 px-2">
              Experience Excellence With Every Detail
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#C7A76A] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative z-10">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-4 sm:p-5 md:p-6 rounded-xl hover:bg-white hover:transform hover:-translate-y-1 transition-all duration-300 group text-left"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C7A76A] rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-heading font-bold text-white group-hover:text-[#2C3852] mb-1 sm:mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#D9E1EC] text-[10px] sm:text-xs md:text-sm leading-relaxed group-hover:text-[#3B4A69] transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceBox;
