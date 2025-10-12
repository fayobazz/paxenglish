
import React from "react";
import SermonHero from "../components/Sermon/SermonHero";
import Featured from "../components/Sermon/Featured";
import SermonCard from "../components/Sermon/SermonCard";
import Navbar from "../components/Aboutus/Navbar";
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
const Sermons = () => {
  return (
<>
      {/* <Navbar /> */}


    <div
      id="_46_141__Sermons"
      className="relative overflow-hidden bg-white w-full min-h-screen"
    >

      {/* <div className="mb-20"> */}
         <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.4 }}
                      variants={fadeScaleUp}
                      className="text-center mb-24"
                    >
        <SermonHero />
        </motion.div>
      {/* </div> */}

      <div className="mb-20">
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
  {/* <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.4 }}
                      variants={fadeScaleUp}
                      className="text-center mb-24"
                    > */}
        <SermonCard />
{/* </motion.div> */}
      </div>

      {/* Image */}
      <div
        id="_1022_15970__image_3"
        className="h-[56px] w-[64px] mt-20"
        style={{
          background: "url(assets/images/image_3.png) 100% / cover no-repeat",
        }}
      ></div>

      {/* Footer */}



    </div>
    </>
  );
};

export default Sermons;
