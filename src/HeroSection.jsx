// import React from "react";

// const HeroSection = () => (
//   // <section className="relative w-full min-h-[300px] bg-white">
//   <>
//         <img
//           id="_747_337__Image"
//           src="assets/images/image.svg"
//           alt="Image"
//           className="absolute top-[calc(100%_*_0.01)]"
//         />
//         <span
//           id="_2_482__Serving_as_a_voice_f"
//           className="flex justify-start text-left items-start h-[24.00px] w-[394.24px] absolute right-[808.96px] top-[567.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Serving as a voice for the Ethiopian Catholic Community
//           </span>
//         </span>
//         <img
//           id="_2_483__Line"
//           src="assets/images/line.svg"
//           alt="Line"
//           className="absolute scale-x-[-1.0] scale-y-[-1.0] origin-[0_0] right-[1195.52px] top-[579.00px]"
//         />

//         <span
//           id="_2_477__for_everybody_by_eve"
//           className="flex justify-start text-left items-start h-[164.00px] w-[757.76px] absolute right-[1003.84px] top-[243.00px]"
//         >

//            <div>
//           <h1 className={`font-white text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-black`}>
//             የወንጌልን  <span className='text-[rgba(228,172,67,1.00)]'> ብርሃን ይዘን እንውጣ</span>
//           </h1>
//           <p className={`text-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-black-100`}>

//           </p>
//         </div>
//         </span>
//         <span
//           id="_2_478__Welcome_to_pax_ctv"
//           className="flex justify-start text-left items-start h-[19.00px] w-[238.08px] absolute right-[1003.52px] top-[208.00px]"
//         >
//           <span
//           className="flex justify-start text-left items-start h-[164.00px] w-[757.76px] absolute right-[01.54px] top-[3.00px]"

//             // className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-bold uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Welcome to pax ctv
//           </span>
//         </span>

//         <div
//           id="_1002_471__https___www_pexels_c"
//           className="absolute h-[384.00px] w-[337.17px] left-[1113.91px] top-[5244.00px]"
//           style={{
//             background: "url(assets/images/null) 100% / cover no-repeat",
//           }}
//         ></div>
// </>
//   // </section>
// );

// export default HeroSection;

// import React from "react";

// const HeroSection = () => (
//   <section className="w-full min-h-screen bg-white px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
//     {/* Left: Text Content */}
//     <div className="flex-1 space-y-4">
//       {/* Welcome */}
//       <p
//         className="uppercase text-sm font-semibold text-gray-700 tracking-wide"
//         style={{ fontFamily: "Roboto Condensed" }}
//       >
//         Welcome to pax ctv
//       </p>

//       {/* Headline */}
//       <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//         የወንጌልን{" "}
//         <span className="text-[#E4AC43]">ብርሃን ይዘን እንውጣ</span>
//       </h1>

//       {/* Subtitle */}
//       <p
//         className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium max-w-xl"
//         style={{ fontFamily: "Roboto Condensed" }}
//       >
//         Serving as a voice for the Ethiopian Catholic Community
//       </p>

//       {/* Line Image */}
//       <img
//         src="assets/images/line.svg"
//         alt="Line Decoration"
//         className="w-32 mt-4"
//       />
//     </div>

//     {/* Right: Hero Image */}
//     <div className="flex-1 relative flex items-center justify-center">
//       <img
//         src="assets/images/image.svg"
//         alt="Hero"
//         className="w-full max-w-md object-contain"
//       />
//     </div>
//   </section>
// );

// export default HeroSection;

import React, { useEffect, useState } from "react";
import axios from "axios";
const HeroSection = () => {
   const [isVisible, setIsVisible] = useState(false);
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/hero_home/1");
        setSchedule(res.data);
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchedule();
  }, []);

  if (!schedule || loading) {
    return (
      <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
        <p className="text-center text-red-500 text-lg">Loading...</p>
      </section>
    );
  }

  return(
<>
{/* <Navbar/> */}
<section
  id="hero"
  className="w-full min-h-screen relative bg-cover bg-center px-6 pt-16 pb-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 font-['Roboto_Condensed'] antialiased text-gray-900 scroll-mt-24"
  style={{ backgroundImage: `url(${schedule.image})`, }}
>
  {/* Centering wrapper */}
  <div className="flex-1 flex items-center justify-center">
    {/* Left: Text Content */}
    <div className="space-y-6 relative z-10 max-w-2xl text-center -mt-10">
      {/* <p className="uppercase text-[13px] tracking-widest font-semibold text-gray-600">
        Welcome to pax ctv
      </p> */}

      <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white">
        {schedule.subtitle}
      </p>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-snug tracking-tight text-white">
       {schedule.title}
      </h1>

      {/*
      <img
        src="assets/images/line.svg"
        alt="Line Decoration"
        className="w-28 sm:w-32 mt-4 mx-auto"
      />
      */}
    </div>
  </div>
</section>


  </>
);
}
export default HeroSection;
