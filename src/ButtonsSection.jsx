import React from "react";
import { FaBible, FaInfoCircle, FaHandHoldingHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Sermons",
    description: "Explore wide-ranging discussions and weekly contents",
    icon: <FaBible className="text-[#E4AC43] text-5xl mb-4" />,
    path: "/sermon",
  },
  {
    title: "About Pax",
    description: "Request For A Prayer",
    icon: <FaInfoCircle className="text-[#E4AC43] text-5xl mb-4" />,
    path: "/about",
  },
  {
    title: "Donate",
    description: "Support the mission of Word on Fire and the",
    icon: <FaHandHoldingHeart className="text-[#E4AC43] text-5xl mb-4" />,
    path: "/donate",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const wobbleHover = {
  rotate: [0, -5, 5, -5, 5, 0],
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};

const ButtonsSection = () => {
  return (
    <section className="flex flex-col items-center gap-12 py-20 px-6 bg-white text-gray-900">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold uppercase font-['Roboto_Condensed'] text-[#151722]">
          a media that&apos;s relevant
        </h2>
        <p className="text-sm uppercase font-['Roboto_Condensed'] text-[#151722] mt-2 tracking-widest">
          pax ctv
        </p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-16 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cardData.map(({ title, description, icon, path }, idx) => (
          <Link key={idx} to={path} className="w-[331px] h-[305px]">
            <motion.div
              className="relative bg-[#003366] p-6 rounded-lg shadow-xl cursor-pointer w-full h-full"
              variants={cardVariants}
              whileHover={wobbleHover}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute bottom-0 left-0 w-full h-3 bg-[#E4AC43] scale-y-[-1] origin-top rounded-b-lg" />
              <div className="flex flex-col items-center text-center text-white font-['Roboto_Condensed']">
                {icon}
                <h3 className="text-3xl uppercase font-extrabold tracking-wide">
                  {title}
                </h3>
                <p className="mt-3 text-base opacity-90 max-w-[280px]">{description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default ButtonsSection;
