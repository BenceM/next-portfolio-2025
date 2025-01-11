import ProjectFilter from "./ProjectFilter";
import ProjectsList from "./ProjectsList";

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex flex-col items-center min-h-screen h-full gap-16 md:gap-10 px-4 md:px-8"
		>
			<h2 className="text-4xl xl:text-5xl xl:leading-normal font-extrabold text-center md:text-start md:w-full text-transparent bg-gradient-to-br from-sky-800 via-cyan-700 to-teal-800 bg-clip-text">
				Projects
			</h2>

			<ProjectFilter />
		</section>
	);
}
