import React, { useEffect, useState } from "react";
import axios from "axios";

const Videos = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/streams");
        setVideoData(res.data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };
    fetchVideos();
  }, []);

  const getYouTubeID = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <section className="relative bg-[#003366] py-20 px-6 min-h-screen font-['Roboto_Condensed'] text-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="uppercase text-5xl font-extrabold tracking-wide text-white">
          Videos and Streams
        </h2>
        <p className="uppercase text-lg mt-2 tracking-wider text-white/80">
          Catch our latest videos
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videoData.map(({ st_title, st_body, st_url }, idx) => {
          const videoId = getYouTubeID(st_url);
          return (
            <div
              key={idx}
              className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:border-[#e4ac43] hover:shadow-yellow-500/30"
            >
              {/* YouTube Video */}
              {videoId ? (
                <iframe
                  className="w-full h-56 rounded-t-xl"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={st_title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-56 bg-gray-800 flex items-center justify-center text-white">
                  Video unavailable
                </div>
              )}

              {/* Text */}
              <div className="p-5 text-white flex flex-col justify-between h-[250px]">
                <h3 className="text-[#e4ac43] font-bold text-lg mb-2">{st_title}</h3>
                <p className="text-sm text-white/90 mb-4 line-clamp-3 whitespace-pre-line">
                  {st_body}
                </p>
                <a
                  href={st_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline uppercase text-xs font-bold text-white/80 hover:text-[#e4ac43] transition"
                >
                  Watch on YouTube
                </a>
              </div>

              {/* Floating Icon */}

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Videos;
