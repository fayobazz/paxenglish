
import React from "react";
import Navbar from "../components/Aboutus/Navbar";
import Mission from "../components/Aboutus/Mission";
import Story from "../components/Aboutus/Story";
import Testimonial from "../components/Aboutus/Testmonial";
import Community from "../components/Aboutus/Community";
import Team from "../components/Aboutus/Team";
import NewsHero from "../components/News/NewsHero";
import Footer from "../Footer";
import ImgBreakAbout from "../ImageBreakAbout";
import Hero from "../components/Aboutus/Hero";
import { motion } from "framer-motion";
import OurPartners from "../components/Aboutus/Partners";
const fadeScaleUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const Aboutus = () => {
  return (
    <>
      {/* Navbar once at the top */}
      {/* <Navbar /> */}

      {/* Main container with relative positioning and natural flow */}
      <div
        id="_2_1114__About_us"
        className="relative overflow-hidden bg-white min-h-screen w-full"
      >
        {/* Background image container */}


        {/* Page Sections */}
        <Hero />
        <Mission />
        <ImgBreakAbout />
        <Story />
        <Community />
        <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            >
        <Team />
        </motion.div>
  <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            >
        <Testimonial />
</motion.div>
        <OurPartners/>

      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Aboutus;
