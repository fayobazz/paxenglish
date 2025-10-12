import React from "react";

import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
import axios from 'axios'
import Programs from "./Programs";
import EventsSection from "../EventsSection";
import HeroSection from "../HeroSection";
import DailyRead from "../DailyReadings";
import NewsSection from "../NewsSection";
import ButtonsSection from "../ButtonsSection";
// import Videos from "../Videos";
import Navbar from "../Navbar";
import ImgBreak from "../ImageBreak";
import Scheduele from "../Programs";
import Donation from "../DonationSection";
import ShopSection from "../ShopSection";
import NewsletterSection from "../NewsletterSection";
import Footer from "../Footer";


const Home = () => {
   const [active, setActive] = useState('world-2');
  const[books,setBooks] = useState([])

  useEffect( ()=>{
    const fetchAllBooks = async () =>{
    try{
      const res = await axios.get("https://eng.backend.paxcatholictv.org/scheduele")
      setBooks(res.data)
      console.log(res)
    }
    catch(err){
      console.log(err)
    }
  }
    fetchAllBooks()
  },[])

  return (
    <>
      <div
        id="_2_457__Home"
        className="absolute overflow-hidden bg-white h-[8733.0px] w-full"
      >



        <Navbar/>
        {/* <Videos/> */}
<ButtonsSection/>
<DailyRead/>


      </div>
    </>
  );
};
export default Home;
