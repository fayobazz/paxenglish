

const SermonBody = ({ data }) => {
  return (
    <section className="bg-white text-black font-['Roboto_Condensed'] px-4 md:px-20 py-12 space-y-16">
      {/* Title & Description */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase bg-black bg-clip-text text-transparent">
          {data.title || "No subtitle"}
        </h2>
        <p className="max-w-5xl mx-auto text-base md:text-lg opacity-80 bg-black bg-clip-text text-transparent">
          {data.body || "No description provided."}
        </p>
      </div>

      {/* Main Featured Image */}
      <div className="w-full h-[510px] bg-cover bg-center" style={{ backgroundImage: `url(${data.image})` }} />

      {/* Quote Section */}
      <div className="md:flex md:items-start md:gap-6">
        <div className="hidden md:block w-1 bg-[#FFD1A3] h-[122px]" />
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-normal bg-black bg-clip-text text-transparent leading-snug">
            {/* {data.highlight || "This is a highlighted quote or section."} */}
          </h3>
        </div>
      </div>

      {/* Image + Side Text */}
      <div className="md:grid md:grid-cols-2 gap-6 items-center">
        <div className="w-full h-[445px] bg-cover bg-center" style={{ backgroundImage: `url(${data.image || data.image})` }} />
        <p className="text-base opacity-80 bg-black bg-clip-text text-transparent">
          {data.body || data.description}
        </p>
      </div>

      {/* Quote Section with Side Image */}
      <div className="md:flex gap-6 items-start">
        <div className="flex-1 space-y-4">
          <p className="text-lg opacity-80 bg-black bg-clip-text text-transparent">
            {data.body || "No additional information available."}
          </p>
        </div>
      </div>

      {/* Optional Additional Image */}

    </section>
  );
};

export default SermonBody;
