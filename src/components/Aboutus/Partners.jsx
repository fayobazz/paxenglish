import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const PartnerCard = ({ image }) => (
  <div className="w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] rounded-2xl shadow-lg overflow-hidden bg-white flex items-center justify-center">
    <img
      src={image}
      alt="Partner logo"
      className="object-cover w-full h-full p-4"
    />
  </div>
);

const OurPartners = () => {
  const [partners, setPartners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/partners");
        setPartners(res.data.length ? [...res.data, ...res.data] : []);
      } catch (error) {
        console.error("Failed to fetch partners:", error);
        setPartners([]);
      }
    };
    fetchPartners();
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (!partners.length) return;
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3500);
    return () => resetTimeout();
  }, [currentIndex, partners.length]);

  const handleNext = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const handlePrev = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <div
      className="w-full py-20 px-6 sm:px-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/images/5R1A3855.JPG')",
      }}
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
          Our Partners
        </h2>
        <p className="text-lg sm:text-xl mt-4 text-white/90 max-w-2xl mx-auto">
          We are proud to collaborate with trusted organizations that help us grow and serve better every day.
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-10 transition-transform duration-700 ease-in-out"
          style={{
            width: `${partners.length * 14}rem`,
            transform: `translateX(-${currentIndex * 14}rem)`,
          }}
        >
          {partners.map(({ image }, idx) => (
            <PartnerCard
              key={idx}
              image={image || "assets/images/fallback.jpg"}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#e4ac43] text-black p-3 rounded-full shadow-md z-10 hover:bg-yellow-600 transition"
          aria-label="Previous"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#e4ac43] text-black p-3 rounded-full shadow-md z-10 hover:bg-yellow-600 transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default OurPartners;
