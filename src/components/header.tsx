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
      el.style.transform = menuOpen ? "translateX(0%)" : "translateX(100%)";
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
    setOpenSubmenus((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        updated[+key] = false;
      });
      updated[index] = !prev[index];
      return updated;
    });
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
    <header className="fixed top-0 z-[60] w-full">
      <div className="relative max-w-[1440px] mx-auto h-20 px-4 sm:px-6 md:px-10 flex items-center justify-between z-[60]">
        <Link href="/" className="flex items-center z-[70] relative">
          <Image
            src={menuOpen ? "/Logo_LSN_white.png" : "/Logo_LSN_black.png"}
            alt="Logo"
            width={280}
            height={90}
            className="h-24 w-auto object-contain max-w-[300px]"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {menus.map((menu, index) => (
            <div key={index} className="relative group transition duration-1000 delay-200">
              <div className="flex items-center gap-1 cursor-pointer group-hover:text-yellow-400">
                <Link
                  href={menu.href}
                  className="text-base font-semibold gap-3 font-nunito hover:text-yellow-400 transition text-white"
                >
                  {menu.label}
                </Link>
                {menu.children && (
                  <ChevronDown
                    size={18}
                    className="mt-[2px] transition-all text-white group-hover:text-yellow-400"
                  />
                )}
              </div>
              {menu.children && (
                <div className="absolute mt-0 hidden group-hover:block bg-black/50 text-white rounded-lg shadow-lg overflow-hidden z-50 min-w-[180px] w-fit space-y-px left-1 -translate-x-1/10 py-1">
                  {menu.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-0 text-sm hover:text-yellow-400"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-12">
          <div className="flex items-center gap-1 text-white text-sm font-nunito">
            <Globe size={18} />
            <span className="font-bold hover:text-yellow-400 cursor-pointer">Indonesia</span>
            <span className="mx-1 text-xs">|</span>
            <span className="font-bold hover:text-yellow-400 cursor-pointer">English</span>
          </div>
          <button className="px-8 py-1 border border-white rounded-lg text-white font-semibold text-sm font-nunito hover:bg-white/10 cursor-pointer transition">
            Login
          </button>
        </div>

        {!menuOpen && (
          <button className="md:hidden text-white z-[80] relative" onClick={() => setMenuOpen(true)}>
            <Menu size={32} />
          </button>
        )}
      </div>

      <div
        ref={mobileMenuRef}
        className="md:hidden fixed top-0 right-0 w-full max-w-sm h-screen bg-white text-black px-6 sm:px-10 transition-transform duration-500 ease-in-out z-[70]"
      >
        <div className="absolute top-6 right-6 z-[80]">
          <button onClick={() => setMenuOpen(false)} className="text-black">
            <X size={32} />
          </button>
        </div>

        <div className="py-20 space-y-4">
          {menus.map((menu, index) => (
            <div key={index}>
              <div
                className="flex items-center gap-2 cursor-pointer group hover:text-yellow-400"
                onClick={() => {
                  if (menu.children) {
                    toggleSubmenu(index);
                  } else {
                    setMenuOpen(false);
                  }
                }}
              >
                <span className="block py-2 font-semibold text-base sm:text-lg">{menu.label}</span>
                {menu.children && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 group-hover:text-yellow-400 ${openSubmenus[index] ? "rotate-180" : ""}`}
                  />
                )}
              </div>
              {menu.children && openSubmenus[index] && (
                <div className="ml-4 space-y-1">
                  {menu.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm sm:text-base hover:text-yellow-500 transition-all duration-300"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 border-t border-black/20 pt-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base mb-4">
              <Globe size={16} />
              <span className="font-bold hover:text-yellow-400 cursor-pointer">Indonesia</span>
              <span className="mx-1 text-xs">|</span>
              <span className="font-bold hover:text-yellow-400 cursor-pointer">English</span>
            </div>
            <button className="w-full px-4 py-2 border border-black rounded-lg text-black font-nunito hover:bg-[#02517A] hover:text-white transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
