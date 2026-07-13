import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollScripts from "@/components/ScrollScripts";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Cymrai Software Solutions",
  description:
    "Intelligence from Wales, Innovation for the World. A senior-led consultancy building production-grade AI and data systems in Cardiff.",
  icons: { icon: "/images/logo-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-white text-navy antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollScripts />
      </body>
    </html>
  );
}
