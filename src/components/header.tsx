"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const el = mobileMenuRef.current;
    if (el) {
      if (menuOpen) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && el && !el.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
}, [menuOpen]);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const menus = [
    {
      label: "Tentang Kami",
      href: "",
      children: [
        { label: "Siapa Kami", href: "/tentang/siapa-kami" },
        { label: "Proyek Kami", href: "/tentang/proyek-kami" },
        { label: "Mitra", href: "/tentang/mitra" },
        { label: "Karir", href: "/tentang/karir" },
        { label: "Administrasi", href: "/tentang/administrasi" },
      ],
    },
    {
      label: "Layanan",
      href: "",
      children: [
        { label: "Foto Udara", href: "/layanan/Foto-Udara" },
        { label: "Internet of Things", href: "/layanan/Internet-of-Things" },
        { label: "Inspeksi Teknik", href: "/layanan/Inspeksi-Teknik" },
        { label: "Penelitian", href: "/layanan/Penelitian" },
        { label: "Pertanian dan Pedesaan", href: "/layanan/Pertanian-dan-Pedesaan" },
        { label: "Telematika", href: "/layanan/Telematika" },
        { label: "Website dan Aplikasi", href: "/layanan/Website-dan-Aplikasi" },
        { label: "Layanan Lainnya", href: "/layanan/Layanan-Lainnya" },
      ],
    },
    {
      label: "Informasi",
      href: "",
      children: [
        { label: "Publikasi", href: "/informasi/publikasi" },
        { label: "Profi Perusahaan", href: "/informasi/profil-perusahaan" },
      ],
    },
    {
      label: "Produk",
      href: "",
      children: [
        { label: "Hasil Proyek", href: "/produk/hasil-proyek" },
        { label: "Rumah Teknologi", href: "/produk/rumah-teknologi" },
        { label: "Genesis", href: "/produk/genesis" },
      ],
    },
    { label: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black/10 shadow-sm">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menus.map((menu, index) => {
            const isActive = pathname.startsWith(menu.href);
            return (
              <div key={index} className="relative group transition duration-1000 delay-200">
                <Link
                  href={menu.href}
                  className="flex items-center gap-1 cursor-pointer group-hover:text-yellow-400"
                >
                  <span
                    className={`text-m font-semibold gap-3 font-nunito hover:text-yellow-400 transition ${
                      isActive ? "text-white" : "text-white group-hover:text-yellow-400"
                    }`}
                  >
                    {menu.label}
                  </span>
                  {menu.children && (
                    <ChevronDown
                      size={18}
                      className={`mt-[2px] transition-all ${
                        isActive ? "text-white" : "text-white group-hover:text-yellow-400"
                      }`}
                    />
                  )}
                </Link>
                {menu.children && (
                   <div className="absolute mt-0 hidden group-hover:block bg-black/50 text-white rounded-lg shadow-lg overflow-hidden z-50 min-w-[180px] w-fit space-y-px left-1 -translate-x-1/10 py-1">
                    {menu.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-0.3 text-sm hover:text-yellow-400"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bahasa dan Login */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-12">
          <div className="flex items-center gap-1 text-white text-sm font-nunito">
            <Globe size={18} />
            <span className="font-bold hover:text-yellow-400 cursor-pointer">Indonesia</span>
            <span className="mx-1 text-xs">|</span>
            <span className="font-bold hover:text-yellow-400 cursor-pointer">English</span>
          </div>
          <button className="px-7 py-1 border border-white rounded-lg text-white text-m font-nunito hover:bg-[#02517A] hover:text-white cursor-pointer transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className="md:hidden bg-black/80 text-white px-10 overflow-hidden transition-all duration-500 ease-in-out"
        style={menuOpen ? {} : { maxHeight: 0 }}
      >
        <div className="py-4 space-y-2">
          {menus.map((menu, index) => (
            <div key={index}>
              <div className="flex items-center gap-1">
                <Link
                  href={menu.href}
                  onClick={() => {
                    if (menu.children) {
                      toggleSubmenu(index);
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                  className="block py-1 font-semibold text-white hover:text-yellow-400 cursor-pointer"
                >
                  {menu.label}
                </Link>
                {menu.children && (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="text-white hover:text-yellow-400 focus:outline-none"
                  >
                    <ChevronDown size={16} />
                  </button>
                )}
              </div>
              {menu.children && openSubmenus[index] && (
                <div className="ml-0 space-y-1">
                  {menu.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm hover:text-yellow-400 transition-all duration-300"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Bahasa dan Login in Mobile */}
          <div className="mt-4 border-t border-white/20 pt-4">
            <div className="flex items-center gap-2 text-sm mb-4 justify-center">
              <Globe size={16} />
              <span className="font-bold hover:text-yellow-400 cursor-pointer">Indonesia</span>
              <span className="mx-1 text-xs">|</span>
              <span className="font-bold hover:text-yellow-400 cursor-pointer">English</span>
            </div>
            <button className="w-full px-4 py-2 border border-white rounded-lg text-white font-nunito hover:bg-[#02517A] transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;