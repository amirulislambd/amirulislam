import Hero from "@/components/Hero";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage/>
      <ProjectsPage />
    </>
  );
}
