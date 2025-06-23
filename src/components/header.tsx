"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const pathname = usePathname();

  const menus = [
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Layanan", href: "/layanan" },
    { label: "Informasi", href: "/informasi" },
    { label: "Produk", href: "/produk" },
    { label: "Hubungi Kami", href: "/kontak" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black/30">
      <div className="max-w-[1440px] mx-auto h-20 px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo_LSN_black.png"
            alt="Logo"
            width={160}
            height={40}
            className="h-17 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menus.map((menu, index) => {
            const isActive = pathname === menu.href;

            return (
              <Link
                href={menu.href}
                key={index}
                className="flex items-center gap-1 group cursor-pointer"
              >
                <span
                  className={`text-m font-semibold font-nunito transition ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white group-hover:text-yellow-400"
                  }`}
                >
                  {menu.label}
                </span>

                {menu.label !== "Hubungi Kami" && (
                  <ChevronDown
                    size={14}
                    className={`mt-[2px] transition-all ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white group-hover:text-yellow-400"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* bahasa & login */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-center gap-1 text-white text-sm font-nunito">
            <Globe size={16} />
            <span className="font-bold">IND</span>
            <span className="mx-1 text-xs">|</span>
            <span className="font-bold">ENG</span>
          </div>

          {/* login button */}
          <button className="px-7 py-1 border border-white rounded-lg text-white text-m font-nunito hover:bg-[#02517A] transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
