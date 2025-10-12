

// const Featured = () => (
//   <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
//     {/* Background Image */}
//     <div
//       className="h-[460px] rounded-xl shadow-lg bg-[url('assets/images/httpswwwpexelscomphotoamanandwomanwearingangelcostumes8513040.png')] bg-cover bg-center bg-no-repeat"
//       aria-hidden="true"
//     />

//     {/* Gradient overlay block with text inside */}
//     <div
//       className="absolute top-0 left-0 h-[400px] w-[430px] rounded-xl bg-gradient-to-br from-[rgba(0,51,102,0.85)] to-black opacity-90 shadow-xl p-8 flex flex-col justify-center text-white font-['Roboto_Condensed']"
//       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
//     >


//       {/* Text Content */}
//       <div className="space-y-5">
//         <p className="uppercase text-xs font-bold tracking-widest text-blue-400">
//           Upcoming Event
//         </p>

//         <h2 className="uppercase font-extrabold text-3xl leading-tight tracking-tight drop-shadow-md">
//           Watch and Listen to Our Sermons
//         </h2>

//         <p className="text-lg font-medium leading-relaxed text-gray-300">
//           Upcoming Sunday Sermon
//         </p>

//         <div className="flex items-baseline space-x-4">
//           <p className="text-5xl font-extrabold uppercase drop-shadow-lg">
//             20
//           </p>
//           <p className="uppercase text-xl font-semibold text-blue-300 tracking-wide">
//             JULY
//           </p>
//         </div>

//         <address className="not-italic text-lg leading-6 text-gray-200">
//           Anbessa Garage,
//           <br />
//           Addis Ababa,
//           <br />
//           Ethiopia
//         </address>

//         <p className="text-lg leading-6 text-gray-300">
//           Sunday 23:39 L.T &nbsp;&nbsp; Monday 11:20 L.T
//         </p>
//           {/* Button */}
//       <button
//         type="button"
//         className="mb-8 px-8 py-3 rounded-lg font-semibold uppercase tracking-wider bg-gradient-to-br from-[#003366] to-[#000000] hover:from-[#002244] hover:to-[#111111] transition-colors duration-300 shadow-lg shadow-black/50"
//         style={{ letterSpacing: '0.1em' }}
//       >
//         Watch
//       </button>
//       </div>
//     </div>
//   </section>
// );

// export default Featured;
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/scheduele/11");
        setSchedule(res.data);
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchedule();
  }, []);

  if (loading) {
    return (
      <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
        <p className="text-center text-gray-500">Loading...</p>
      </section>
    );
  }

  if (!schedule) {
    return (
      <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
        <p className="text-center text-red-500">Failed to load schedule data.</p>
      </section>
    );
  }

  return (
    <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
      {/* Background Image */}
      <div
        className="h-[460px] rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
        style={{ backgroundImage: `url(${schedule.image})` }}
      />

      {/* Gradient overlay block with text inside */}
      <div
        className="absolute top-0 left-0 h-[400px] w-[430px] rounded-xl bg-[#003366] opacity-90 shadow-xl p-8 flex flex-col justify-center text-white font-['Roboto_Condensed']"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Text Content */}
        <div className="space-y-5">
          <p className="uppercase text-xs font-bold tracking-widest text-blue-400">
            {/* Upcoming Event */}
          </p>

          <h2 className="uppercase font-extrabold text-3xl leading-tight tracking-tight drop-shadow-md">
            {schedule.sc_title}
          </h2>

          <p
            className="text-lg font-medium leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: schedule.sc_body }}
          />

          {/* <div className="flex items-baseline space-x-4">
            <p className="text-5xl font-extrabold uppercase drop-shadow-lg">
              {schedule.air_time.split(":")[0]}
            </p>
            <p className="uppercase text-xl font-semibold text-blue-300 tracking-wide">
              {new Date().toLocaleString("default", { month: "short" }).toUpperCase()}
            </p>
          </div> */}


          <p className="text-lg leading-6 text-gray-300">
           Air Time:-  {schedule.air_time} L.T &nbsp;&nbsp; Re-Air Time  {schedule.reair_time} L.T
          </p>

          {/* Button */}
          {/* <a
            href={schedule.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-block px-8 py-3 rounded-lg font-semibold uppercase tracking-wider bg-gradient-to-br from-[#003366] to-[#000000] hover:from-[#002244] hover:to-[#111111] transition-colors duration-300 shadow-lg shadow-black/50"
            style={{ letterSpacing: "0.1em" }}
          >
            Watch
          </a> */}
             <button
                          onClick={() => handleReadMore(sermon.sc_id)}
                          className="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition"
                        >
                          Read More
                        </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
