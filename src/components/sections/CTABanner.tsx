import React from "react";
import { Mail, Phone } from "lucide-react";

const CTABanner: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-[#F6F8FA]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#2C3852] mb-4 sm:mb-6 px-2">
          Ready to Transform Your Space?
        </h2>
        <p className="text-[#3B4A69] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Let's bring your vision to life. Get in touch with our experts today.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center px-2">
          <a
            href="mailto:dharmainteriorandfurniture@gmail.com"
            className="w-full sm:w-auto flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C7A76A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs text-[#9FA6B2] uppercase tracking-wider font-bold">
                Email Us
              </p>
              <p className="text-[#2C3852] font-heading font-semibold text-[11px] sm:text-sm md:text-base truncate">
                dharmainteriorandfurniture@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+918490924225"
            className="w-full sm:w-auto flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2C3852] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] sm:text-xs text-[#9FA6B2] uppercase tracking-wider font-bold">
                Call Us
              </p>
              <p className="text-[#2C3852] font-heading font-semibold text-sm sm:text-base">
                +91 8490924225
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
