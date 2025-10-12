import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import ParallaxImage from "./Image";
const fadeScaleUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Story = () => {
   const [schedule, setSchedule] = useState(null);

useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/story/1");
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
        <p className="text-center text-red-500">ትንሽ ይጠብቁ.</p>
      </section>
    );
  }
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-16 space-y-20 font-['Roboto_Condensed'] text-gray-900">
      {/* Header Section */}
      <motion.header
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeScaleUp}
      >
        <h1 className="text-6xl font-extrabold uppercase tracking-widest text-black drop-shadow-md">
          PAX JOURNEY
        </h1>
        <p className="mt-2 text-lg tracking-widest uppercase text-gray-500">
          Our Story
        </p>
        <div className="mt-4 w-20 h-1 bg-yellow-400 mx-auto rounded-full shadow-lg" />
      </motion.header>

      {/* Story Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Story */}
        <motion.article
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeScaleUp}
          transition={{ delay: 0.1 }}
        >
          <img
            src={schedule.image2}
            alt="PAX History"
            className="w-full h-72 object-cover rounded-xl shadow-lg border border-gray-200"
          />
          <h2 className="text-4xl font-bold uppercase text-black tracking-wide drop-shadow-sm">
            {schedule.title2}
          </h2>
          <p className="text-base opacity-80 leading-relaxed text-gray-700 max-w-prose">
           {schedule.body2}
          </p>
        </motion.article>

        {/* Right Story */}
        <motion.article
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeScaleUp}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold uppercase text-black tracking-wide drop-shadow-sm">
            {schedule.title}
          </h2>
          <p className="text-base opacity-80 leading-relaxed text-gray-700 max-w-prose">
            {schedule.body}
          </p>
          <img
            src={schedule.image}
            alt="Join the community"
            className="w-full h-72 object-contain rounded-xl shadow-lg border border-gray-200"
          />
        </motion.article>
      </div>

      {/* Big Image Section */}
  {/* <ParallaxImage/> */}

      {/* Dream Story Section */}
      {/* <motion.article
        className="space-y-6 max-w-[700px] mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeScaleUp}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-4xl font-bold uppercase text-black tracking-wide drop-shadow-sm">
          Join the community
        </h2>
        <p className="text-base opacity-80 leading-relaxed text-gray-700 max-w-prose mx-auto">
          By signing up to our newsletter become our beloved member
        </p>
        <button className="mt-4 bg-yellow-400 text-blue-900 uppercase font-semibold text-base py-3 px-10 rounded-xl shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out backdrop-blur-sm">
          Subscribe
        </button>
      </motion.article> */}
    </section>
  );
};

export default Story;
