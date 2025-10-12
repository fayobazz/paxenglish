import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Team = () => {
  const [sermons, setSermons] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchAllSermons = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/team");
        setSermons(res.data);
      } catch (err) {
        console.error("Error fetching sermons:", err);
      }
    };
    fetchAllSermons();
  }, []);

  // Duplicate sermons for infinite scroll illusion
  const repeatedSermons = [...sermons, ...sermons];
  const cardWidthRem = 18; // width in rem from your inline style
  const remToPx = 16; // approx 1rem = 16px
  const cardWidthPx = cardWidthRem * remToPx; // 18rem * 16 = 288px

  // Scroll to current index
  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * cardWidthPx,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (sermons.length === 0) return;
    const newIndex = (currentIndex + 1) % sermons.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    if (sermons.length === 0) return;
    const newIndex = (currentIndex - 1 + sermons.length) % sermons.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 4000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, sermons.length]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 rounded-3xl shadow-xl relative overflow-hidden">
      <h2
        className="text-5xl font-extrabold uppercase text-center mb-14 text-black tracking-widest drop-shadow-md"
        style={{ fontFamily: "Roboto Condensed" }}
      >
        Meet Our Inspirational Team
      </h2>

      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-10"
          style={{ width: `${repeatedSermons.length * cardWidthRem}rem`, scrollBehavior: "smooth" }}
        >
          {repeatedSermons.map(({ full_name, position, image }, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#e9f1f8] rounded-3xl p-8 w-72 flex flex-col items-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <div
                className="h-40 w-40 rounded-full border-8 border-white bg-cover bg-center mb-8 shadow-xl"
                style={{
                  backgroundImage: `url(${image})`,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(0, 0, 0, 0.05)",
                }}
                aria-label={`${full_name} profile picture`}
              ></div>

              <h3
                className="text-3xl font-extrabold uppercase mb-3 text-center text-[#00475e]"
                style={{ fontFamily: "Roboto Condensed" }}
              >
                {full_name}
              </h3>

              <p
                className="text-lg opacity-90 mb-6 text-center text-yellow-500"
                style={{ fontFamily: "Roboto Condensed" }}
              >
                {position}
              </p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#e4ac43] text-black p-2 rounded-full shadow-md z-10 hover:bg-yellow-600 transition"
          aria-label="Previous"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#e4ac43] text-black p-2 rounded-full shadow-md z-10 hover:bg-yellow-600 transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>

      {/* Removed the old animation CSS since we're using controlled scroll now */}
    </section>
  );
};

export default Team;
