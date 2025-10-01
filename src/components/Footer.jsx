import React from "react";
import Logo from "../assets/Mutant_Gym_favicon.png";
import gym1 from "../assets/aman1.webp";
import gym2 from "../assets/aman2-new.jpeg";
import gym3 from "../assets/aman3.webp";
import gym4 from "../assets/dumbells.webp";
import gym5 from "../assets/dumbell2.webp";
import gym6 from "../assets/machine1.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1a1a1d] text-gray-700 dark:text-gray-300">
      <div className="grid gap-10 px-10 py-10 mx-auto text-center max-w-7xl md:grid-cols-3 md:text-start">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <img
            src={Logo}
            alt="Mutants Gym Logo"
            className="w-16 mx-auto md:mx-0"
          />
          <h2 className="text-xl font-bold text-yellow-500">MUTANTS GYM</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Transform your body, empower your mind. <br />
            Train hard, stay strong, and unlock the champion within you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="mb-4 text-lg font-bold text-center text-yellow-500">
            Quick Links
          </h3>
          <ul className="space-y-2 text-center">
            <li>
              <a
                href="/#about"
                className="transition-colors hover:text-yellow-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#service"
                className="transition-colors hover:text-yellow-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="transition-colors hover:text-yellow-500"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="transition-colors hover:text-yellow-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-center text-yellow-500">
            Gallery
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src={gym1}
              alt="Gym 1"
              className="object-cover w-full h-20 transition-transform rounded-md hover:scale-105"
            />
            <img
              src={gym2}
              alt="Gym 2"
              className="object-cover w-full h-20 transition-transform rounded-md hover:scale-105"
            />
            <img
              src={gym3}
              alt="Gym 3"
              className="object-cover w-full h-20 transition-transform rounded-md hover:scale-105"
            />
            <img
              src={gym4}
              alt="Gym 4"
              className="object-cover w-full h-20 transition-transform rounded-md hover:scale-105"
            />
            <img
              src={gym5}
              alt="Gym 5"
              className="object-cover w-full h-20 transition-transform rounded-md hover:scale-105"
            />
            <img
              src={gym6}
              alt="Gym 6"
              className="object-cover w-full h-20 transition-transform rounded-md hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-4 text-sm text-center border-t border-gray-300 dark:border-gray-700">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-yellow-500">Mutants Gym</span>.
          All rights reserved.
        </p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Developed &amp; Managed by{" "}
          <span className="font-medium">Ashutosh Raturi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
