

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SermonCard = () => {
//   const [sermons, setSermons] = useState([]);
//   const [flippedIndex, setFlippedIndex] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//     const navigate = useNavigate();
//  const [videoData, setVideoData] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await axios.get("https://eng.backend.paxcatholictv.org/sermons");
//         setVideoData(res.data);
//         console.log(res.data);
//       } catch (err) {
//         console.error("Error fetching videos:", err);
//       }
//     };
//     fetchVideos();
//   }, []);

//   useEffect(() => {
//     const fetchAllSermons = async () => {
//       try {
//         const res = await axios.get("https://eng.backend.paxcatholictv.org/sermons");
//         setSermons(res.data);

//         // Extract unique categories, filter out falsy values
//         const uniqueCategories = Array.from(
//           new Set(res.data.map((sermon) => sermon.category).filter(Boolean))
//         );
//         setCategories(uniqueCategories);
//       } catch (err) {
//         console.error("Error fetching sermons:", err);
//       }
//     };
//     fetchAllSermons();
//   }, []);
//    const handleReadMore = (id) => {
//     navigate(`/programdetail/${id}`);
//   };

//   const handleMouseEnter = (index) => setFlippedIndex(index);
//   const handleMouseLeave = () => setFlippedIndex(null);

//   // Filter sermons based on category and search term (case insensitive)
//   const filteredSermonsOriginal = sermons.filter((sermon) => {
//     const matchesCategory =
//       categoryFilter === "All" || sermon.category === categoryFilter;
//     const matchesSearch = sermon.title
//       ?.toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // Duplicate filtered sermons for flip animation
//   const filteredSermons = [...filteredSermonsOriginal, ...filteredSermonsOriginal];
//   const getYouTubeID = (url) => {
//     if (!url) return null;
//     const regExp =
//       /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };
//   return (
//     <section className="max-w-7xl mx-auto p-6">
//       {/* Filters */}

//       <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
//         {/* Category Filter */}
//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="All">All Categories</option>
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </option>
//           ))}
//         </select>

//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search streams by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
//         />
//       </div>
//   <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {videoData.map(({ title, body, sr_url }, idx) => {
//           const videoId = getYouTubeID(sr_url);
//           return (
//             <div
//               key={idx}
//               className="relative bg-gradient-to-b from-[#003366ad] to-black rounded-lg overflow-hidden shadow-lg max-w-[400px] mx-auto min-h-[560px] cursor-pointer transition-transform duration-300 hover:animate-wobble"
//             >
//               {/* YouTube Player */}
//               {videoId ? (
//                 <iframe
//                   className="w-full h-[310px]"
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   title={title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <div className="w-full h-[310px] bg-gray-800 flex items-center justify-center text-white">
//                   Video unavailable
//                 </div>
//               )}

//               {/* Text Content */}
//               <div className="p-6 flex flex-col justify-between h-[calc(100%-310px)]">
//                 <h3
//                   className="text-[#e4ac43] font-normal leading-[20.7px] text-[17px] mb-2 font-['Inter']"
//                 >
//                   {title}
//                 </h3>
//                 <p className="text-[#fcfdff] text-[12px] leading-[19.5px] font-['Inter'] mb-6 whitespace-pre-line">
//                   {body}
//                 </p>
//                 <a
//                   href={sr_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="underline uppercase text-[9.5px] font-bold leading-[11.5px] text-[#fcfdff] font-['Inter']"
//                 >
//                   Watch on YouTube
//                 </a>
//               </div>

//               {/* Icon Overlay */}
//               <div className="absolute bottom-4 left-4 w-[38px] h-[38px] rounded-[30px] border border-white flex items-center justify-center bg-[#e4ac43]">
//                 <img
//                   src="assets/images/vector_18.svg"
//                   alt="Vector icon 1"
//                   className="absolute left-[27%] top-[20%]"
//                 />
//                 <img
//                   src="assets/images/vector_19.svg"
//                   alt="Vector icon 2"
//                   className="absolute left-[38%] top-[43%]"
//                 />
//                 <img
//                   src="assets/images/vector_20.svg"
//                   alt="Vector icon 3"
//                   className="absolute left-[38%] top-[32%]"
//                 />
//                 <img
//                   src="assets/images/vector_21.svg"
//                   alt="Vector icon 4"
//                   className="absolute left-[38%] top-[54%]"
//                 />
//                 <img
//                   src="assets/images/vector_22.svg"
//                   alt="Vector icon 5"
//                   className="absolute left-[38%] top-[64%]"
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>


//       <style jsx>{`
//         .backface-hidden {
//           backface-visibility: hidden;
//           -webkit-backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .perspective {
//           perspective: 1000px;
//         }
//         .wobble {
//           animation: wobble 0.6s ease-in-out;
//         }
//         @keyframes wobble {
//           0% {
//             transform: rotateY(180deg) translateX(0);
//           }
//           15% {
//             transform: rotateY(180deg) translateX(-10px);
//           }
//           30% {
//             transform: rotateY(180deg) translateX(8px);
//           }
//           45% {
//             transform: rotateY(180deg) translateX(-6px);
//           }
//           60% {
//             transform: rotateY(180deg) translateX(4px);
//           }
//           75% {
//             transform: rotateY(180deg) translateX(-2px);
//           }
//           100% {
//             transform: rotateY(180deg) translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SermonCard;
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const fadeScaleUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SermonCard = () => {
  const [sermons, setSermons] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/sermons");
        console.log("Fetched sermons:", res.data); // Debug: check data shape
        setSermons(res.data);

        const uniqueCategories = Array.from(
          new Set(res.data.map((s) => s.category).filter(Boolean))
        );
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching sermons:", err);
      }
    };
    fetchSermons();
  }, []);

  const getYouTubeID = (url) => {
    if (!url) return null;
    const regExp = /^.*(?:youtu.be\/|v\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const filteredBySearch = (sermonList) =>
    sermonList.filter((sermon) =>
      sermon.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const categoriesToDisplay =
    selectedCategory === "All" ? categories : [selectedCategory];

  const sermonsByCategory = categoriesToDisplay
    .map((category) => ({
      category,
      sermons: filteredBySearch(sermons.filter((s) => s.category === category)),
    }))
    .filter(({ sermons }) => sermons.length > 0);

  if (sermons.length === 0) {
    return <p className="text-center text-gray-300 mt-10">Loading sermons...</p>;
  }

  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Search and category filter */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search By Name ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* No sermons found message */}
      {sermonsByCategory.length === 0 && (
        <p className="text-center text-gray-300">ምንም አልተገኘም በፍለጋዎ</p>
      )}

      {/* Render sermons by category */}
      {sermonsByCategory.map(({ category, sermons }) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">{category}</h2>
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sermons.map(({ title, body, sr_url, category }, idx) => {
              const videoId = getYouTubeID(sr_url);
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  variants={fadeScaleUp}
              className="relative bg-[#003366] border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:border-[#e4ac43] hover:shadow-yellow-500/30"

                  // className="relative bg-[#003366] rounded-lg overflow-hidden shadow-lg max-w-[400px] mx-auto min-h-[560px] cursor-pointer"
                >
                  {videoId ? (
                    <iframe
                      className="w-full h-[310px]"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="w-full h-[310px] bg-gray-800 flex items-center justify-center text-white">
                      Video Not Found
                    </div>
                  )}

                  <div className="p-6 flex flex-col justify-between h-[calc(100%-310px)]">
                    <h3 className="text-[#e4ac43] font-normal text-[17px] mb-2 font-['Inter']">
                      {title}
                    </h3>
                    <p className="text-[#fcfdff] text-[12px] mb-6 whitespace-pre-line font-['Inter']">
                      {body}
                    </p>
                    <p className="text-[#fcfdff] text-[12px] mb-6 whitespace-pre-line font-['Inter']">
                      {category}
                    </p>
                    <a
                      href={sr_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline uppercase text-[9.5px] font-bold text-[#fcfdff] font-['Inter']"
                    >
                      Watch On Youtube
                    </a>
                  </div>


                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SermonCard;
