
import React, { useState } from "react";
import emailjs from "emailjs-com";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus("loading");

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_7b30v97",         // ✅ Your Service ID
        "template_nfk88r7",        // ✅ Your Template ID
        templateParams,
        "303YVko4M0RVbgUXi"        // ✅ Your Public Key
      )
      .then(
        () => {
          setMessage("✅ Subscribed successfully!");
          setEmail("");
          setStatus("success");
        },
        (error) => {
          console.error(error);
          setMessage("❌ Failed to subscribe. Try again.");
          setStatus("error");
        }
      );
  };

  return (
    <section className="w-full bg-white text-black relative py-16 px-0 font-['Roboto_Condensed']">
      {/* Section Title */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">
          Newsletter
        </h2>
      </div>

      {/* Parallax Section */}
      <div
        className="relative w-full h-[480px] md:h-[600px] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('assets/images/5R1A9976.JPG')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,51,102,0.65)] to-black opacity-85 z-0"></div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-20">
          <form
            onSubmit={handleSubscribe}
            className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-xl max-w-xl text-white space-y-6 shadow-xl w-full max-w-lg mx-auto"
          >
            <p className="text-2xl md:text-3xl font-bold uppercase leading-snug text-center">
              Subscribe To Our Newsletter
            </p>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`inline-block px-6 py-3 bg-[#e4ac43] text-black uppercase font-semibold tracking-wide rounded hover:bg-[#f1c859] transition-colors ${
                  status === "loading" && "opacity-50 cursor-not-allowed"
                }`}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {message && (
              <p
                className={`text-center text-sm ${
                  status === "success"
                    ? "text-green-300"
                    : status === "error"
                    ? "text-red-300"
                    : ""
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
