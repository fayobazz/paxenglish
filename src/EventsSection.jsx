// import React from "react";

// const EventsSection = () => (
//   <section className="relative w-full min-h-[300px] bg-white">
//     {/* ...Events section code from Home.jsx... */}
//      {/* {books.map((book, index) => ( */}
// <>
//          <div
//           id="_1002_479__https___www_pexels_c"
//           className="absolute h-[384.00px] w-[337.17px] right-[575.94px] top-[5294.00px]"
//           style={{
//             background:
//               "url(assets/images/httpswwwpexelscomphotoastatueholdingaholybook5613134_1.png) 100% / cover no-repeat",
//           }}
//         ></div>

//         <div
//           id="_1002_480__Overlay"
//           className="absolute bg-[linear-gradient(184.382240554958deg,rgba(6,6,6,0.76)_0.0%,rgba(0,0,0,0.02)_100.0%)] scale-y-[-1.0] origin-[0_0] h-[187.00px] w-[337.17px] scale-x-[1.0] right-[576.94px] top-[5680.00px]"
//         ></div>

//         <span
//           id="_1002_481__WATCH_AND_LISTEN_TO_"
//           className="flex justify-start text-left items-start h-[56.00px] w-[265.72px] absolute right-[130.67px] top-[5510.00px]"
//         >
//           <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[22.0px] font-bold tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//                        fay  {/* `{book.sc_title}`, */}

//           </span>
//           </span>
//           <span
//           id="_1002_481__WATCH_AND_LISTEN_TO_"
//           className="flex justify-start text-left items-start h-[56.00px] w-[265.72px] absolute right-[130.67px] top-[5550.00px]"
//         >
//             <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[12.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//                          {/* `{book.sc_body}`, */}


//           </span>
//         </span>
//          <span
//           id="_1002_481__WATCH_AND_LISTEN_TO_"
//           className="flex justify-start text-left items-start h-[56.00px] w-[265.72px] absolute right-[130.67px] top-[5610.00px]"
//         >
//             <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[12.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//                       {/* Air-Time :-   `{book.air_time}`, */}


//           </span>
//         </span>
//         </>
//           {/* ))} */}
//   </section>
// );

// export default EventsSection;
import React from "react";

const EventsSection = () => (
  <section className="w-full bg-white py-16 px-4 md:px-20 flex justify-center">
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
      {/* Image with overlay */}


      {/* Text Content */}
      <div className="flex flex-col gap-4 text-white">
        <h3
          className="text-[22px] font-bold uppercase"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          fay {/* replace with {book.sc_title} */}
        </h3>
        <p
          className="text-[12px] leading-6 font-normal"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          {/* {book.sc_body} */}
        </p>
        <p
          className="text-[12px] leading-6 font-normal"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          {/* Air-Time: {book.air_time} */}
        </p>
      </div>
    </div>
  </section>
);

export default EventsSection;
