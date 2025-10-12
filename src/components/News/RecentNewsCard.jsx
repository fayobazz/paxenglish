// const NewsCard = () => (
//     <>

//   <div
//           id="_1012_1377__Background"
//           className="absolute bg-[linear-gradient(46.57286410758003deg,rgba(0,51,102,0.68)_0.0%,rgba(0,0,0,1.00)_100.0%)] scale-y-[-1.0] origin-[0_0] h-[367.00px] w-[302.00px] scale-x-[1.0] right-[1424.00px] top-[2995.00px]"
//         ></div>

//         <div
//           id="_1012_1378__Bottom_line"
//           className="absolute bg-[rgba(228,172,67,1.00)] scale-y-[-1.0] origin-[0_0] h-[16.00px] w-[302.00px] scale-x-[1.0] right-[1424.00px] top-[2995.00px]"
//         ></div>

//         <span
//           id="_1012_1380__Tuesday_13_May__2018"
//           className="flex justify-start text-left items-start h-[24.00px] w-[145.45px] absolute right-[1548.55px] top-[2923.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Tuesday 13 May, 2018
//           </span>
//         </span>
//         <span
//           id="_1012_1381__By_Mathew_Johnson"
//           className="flex justify-start text-left items-start h-[21.00px] w-[149.61px] absolute right-[1544.39px] top-[2898.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-normal"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             By Mathew Johnson
//           </span>
//         </span>
//         <span
//           id="_1012_1382__Lorem_ipsum_dolor_si"
//           className="flex justify-start text-left items-start h-[72.00px] w-[238.00px] absolute opacity-[0.78] right-[1456.00px] top-[2778.00px]"
//         >
//           <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore.
//           </span>
//         </span>
//         <span
//           id="_1012_1383__THE_BEST_WAY_TO_INSP"
//           className="flex justify-start text-left items-start h-[56.00px] w-[218.00px] absolute right-[1476.00px] top-[2706.00px]"
//         >
//           <span
//             className="bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-bold tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             THE BEST WAY TO INSPIRE PEOPLE
//           </span>
//         </span>
//         <span
//           id="_1012_1384__Relationship"
//           className="flex justify-start text-left items-start h-[14.00px] w-[84.00px] absolute right-[1610.00px] top-[2676.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-[rgba(228,172,67,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-bold tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             Relationship
//           </span>
//         </span>
//         <span
//           id="_51_146__Heading"
//           className="flex justify-center text-center items-start h-[64.00px] w-[276.00px] absolute left-[calc(50%-261.00px)] top-[750.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-[rgba(21,23,34,1.00)] bg-clip-text text-transparent not-italic text-[48.0px] font-bold leading-[64.00px] tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             recent news
//           </span>
//         </span>
//         <span
//           id="_1087_964__Heading"
//           className="flex justify-center text-center items-start h-[64.00px] w-[257.00px] absolute left-[calc(50%-252.00px)] top-[1640.00px]"
//         >
//           <span
//             className="whitespace-nowrap bg-[rgba(21,23,34,1.00)] bg-clip-text text-transparent not-italic text-[48.0px] font-bold leading-[64.00px] tracking-[0px] uppercase"
//             style={{
//               fontFamily: "Roboto Condensed",
//             }}
//           >
//             BLOG POSTS&nbsp;
//           </span>
//         </span>
//     </>
// )

// export default NewsCard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../Aboutus/Navbar";

// const NewsCard = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get("https://eng.backend.paxcatholictv.org/posts");
//         setBooks(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   return (
//     <section className="py-16 bg-white text-white font-['Roboto_Condensed']">
//       <Navbar />
//       <div className="container mx-auto px-4 space-y-20">
//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-[48px] font-bold uppercase text-[#151722] leading-[64px]">
//             recent news
//           </h2>
//         </div>

//         {/* Cards Container */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {books.length === 0 ? (
//             <p className="text-black col-span-full text-center">Loading posts...</p>
//           ) : (
//             books.map((book) => (
//               <div
//                 key={book.id || book._id}
//                 className="bg-gradient-to-br from-[rgba(0,51,102,0.68)] to-black rounded-md overflow-hidden mx-auto"
//                 style={{ maxWidth: "600px" }}
//               >
//                 <div className="p-6 space-y-4">
//                   <p className="text-[12px] font-bold uppercase text-[rgba(228,172,67,1)]">
//                     {book.category || "General"}
//                   </p>
//                   <h3 className="text-[24px] font-bold uppercase">
//                     {book.title || "No Title"}
//                   </h3>
//                   <p className="text-[16px] opacity-80 leading-6">
//                     {book.body || "No description available for this news post."}
//                   </p>
//                   <div className="text-sm space-y-1">
//                     <p className="text-white">
//                       {book.created_at
//                         ? new Date(book.date).toLocaleDateString()
//                         : "No Date"}
//                     </p>
//                     <p className="text-white text-[18px]">
//                       By {book.author || "Unknown Author"}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="h-4 bg-[rgba(228,172,67,1)]"></div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Blog Posts Heading */}
//         <div className="text-center">
//           <h2 className="text-[48px] font-bold uppercase text-[#151722] leading-[64px]">
//             BLOG POSTS
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsCard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Aboutus/Navbar";

const RecentCard = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/posts");
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleReadMore = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <section className="py-16 bg-white text-white font-['Roboto_Condensed']">
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 space-y-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[48px] font-bold uppercase text-[#151722] leading-[64px]">
            recent news
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {books.length === 0 ? (
            <p className="text-black col-span-full text-center">Loading posts...</p>
          ) : (
            books.map((book) => (
              <div
                key={book.id || book._id}
                className="w-full max-w-[560px] bg-[#003366] rounded-md overflow-hidden mx-auto flex flex-col"
              >
                {/* Image on top */}
                <img
                  src={book.image}
                  alt={book.title || "News Image"}
                  className="w-full h-48 object-cover rounded-t-md"
                />

                {/* Content with background overlay */}
                <div className="p-6 space-y-4 bg-[#003366] backdrop-blur-sm flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-[12px] font-bold uppercase text-[rgba(228,172,67,1)]">
                      {book.category || "General"}
                    </p>
                    <h3 className="text-[24px] font-bold uppercase">
                      {book.title || "No Title"}
                    </h3>
                    <p className="text-[16px] opacity-80 leading-6 line-clamp-3">
                      {book.body || "No description available for this news post."}
                    </p>
                  </div>

                  <div className="text-sm space-y-1">
                    <p className="text-white">
                      {book.created_at
                        ? new Date(book.date).toLocaleDateString()
                        : "No Date"}
                    </p>
                    <p className="text-white text-[18px]">
                      By {book.author || "Unknown Author"}
                    </p>
                  </div>

                  <button
                    onClick={() => handleReadMore(book.id || book._id)}
                    className="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition self-start"
                  >
                    Read More
                  </button>
                </div>

                <div className="h-4 bg-[rgba(228,172,67,1)] rounded-b-md"></div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default RecentCard;
