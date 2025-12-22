import React from "react";
import { Users, Lightbulb, PenTool, Hammer, CheckCircle } from "lucide-react";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "We begin by understanding your vision, needs, and space requirements.",
      icon: Users,
    },
    {
      step: "02",
      title: "Concept",
      desc: "Our designers create tailored concepts, mood boards, and layouts.",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Design",
      desc: "Refining every detail from material selection to 3D visualization.",
      icon: PenTool,
    },
    {
      step: "04",
      title: "Execution",
      desc: "Collaborating with trusted vendors under strict quality standards.",
      icon: Hammer,
    },
    {
      step: "05",
      title: "Delivery",
      desc: "Presenting the completed project with post-project guidance.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <span className="text-[#4F6F99] font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-2 block">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#2C3852] mb-3 sm:mb-4">
            Our Premium Process
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#C7A76A] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#3B4A69] max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            A refined, step-by-step approach to delivering excellence in every
            project.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-[#D9E1EC] z-0"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-[#F6F8FA] flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-sm group-hover:border-[#C7A76A] group-hover:shadow-lg transition-all duration-300 relative z-10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#2C3852] rounded-full flex items-center justify-center text-white group-hover:bg-[#C7A76A] transition-colors">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-heading font-bold text-[#2C3852] mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-[#9FA6B2] text-xs sm:text-sm leading-relaxed max-w-[150px] sm:max-w-[200px] mx-auto">
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

export default ProcessSection;
