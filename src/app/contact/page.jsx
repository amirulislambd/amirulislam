// app/contact/page.jsx

import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact Amirul Islam | Hire Full Stack Developer — Bangladesh",
  description:
    "Get in touch with Amirul Islam, a Full Stack Web Developer from Dhaka, Bangladesh. Available for freelance projects, collaborations, and full-time opportunities. Expert in MERN Stack & Next.js.",
  alternates: {
    canonical: "https://amirulislam.vercel.app/contact",
  },
  keywords: [
    "contact Amirul Islam",
    "hire Amirul Islam",
    "hire full stack developer Bangladesh",
    "hire MERN developer",
    "hire Next.js developer",
    "freelance web developer Bangladesh",
    "web developer for hire Dhaka",
    "Amirul Islam contact",
    "collaborate with Amirul Islam",
  ],
  openGraph: {
    title: "Contact Amirul Islam | Hire Full Stack Developer",
    description:
      "Reach out to Amirul Islam for web development projects, freelance work, or collaborations. Based in Dhaka, Bangladesh.",
    url: "https://amirulislam.vercel.app/contact",
    siteName: "Amirul Islam — Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Amirul Islam — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Amirul Islam | Hire Full Stack Developer",
    description:
      "Available for freelance projects and collaborations. MERN & Next.js expert from Bangladesh.",
    creator: "@amirulislambd",
    images: ["/og-image.jpg"],
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0b1326]/10 flex items-center justify-center">
      <ContactSection />
    </div>
  );
};

export default ContactPage;