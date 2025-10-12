// const Donation = () => (
// <>
//       <div
//           id="_1022_15952__sacraments-of-the-ca"
//           className="absolute h-[345.11px] w-[345.11px] left-[1077.00px] top-[7832.00px]"
//           style={{
//             background:
//               "url(assets/images/sacramentsofthecatholicchurchsacramentsofinitiationeucharistbaptismconfirmationothers7f2c8ff9abfb13f1e0c94f52e6119ea4_1.png) 100% / cover no-repeat",
//           }}
//         ></div>

//         <img
//           id="_1002_529__Background"
//           src="assets/images/background_1.svg"
//           alt="Background"
//           className="absolute left-[calc(100%_*_-0.01)] top-[calc(100%_*_0.67)]"
//         />
//         <img
//           id="_1002_533__Testimonial_backgrou"
//           src="assets/images/testimonial_background_1.svg"
//           alt="Testimonial_background"
//           className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.68)]"
//         />
//         <img
//           id="_1002_536__Quote_icon"
//           src="assets/images/quote_icon_1.svg"
//           alt="Quote_icon"
//           className="absolute right-[548.41px] top-[6141.00px]"
//         />
//         <div
//           id="_1002_538__Button"
//           className="absolute bg-[rgba(228,172,67,1.00)] h-[16.00px] w-[54.00px] left-[calc(50%-458.71px)] flex flex-row justify-start items-center flex-nowrap gap-4 px-16 py-6 rounded-[calc(12px_*_1.0)] top-[calc(50%+1767.50px)]"
//         >
//           <span
//             id="I1002_538_118_9__Button_Text"
//             className="flex justify-center text-center items-start h-[16.00px] w-[54.00px] relative"
//           >
//             <span
//               className="whitespace-nowrap bg-[rgba(28,29,40,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[16.00px] uppercase"
//               style={{
//                 fontFamily: "Roboto Condensed",
//               }}
//             >
//               Donate
//             </span>
//           </span>
//         </div>

//         <span
//           id="_1002_539__support_our_mission"
//           className="flex justify-start text-left items-start h-[64.00px] w-[473.75px] absolute right-[950.07px] top-[6038.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-[rgba(21,23,34,1.00)] bg-clip-text text-transparent not-italic text-[48.0px] font-bold leading-[64.00px] tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             support our mission
//           </span>
//         </span>
//         <span
//           id="_1002_540__suport_our_mission_b"
//           className="flex justify-start text-left items-start h-[24.00px] w-[388.78px] absolute opacity-[0.78] right-[1038.90px] top-[6257.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-[rgba(21,23,34,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             suport our mission by donating
//           </span>
//         </span>

//         <div
//           id="_1022_15950__sacraments-of-the-ca"
//           className="absolute h-[449.31px] w-[449.31px] left-[972.07px] top-[5940.99px]"
//           style={{
//             background:
//               "url(assets/images/sacramentsofthecatholicchurchsacramentsofinitiationeucharistbaptismconfirmationothers7f2c8ff9abfb13f1e0c94f52e6119ea4_1_1.png) 100% / cover no-repeat",
//           }}
//         ></div>

//           </>
// )
// export default Donation;

import React from "react";

const Donation = () => (
  <section className="w-full bg-white py-16 px-4 md:px-20 flex flex-col items-center gap-12 text-black">
    {/* Title & Subtitle */}
    <div className="text-center">
      <h2
        className="text-[48px] font-bold leading-[64px] uppercase"
        style={{ fontFamily: "Roboto Condensed" }}
      >
        support our mission
      </h2>
      <p
        className="mt-2 text-[16px] font-normal leading-[24px] opacity-80"
        style={{ fontFamily: "Roboto Condensed" }}
      >
        support our mission by donating
      </p>
    </div>

    {/* Main Content */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Image */}
      <div
        className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-[30px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(assets/images/sacramentsofthecatholicchurchsacramentsofinitiationeucharistbaptismconfirmationothers7f2c8ff9abfb13f1e0c94f52e6119ea4_1_1.png)",
        }}
      ></div>

      {/* Donation Button */}
      <button className="bg-[#E4AC43] text-[16px] font-normal uppercase px-8 py-3 rounded-xl tracking-wide"
        style={{ fontFamily: "Roboto Condensed" }}>
        Donate
      </button>

      {/* Right Image */}
      <div
        className="w-[300px] h-[300px] md:w-[345px] md:h-[345px] rounded-[30px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(assets/images/sacramentsofthecatholicchurchsacramentsofinitiationeucharistbaptismconfirmationothers7f2c8ff9abfb13f1e0c94f52e6119ea4_1.png)",
        }}
      ></div>
    </div>

    {/* Decorative Background Images */}
    <div className="relative w-full">
      <img
        src="assets/images/background_1.svg"
        alt="Background"
        className="absolute left-0 top-1/3 w-1/2 opacity-50 -z-10"
      />
      <img
        src="assets/images/testimonial_background_1.svg"
        alt="Testimonial background"
        className="absolute right-0 top-1/3 w-1/3 opacity-50 -z-10"
      />
      <img
        src="assets/images/quote_icon_1.svg"
        alt="Quote icon"
        className="absolute right-[10%] top-[10%] w-[80px] opacity-50 -z-10"
      />
    </div>
  </section>
);

export default Donation;
