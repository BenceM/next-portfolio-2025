import BubbleMap from "./_charts/BubbleMap";

const data = {
	nodes: [
		{ id: "JavaScript", group: "core" },
		{ id: "React", group: "frontend" },
		{ id: "Next.js", group: "frontend" },
		{ id: "CSS", group: "frontend" },
		{ id: "Tailwind", group: "css" },
		{ id: "Sass", group: "css" },
		{ id: "Styled Components", group: "css" },
		{ id: "Router", group: "react" },
		{ id: "Context API", group: "react" },
		{ id: "Redux", group: "react" },
		{ id: "TanStack Query", group: "react" },
	],
	links: [
		{ source: "JavaScript", target: "React" },
		{ source: "React", target: "Next.js" },
		{ source: "CSS", target: "Tailwind" },
		{ source: "CSS", target: "Sass" },
		{ source: "CSS", target: "Styled Components" },
		{ source: "React", target: "Router" },
		{ source: "React", target: "Context API" },
		{ source: "React", target: "Redux" },
		{ source: "React", target: "TanStack Query" },
	],
};

export default function Skills() {
	return (
		<section
			id="skills"
			className="flex flex-col justify-center items-center min-h-screen"
		>
			<h2 className="text-4xl font-extrabold text-center mb-8 text-sky-800">
				My Skills
			</h2>
			<div className="relative w-full h-[600px] flex justify-center items-center">
				<BubbleMap data={data} />
			</div>
		</section>
	);
}
