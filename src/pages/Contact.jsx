import React, { useState } from "react";
import Footer from "../Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, subject, message } = formData;

    if (!fullName || !email || !subject || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const mailtoLink = `mailto:info@paxctv.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
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
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight max-w-2xl drop-shadow-xl">
          Get in Touch with Our Church
        </h1>
        <p className="mt-4 text-lg opacity-80 max-w-xl">
          We're here to answer your questions, pray with you, or guide you in your journey with God.
        </p>

        {/* Decorative shapes */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-yellow-400 opacity-20 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 border-4 border-yellow-400 opacity-30 rounded-full animate-spin-slow"></div>
      </section>

      {/* Contact Section */}
      <main className="flex flex-wrap justify-center gap-10 px-6 md:px-16 py-16 max-w-[1200px] mx-auto">
        {/* Contact Form */}
        <form
          className="flex flex-col gap-5 flex-1 min-w-[320px] max-w-[560px] bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-md shadow-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold uppercase mb-4 text-yellow-400">
            Send us a Message
          </h2>

          <label className="flex flex-col gap-1 text-white text-sm font-medium">
            Full Name
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            />
          </label>

          <label className="flex flex-col gap-1 text-white text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            />
          </label>

          <label className="flex flex-col gap-1 text-white text-sm font-medium">
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Prayer Request, Inquiry, etc."
              value={formData.subject}
              onChange={handleChange}
              className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
            />
          </label>

          <label className="flex flex-col gap-1 text-white text-sm font-medium">
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="rounded-md p-3 bg-white bg-opacity-90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none text-black"
            />
          </label>

          <button
            type="submit"
            className="bg-[#e4ac43] text-[#1c1d28] uppercase font-bold text-sm py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Send Message
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

export default Contact;
