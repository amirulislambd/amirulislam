import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amirul Islam",
  description: "M. Amirul Islam, a Junior Full Stack Web Developer based in Dhaka, Bangladesh. Specializing in MERN stack, React, Next.js, and Flutter development. Check out my projects like PAYOO and English Janala.",
  keywords: ["Amirul Islam", "Web Developer", "Full Stack Developer", "MERN Stack", "React Developer", "Next.js", "Flutter Developer", "Bangladesh", "Dhaka", "PAYOO", "English Janala", "assignment", "programming assignment", "programming", "best developer"],
  authors: [{ name: "Amirul Islam" }],
  openGraph: {
    title: "Amirul Islam | Full Stack Web Developer Portfolio",
    description: "Expertise in MERN stack and Flutter. Building high-quality, scalable web and mobile applications.",
    url: "https://yourdomain.com",
    siteName: "Amirul Islam Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amirul Islam Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}