import ProjectItem from "./ProjectItem";

export default function ProjectsList() {
	const projectsData = [
		{
			name: "Cabin User App",
			img: "/cabins/holiday-cabin-app-4.png",
			desc: "",
			tech: ["React", "Next.js", "Tailwind"],
			github: "https://github.com/BenceM/cabin-app",
			site: "https://holiday-cabin-app-bencems-projects.vercel.app/",
		},
		{
			name: "Cabin Management App",
			img: "/cabins/holiday-cabin-app-1.png",
			desc: "",
			tech: ["React", "Next.js", "Tailwind"],
		},
		{ name: "Countries Website", img: "", desc: "", tech: [] },
		{ name: "Ai Image Generator", img: "", desc: "", tech: [] },
	];
	return (
		<ul className="flex flex-wrap gap-4">
			{projectsData.map((project) => (
				<ProjectItem key={project.name} project={project} />
			))}
		</ul>
	);
}
