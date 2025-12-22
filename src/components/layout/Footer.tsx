import React from "react";
import { Instagram, Mail } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/dharma_interior_furniture?igsh=amRnandxNXNmOWky",
    },
    {
      icon: Mail,
      href: "mailto:dharmainteriorandfurniture@gmail.com",
    },
  ];

  return (
    <footer className="bg-[#2C3852] text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t-4 border-[#C7A76A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-16">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C7A76A] rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-white font-heading font-bold text-lg sm:text-xl">
                  D
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-heading font-bold tracking-wide">
                Dharma Interior
              </span>
            </div>
            <p className="text-[#9FA6B2] text-xs sm:text-sm leading-6 sm:leading-7 max-w-sm font-light">
              Elevating spaces through premium design and craftsmanship. We
              create environments that inspire success and comfort.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-heading font-semibold mb-4 sm:mb-6 text-white border-b border-[#C7A76A]/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-[#9FA6B2] text-xs sm:text-sm font-medium">
              <li>
                <button
                  onClick={() => setActiveTab("services")}
                  className="hover:text-[#C7A76A] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("gallery")}
                  className="hover:text-[#C7A76A] transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-heading font-semibold mb-4 sm:mb-6 text-white border-b border-[#C7A76A]/30 pb-2 inline-block">
              Connect
            </h3>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-9 h-9 sm:w-10 sm:h-10 border border-[#9FA6B2]/30 rounded-full flex items-center justify-center hover:bg-[#C7A76A] hover:border-[#C7A76A] hover:text-white text-[#9FA6B2] transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#3B4A69] pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-[#9FA6B2] text-[10px] sm:text-xs gap-4 sm:gap-0">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Dharma Interior & Furniture. All
            rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
