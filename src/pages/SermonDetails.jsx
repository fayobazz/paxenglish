// dynamiic

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SermonHero from "../components/SermonDetails/SermonHero";
import SermonBody from "../components/SermonDetails/SermonBody";
import Navbar from "../components/Aboutus/Navbar";
import { Link } from "react-router-dom";

const SermonDetails = () => {
  const { id } = useParams(); // 👈 dynamic ID from the route
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`https://eng.backend.paxcatholictv.org/daily/${id}`); // 👈 Replaces hardcoded 18
        setNewsData(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (!newsData) return <p className="text-white text-center mt-10">News not found.</p>;

  return (
    <div className="bg-white min-h-screen w-full font-['Roboto_Condensed']">
      <Navbar />
      {/* <SermonHero data={newsData} /> */}
      <SermonBody data={newsData} />


    </div>
  );
};

export default SermonDetails;
