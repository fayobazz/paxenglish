// const NewsHero = () => (
//     <>
//    <div
//           id="_147_133__https___unsplash_com"
//           className="absolute h-[510.00px] w-[1685.00px] left-[110.00px] top-[406.00px]"
//           style={{
//             background:
//               "url(assets/images/image1.png) 100% / cover no-repeat",
//           }}
//         ></div>

//         <span
//           id="_65_531__HOW_TO_SHOW_COMPASSI"
//           className="flex justify-center text-center items-start h-[64.00px] w-[570.00px] absolute right-[675.00px] top-[238.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[48.0px] font-bold leading-[64.00px] tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             HOW TO SHOW COMPASSION&nbsp;
//           </span>
//         </span>
//         <span
//           id="_65_666__By_Mathew_Johnson"
//           className="flex justify-start text-left items-start h-[24.00px] w-[149.61px] absolute right-[836.39px] top-[318.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             By Mathew Johnson
//           </span>
//         </span>
//         <span
//           id="_65_667__13_May__2018"
//           className="flex justify-start text-left items-start h-[24.00px] w-[84.00px] absolute right-[999.00px] top-[318.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             13 May, 2018
//           </span>
//         </span>
//     </>
// )

// export default NewsHero;
// const NewsHero = () => {
//   return (
//     <div className="relative bg-cover bg-center h-[510px] w-full" style={{ backgroundImage: "url(assets/images/image1.png)" }}>
//       <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center text-white space-y-4">
//         <h1 className="text-4xl md:text-5xl font-bold uppercase" style={{ fontFamily: "Roboto Condensed" }}>
//           HOW TO SHOW COMPASSION
//         </h1>
//         <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base" style={{ fontFamily: "Roboto Condensed" }}>
//           <p className="text-white/90">By Mathew Johnson</p>
//           <span className="hidden md:block text-white/50">|</span>
//           <p className="text-white/90">13 May, 2018</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsHero;
const NewsHero = ({ data }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[510px] w-full"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold uppercase" style={{ fontFamily: "Roboto Condensed" }}>
          {data.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base" style={{ fontFamily: "Roboto Condensed" }}>
          <p className="text-white/90">{data.created_by || "Unknown Author"}</p>
          <span className="hidden md:block text-white/50">|</span>
          <p className="text-white/90">{data.created_at || "Unknown Date"}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;

