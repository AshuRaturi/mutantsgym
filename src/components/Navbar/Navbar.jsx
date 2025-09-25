import React, { useState } from "react";
import Logo from "../../assets/Mutant_Gym_favicon.png";
import DarkMode from "./DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import "./Navbar.css";

export const Navlinks = [
  { id: 1, name: "ABOUT", link: "/#about" },
  { id: 2, name: "SERVICES", link: "/#service" },
  { id: 3, name: "PRICING", link: "/#pricing" },
  { id: 4, name: "TESTIMONIALS", link: "/#testimonials" },
  { id: 5, name: "CONTACT", link: "/#contact" },
  { id: 6, name: "OUR TRAINERS", link: "/#our-trainers" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {/* 🔝 Topbar */}
      {/* 🔝 Topbar */}
      <div className="text-xs text-white bg-black sm:text-sm">
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-2 mx-auto max-w-7xl sm:flex-row sm:gap-0">
          {/* Gym Timing */}
          <p className="flex items-center gap-2 text-gray-300">
            🕔 <span className="font-medium">Mon-Sat: 5:00 AM - 10:00 PM</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-gray-300">
            <a href="#" className="transition hover:text-yellow-500">
              <FaFacebookF />
            </a>
            <a href="#" className="transition hover:text-yellow-500">
              <FaInstagram />
            </a>
            <a href="#" className="transition hover:text-yellow-500">
              <FaTwitter />
            </a>
            <a href="#" className="transition hover:text-yellow-500">
              <FaYoutube />
            </a>
          </div>

          {/* Phone */}
          <a
            href="tel:9897829686"
            className="flex items-center gap-2 font-semibold text-yellow-500 hover:text-yellow-400"
          >
            <Phone className="w-4 h-4" /> +91 98978 29686
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="fixed top-0 left-0 z-20 w-full transition-colors duration-300 shadow-md bg-slate-100 dark:bg-dark dark:text-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
                <img
                  src={Logo}
                  alt="Mutants Gym Logo"
                  className="w-12 sm:w-16"
                />
                <div className="leading-tight">
                  <h2 className="text-xl font-bold tracking-wide text-yellow-500 sm:text-2xl">
                    MUTANTS
                  </h2>
                  <h2 className="text-xl font-bold text-yellow-500 sm:text-2xl">
                    GYM
                  </h2>
                </div>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id} className="relative py-2 group">
                    <a
                      href={link}
                      className="inline-block font-semibold transition-colors duration-200 text-md hover:text-yellow-500"
                    >
                      {name}
                    </a>
                    {/* underline animation */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
                {/* Dark mode toggle */}
                <DarkMode />
                {/* Call Us button */}
                <a
                  href="tel:9897829686"
                  className="relative flex items-center gap-2 px-4 py-2 font-semibold text-black bg-yellow-500 rounded-md shadow-lg hover:shadow-[0_0_20px_rgba(255,223,0,0.7)] hover:scale-110 transition-transform duration-300"
                >
                  <Phone className="z-10 w-5 h-5" />
                  Call Us
                </a>

                <div>
                  <div className="flex justify-center gap-4 text-gray-600 md:justify-start dark:text-gray-400">
                    <a
                      href="https://www.instagram.com/mutants.gym_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white transition rounded-full hover:scale-110 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 md:hidden">
              <div>
                <div className="flex justify-center gap-4 text-gray-600 md:justify-start dark:text-gray-400">
                  <a
                    href="https://www.instagram.com/mutants.gym_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white transition rounded-full hover:scale-110 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="transition-all duration-300 transform scale-110 rotate-90 cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="transition-all duration-300 transform scale-100 cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Responsive Menu */}
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </>
  );
};

export default Navbar;
