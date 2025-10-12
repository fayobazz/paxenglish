
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const EventSection = () => {

    const [sermons, setSermons] = useState([]);
      // const navigate = useNavigate();

    // const [flippedIndex, setFlippedIndex] = useState(null);

    // Fetch sermons from API
  useEffect(() => {
    const fetchAllSermons = async () => {
      try {
        const res = await axios.get('https://eng.backend.paxcatholictv.org/events');
        setSermons(res.data);
      } catch (err) {
        console.error('Error fetching sermons:', err);
      }
    };
    fetchAllSermons();
  }, []);
  const repeatedSermons = [...sermons, ...sermons];

  return(
<>
<div className="text-center space-y-4">
          <h2 className="text-[48px] font-bold uppercase text-[#151722] leading-[64px]">
            Upcoming Events
          </h2>
          </div>
    <div className="bg-[rgba(228,172,67,1)] h-4 w-full max-w-[340px] mx-auto scale-y-[-1] mb-8" />

  <section className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto p-6">
    {/* Section Title */}

    {/* Bottom line under the section title */}

    {/* The Event Card */}

      {sermons.map((sermon, index) => {
return (
  <div className="relative bg-white shadow-[0_4px_57px_rgba(0,0,0,0.25)] p-6 rounded max-w-[313px] mx-auto ">
    <div className="flex justify-between items-start mb-2">
      <div>
        <span
          className="text-[24px] font-bold uppercase tracking-0"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          20
        </span>
        <br />
        <span
          className="text-[16px] font-normal uppercase"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          JULY
        </span>
      </div>

      <span
        className="text-[12px] font-bold uppercase bg-gradient-to-r from-[rgba(0,51,102,0.68)] to-black bg-clip-text text-transparent"
        style={{ fontFamily: "Roboto Condensed" }}
      >
        Upcoming Event
      </span>
    </div>

    <h3
      className="text-[24px] font-bold uppercase tracking-0 mb-3"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      {sermon.title}
    </h3>

    <p
      className="text-[16px] font-normal opacity-80 mb-4"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      {sermon.description}
    </p>

    <p
      className="text-[16px] font-normal opacity-80 mb-4"
      style={{ fontFamily: "Roboto Condensed" }}
    >
           {sermon.time}

    </p>

    <address
      className="not-italic text-[16px] font-normal leading-6"
      style={{ fontFamily: "Roboto Condensed" }}
    >
            {sermon.location}

    </address>

    {/* Bottom gold line */}
    <div className="bg-[rgba(228,172,67,1)] h-4 w-full mt-6 scale-y-[-1]" />
  </div>
);
      })}

    {/* <EventCard /> */}
  </section>
</>

);


}
export default EventSection;
