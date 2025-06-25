import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 z-40 w-full bg-[#02517A] text-white text-xs sm:text-sm font-light flex items-center justify-center py-2 px-4 backdrop-blur-sm">
      {/* Teks footer */}
      <span className="text-center">
        ©{currentYear} Loka Spasial Nusantara - All rights reserved.
      </span>

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/6282188885751"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 sm:right-6 bottom-3 sm:bottom-4"
      >
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform">
          <div className="absolute inset-0 bg-green-400" />
          <div className="absolute inset-0 flex items-center justify-center">
            <FaWhatsapp className="text-white text-xl sm:text-2xl md:text-3xl" />
          </div>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
