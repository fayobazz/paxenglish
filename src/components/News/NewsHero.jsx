import React, { useEffect, useState } from "react";
import axios from "axios";
const NewsHero = () => {
   const [isVisible, setIsVisible] = useState(false);
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/hero_post/1");
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

<section
    className="w-full min-h-[50vh] relative bg-white px-6 py-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 font-['Roboto_Condensed'] bg-cover bg-center"
    style={{  backgroundImage:  `url(${schedule.image})` }}
  >
    {/* Left: Text Content */}
    <div className="flex-1 flex flex-col justify-center items-center space-y-4 relative z-10 text-center">


      <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        {schedule.title}
      </h1>
{/*
      <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium max-w-xl">
        {schedule.subtitle}
      </p> */}

      <img
        src="assets/images/line.svg"
        alt="Line Decoration"
        className="w-32 mt-4"
      />
    </div>

    {/* Right: Hero Image */}

  </section>
);
};

export default NewsHero;
