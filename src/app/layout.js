import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";
import NextThemeProvider from "@/components/provider/Provider";
import GalaxyBackground from "@/components/GalaxyBackground";
import FloatingBackground from "@/components/FloatingBackground";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

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
    default: "Amirul Islam | Full Stack Web Developer — MERN & Next.js Expert",
    template: "%s | Amirul Islam — Full Stack Developer",
  },
  description:
    "Amirul Islam is a professional Full Stack Web Developer from Dhaka, Bangladesh. Expert in MERN Stack (MongoDB, Express.js, React, Node.js), Next.js, and Flutter. Building scalable, high-performance web apps. Available for hire.",
  metadataBase: new URL("https://amirulislam.vercel.app"),
  alternates: {
    canonical: "https://amirulislam.vercel.app",
  },
  keywords: [
    "Amirul Islam",
    "Amirul Islam developer",
    "Amirul Islam portfolio",
    "Amirul Islam web developer",
    "Amirul Islam MERN developer",
    "Amirul Islam Bangladesh",
    "Amirul Islam Next.js",
    "full stack developer Bangladesh",
    "MERN stack developer Dhaka",
    "React developer Bangladesh",
    "Next.js developer portfolio",
    "Node.js developer Bangladesh",
    "web developer Dhaka Bangladesh",
    "hire full stack developer Bangladesh",
    "software engineer Bangladesh",
    "JavaScript developer Bangladesh",
    "Flutter developer Bangladesh",
    "MongoDB developer Bangladesh",
    "best web developer Dhaka",
    "freelance web developer Bangladesh",
    "portfolio Amirul Islam",
    "amirulislambd",
  ],
  authors: [{ name: "Amirul Islam", url: "https://amirulislam.vercel.app" }],
  creator: "Amirul Islam",
  publisher: "Amirul Islam",
  category: "technology",
  openGraph: {
    title: "Amirul Islam | Full Stack Web Developer Portfolio",
    description:
      "Professional Full Stack Developer from Bangladesh specializing in MERN Stack, Next.js & Flutter. View my projects and hire me.",
    url: "https://amirulislam.vercel.app",
    siteName: "Amirul Islam — Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amirul Islam — Full Stack Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirul Islam | Full Stack Web Developer",
    description:
      "Expert MERN & Next.js Developer from Dhaka, Bangladesh. Crafting pixel-perfect web experiences.",
    creator: "@amirulislambd",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "hqLUcA89yMna2GmB8rYnhUhqAWUXBjhAaL4FrLEwQaI",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://amirulislam.vercel.app/#person",
        "name": "Amirul Islam",
        "givenName": "Amirul",
        "familyName": "Islam",
        "url": "https://amirulislam.vercel.app",
        "image": {
          "@type": "ImageObject",
          "url": "https://amirulislam.vercel.app/og-image.jpg",
          "width": 1200,
          "height": 630,
        },
        "jobTitle": "Full Stack Web Developer",
        "description": "Amirul Islam is a professional Full Stack Web Developer from Dhaka, Bangladesh, specializing in MERN Stack (MongoDB, Express.js, React, Node.js), Next.js, and Flutter mobile app development.",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance",
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhaka",
          "addressRegion": "Dhaka Division",
          "addressCountry": "BD",
        },
        "knowsAbout": [
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "MERN Stack",
          "Flutter",
          "JavaScript",
          "TypeScript",
          "Web Development",
          "Full Stack Development",
          "REST API",
          "Firebase",
          "Tailwind CSS",
        ],
        "sameAs": [
          "https://github.com/amirulislambd",
          "https://linkedin.com/in/amirulislambd",
          "https://facebook.com/amirulislambd",
        ],
        "email": "mailto:amirulislambd@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://amirulislam.vercel.app/#website",
        "url": "https://amirulislam.vercel.app",
        "name": "Amirul Islam — Full Stack Developer Portfolio",
        "description": "Official portfolio of Amirul Islam, a Full Stack Web Developer from Dhaka, Bangladesh. Specializing in MERN Stack and Next.js.",
        "author": {
          "@id": "https://amirulislam.vercel.app/#person",
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://amirulislam.vercel.app/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://amirulislam.vercel.app/#webpage",
        "url": "https://amirulislam.vercel.app",
        "name": "Amirul Islam | Full Stack Web Developer — MERN & Next.js Expert",
        "isPartOf": {
          "@id": "https://amirulislam.vercel.app/#website",
        },
        "about": {
          "@id": "https://amirulislam.vercel.app/#person",
        },
        "description": "Portfolio of Amirul Islam — Full Stack Web Developer from Dhaka, Bangladesh.",
        "inLanguage": "en-US",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://amirulislam.vercel.app",
            },
          ],
        },
      },
    ],
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
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#020617" />
        <meta name="author" content="Amirul Islam" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
          <Analytics />
        </NextThemeProvider>
      </body>
    </html>
  );
}