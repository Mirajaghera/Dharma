import React, { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Image as ImageIcon,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import logo from "../../assets/logo.webp";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "gallery", label: "Portfolio", icon: ImageIcon },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918490924225", "_blank");
  };

  // Determine if navbar should be transparent (only on home and at top)
  const isTransparent = activeTab === "home" && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isTransparent
          ? "bg-transparent border-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-[#D9E1EC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => setActiveTab("home")}
          >
            <img
              src={logo}
              alt="Dharma Interior"
              className={`h-8 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-heading ${
                  activeTab === item.id
                    ? isTransparent
                      ? "text-white font-semibold border-b-2 border-[#C7A76A]"
                      : "text-[#2C3852] bg-[#F6F8FA] font-semibold border-b-2 border-[#C7A76A]"
                    : isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-[#9FA6B2] hover:text-[#2C3852] hover:bg-[#F6F8FA]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="ml-6 bg-[#C7A76A] text-white px-5 py-2.5 rounded-md text-sm font-bold font-heading hover:bg-[#D4B985] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Discuss
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#2C3852] hover:bg-[#F6F8FA]"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#D9E1EC] absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-3 py-4 rounded-lg text-base font-medium ${
                  activeTab === item.id
                    ? "text-[#2C3852] bg-[#F6F8FA] border-l-4 border-[#C7A76A]"
                    : "text-[#9FA6B2] hover:text-[#2C3852]"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center px-3 py-4 mt-4 bg-[#C7A76A] text-white rounded-lg text-base font-bold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let's Discuss
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
