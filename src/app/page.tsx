import ProjectsList from "@/components/project/ProjectsList";

export default function Projects() {
  return (
    <div>
      <h1 className="uppercase">List of projects</h1>
      <div className="mt-8">
        <ProjectsList />
      </div>
    </div>
  );
}
