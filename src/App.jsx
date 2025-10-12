
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Sermons from "./pages/Sermons.jsx";
import News from "./pages/News.jsx";
import NewsDetails from "./pages/NewsDetails.jsx";
import Eventdetail from "./pages/EventDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Programs from "./pages/Programs.jsx";
import Programs2 from "./pages/Programs2.jsx";
import Home2 from "./Home2.jsx";
import Navbar from "./components/Aboutus/Navbar.jsx";
import ProgramDetails from "./pages/ProgramDetails.jsx";
import VideosPage from "./pages/VideosPage.jsx";
import SermonDetails from "./pages/SermonDetails.jsx";
import Donate from "./pages/Donation.jsx";
import Footer from "./Footer.jsx";
// import Donation from "./DonationSection.jsx";
// import Navbar from "./Aboutus/Navbar.jsx"; // Adjust path if needed

const App = () => {
  return (
    <Router>
      <Navbar />
      {
      /* Global navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/sermon" element={<Sermons />} />
        <Route path="/videos" element={<VideosPage />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        {/* <Route path="/event/:id" element={<Eventdetail />} /> */}
        <Route path="/event" element={<Eventdetail />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs2 />} />
<Route path="/programdetail/:id" element={<ProgramDetails />} />
<Route path="/sermondetail/:id" element={<SermonDetails />} />

        <Route path="/programs2" element={<Programs2 />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

