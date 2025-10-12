import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Button2 from "./components/CallButton";

const ShopSection = () => {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('https://eng.backend.paxcatholictv.org/shop');
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllBooks();
  }, []);

  const repeatedBooks = [...books, ...books];
  const cardWidth = 316; // 300px width + 16px gap approx

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % books.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + books.length) % books.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 4000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, books.length]);

  return (
    <section className="relative bg-[#003366] text-white py-20 px-6 overflow-hidden font-['Roboto_Condensed']">
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest mb-2 text-gray-400">Buy Items That reflect catholicism</p>
        <h2 className="text-4xl font-bold uppercase text-white">Shop</h2>
      </div>

      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-4 w-full overflow-x-hidden scroll-smooth"
        >
          {repeatedBooks.map((book, index) => {
            const bookId = book._id || book.id; // Use whichever ID field is available
            return (
              <Link
                key={`${bookId}-${index}`}
                to={`/news/${bookId}`}
                className="relative min-w-[300px] max-w-[300px] h-96 rounded-lg overflow-hidden shadow-lg bg-cover bg-center group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                style={{ backgroundImage: `url(${book.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/ via-black/40 to-transparent z-0" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 backdrop-blur-md text-white">
                  <h2 className="text-lg font-bold uppercase mb-1">{book.title}</h2>
                  <p className="text-sm line-clamp-2">{book.description}</p>
                  <p className="text-xs italic mt-2 opacity-80">Price: {book.price}</p>
                  <Button2
                    title="Call us"
                    containerClass="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition"
                    phoneNumber="+251931581346"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#e4ac43] text-black p-2 rounded-full shadow-md z-10 hover:bg-yellow-600 transition"
          aria-label="Previous"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#e4ac43] text-black p-2 rounded-full shadow-md z-10 hover:bg-yellow-600 transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ShopSection;
