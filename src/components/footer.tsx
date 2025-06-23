import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02517A] text-white text-sm font-light flex items-center justify-center py-3">
      {/* Teks footer */}
      <span>©{currentYear} Loka Spasial Nusantara. All rights reserved.</span>

      {/* WhatsApp Icon di pojok kanan bawah */}
      <Link
        href="https://wa.me/6282188885751"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-12 bottom-4"
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform">
          {/* Lapisan hijau gradasi */}
          <div className="absolute inset-0 bg-green-400" />

          {/* Ikon WA */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FaWhatsapp className="text-white text-3xl" />
          </div>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
