import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SermonCard = () => {
  const [sermons, setSermons] = useState([]);
  const [groupedSermons, setGroupedSermons] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const fetchAllSermons = async () => {
      try {
        const res = await axios.get('https://eng.backend.paxcatholictv.org/scheduele');
        setSermons(res.data);
        groupByCategory(res.data);
      } catch (err) {
        console.error('Error fetching sermons:', err);
      }
    };
    fetchAllSermons();
  }, []);

  // Grouping sermons by category
  const groupByCategory = (sermons) => {
    const grouped = sermons.reduce((acc, sermon) => {
      const cat = sermon.category || 'Uncategorized';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(sermon);
      return acc;
    }, {});
    setGroupedSermons(grouped);
  };

  // Flip animation on mouse enter only
  const handleMouseEnter = (index) => setFlippedIndex(index);
  // No handleMouseLeave to keep it flipped
  const handleReadMore = (id) => navigate(`/programdetail/${id}`);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-[48px] font-bold uppercase text-[#151722] leading-[64px]">
          Program Scheduele
        </h2>
        <input
          type="text"
          placeholder="Search By Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md mx-auto"
        />
      </div>

      {/* Grouped by category */}
      {Object.entries(groupedSermons).map(([category, sermonsInCategory]) => {
        const filteredSermons = sermonsInCategory.filter((sermon) =>
          sermon.sc_title?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredSermons.length === 0) return null;

        return (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-[#222] mb-6 border-b pb-2 uppercase">
              {category}
            </h3>

            <section className="flex flex-wrap gap-8 justify-center">
              {filteredSermons.map((sermon, index) => {
                const cardId = `${category}-${index}`;
                const isFlipped = flippedIndex === cardId;

                return (
                  <div
                    key={cardId}
                    className="w-80 h-[420px] perspective"
                    onMouseEnter={() => handleMouseEnter(cardId)}
                    // Removed onMouseLeave to keep flipped
                    style={{ perspective: '1000px' }}
                  >
                    <div
                      className={`relative w-full h-full duration-700 transform-style preserve-3d ${
                        isFlipped ? 'rotate-y-180 ' : ''
                      }`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* NEW FRONT (was previously BACK) */}
                      <article
                        className="absolute inset-0 rounded-lg text-white p-6 flex flex-col justify-center items-center text-center shadow-lg backface-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url(${sermon.image})` }}
                      >
                        <div className="bg-black bg-opacity-60 rounded p-4">
                          <p className="mb-6 text-lg font-semibold">{sermon.sc_title}</p>
                        </div>
                      </article>

                      {/* NEW BACK (was previously FRONT) */}
                      <article
                        className="absolute inset-0 bg-[#003366] p-6 rounded-lg text-white font-['Roboto_Condensed'] shadow-lg backface-hidden rotate-y-180"
                      >
                        <span className="inline-block text-xs font-bold uppercase bg-white bg-clip-text text-transparent mb-4">
                          {sermon.category}
                        </span>

                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-2xl font-bold uppercase">
                            Air Time :- {sermon.air_time}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-base uppercase">
                            Re-Air Time :- {sermon.reair_time}
                          </span>
                        </div>

                        {/* <h3 className="text-2xl font-bold uppercase mb-2">{sermon.sc_title}</h3>
                        <p className="opacity-80 mb-6 leading-relaxed">{sermon.sc_body}</p>
                        <p className="mb-2">Prepared By: - {sermon.created_by}</p> */}
                        <button
                          onClick={() => handleReadMore(sermon.sc_id)}
                          className="mt-4 inline-block bg-[rgba(228,172,67,1)] text-black text-sm px-4 py-2 rounded hover:bg-yellow-600 transition"
                        >
                          Read More
                        </button>
                      </article>
                    </div>

                    {/* Flip Animation Styles */}
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
          </div>
        );
      })}
    </div>
  );
};

export default SermonCard;
