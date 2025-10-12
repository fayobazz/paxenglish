import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Aboutus/Navbar";
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

const wobbleHover = {
  rotate: [0, -5, 5, -5, 5, 0],
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};

const NewsCard = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("https://eng.backend.paxcatholictv.org/posts");
        setBooks(res.data);
        const uniqueCategories = Array.from(
          new Set(res.data.map((book) => book.category).filter(Boolean))
        );
        setCategories(uniqueCategories);
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeScaleUp}
        className="text-center mb-24"
      >
        <div className="container mx-auto px-4 space-y-20">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-[48px] font-bold uppercase text-[#151722] leading-[64px]">
              News
            </h2>

            {/* Search input */}
            <div className="flex justify-center max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search By Name ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* News grouped by category */}
          {categories.map((category) => {
            const categoryBooks = books.filter((book) => {
              return (
                book.category === category &&
                book.title?.toLowerCase().includes(searchTerm.toLowerCase())
              );
            });

            if (categoryBooks.length === 0) return null;

            return (
              <div key={category} className="space-y-10">
                <h3 className="text-3xl font-semibold text-[#151722] text-left uppercase border-b pb-2">
                  {category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {categoryBooks.map((book, idx) => (
                    <motion.div
                      key={book.id || book._id}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeScaleUp}
                      transition={{ delay: idx * 0.2 }}
                      whileHover={wobbleHover}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full max-w-[560px] bg-[#003366] to-black rounded-md overflow-hidden mx-auto flex flex-col">
                        <img
                          src={book.image}
                          alt={book.title || "News Image"}
                          className="w-full h-48 object-cover rounded-t-md"
                        />

                        <div className="p-6 space-y-4 bg-[#003366] backdrop-blur-sm flex-grow flex flex-col justify-between">
                          <div>
                            <p className="text-[12px] font-bold uppercase text-[rgba(228,172,67,1)]">
                              {book.category || "General"}
                            </p>
                            <h3 className="text-[24px] font-bold uppercase">
                              {book.title || "No Title"}
                            </h3>
                            <p className="text-[16px] opacity-80 leading-6 line-clamp-3">
                              {book.body ||
                                "No description available for this news post."}
                            </p>
                          </div>

                          <div className="text-sm space-y-1">
                            <p className="text-white">
                              {book.created_at
                                ? new Date(book.created_at).toLocaleDateString()
                                : "No Date"}
                            </p>
                            <p className="text-white text-[18px]">
                              By {book.author || "Unknown Author"}
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              handleReadMore(book.id || book._id)
                            }
                            className="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition self-start"
                          >
                            Read More
                          </button>
                        </div>
                        <div className="h-4 bg-[rgba(228,172,67,1)] rounded-b-md"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* If no results after search */}
          {books.length > 0 && categories.every((cat) =>
            books
              .filter((b) => b.category === cat)
              .every(
                (book) =>
                  !book.title
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
          ) && (
            <p className="text-black col-span-full text-center">
              Nothing Found for "{searchTerm}"
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default NewsCard;
