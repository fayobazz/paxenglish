// const Featured = () => (
// <>
// <div
//           id="_752_373__https___www_pexels_c"
//           className="absolute h-[459.00px] w-[1283.00px] left-[00px] top-[806.00px]"
//           style={{
//             background:
//               "url(assets/images/httpswwwpexelscomphotoamanandwomanwearingangelcostumes8513040.png) 100% / contain no-repeat",
//           }}
//         ></div>

//         <div
//           id="_752_375__Background"
//           className="absolute bg-[linear-gradient(46.57286410758003deg,rgba(0,51,102,0.68)_0.0%,rgba(0,0,0,1.00)_100.0%)] h-[458.65px] w-[436.02px] left-[105.00px] top-[806.00px]"
//         ></div>

//         <div
//           id="_752_377__Button_secondary"
//           className="absolute bg-white backdrop-blur-[80.0px] h-[16.00px] w-[48.00px] flex flex-row justify-start items-center flex-nowrap gap-4 px-16 py-6 rounded-[calc(12px_*_1.0)] left-[194.21px] top-[1152.68px]"
//         >
//           <span
//             id="I752_377_528_20__Button_text"
//             className="flex justify-center text-center items-start h-[16.00px] w-[48.00px] relative"
//           >
//             <span
//               className="whitespace-nowrap bg-[linear-gradient(46.57286410758003deg,rgba(0,51,102,0.68)_0.0%,rgba(0,0,0,1.00)_100.0%)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[16.00px] uppercase"
//               style={{
//                 fontFamily: "Roboto Condensed",
//               }}
//             >
//               Watch
//             </span>
//           </span>
//         </div>

//         <span
//           id="_752_379__Anbessa_Garage__Addi"
//           className="flex justify-start text-left items-start h-[64.50px] w-[184.43px] absolute right-[1505.48px] top-[1065.00px]"
//         >
//           <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Anbessa Garage,
//             <br />
//             Addis Ababa <br />
//             Ethiopia
//           </span>
//         </span>


//         <span
//           id="_752_384__Sunday_23_39_L_T_Mon"
//           className="flex justify-start text-left items-start h-[43.00px] w-[137.32px] absolute right-[1555.48px] top-[1023.68px]"
//         >
//           <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Sunday 23:39 L.T Monda 11:20 L.T
//           </span>
//         </span>


//         <span
//           id="_752_387__Upcoming_Sunday_Serm"
//           className="flex justify-start text-left items-start h-[21.50px] w-[256.60px] absolute opacity-[0.78] right-[1479.40px] top-[985.37px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Upcoming Sunday Sermon
//           </span>
//         </span>
//         <span
//           id="_752_388__WATCH_AND_LISTEN_TO_"
//           className="flex justify-start text-left items-start h-[50.17px] w-[210.49px] absolute right-[1525.51px] top-[920.87px]"
//         >
//           <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-bold tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             WATCH AND LISTEN TO OUR SERMONS
//           </span>
//         </span>
//         <span
//           id="_752_389__Up_coming_Events"
//           className="flex justify-start text-left items-start h-[12.54px] w-[103.24px] absolute right-[1632.76px] top-[894.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-[linear-gradient(46.57286410758003deg,rgba(0,51,102,0.68)_0.0%,rgba(0,0,0,1.00)_100.0%)] bg-clip-text text-transparent not-italic text-[12.0px] font-bold tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Upcoming Event
//           </span>
//         </span>

//         <span
//           id="_752_391__20"
//           className="flex justify-start text-left items-start h-[25.08px] w-[25.06px] absolute right-[991.06px] top-[834.67px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-bold tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             20
//           </span>
//         </span>
//         <span
//           id="_752_392__JULY"
//           className="flex justify-start text-left items-start h-[17.02px] w-[31.07px] absolute right-[992.06px] top-[859.75px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             JULY
//           </span>
//         </span>
//         </>
// )
// export default Featured;
import { useEffect, useState } from "react";
import axios from "axios";
const Featured = () => {
     const [schedule, setSchedule] = useState(null);
   useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/streams/2");
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
        <p className="text-center text-red-500">Failed to load schedule data.</p>
      </section>
    );
  }
  return(
    <>
        <div className="text-center mb-12 px-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">
        Video Stream
      </h2>
    </div>
  <section className="relative max-w-[1280px] mx-auto mt-20 px-6">
    {/* Background Image */}
       <div
        className="h-[460px] rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
        style={{ backgroundImage: `url(${schedule.st_image})` }}
      />

    {/* <div
      className="h-[460px] rounded-xl shadow-lg bg-[url('assets/images/httpswwwpexelscomphotoamanandwomanwearingangelcostumes8513040.png')] bg-cover bg-center bg-no-repeat"
      aria-hidden="true"
    /> */}

    {/* Gradient overlay block with text inside */}
    <div
      className="absolute top-0 left-0 h-[400px] w-[430px] rounded-xl bg-[#003366] opacity-90 shadow-xl p-8 flex flex-col justify-center text-white font-['Roboto_Condensed']"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
    >


      {/* Text Content */}
      <div className="space-y-5">
        <p className="uppercase text-xs font-bold tracking-widest text-blue-400">
          Featured Stream
        </p>

        <h2 className="uppercase font-extrabold text-3xl leading-tight tracking-tight drop-shadow-md">
          {/* Watch and Listen to Our Sermons */}
          {schedule.st_title}
          {}
        </h2>

        <p className="text-lg font-medium leading-relaxed text-gray-300">
          {/* Upcoming Sunday Sermon */}
          {schedule.st_body}

        </p>

        {/* <div className="flex items-baseline space-x-4">
          <p className="text-5xl font-extrabold uppercase drop-shadow-lg">
            20
          </p>
          <p className="uppercase text-xl font-semibold text-blue-300 tracking-wide">
            JULY
          </p>
        </div> */}

        {/* <address className="not-italic text-lg leading-6 text-gray-200">
          Anbessa Garage,
          <br />
          Addis Ababa,
          <br />
          Ethiopia
        </address> */}

        <p className="text-lg leading-6 text-gray-300">
          {schedule.created_at}
          {/* Sunday 23:39 L.T &nbsp;&nbsp; Monday 11:20 L.T */}
        </p>
          {/* Button */}
     <button
  type="button"
  onClick={() => window.open(schedule.st_url, '_blank')}
  className="mb-8 px-8 py-3 rounded-lg font-semibold uppercase tracking-wider bg-[#e4ac43] hover:from-[#002244] hover:to-[#111111] transition-colors duration-300 shadow-lg shadow-black/50"
  style={{ letterSpacing: '0.1em' }}
>
  Watch On Youtube
</button>
      </div>
    </div>
  </section>
  </>
);
}
export default Featured;
