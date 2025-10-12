
import React, { useEffect, useState } from "react";
import axios from "axios";
const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/hero_about/1");
        setSchedule(res.data);
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchedule();
  }, []);

  if (!schedule || loading) {
    return (
      <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
        <p className="text-center text-red-500 text-lg">Loading...</p>
      </section>
    );
  }
  return(
  <>
    <section
      className="w-full min-h-[50vh] relative bg-white px-6 py-8 pt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 font-['Roboto_Condensed'] bg-cover bg-center"
      style={{
        backgroundImage:  `url(${schedule.image})`,
       }}
    >
      {/* Left: Text Content */}
      <div className="flex-1 flex items-center justify-center">
    {/* Left: Text Content */}
    <div className="space-y-6 relative z-10 max-w-2xl text-center -mt-10">
      {/* <p className="uppercase text-[13px] tracking-widest font-semibold text-gray-600">
        Welcome to pax ctv
      </p> */}

      <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white">
        {schedule.subtitle}
      </p>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-snug tracking-tight text-white">
        {schedule.title}
      </h1>

      {/*
      <img
        src="assets/images/line.svg"
        alt="Line Decoration"
        className="w-28 sm:w-32 mt-4 mx-auto"
      />
      */}
    </div>
  </div>

      {/* Right: Hero Image */}
    </section>
  </>
);
};
export default Hero;