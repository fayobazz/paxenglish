
import React from "react";

// import Navbar from "../components/Aboutus/Navbar";
import SermonHero from "../components/Programs/SermonHero";
import Featured from "../components/Programs/Featured";
import SermonCard from "../components/Programs/SermonCard";
import Navbar from "../components/Aboutus/Navbar";
import RecentCard from "../components/Programs/RecentNewsCard";
// import Navbar from "../Navbar";
// import Navbar from "../components/Aboutus/Navbar";
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
const Programs2 = () => {
  return (
<>
      {/* <Navbar /> */}

    <div
      id="_46_141__Sermons"
      className="relative overflow-hidden bg-white w-full min-h-screen"
    >

      <div className="mb-20">
        {/* <SermonHero /> */}
        <SermonHero />
      </div>

      <div className="mb-20">
        {/* <Featured /> */}
          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.4 }}
                            variants={fadeScaleUp}
                            className="text-center mb-24"
                          >
        <Featured />
        </motion.div>
      </div>

      <div className="mb-20">
  <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={fadeScaleUp}
                            className="text-center mb-24"
                          >
    <SermonCard />
</motion.div>
    {/* <RecentCard />
    <RecentCard />
    <RecentCard /> */}

      </div>

      {/* Image */}
      <div
        id="_1022_15970__image_3"
        className="h-[56px] w-[64px] mt-20"
        style={{
          background: "url(assets/images/image_3.png) 100% / cover no-repeat",
        }}
      ></div>




    </div>
    </>
  );
};

export default Programs2;
