
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Programs = () => {
  const [books, setBooks] = useState([]);
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('https://eng.backend.paxcatholictv.org/scheduele');
        setBooks([...res.data, ...res.data]); // Duplicate for infinite illusion
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllBooks();
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 340, behavior: 'smooth' });
  };

  useEffect(() => {
    const autoScroll = () => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      }
      timeoutRef.current = setTimeout(autoScroll, 4000);
    };

    timeoutRef.current = setTimeout(autoScroll, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, []);
  const handleReadMore = (id) => navigate(`/programdetail/${id}`);
  const navigate = useNavigate();

  return (
    <section className="relative bg-white text-gray-800 py-24 px-6 font-['Roboto_Condensed']">
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest mb-2 text-gray-500">Today's Programs</p>
        <h2 className="text-4xl font-bold uppercase">TV Schedule</h2>
      </div>

      <div className="relative max-w-7xl mx-auto" style={{ perspective: '1500px' }}>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="text-gray-700" />
        </button>

  <div
  ref={sliderRef}
  className="flex gap-10 overflow-x-auto overflow-visible scroll-smooth scrollbar-hide py-10 min-h-[600px]"
>
  {books.map((book, index) => (
    <div
      key={index}
      className="flip-card min-w-[280px] max-w-[300px] h-[400px] rounded-xl flex-shrink-0"
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front h-full w-full rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${book.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:
              '0 15px 25px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.2)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <div className="absolute bottom-0 w-full p-4 text-white z-10">
            <h3 className="text-lg font-bold uppercase">{book.sc_title}</h3>
          </div>
        </div>
        <div className="flip-card-back bg-white text-gray-800 p-4 rounded-xl flex flex-col justify-between h-full shadow-lg">
          <div className="flex flex-col items-center mb-2">
            {/* <Info className="text-[#e4ac43] w-12 h-12 mb-2" /> */}
            {/* <h3 className="text-lg font-bold uppercase text-center">{book.sc_title}</h3> */}
          </div>
          {/* <p className="text-xs  text-center">{book.sc_body}</p> */}
          <p className="text-xs text-gray-500 italic  text-center">Air-Time: {book.air_time}</p>
<button
                          onClick={() => handleReadMore(book.sc_id)}
                          className="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition"
                        >
                          Read More
                        </button>
        </div>

      </div>
    </div>
  ))}
</div>


        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition"
          aria-label="Scroll Right"
        >
          <ChevronRight className="text-gray-700" />
        </button>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/programs2"
          className="inline-block px-6 py-3 bg-[#e4ac43] text-black uppercase font-semibold tracking-wide rounded hover:bg-[#f1c859] transition-colors"
        >
          View all Programs
        </Link>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .flip-card {
          perspective: 1500px;
          z-index: 1;
          transition: z-index 0.3s;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 50;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border-radius: 1rem;
          background: white;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg) scale(1.2);
          z-index: 50;
          box-shadow:
            0 40px 80px rgba(0, 0, 0, 0.35),
            0 25px 55px rgba(0, 0, 0, 0.25);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
          will-change: transform;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: white;
        }
      `}</style>
    </section>
  );
};

export default Programs;
