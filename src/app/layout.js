import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";
import NextThemeProvider from "@/components/provider/Provider";
import GalaxyBackground from "@/components/GalaxyBackground";
import FloatingBackground from "@/components/FloatingBackground";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amirul Islam | Full Stack Web Developer",
  description:
    "M. Amirul Islam is a Full Stack Web Developer from Dhaka, Bangladesh. Skilled in MERN Stack, React, Next.js, and Flutter. Explore projects like PAYOO and English Janala.",
  verification: {
    google: "hqLUcA89yMna2GmB8rYnhUhqAWUXBjhAaL4FrLEwQaI",
  },
  keywords: [
    "Amirul Islam",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Bangladesh Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Amirul Islam" }],
  metadataBase: new URL("https://amirulislam.vercel.app"),
  openGraph: {
    title: "Amirul Islam | Developer Portfolio",
    description: "Full Stack Developer specializing in MERN, Next.js and Flutter.",
    url: "https://amirulislam.vercel.app",
    siteName: "Amirul Islam Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Amirul Islam Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirul Islam Portfolio",
    description: "Full Stack Web Developer",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextThemeProvider>
          {/* Layer order (back → front):
              z-22: deep-space base         (GalaxyBackground)
              z-21: moonlight + nebulae     (GalaxyBackground)
              z-19: sharp star dots         (GalaxyBackground)
              z-10: floating skill icons    (FloatingBackground)
              z-0 : page content
              z-50: navbar                  (sticky)
          */}
          <GalaxyBackground />
          <FloatingBackground />

          <Navbar />
          <main className="w-full flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop/>
        </NextThemeProvider>
      </body>
    </html>
  );
}