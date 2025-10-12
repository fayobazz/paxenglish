
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Featured = () => {
     const [schedule, setSchedule] = useState(null);
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
    if (!schedule) {
    return (
      <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
        <p className="text-center text-red-500">Failed to load schedule data.</p>
      </section>
    );
  }
  return(
    <>
        <div className="text-center mb-12 px-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">
        Daily Reading Details
      </h2>
    </div>
  <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
    {/* Background Image */}
       <div
        className="h-[460px] rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
        style={{ backgroundImage: `url(${schedule.image})` }}
      />

    {/* <div
      className="h-[460px] rounded-xl shadow-lg bg-[url('assets/images/httpswwwpexelscomphotoamanandwomanwearingangelcostumes8513040.png')] bg-cover bg-center bg-no-repeat"
      aria-hidden="true"
    /> */}

    {/* Gradient overlay block with text inside */}
    <div
      className="absolute top-0 left-0 h-[400px] w-[430px] rounded-xl bg-[#003366] opacity-90 shadow-xl p-8 flex flex-col justify-center text-white font-['Roboto_Condensed']"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
    >


      {/* Text Content */}
      <div className="space-y-5">
        <p className="uppercase text-xs font-bold tracking-widest text-blue-400">
          Upcoming Event
        </p>

        <h2 className="uppercase font-extrabold text-3xl leading-tight tracking-tight drop-shadow-md">
          {/* Watch and Listen to Our Sermons */}
          {schedule.title}
          {}
        </h2>

        <p className="text-lg font-medium leading-relaxed text-gray-300">
          {/* Upcoming Sunday Sermon */}
          {schedule.body}

        </p>

        {/* <div className="flex items-baseline space-x-4">
          <p className="text-5xl font-extrabold uppercase drop-shadow-lg">
            20
          </p>
          <p className="uppercase text-xl font-semibold text-blue-300 tracking-wide">
            JULY
          </p>
        </div> */}

        {/* <address className="not-italic text-lg leading-6 text-gray-200">
          Anbessa Garage,
          <br />
          Addis Ababa,
          <br />
          Ethiopia
        </address> */}

        <p className="text-lg leading-6 text-gray-300">
          {schedule.created_at}
          {/* Sunday 23:39 L.T &nbsp;&nbsp; Monday 11:20 L.T */}
        </p>
          {/* Button */}
          <Link>

          </Link>


      </div>
    </div>
  </section>
  </>
);
}
export default Featured;
