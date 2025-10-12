import React, { useState } from "react";
import emailjs from "emailjs-com";

const Community = () => {
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
        "service_7b30v97",      // ✅ Your Service ID
        "template_nfk88r7",     // ✅ Your Template ID
        templateParams,
        "303YVko4M0RVbgUXi"     // ✅ Your Public Key
      )
      .then(
        () => {
          setMessage("✅ Successfully joined the community!");
          setEmail("");
          setStatus("success");
        },
        (error) => {
          console.error(error);
          setMessage("❌ Failed to join. Please try again.");
          setStatus("error");
        }
      );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Large background image */}
      <div
        className="w-full h-[400px] bg-cover bg-center rounded-lg mb-12"
        style={{
          backgroundImage: "url(assets/images/image_2.png)",
        }}
        aria-hidden="true"
      ></div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto text-left">
        <h2
          className="text-3xl font-bold uppercase mb-4"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          Join the community
        </h2>
        <p
          className="text-base opacity-80 mb-6"
          style={{ fontFamily: "Roboto Condensed" }}
        >
          By signing up to our newsletter become our beloved member
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded text-black border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`px-6 py-3 bg-[#e4ac43] text-black uppercase font-semibold tracking-wide rounded hover:bg-[#f1c859] transition-colors ${
              status === "loading" && "opacity-50 cursor-not-allowed"
            }`}
          >
            {status === "loading" ? "Joining..." : "Join Now"}
          </button>
        </form>
        {message && (
          <p
            className={`mt-3 text-sm ${
              status === "success"
                ? "text-green-600"
                : status === "error"
                ? "text-red-600"
                : ""
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* Smaller images grid */}
  
    </section>
  );
};

export default Community;
