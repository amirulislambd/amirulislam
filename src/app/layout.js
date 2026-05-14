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
  title: {
    default: "Amirul Islam | Professional Full Stack Web Developer & MERN Specialist",
    template: "%s | Amirul Islam"
  },
  description:
    "Amirul Islam is a top-rated Full Stack Web Developer from Dhaka, Bangladesh. Specializing in MERN Stack (MongoDB, Express, React, Node.js), Next.js, and Mobile App Development (Flutter). Transforming complex ideas into high-performance web solutions.",
  metadataBase: new URL("https://amirulislam.vercel.app"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Amirul Islam",
    "Amirul Islam Developer",
    "Amirul Islam Portfolio",
    "Full Stack Developer Bangladesh",
    "MERN Stack Developer Dhaka",
    "React Specialist Bangladesh",
    "Next.js Developer Portfolio",
    "Best Web Developer in Dhaka",
    "Software Engineer Portfolio",
    "Hire React Developer Bangladesh",
    "Amirul Islam Web Developer",
  ],
  authors: [{ name: "Amirul Islam", url: "https://amirulislam.vercel.app" }],
  creator: "Amirul Islam",
  publisher: "Amirul Islam",
  openGraph: {
    title: "Amirul Islam | Expert Full Stack Developer Portfolio",
    description: "Building modern, scalable, and high-performance web applications with MERN and Next.js.",
    url: "https://amirulislam.vercel.app",
    siteName: "Amirul Islam - Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amirul Islam - Professional Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirul Islam | Full Stack Developer",
    description: "Expert MERN & Next.js Developer crafting pixel-perfect web experiences.",
    creator: "@amirulislambd",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "hqLUcA89yMna2GmB8rYnhUhqAWUXBjhAaL4FrLEwQaI", 
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amirul Islam",
    "url": "https://amirulislam.vercel.app",
    "image": "https://amirulislam.vercel.app/og-image.jpg",
    "jobTitle": "Full Stack Web Developer",
    "description": "Professional Full Stack Developer specializing in MERN Stack and Next.js.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "knowsAbout": ["React", "Next.js", "Node.js", "MongoDB", "MERN Stack", "Flutter", "Web Development"],
    "sameAs": [
      "https://github.com/amirulislambd",
      "https://linkedin.com/in/amirulislambd",
      "https://facebook.com/amirulislambd"
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-full flex flex-col relative bg-white dark:bg-[#020617] transition-all duration-300">
        <NextThemeProvider>
          <GalaxyBackground />
          <FloatingBackground />

          <Navbar />
          <main className="w-full flex-1 relative z-0">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </NextThemeProvider>
      </body>
    </html>
  );
}