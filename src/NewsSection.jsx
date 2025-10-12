import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const [books, setBooks] = useState([]);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('https://eng.backend.paxcatholictv.org/posts');
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllBooks();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  // Auto scroll setup
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }, 4000); // change every 4 seconds
  };

  const pauseAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <section
      className="relative bg-[#003366] text-white py-24 px-6 overflow-hidden font-['Roboto_Condensed']"
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="text-center mb-16">
        <p className="uppercase text-sm tracking-widest mb-2 text-gray-300">Recent News</p>
        <h2 className="text-5xl font-extrabold uppercase text-white drop-shadow-xl">News And Blogs</h2>
      </div>

      {/* Arrows */}
      <button onClick={scrollLeft} className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-[#E4AC43] hover:bg-yellow-600 text-black p-2 rounded-full shadow-lg">
        <ChevronLeft size={24} />
      </button>
      <button onClick={scrollRight} className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-[#E4AC43] hover:bg-yellow-600 text-black p-2 rounded-full shadow-lg">
        <ChevronRight size={24} />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth scrollbar-hide px-2"
      >
        {[...books, ...books].map((book, index) => {
          const bookId = book._id || book.id;
          return (
            <Link
              key={`${bookId}-${index}`}
              to={`/news/${bookId}`}
              className="relative min-w-[320px] max-w-[320px] h-96 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center group hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${book.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366cc] via-black/50 to-transparent z-0" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 backdrop-blur-lg bg-white/10 rounded-t-xl text-white">
                <h2 className="text-xl font-bold uppercase mb-1 truncate">{book.title}</h2>
                <p className="text-sm line-clamp-2">{book.body}</p>
                <p className="text-xs italic mt-2 opacity-80">Author: {book.created_by}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/news/${bookId}`);
                  }}
                  className="mt-4 inline-block bg-[#E4AC43] text-black text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Read More
                </button>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/news"
          className="inline-block px-8 py-4 bg-[#e4ac43] text-black text-base font-bold uppercase tracking-wider rounded-xl hover:bg-[#f1c859] transition-colors shadow-md"
        >
          View all News
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
