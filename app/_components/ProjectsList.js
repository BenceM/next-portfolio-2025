import { projectsData } from "../_data/data";
import ProjectItem from "./ProjectItem";

export default function ProjectsList() {
	return (
		<ul className="flex flex-wrap gap-4">
			{projectsData.map((project) => (
				<ProjectItem key={project.name} project={project} />
			))}
		</ul>
	);
}
