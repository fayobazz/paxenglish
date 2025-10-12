import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DailyRead = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/daily/1");
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
const handleReadMore = (id) => {
    navigate(`/sermondetail/${id}`);
  };
  return (
 <section
  className={`w-full bg-white py-20 px-6 md:px-20 max-w-7xl mx-auto transition-all duration-700 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
    {/* 🌟 Animated Glass Card with Glow */}
    <div
      className="max-w-3xl w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border relative overflow-hidden group transition-all duration-700"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      {/* Glow Border using a pseudo div */}
      <div className="absolute -inset-[2px] rounded-2xl z-0 "></div>

      {/* Glass Content */}
      <div className="relative z-10 space-y-6 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight uppercase text-gray-900">
          Daily Readings
          <br />
          <span className="block mt-2">{schedule.title}</span>
        </h2>

        <p className="text-2xl md:text-3xl font-semibold text-gray-700 uppercase leading-relaxed">
          {schedule.body}
        </p>

        {/* <div className="pt-2">
             <Link
          to="/event"
          className="inline-block px-6 py-3 bg-[#e4ac43] text-black uppercase font-semibold tracking-wide rounded hover:bg-[#f1c859] transition-colors"
        >
          Read More
        </Link>
        </div> */}
         <button
                            onClick={() =>
                              handleReadMore(schedule.id || schedule._id)
                            }
                            className="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition self-start"
                          >
                            Read More
                          </button>
      </div>
    </div>

    {/* 📷 Image Block */}
    <div
      className="min-w-[280px] max-w-[360px] w-full h-[360px] rounded-[40px] shadow-2xl bg-cover bg-center transform transition duration-500 hover:scale-105 border-4 border-[#E4AC43]/30"
      style={{
        backgroundImage:
          `url(${schedule.image})`,
      }}
      aria-label="Man praying image"
    ></div>
  </div>
</section>


  );
};

export default DailyRead;
