
import React, { useState } from "react";
import Navbar from "../components/Aboutus/Navbar";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';

const programsData = [
  {
    title: "Mentorship Program",
    description:
      "Our Mentorship Program connects aspiring professionals with seasoned mentors to guide their career growth and personal development.",
    author: "Dereje",
    date: "May 15, 2024",
    category: "Mentorship",
  },
  {
    title: "Scholarship Opportunities",
    description:
      "We provide scholarship opportunities for outstanding students to pursue higher education and achieve their academic goals.",
    author: "Dereje",
    date: "May 15, 2024",
    category: "Scholarship",
  },
  {
    title: "Training Workshops",
    description:
      "Our workshops equip participants with essential skills in leadership, communication, and entrepreneurship.",
    author: "Dereje",
    date: "May 15, 2024",
    category: "Workshops",
  },
  {
    title: "Internship Placements",
    description:
      "Gain hands-on experience through our internship programs with top organizations and startups.",
    author: "Dereje",
    date: "May 15, 2024",
    category: "Internship",
  },
];

const flipCardStyle = {
  perspective: "1000px",
  height: "280px",       // reduced height
  width: "320px",        // increased width (was 100% before)
  position: "relative",
};


const flipInnerStyle = {
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
  position: "relative",
  height: "100%",
};

const cardFrontBackStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "1rem",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "1.5rem",
  color: "white",
};

const gradientFront = {
  ...cardFrontBackStyle,
  background: "linear-gradient(to bottom right, rgba(30, 58, 138, 0.7), #000000)",
};


const backgroundImageUrl =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80";

const imageBack = {
  ...cardFrontBackStyle,
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transform: "rotateY(180deg)",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const ProgramCard = ({ program }) => {
  const cardRef = React.useRef();

  const handleMouseEnter = () => {
    cardRef.current.style.transform = "rotateY(180deg)";
    cardRef.current.style.animation = "wobble 0.6s ease-in-out";
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateY(0deg)";
    cardRef.current.style.animation = "none";
  };

  return (
    <div
      style={flipCardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} style={flipInnerStyle}>
        {/* Front */}
        <div style={gradientFront}>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.75rem",
              }}
            >
              {program.title}
            </h3>
            <p
              style={{
                opacity: 0.9,
                marginBottom: "1.25rem",
                lineHeight: 1.6,
              }}
            >
              {program.description}
            </p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.875rem",
                opacity: 0.8,
              }}
            >
              <span>By {program.author}</span>
              <span>{program.date}</span>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.2)",
                  padding: "0.25rem 1rem",
                  borderRadius: "9999px",
                }}
              >
                {program.category}
              </span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div style={imageBack}>
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              // padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
             <button
                          onClick={() => handleReadMore(sermon.sc_id)}
                          className="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition"
                        >
                          Read More
                        </button>
            <p style={{ fontSize: "0.875rem", color: "#eee" }}>
              Click to explore full program details and get involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add wobble animation to document head once
const wobbleKeyframes = `
@keyframes wobble {
  0%, 100% { transform: rotateY(180deg) rotate(0deg); }
  25% { transform: rotateY(180deg) rotate(1.5deg); }
  50% { transform: rotateY(180deg) rotate(-1.5deg); }
  75% { transform: rotateY(180deg) rotate(1deg); }
}
`;

if (typeof window !== "undefined" && !document.getElementById("wobble-keyframes")) {
  const styleTag = document.createElement("style");
  styleTag.id = "wobble-keyframes";
  styleTag.innerHTML = wobbleKeyframes;
  document.head.appendChild(styleTag);
}

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter programs based on search term
  const filteredPrograms = programsData.filter(({ title, description }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();
  const handleReadMore = (id) => navigate(`/programdetail/${id}`);


  return (
    <section className="w-full px-4 py-16 bg-gray-50">
      <div style={{ paddingBottom: "2rem" }}>
        {/* <Navbar /> */}
      </div>

      {/* Search Bar */}
      <div
        style={{
          maxWidth: "700px",
          margin: "2rem auto",
          padding: "0 1rem",
          paddingBottom: "2rem",
        }}
      >
        <input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto" style={{ paddingBottom: "3rem" }}>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Programs
        </h2>
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          style={{ gap: "2rem" }}
        >
         {filteredPrograms.map((program, index) => (
  <div
    key={index}
    style={{
      height: "280px",     // match the card height or slightly bigger
      width: "320px",      // match the card width
      padding: "2.5rem",
      boxSizing: "border-box",
    }}
  >
    <ProgramCard program={program} />
  </div>
))}

        </div>
      </div>

      <div style={{ paddingTop: "3rem" }}>
        <Footer />
      </div>
    </section>
  );
};

export default Programs;
