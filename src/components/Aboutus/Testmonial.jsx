import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const TestimonialCard = ({ image, title, description }) => (
  <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col sm:flex-row w-[28rem] min-w-[28rem] ring-1 ring-gray-200 hover:shadow-2xl transition-all duration-500">
    <div
      className="sm:w-60 h-60 sm:h-auto bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="p-6 flex flex-col justify-between">
      <h3 className="text-xl font-semibold text-[#00718a] mb-3">{title}</h3>
      <p className="text-sm text-gray-700 font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Fetch feedback data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/feedback");
        setTestimonials(res.data.length ? [...res.data, ...res.data] : []);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        setTestimonials([]);
      }
    };
    fetchData();
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (!testimonials.length) return;
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => resetTimeout();
  }, [currentIndex, testimonials.length]);

  const handleNext = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      id="testimonials"
      className="relative w-full bg-[#003366] py-16 px-6 sm:px-20 rounded-3xl shadow-2xl"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 drop-shadow-xl">
        What Our Clients Say About Us
      </h2>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-10 transition-transform duration-700 ease-in-out"
          style={{
            width: `${testimonials.length * 30}rem`,
            transform: `translateX(-${currentIndex * 30}rem)`
          }}
        >
          {testimonials.map(({ image, title, description }, idx) => (
            <TestimonialCard
              key={idx}
              image={image || "assets/images/fallback.jpg"}
              title={title}
              description={description}
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

export default Testimonial;
