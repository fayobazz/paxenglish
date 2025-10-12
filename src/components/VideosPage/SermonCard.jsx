import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SermonCard = () => {
  const [videoData, setVideoData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/streams");
        setVideoData(res.data);

        const uniqueCategories = Array.from(
          new Set(res.data.map((video) => video.category).filter(Boolean))
        );
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };
    fetchVideos();
  }, []);

  const getYouTubeID = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Group videos by category
  const groupedVideos = videoData.reduce((acc, video) => {
    const cat = video.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(video);
    return acc;
  }, {});

  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search By Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
        />
      </div>

      {/* Grouped Video Sections */}
      {Object.entries(groupedVideos).map(([category, videos]) => {
        if (
          categoryFilter !== "All" &&
          categoryFilter.toLowerCase() !== category.toLowerCase()
        )
          return null;

        const filteredVideos = videos.filter((video) =>
          video.st_title?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredVideos.length === 0) return null;

        return (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-[#222] mb-6 border-b pb-2 uppercase">
              {category}
            </h3>

            <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredVideos.map(({ st_title, st_body, st_url }, idx) => {
                const videoId = getYouTubeID(st_url);
                return (
                  <div
                    key={idx}
              className="relative bg-[#003366] border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:border-[#e4ac43] hover:shadow-yellow-500/30"

                    // className="relative bg-[#003366] rounded-lg overflow-hidden shadow-lg max-w-[400px] mx-auto min-h-[560px] cursor-pointer transition-transform duration-300 hover:animate-wobble"
                  >
                    {videoId ? (
                      <iframe
                        className="w-full h-[310px]"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={st_title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="w-full h-[310px] bg-gray-800 flex items-center justify-center text-white">
                        ቪዲዮ አልተገኘም
                      </div>
                    )}

                    <div className="p-6 flex flex-col justify-between h-[calc(100%-310px)]">
                      <h3 className="text-[#e4ac43] font-normal leading-[20.7px] text-[17px] mb-2 font-['Inter']">
                        {st_title}
                      </h3>
                      <p className="text-[#fcfdff] text-[12px] leading-[19.5px] font-['Inter'] mb-6 whitespace-pre-line">
                        {st_body}
                      </p>
                      <a
                        href={st_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline uppercase text-[9.5px] font-bold leading-[11.5px] text-[#fcfdff] font-['Inter']"
                      >
                        Watch on YouTube
                      </a>
                    </div>


                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .perspective {
          perspective: 1000px;
        }
        .wobble {
          animation: wobble 0.6s ease-in-out;
        }
        @keyframes wobble {
          0% {
            transform: rotateY(180deg) translateX(0);
          }
          15% {
            transform: rotateY(180deg) translateX(-10px);
          }
          30% {
            transform: rotateY(180deg) translateX(8px);
          }
          45% {
            transform: rotateY(180deg) translateX(-6px);
          }
          60% {
            transform: rotateY(180deg) translateX(4px);
          }
          75% {
            transform: rotateY(180deg) translateX(-2px);
          }
          100% {
            transform: rotateY(180deg) translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SermonCard;
