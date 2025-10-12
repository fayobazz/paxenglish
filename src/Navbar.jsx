// import React from "react";

// const Navbar = () => (
//   <>
//   <div
//           id="_1144_959__image_2"
//           className="absolute h-[67.00px] w-[198.00px] left-[55.00px] top-[7.00px]"
//           style={{
//             background:
//               "linear-gradient(0deg, rgba(0, 0, 0, 0.00)0%, rgba(0, 0, 0, 0.00)100%), url(assets/images/image_2.png) 100% / cover no-repeat",
//           }}
//         ></div>

//         <div
//           id="_546_52__Navbar"
//           className="absolute h-[80.00px] w-[1920.00px] left-[0.00px] top-[0.00px]"
//         >
//           <div
//             id="I546_52_546_22__Artboard_1"
//             className="absolute bg-[linear-gradient(46.57286410758003deg,rgba(0,51,102,0.68)_0.0%,rgba(0,0,0,1.00)_100.0%)] h-[100.00%] w-[100.00%]"
//           ></div>

//           <div
//             id="I546_52_546_44__Nav_button"
//             className="absolute bg-[rgba(228,172,67,1.00)] backdrop-blur-[80.0px] h-[20.00%] w-[2.81%] flex flex-row justify-start items-center flex-nowrap gap-4 px-12 py-5 rounded-[calc(12px_*_1.0)] left-[calc(100%_*_0.83)] top-[calc(100%_*_0.15)]"
//           >
//             <span
//               id="I546_52_546_44_546_42__Button_Text"
//               className="flex justify-center text-center items-start h-[16.00px] w-[54.00px] relative"
//             >
//               <span
//                 className="whitespace-nowrap bg-[linear-gradient(46.57286410758003deg,rgba(0,51,102,0.68)_0.0%,rgba(0,0,0,1.00)_100.0%)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[16.00px] uppercase"
//                 style={{
//                   fontFamily: "Roboto Condensed",
//                 }}
//               >
//                 Donate
//               </span>
//             </span>
//           </div>

//           <span
//             id="I546_52_546_35__Blog"
//             className="flex justify-start text-left items-start h-[23.75%] w-[1.82%] absolute opacity-90 left-[calc(100%_*_0.45)] top-[calc(100%_*_0.39)]"
//           >
//             <span
//               className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal uppercase"
//               style={{
//                 fontFamily: "Roboto Condensed",
//               }}
//             >
//               Blog
//             </span>
//           </span>
//           <span
//             id="I546_52_546_34__Sermon"
//             className="flex justify-start text-left items-start h-[23.75%] w-[2.97%] absolute opacity-90 left-[calc(100%_*_0.38)] top-[calc(100%_*_0.39)]"
//           >
//             <span
//               className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal uppercase"
//               style={{
//                 fontFamily: "Roboto Condensed",
//               }}
//             >
//               Sermon
//             </span>
//           </span>
//           <span
//             id="I546_52_546_32__About_us"
//             className="flex justify-start text-left items-start h-[23.75%] w-[3.44%] absolute opacity-90 left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
//           >
//             <span
//               className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal uppercase"
//               style={{
//                 fontFamily: "Roboto Condensed",
//               }}
//             >
//               About us
//             </span>
//           </span>
//           <span
//             id="I546_52_546_33__Home"
//             className="flex justify-end text-right items-start h-[23.75%] w-[2.08%] absolute opacity-90 left-[calc(100%_*_0.25)] top-[calc(100%_*_0.39)]"
//           >
//             <span
//               className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal uppercase"
//               style={{
//                 fontFamily: "Roboto Condensed",
//               }}
//             >
//               Home
//             </span>
//           </span>
//           <img
//             id="I546_52_546_31__Divider"
//             src="assets/images/divider.svg"
//             alt="Divider"
//             className="absolute rotate-[-90.00deg] scale-x-[-1.0] scale-y-[-1.0] origin-[0_0] left-[calc(100%_*_0.21)]"
//           />
//         </div>

//   </>


// );

// export default Navbar;
import React from "react";

const Navbar = () => (
  <nav className="relative w-full bg-gradient-to-br from-[#003366ad] to-black h-20 flex items-center px-6 max-w-screen-xl mx-auto">
    {/* Logo / Image */}
    <div
      className="h-16 w-48 bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(assets/images/image_2.png)",
      }}
      aria-label="Logo"
    />

    {/* Nav Links */}
    <ul className="flex flex-grow justify-center space-x-12 text-white uppercase font-normal text-base"
        style={{ fontFamily: "Roboto Condensed" }}>
      <li className="cursor-pointer hover:text-[#E4AC43] transition">Home</li>
      <li className="cursor-pointer hover:text-[#E4AC43] transition">About Us</li>
      <li className="cursor-pointer hover:text-[#E4AC43] transition">Sermon</li>
      <li className="cursor-pointer hover:text-[#E4AC43] transition">Blog</li>
    </ul>

    {/* Divider */}
    <img
      src="assets/images/divider.svg"
      alt="Divider"
      className="h-10 mr-6"
      aria-hidden="true"
    />

    {/* Donate Button */}
    <button
      className="bg-[#E4AC43] backdrop-blur-[80px] text-black font-normal uppercase text-sm px-6 py-2 rounded-md shadow-lg hover:bg-yellow-500 transition"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      Donate
    </button>
  </nav>
);

export default Navbar;
