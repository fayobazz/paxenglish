import { useEffect, useState } from 'react';
import axios from 'axios';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null);

  // Fetch programs from API
  useEffect(() => {
    const fetchAllPrograms = async () => {
      try {
        const res = await axios.get('https://eng.backend.paxcatholictv.org/posts');
        setPrograms(res.data);
      } catch (err) {
        console.error('Error fetching programs:', err);
      }
    };
    fetchAllPrograms();
  }, []);

  const handleMouseEnter = (index) => setFlippedIndex(index);
  const handleMouseLeave = () => setFlippedIndex(null);

  return (
    <section className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto p-6">
      {programs.map((program, index) => {
        const isFlipped = flippedIndex === index;
        const imageUrl = `http://localhost:8800${program.image}`;

        return (
          <div
            key={index}
            className="w-80 h-[420px] perspective"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
          >
            <div
              className={`relative w-full h-full duration-700 transform-style preserve-3d ${
                isFlipped ? 'rotate-y-180 wobble' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front Side */}
              <article className="absolute inset-0 bg-[#003366] p-6 rounded-lg text-white font-['Roboto_Condensed'] shadow-lg backface-hidden">
                <span className="inline-block text-xs font-bold uppercase bg-gradient-to-r from-blue-700 to-black bg-clip-text text-transparent mb-4">
                  Program
                </span>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold uppercase">{program.title}</span>
                </div>

                <h3 className="text-xl font-bold uppercase mb-2">{program.created_by}</h3>

                <p className="opacity-80 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: program.body }} />

                <p className="mb-2">Category ID: {program.cat_id}</p>

                <address className="not-italic mb-4 leading-tight">
                  {new Date(program.created_at).toLocaleDateString()}
                </address>

                <img
                  src="/assets/images/icon_11.svg"
                  alt="Icon"
                  className="w-6 h-6 mb-2"
                  loading="lazy"
                />
              </article>

              {/* Back Side */}
              <article
                className="absolute inset-0 rounded-lg text-white p-6 flex flex-col justify-center items-center text-center shadow-lg backface-hidden rotate-y-180 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className="bg-black bg-opacity-60 rounded p-4">
                  <p className="mb-6 text-lg font-semibold">{program.title}</p>
                  <button className="px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded uppercase font-semibold transition">
                    Learn More
                  </button>
                </div>
              </article>
            </div>

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
          </div>
        );
      })}
    </section>
  );
};

export default Programs;
