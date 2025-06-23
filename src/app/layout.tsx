import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700"],
});

// Metadata untuk SEO
export const metadata: Metadata = {
  title: {
    default: "Loka Spasial Nusantara",
    template: "%s | Loka Spasial Nusantara",
  },
  description: "Solusi inovatif untuk pengelolaan berkelanjutan.",
  metadataBase: new URL("https://lokaspatial.com"),
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${nunito.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
