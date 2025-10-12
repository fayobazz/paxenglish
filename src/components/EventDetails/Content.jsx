
import React from "react";
import Footer from "../../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Button2 from "../CallButton";
const EventSection = () => {
     const [schedule, setSchedule] = useState(null);
   useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/events/1");
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
        <p className="text-center text-red-500">Failed to load event data.</p>
      </section>
    );
  }
  return(

  <>

  <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 pt-32">
    {/* Left Content */}
    <div className="flex-1 space-y-8">
      <div>
        <div className="flex-1">
           <img
  src={schedule.image}

  // src="assets/images/image.svg"
  alt="Galley"
  className="w-full object-cover rounded-lg"
  style={{ height: '400px' }}
/>
</div>
        <p
          className="text-[12px] font-bold uppercase bg-gradient-to-r from-[rgba(0,51,102,0.68)] to-black bg-clip-text text-transparent"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          Upcoming Event
        </p>
        <h2
          className="text-[48px] font-bold uppercase text-[rgba(21,23,34,1.00)] leading-[64px]"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          {schedule.title}
        </h2>
      </div>

      <p
        className="text-[16px] text-[rgba(21,23,34,1.00)] opacity-80 leading-[24px]"
        style={{ fontFamily: "Roboto Condensed" }}
      >
                  {schedule.body}

      </p>

      <div className="flex items-start gap-4">
        <div className="w-[3px] h-[128px] bg-[rgba(255,209,163,1.00)]"></div>
        <p
          className="text-[24px] text-[rgba(21,23,34,1.00)] opacity-80 leading-[1.5]"
          style={{ fontFamily: "Roboto Condensed" }}
        >
                  {schedule.body}

        </p>
      </div>

      <p
        className="text-[16px] text-[rgba(21,23,34,1.00)] opacity-80 leading-[24px]"
        style={{ fontFamily: "Roboto Condensed" }}
      >
                         {schedule.body}

      </p>


    </div>

    {/* Right Form */}
    <div
  style={{ height: '400px' }}

    className="relative flex flex-col items-end px-4 py-8 gap-6 w-[490px] bg-[rgba(247,248,250,1.00)]">
      {/* Title */}
      <span className="text-[32px] font-bold leading-[44px] uppercase bg-[rgba(21,23,34,1.00)] bg-clip-text text-transparent font-['Roboto_Condensed']">
        rEGISTER nOW
      </span>

      {/* Address + date row */}
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center gap-2">

          <span className="text-[16px] bg-[rgba(21,23,34,1.00)] bg-clip-text text-transparent font-normal font-['Roboto_Condensed'] leading-[24px]">
                              {schedule.created_by}

          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-[28.66px] w-[22.53px]"></div>
          <span className="text-[16px] bg-[rgba(21,23,34,1.00)] bg-clip-text text-transparent font-normal font-['Roboto_Condensed'] leading-[24px]">
                              {schedule.created_at}

            {/* 13 May, 2018 */}
          </span>
        </div>
      </div>

      {/* Full Name */}
      <div className="flex flex-col items-start w-full">
        <span className="text-[12px] text-left opacity-60 bg-[rgba(35,37,54,1.00)] bg-clip-text text-transparent font-medium font-['Roboto'] leading-[16px] mb-1">
          Call US
        </span>
        <span className="text-[16px] bg-[rgba(29,33,47,1.00)] bg-clip-text text-transparent font-medium font-['Roboto'] leading-[24px]">
          Call Us And Book Your Event
        </span>
      </div>

      {/* Email */}


      {/* Register button */}

      <div className="bg-[rgba(228,172,67,1.00)] h-[28.43px] w-[85.08px] flex items-center justify-center px-16 py-6 rounded-[12px]">
        {/* <span className="text-[16px] uppercase bg-[rgba(28,29,40,1.00)] bg-clip-text text-transparent font-normal font-['Roboto_Condensed'] leading-[16px]">
          Register now
        </span> */}
         <Button2 title="Call us" containerClass="mbg-[rgba(228,172,67,1.00)] h-[28.43px] w-[85.08px] flex items-center justify-center px-16 py-6 rounded-[12px]"
phoneNumber="+251931581346"
//  onClick={handleCall}
 />

      </div>
    </div>
  </div>
    {/* <Footer/> */}
</>
);
}

export default EventSection;

