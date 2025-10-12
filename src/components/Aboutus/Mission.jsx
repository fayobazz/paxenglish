
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Vision from "./Vision";

const fadeScaleUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const wobbleHover = {
  rotate: [0, -5, 5, -5, 5, 0],
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};


const Mission = () => {
    const [sermons, setSermons] = useState([]);

  //  const [schedule, setSchedule] = useState(null);
useEffect(() => {
    const fetchAllSermons = async () => {
      try {
        const res = await axios.get('https://eng.backend.paxcatholictv.org/mission');
        setSermons(res.data);
        groupByCategory(res.data);
      } catch (err) {
        console.error('Error fetching sermons:', err);
      }
    };
    fetchAllSermons();
  }, []);
// useEffect(() => {
//     const fetchSchedule = async () => {
//       try {
//         const res = await axios.get("https://eng.backend.paxcatholictv.org/mission/1");
//         setSchedule(res.data);
//       } catch (error) {
//         console.error("Failed to fetch schedule:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSchedule();
//   }, []);
//     if (!schedule) {
//     return (
//       <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
//         <p className="text-center text-red-500">ትንሽ ይጠብቁ.</p>
//       </section>
//     );
//   }
  return (
    <section className="bg-white via-white to-gray-100 py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeScaleUp}
        className="text-center mb-24"
      >
             <h3 className="text-5xl md:text-6xl font-semibold uppercase leading-snug mt-3 tracking-wide text-gray-700 font-['Roboto_Condensed']">
          Welcome to
        </h3>
        <h2 className="text-6xl md:text-7xl font-extrabold uppercase leading-tight tracking-widest text-gray-900 font-['Roboto_Condensed'] drop-shadow-md">
          pax catholic tv
        </h2>

      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
   {/* scheduele.map(({ title, img, alt, text }, idx) => ( */}
                  {sermons.map((schedule, idx) => (

          <motion.div
            key={schedule.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeScaleUp}
            // transition={{ delay:  0.2 }}
            // className="relative bg-gradient-to-br from-blue-900/70 to-black rounded-3xl p-10 shadow-lg cursor-pointer overflow-hidden"
            whileHover={wobbleHover}
            whileTap={{ scale: 0.95 }}
          >
            {/* Image container */}
              <div className="relative bg-white shadow-[0_4px_57px_rgba(0,0,0,0.25)] p-6 rounded max-w-[313px] mx-auto ">
    <div className="flex justify-between items-start mb-2">


      <span
        className="text-[12px] font-bold uppercase bg-gradient-to-r from-[rgba(0,51,102,0.68)] to-black bg-clip-text text-transparent"
        style={{ fontFamily: "Roboto Condensed" }}
      >

      </span>
    </div>
<div className="relative w-48 mx-auto mb-10 overflow-hidden rounded-xl shadow-md">
              <motion.img
                src={schedule.image}
                // alt={alt}
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.5 }}
              />
            </div>
    <h3
      className="text-[24px] font-bold uppercase tracking-0 mb-3"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      {schedule.title}
    </h3>

    <p
      className="text-[16px] font-normal opacity-80 mb-4"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      {schedule.body}
    </p>




    {/* Bottom gold line */}
    <div className="bg-[rgba(228,172,67,1)] h-4 w-full mt-6 scale-y-[-1]" />
  </div>

          </motion.div>
                  ))}


      </div>
    </section>
  );
};

export default Mission;
