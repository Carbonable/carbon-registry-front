import projectsData from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";
import Link from "next/link";

export default function ProjectsList() {
  const projects = projectsData.projects as Project[];

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="mb-2">
          <Link href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        </div>

      ))}
    </>
  );
}