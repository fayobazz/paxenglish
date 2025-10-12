

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const NewsFeatured = () => {
    const [schedule, setSchedule] = useState(null);
   useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/posts/15");
        setSchedule(res.data);
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchedule();
  }, []);
    if (!schedule) {
    return (
      <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
        <p className="text-center text-red-500">Failed to load schedule data.</p>
      </section>
    );
  }
  return (
    <section className="py-16 px-4 bg-white text-[#151722] font-['Roboto_Condensed']">
      <div className="max-w-screen-xl mx-auto space-y-10">
        {/* Headings */}
        <div className="text-center space-y-2">
          <p className="text-[16px] uppercase font-normal text-[#151722]">
            news and events
          </p>
          <h2 className="text-[48px] font-bold uppercase leading-[64px]">
            Recent News
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Image */}

          <div className="flex-1">
           <img
  src={schedule.image}
  alt="Galley"
  className="w-full object-cover rounded-lg"
  style={{ height: '400px' }}
/>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="flex items-center justify-between text-sm text-[#151722] opacity-80 uppercase">
              <span>{schedule.created_by}</span>
              <span>{schedule.created_at}</span>
            </div>

            <h3 className="text-[32px] font-bold uppercase leading-[44px]">
                        {schedule.title}

            </h3>

            <p className="text-[16px] leading-6 opacity-80">
          {schedule.body}
            </p>

            {/* Optional small thumbnail image */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeatured;
