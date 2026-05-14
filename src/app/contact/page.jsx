// app/contact/page.jsx

import ContactSection from "@/components/contect/ContactSection";


export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch for projects and collaborations",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0b1326]/10 flex items-center justify-center">
      <ContactSection />
    </div>
  );
};

export default ContactPage;