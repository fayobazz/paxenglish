import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const fadeScaleUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const ParallaxImage = () => {
  const containerRef = useRef(null);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // triggers between enter and leave
  });

  // Parallax movement: image Y moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-[660px] rounded-3xl overflow-hidden shadow-xl border border-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeScaleUp}
      transition={{ delay: 0.5 }}
    >
      <motion.img
        src="assets/images/image_2.png"
        alt="PAX Journey"
        className="object-contain w-full h-full"
        style={{ y }}
      />
    </motion.div>
  );
};

export default ParallaxImage;
