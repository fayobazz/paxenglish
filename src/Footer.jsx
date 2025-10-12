import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_7b30v97", // Service ID
        "template_nfk88r7", // Template ID
        form.current,
        "303YVko4M0RVbgUXi" // Public Key
      )
      .then(
        () => {
          setStatus("Subscribed successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to subscribe. Please try again.");
        }
      );
  };

  return (
    <footer className="w-full bg-[#003366] text-white px-6 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Info with logo on top */}
        <div>
          <div className="mb-4 flex justify-center md:justify-start">
            {/* Replace this src with your small logo path */}
            <img
              src="/assets/images/small-logo.png"
              alt="Small Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-lg font-bold uppercase mb-4">Contact</h2>
          <ul className="space-y-1 text-sm uppercase opacity-80">
            <li>0909090909</li>
            <li>Addis Ababa, Ethiopia</li>
            <li>email@pax.org</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold uppercase mb-4">Quicklinks</h2>
          <ul className="space-y-1 text-sm uppercase opacity-80">
            <li>
              <Link to="/sermon" className="hover:underline">
                Sermons
              </Link>
            </li>
            <li>
              <Link to="/event" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold uppercase mb-4">
            Subscribe to get Latest Updates and News
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              name="user_email"
              required
              placeholder="Yourmail@gmail.com"
              className="flex-1 px-4 py-2 rounded-md bg-transparent border border-white/40 placeholder-white/70 text-white"
            />
            <button
              type="submit"
              className="bg-[#E4AC43] text-black font-semibold uppercase px-6 py-2 rounded-md hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
          {status && <p className="text-sm mt-2 text-green-300">{status}</p>}
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="max-w-screen-xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/20 pt-6">
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/ethiocatholic.addis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/images/vector.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
          </a>
          <a href="https://x.com/CatholicTVEthi2?t=UcMGOZnjh7QIc_4MqjW24A&s=09" target="_blank" rel="noopener noreferrer">
            <img
              src="assets/images/vector_1.svg"
              alt="Twitter"
              className="w-5 h-5"
            />
          </a>
        
          {/* Additional social icons */}
          <a href="https://youtube.com/channel/UChUE_wZXbhQ2Kbz9SaMqFOQ" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/youtube-icon.svg" alt="YouTube" className="w-5 h-5" />
          </a>
          <a href="https://t.me/pax_ctv" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/telegram-icon.svg" alt="Telegram" className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/pax_catholic_tv?igsh=MTkzdDJ0eTcycWEz" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/instagram-icon.svg" alt="Instagram" className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-white/70 uppercase text-center">
          © Copyright Pax CTV 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
