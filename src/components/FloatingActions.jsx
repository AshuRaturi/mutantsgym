// src/components/FloatingActions.jsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingActions = () => {
  return (
    <>
      {/* WhatsApp Button - Left */}
      <a
        href="https://wa.me/919897829686"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center w-10 h-10 text-white transition transform bg-green-500 rounded-full shadow-lg bottom-6 left-6 hover:scale-110"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Call Button - Right */}
      <a
        href="tel:9897829686"
        className="fixed z-50 flex items-center justify-center w-10 h-10 text-white transition transform bg-yellow-500 rounded-full shadow-lg bottom-6 right-6 hover:scale-110 "
      >
        <FaPhoneAlt size={20} />
      </a>
    </>
  );
};

export default FloatingActions;
