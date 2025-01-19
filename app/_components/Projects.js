import AnimatedContainer from "./AnimatedContainer";
import ProjectFilter from "./ProjectFilter";

export default function Projects() {
	return (
		<AnimatedContainer
			id="projects"
			className="flex flex-col items-center min-h-screen h-fit gap-16 md:gap-10 px-4 md:px-8  max-w-[90rem] 2xl:min-w-[90rem] xl:min-w-[80rem] lg:mx-0 xl:mx-auto xl:min-h-0 "
			variants={{
				hidden: { opacity: 0, x: 0, y: 200 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			transition={{ duration: 1.5, type: "keyframes" }}
		>
			<h2 className="text-4xl xl:text-5xl xl:leading-normal font-extrabold text-center md:text-start md:w-full text-transparent bg-gradient-to-br from-gradientMain via-gradientVia  to-gradientTo bg-clip-text ">
				Projects
			</h2>

			<ProjectFilter />
		</AnimatedContainer>
	);
}
