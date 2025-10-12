import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setSidebarOpen(false);
  }, [location]);

  // Scroll color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColorClass = isScrolled ? "text-[#003366]" : "text-white";
  const hoverColorClass = isScrolled ? "hover:text-[#e4ac43]" : "hover:text-yellow-400";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 h-20 flex items-center px-8">
        {/* Logo */}
        <div
          className="h-16 w-48 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: "url(assets/images/image_2.png)" }}
        />

        {/* Desktop Nav */}
        <div className="flex-1 hidden md:flex justify-center">
          <ul className="flex space-x-10 uppercase font-['Roboto_Condensed'] text-sm tracking-wider">
            <li>
              <Link to="/home" className={`${linkColorClass} ${hoverColorClass} transition`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${linkColorClass} ${hoverColorClass} transition`}>
                About Us
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`${linkColorClass} ${hoverColorClass} transition flex items-center gap-1`}
              >
                RESOURCES
                <svg
                  className={`w-3 h-3 mt-1 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-black bg-opacity-90 rounded shadow-lg py-2 z-50">
 <li>
                    <Link to="/news" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black transition">
                      News
                    </Link>
                  </li>
                   <li>
                    <Link to="/programs2" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black transition">
                      Programs
                    </Link>
                  </li>

                  <li>
                    <Link to="/sermon" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black transition">
                      Sermon
                    </Link>
                  </li>
 <li>
                    <Link to="/videos" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black transition">
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link to="/event" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black transition">
                      Event
                    </Link>
                  </li>




                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" className={`${linkColorClass} ${hoverColorClass} transition`}>
                Contact Us
              </Link>
            </li>
              <li>
          <a
  href="https://amh.pa.paxcatholictv.org/" // replace with your external URL
  target="_blank"
  rel="noopener noreferrer"
  className={`${linkColorClass} ${hoverColorClass} transition`}
>
  አማርኛ
</a>

            </li>

          </ul>
        </div>

        {/* Donate Button */}
        <div className="hidden md:block">
          <Link
            to="/donate"
            className={`bg-[rgba(228,172,67,1)] font-semibold px-5 py-2 rounded border border-[#e4ac43] hover:border-transparent transition`}
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg flex flex-col p-6`}
      >
        {/* Close Button */}
        <button
          className="self-end mb-6 text-gray-700 hover:text-gray-900"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4 uppercase font-['Roboto_Condensed'] text-[#003366] text-base tracking-wider">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/sermon">Sermon</Link>
          <Link to="/event">Event</Link>
          <Link to="/videos">Streams</Link>
          <Link to="/programs2">Programs</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact Us</Link>

          <Link
            to="/donate"
            className="mt-6 px-5 py-2 rounded border border-[#e4ac43] text-[#003366] hover:text-[#e4ac43] hover:border-[#e4ac43] transition text-center font-semibold"
          >
            Donate
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
