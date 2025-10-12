import React, { useState } from "react";
import Footer from "../Footer";

const Donate = () => {
  const id = window.crypto.randomUUID();

  const [formData, setFormData] = useState({
    amount: "",
    phone: "",
    first_name: "",
    last_name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const { amount, phone, first_name, last_name } = formData;

    if (!amount || !phone || !first_name || !last_name) {
      e.preventDefault();
      alert("Please fill in all required fields before submitting.");
    }
  };

  return (
    <div className="min-h-screen text-white font-['Roboto_Condensed'] flex flex-col pt-20 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#002244]">
      {/* Hero Section */}
      <section
        className="relative w-full h-[480px] bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-16 pt-2 overflow-hidden max-w-[1200px] mx-auto"
        style={{
          backgroundImage:
            "url(assets/images/httpsunsplashcomphotos6liebveafry.png)",
        }}
      >
        <p className="mb-2 text-[#ffd1a3] uppercase font-semibold text-lg tracking-wider drop-shadow-lg">
          Donate
        </p>
        {/* <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight max-w-2xl drop-shadow-xl">
          Get in Touch with Our Church
        </h1>
        <p className="mt-4 text-lg opacity-80 max-w-xl">
          We're here to answer your questions, pray with you, or guide you in your journey with God.
        </p> */}

        <div className="absolute top-8 left-8 w-20 h-20 bg-yellow-400 opacity-20 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 border-4 border-yellow-400 opacity-30 rounded-full animate-spin-slow"></div>
      </section>

      {/* Contact Section */}
      <main className="flex flex-wrap justify-center gap-10 px-6 md:px-16 py-16 max-w-[1200px] mx-auto">
        {/* Contact Form */}
        <form
          method="POST"
          className="flex flex-col gap-5 flex-1 min-w-[320px] max-w-[560px] bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md"
          action="https://api.chapa.co/v1/hosted/pay"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="public_key" value="CHAPUBK-R06LIVLN2LNzbypcNgEsB2GS0zKNuqBc" />
          <input type="hidden" name="tx_ref" value={id} />
          <input
            type="number"
            placeholder="How much would you like to donate?"
            className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <input type="hidden" name="currency" value="ETB" />
          <input
            type="number"
            placeholder="Enter your Phone Number"
            className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter First Name"
            className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <input type="hidden" name="title" value="Thank you for donating to PAX" />
          <input
            type="text"
            placeholder="Enter Message"
            className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
          {/* <input type="hidden" name="callback_url" value="https://example.com/callbackurl" /> */}
          {/* <input type="hidden" name="return_url" value="https://example.com/returnurl" /> */}
          <input type="hidden" name="meta[title]" value="Chapa" />
          <button
            className="bg-[#e4ac43] text-[#1c1d28] uppercase font-normal text-[16px] py-3 rounded-lg hover:bg-yellow-500 transition"
            type="submit"
          >
            Pay Now
          </button>
        </form>

        {/* Contact Info */}
        <aside className="flex flex-col gap-8 flex-1 min-w-[280px] max-w-[480px] text-white">
          <div>
            <h2 className="text-[24px] uppercase font-bold tracking-wide mb-4">
              Contact Info
            </h2>
            <p className="mb-3 text-sm opacity-90">
              📍 Address: Anbessa Garage Addis Ababa, Ethiopia
            </p>
            <p className="mb-3 text-sm opacity-90">
              📞 Phone: +251 911 234 567
            </p>
            <p className="mb-3 text-sm opacity-90">
              📧 Email: info@paxctv.org
            </p>
          </div>
        </aside>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Donate;
