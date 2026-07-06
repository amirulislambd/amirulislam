import ProjectsSection from "@/components/projects/ProjectsSection";
import { PROJECTS_DATA } from "@/data/projectsData";

// Server component — renders ProjectsSection with pre-fetched data
export default function ProjectsPage() {
  return <ProjectsSection projects={PROJECTS_DATA} />;
}
