"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Slide from "@/components/slide";
import Dots from "@/components/dots";

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
    <div className="flex flex-col min-h-screen w-full overflow-hidden font-sans">
      <Header />

      {/* Slider Section */}
      <main className="flex-1 relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <Slide key={idx} slide={slide} />
          ))}
        </div>

        <Dots
          slides={slides}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </main>

      <Footer />
    </div>
  );
}
