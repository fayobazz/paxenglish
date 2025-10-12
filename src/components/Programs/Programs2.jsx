
import React from "react";
import SermonHero from "../components/Sermon/SermonHero";
import Featured from "../components/Sermon/Featured";
import SermonCard from "../components/Sermon/SermonCard";
import Navbar from "../components/Aboutus/Navbar";
// import Navbar from "../Navbar";
// import Navbar from "../components/Aboutus/Navbar";

const Programs2 = () => {
  return (
<>
      {/* <Navbar /> */}
    <div style={{ paddingBottom: "5rem" }}>
        <Navbar />
      </div>

    <div
      id="_46_141__Sermons"
      className="relative overflow-hidden bg-white w-full min-h-screen"
    >

      <div className="mb-20">
        <SermonHero />
      </div>

      <div className="mb-20">
        <Featured />
      </div>

      <div className="mb-20">
        <SermonCard />
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
      <footer
        id="_1022_15972__Footer"
        className="relative mt-32 bg-gradient-to-br from-[#003366ad] to-[#000000] rounded-lg p-10 text-white"
        style={{ rotate: "-0.32deg" }}
      >
        <div className="flex flex-wrap justify-between items-center gap-8 max-w-7xl mx-auto">

          {/* Left Section */}
          <div className="flex flex-col max-w-md space-y-4">
            <h2
              className="text-2xl font-bold uppercase tracking-wide"
              style={{ fontFamily: "Roboto Condensed" }}
            >
              Subscribe to get Latest Updates and News
            </h2>
            <div className="relative w-full max-w-xs">
              <input
                type="email"
                placeholder="Yourmail@gmail.com"
                className="w-full px-4 py-2 rounded border border-white/15 bg-transparent text-white placeholder-white"
                style={{ fontFamily: "Roboto Condensed" }}
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-black font-bold uppercase px-4 py-1 rounded"
                style={{ fontFamily: "Roboto Condensed" }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 items-center" style={{ fontFamily: "Roboto Condensed" }}>
            <span>Connect</span>
            <img src="assets/images/vector.svg" alt="Facebook" className="h-6 w-6" />
            <img src="assets/images/vector_1.svg" alt="Twitter" className="h-6 w-6" />
            <img src="assets/images/vector_2.svg" alt="LinkedIn" className="h-6 w-6" />
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col space-y-2 text-sm opacity-80 uppercase font-normal" style={{ fontFamily: "Roboto Condensed" }}>
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#sermons" className="hover:underline">Sermons</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#blog" className="hover:underline">Blog</a>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col space-y-1 text-sm opacity-80" style={{ fontFamily: "Roboto Condensed" }}>
            <span>email@pax.org</span>
            <span>addis ababa, ethiopia</span>
            <span>0909090909</span>
          </div>

          {/* Copyright */}
          <div className="text-xs opacity-80 text-center w-full mt-6" style={{ fontFamily: "Roboto Condensed" }}>
            © Copyright pax ctv 2025
          </div>
        </div>
      </footer>


    </div>
    </>
  );
};

export default Programs2;
