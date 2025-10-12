import React from "react";
import ButtonsSection from "./ButtonsSection";
import NewsSection from "./NewsSection";
import DailyRead from "./DailyReadings";
import HeroSection from "./HeroSection";
import Videos from "./Videos";
import EventsSection from "./EventsSection";
import Scheduele from "./Programs";
import ImgBreak from "./ImageBreak";
import ShopSection from "./ShopSection";
// import Navbar from "./Navbar";

import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import Navbar from "./components/Aboutus/Navbar";
// import ButtonsSection from "./components/ButtonsSection";
import { motion } from "framer-motion";

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
const Home2 = () => {
  return (
    <div className="flex flex-col gap-12">
       {/* <ButtonsSection /> */}
       {/* <Navbar/> */}
       {/* <Navbar/> */}

<motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            >
      <HeroSection/>
</motion.div>
  <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            >
       <DailyRead/>
      </motion.div>
       {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            > */}
        < NewsSection/>
{/* </motion.div> */}
 <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            >
       <ButtonsSection/>
</motion.div>
{/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            > */}
       <Videos/>
       {/* </motion.div> */}
       <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            >
      <ImgBreak />
</motion.div>
       {/* <EventsSection/> */}
{/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            > */}
      <Scheduele/>
{/* </motion.div> */}
<motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            >
      <ShopSection/>
</motion.div>
{/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeScaleUp}
              className="text-center mb-24"
            > */}
      <NewsletterSection/>
{/* </motion.div> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home2;
