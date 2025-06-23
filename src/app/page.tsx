"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const slides = [
  {
    image: "/bg1.jpg",
    title: "INTERNET OF THINGS (IOT)",
    description:
      "Integrasi monitoring kualitas kerja, efisiensi waktu kerja, dan visualisasi data menjadi tren yang kami kerjakan saat ini. Berikan konsep yang Anda miliki, kami akan membantu merealisasikan pengembangan IoT Anda.",
    button: "Selengkapnya",
  },
  {
    image: "/bg2.jpg",
    title: "PENYEDIA DATA AKURASI TINGGI",
    description:
      "Penggunaan teknologi UAV (Drone), DGPS (Differential Global Positioning System), LIDAR (Light Detection and Ranging), serta teknologi lain yang kami miliki, akan memudahkan Anda menjawab kebutuhan data yang berkualitas.",
    button: "Selengkapnya",
  },
  {
    image: "/bg3.jpg",
    title: "PENGEMBALIAN FUNGSI EKOSISTEM",
    description:
      "Melalui pendekatan konservasi yang bertumpu pada pilar perlindungan, pelestarian, dan pemanfaatan berkelanjutan, kami memfasilitasi masyarakat dalam perbaikan serta pengelolaan fungsi ekosistem.",
    button: "Selengkapnya",
  },
  {
    image: "/bg4.jpg",
    title: "PELATIHAN TARGET KHUSUS",
    description:
      "Kami memberikan pelatihan untuk pemetaan partisipatif, perencanaan tata ruang, kebencanaan, analisis spasial, dan target khusus lainnya guna membantu pengambilan keputusan di masa depan.",
    button: "Selengkapnya",
  },
  {
    image: "/bg5.jpg",
    title: "PENELITIAN DAN ANALISIS DATA",
    description:
      "Kami memberikan jasa penelitian dan analisis data untuk multidisiplin ilmu. Sumber daya alam, karbon, perubahan pola sosial-budaya, serta daya dukung dan daya tampung lingkungan menjadi bagian dari keahlian kami.",
    button: "Selengkapnya",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen grid grid-rows-[1fr_auto] overflow-hidden font-sans">
      {/* HEADER */}
      <Header />
      {/* SLIDER AREA */}
      <div className="relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="min-w-full h-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 text-center text-white text-sm px-4 max-w-3xl bg-gray-950/50 py-4 rounded-2xl">
                <h1 className="text-yellow-400 font-montserrat font-bold text-3xl sm:text-4xl md:text-3xl leading-tight tracking-tight mb-2">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-lg mb-3 font-montserrat leading-[1.3  ] drop-shadow-md">
                  {slide.description}
                </p>
                <button className="border border-white text-white font-montserrat px-6 py-1 rounded-lg hover:bg-[#02517A] transition">
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-5.5 h-5.5 rounded-full transition-all border-3 ${
                activeIndex === idx
                  ? "bg-[#02517A] border-white"
                  : "bg-white border-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
