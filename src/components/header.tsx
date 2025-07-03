"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

const Header: React.FC = () => {
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
      const updated: { [key: number]: boolean } = {};
      Object.keys(prev).forEach((key) => (updated[+key] = false));
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
        { label: "Aktivitas Kami", href: "/tentang/aktivitas-kami" },
        { label: "Mitra", href: "/tentang/mitra" },
        { label: "Karir", href: "/tentang/karir" },
        { label: "Administrasi", href: "/tentang/administrasi" },
      ],
    },
    {
      label: "Layanan",
      href: "",
      children: [
        { label: "Foto Udara", href: "/layanan/foto-Udara" },
        { label: "Internet of Things", href: "/layanan/internet-of-things" },
        { label: "Inspeksi Teknik", href: "/layanan/inspeksi-teknik" },
        { label: "Penelitian", href: "/layanan/penelitian" },
        { label: "Agrikultur", href: "/layanan/agrikultur" },
        { label: "Telematika", href: "/layanan/telematika" },
        { label: "Website Aplikasi", href: "/layanan/website-aplikasi" },
        { label: "Layanan Lainnya", href: "/layanan/layanan-lainnya" },
      ],
    },
    {
      label: "Informasi",
      href: "",
      children: [
        { label: "Publikasi", href: "/informasi/publikasi" },
        { label: "Hasil Proyek", href: "/informasi/hasil-proyek" },
      ],
    },
    {
      label: "Produk",
      href: "",
      children: [
        { label: "Rumah Teknologi", href: "/produk/rumah-teknologi" },
        { label: "Genesis Data", href: "/produk/genesis-data" },
      ],
    },
    { label: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  return (
    <header className="fixed top-0 z-[60] w-full">
      <div className="relative max-w-[1440px] mx-auto h-20 xl:h-24 px-4 sm:px-6 xl:px-8 flex items-center justify-between z-[60]">
        <Link href="/" className="flex items-center z-[70] relative select-none">
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={300}
            height={100}
            className="h-20 xl:h-24 w-auto object-contain max-w-[300px]"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {menus.map((menu, index) => (
            <div key={index} className="relative group">
              <div className="flex items-center gap-1 cursor-pointer text-white group-hover:text-yellow-400">
                <Link href={menu.href || "#"} className="text-base font-semibold font-nunito">
                  {menu.label}
                </Link>
                {menu.children && (
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 transform group-hover:rotate-180"
                  />
                )}
              </div>
              {menu.children && (
                <div className="absolute mt-0 hidden group-hover:block bg-black/50 text-white rounded-lg shadow-lg overflow-hidden z-50 min-w-[140px] py-1 left-[-10px]">
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

        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center gap-1 text-white text-sm font-nunito">
            <Globe size={18} />
            <span className="font-bold hover:text-yellow-400 cursor-pointer">Indonesia</span>
            <span className="mx-1 text-xs">|</span>
            <span className="font-bold hover:text-yellow-400 cursor-pointer">English</span>
          </div>
          <button className="px-8 py-1 border border-white rounded-lg text-white font-semibold text-sm font-nunito hover:bg-[#02517A] cursor-pointer transition">
            Login
          </button>
        </div>

        <button
          aria-label="Buka menu"
          className="xl:hidden text-white z-[80] relative"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setMenuOpen(false)}
          />

          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 h-screen w-[90%] max-w-sm z-[70] bg-white backdrop-blur-md shadow-2xl border-l border-white/30 text-black px-6 sm:px-10 transition-transform duration-500 ease-in-out"
          >
            <div className="absolute top-6 right-4 z-[80]">
              <button aria-label="Tutup menu" onClick={() => setMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>

            <div className="pt-20 space-y-6">
              {menus.map((menu, index) => (
                <div key={index}>
                  <div
                    className="flex items-center justify-between font-semibold text-lg hover:text-yellow-600 transition"
                    onClick={() => {
                      if (menu.children) toggleSubmenu(index);
                      else setMenuOpen(false);
                    }}
                  >
                    {menu.label}
                    {menu.children && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${openSubmenus[index] ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  {menu.children && openSubmenus[index] && (
                    <div className="ml-4 mt-2 space-y-2">
                      {menu.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-base text-gray-700 hover:text-yellow-500"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-10 border-t border-black/20 pt-6 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-base">
                  <Globe size={18} />
                  <span className="font-bold hover:text-yellow-500 cursor-pointer">Indonesia</span>
                  <span className="mx-1">|</span>
                  <span className="font-bold hover:text-yellow-500 cursor-pointer">English</span>
                </div>
                <button className="w-full px-6 py-2 border border-black rounded-xl text-black font-semibold hover:bg-[#02517A] hover:text-white transition">
                  Login
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;