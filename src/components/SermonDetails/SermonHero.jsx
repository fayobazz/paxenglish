
const SermonHero = ({ data }) => {
  console.log ("ggggggggggggggg",data);
  return (
    <div
      className="relative bg-cover bg-center h-[510px] w-full"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold uppercase" style={{ fontFamily: "Roboto Condensed" }}>
          {data.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base" style={{ fontFamily: "Roboto Condensed" }}>
          <p className="text-white/90">{data.title || "Unknown Author"}</p>
          <span className="hidden md:block text-white/50">|</span>
          <p className="text-white/90">{data.title || "Unknown Date"}</p>
        </div>
      </div>
    </div>
  );
};

export default SermonHero;

