import ProjectItem from "./ProjectItem";

export default function ProjectsList({ projects }) {
	return (
		<ul className="flex flex-wrap gap-4">
			{projects.map((project) => (
				<ProjectItem key={project.name} project={project} />
			))}
		</ul>
	);
}
