
import React from "react";
import { Link } from "react-router-dom";
const ImgBreakAbout = () => (
    <section className="w-full bg-white text-black relative py-16 px-0 font-['Roboto_Condensed']">
    {/* Section Title */}
    <div className="text-center mb-12 px-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">

      </h2>
    </div>

    {/* Parallax Section */}
    <div
      className="relative w-full h-[480px] md:h-[600px] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('assets/images/5R1A3162.JPG')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,51,102,0.65)] to-black opacity-85 z-0"></div>

      {/* Centered Content */}
     <div className="relative w-full h-[480px] md:h-[600px] bg-fixed bg-center bg-cover"
  style={{
    backgroundImage:
      "url('assets/images/5R1A5842.JPG')",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,51,102,0.65)] to-black opacity-85 z-0"></div>

  {/* Centered Content */}
  <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-20">
    <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-xl max-w-xl text-white space-y-6 shadow-xl animate-fadeInUp max-w-full mx-auto">
      <p className="text-2xl md:text-3xl font-bold uppercase leading-snug">
      Support Our Cause
      </p>
      <div className="text-center mt-12">
        <Link
          to="/donate"
          className="inline-block px-6 py-3 bg-[#e4ac43] text-black uppercase font-semibold tracking-wide rounded hover:bg-[#f1c859] transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  </section>
);

export default ImgBreakAbout;
