import ProjectItem from "./ProjectItem";

export default function ProjectsList() {
	const projectsData = [
		{ name: "Cabin User App", img: "", desc: "", tech: [""] },
		{ name: "Cabin Management App", img: "", desc: "", tech: [] },
		{ name: "Countries Website", img: "", desc: "", tech: [] },
		{ name: "Ai Image Generator", img: "", desc: "", tech: [] },
	];
	return (
		<ul className="flex flex-row ">
			{projectsData.map((project) => (
				<ProjectItem key={project.name} project={project} />
			))}
		</ul>
	);
}
