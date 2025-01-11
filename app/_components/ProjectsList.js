import ProjectItem from "./ProjectItem";

export default function ProjectsList({ projects }) {
	return (
		<ul className="flex flex-col justify-center items-center md:flex-row md:justify-normal md:items-baseline md:flex-wrap gap-4 ">
			{projects.map((project) => (
				<ProjectItem key={project.name} project={project} />
			))}
		</ul>
	);
}
