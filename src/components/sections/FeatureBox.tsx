import React from "react";
import { CheckCircle, Mail } from "lucide-react";

const FeatureBox: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:dharmainteriorandfurniture@gmail.com";
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-[#F6F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#2C3852] to-[#3B4A69] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Abstract bg element */}
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-[#4F6F99] opacity-20 rounded-full blur-3xl -mr-8 sm:-mr-16 -mt-8 sm:-mt-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                Transforming Visions into{" "}
                <span className="text-[#C7A76A]">Reality</span>
              </h2>
              <p className="text-[#D9E1EC] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Our integrated approach ensures that every aspect of your
                interior project is handled with professional care, from the
                initial sketch to the final polish.
              </p>
              <button
                onClick={handleEmailClick}
                className="bg-[#C7A76A] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-[#2C3852] transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0"
              >
                <Mail className="w-4 h-4" />
                Email Us Now
              </button>
            </div>

            {/* Inner White Box */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-[#2C3852] mb-4 sm:mb-6 border-b border-[#F6F8FA] pb-3 sm:pb-4">
                The Dharma Advantage
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Complete Turnkey Execution",
                  "3D Visualization & Planning",
                  "Custom Furniture Fabrication",
                  "Post-Handover Support",
                ].map((point, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#C7A76A] mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-[#3B4A69] font-medium text-sm sm:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
