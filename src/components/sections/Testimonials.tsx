import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";

const Testimonials: React.FC = () => {
  const clients = [
    {
      name: "Rahul Sharma",
      text: "The team at Dharma transformed our space beautifully. Their attention to detail and quality was exceptional.",
      initial: "R",
    },
    {
      name: "Neha Patel",
      text: "Professional, creative, and efficient. They understood our requirements perfectly and delivered more than expected.",
      initial: "N",
    },
    {
      name: "Arjun Verma",
      text: "From planning to execution, Dharma made the entire process seamless. Highly recommended for premium interiors.",
      initial: "A",
    },
    {
      name: "Sanya & Kunal",
      text: "Outstanding design and flawless execution! We are extremely satisfied with the final results.",
      initial: "S",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-[#F6F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#4F6F99] font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-2 block">
            Client Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#2C3852] mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#C7A76A] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#3B4A69] max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Real feedback from clients who trusted Dharma with their vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative group border border-transparent hover:border-[#C7A76A]/20"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#D9E1EC] absolute top-4 sm:top-6 right-4 sm:right-6 group-hover:text-[#C7A76A] transition-colors duration-300" />
              <div className="flex space-x-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-[#C7A76A] fill-current"
                  />
                ))}
              </div>
              <p className="text-[#3B4A69] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                "{client.text}"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2C3852] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-2 sm:mr-3">
                  {client.initial}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#2C3852] text-xs sm:text-sm">
                    {client.name}
                  </h4>
                  <span className="text-[#9FA6B2] text-[10px] sm:text-xs">
                    Verified Client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button className="text-[#C7A76A] font-bold text-xs sm:text-sm hover:text-[#2C3852] transition-colors flex items-center justify-center mx-auto">
            View More Reviews{" "}
            <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
