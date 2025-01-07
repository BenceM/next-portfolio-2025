import ProjectsList from "./ProjectsList";

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex flex-col items-center min-h-screen h-full gap-16 px-12"
		>
			<h2 className="text-4xl xl:text-5xl xl:leading-normal font-extrabold text-center  text-transparent bg-gradient-to-br from-sky-800 via-cyan-700 to-teal-800 bg-clip-text">
				Projects
			</h2>
			<ProjectsList />
		</section>
	);
}
