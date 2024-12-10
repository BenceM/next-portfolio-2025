import BubbleMap from "./_charts/BubbleMap";

const data = {
	nodes: [
		{ id: "JavaScript", group: "core", img: "/ReactLogo.png" },
		{ id: "React", group: "frontend", img: "/ReactLogo.png" },
		{ id: "Next.js", group: "frontend", img: "/ReactLogo.png" },
		{ id: "CSS", group: "frontend", img: "/ReactLogo.png" },
		{ id: "Tailwind", group: "css", img: "/ReactLogo.png" },
		{ id: "Sass", group: "css", img: "/ReactLogo.png" },
		{ id: "Styled Components", group: "css", img: "/ReactLogo.png" },
		{ id: "Router", group: "react", img: "/ReactLogo.png" },
		{ id: "Context API", group: "react", img: "/ReactLogo.png" },
		{ id: "Redux", group: "react", img: "/ReactLogo.png" },
		{ id: "TanStack Query", group: "react", img: "/ReactLogo.png" },
		//Added new ones
		{ id: "Auth.js", group: "react", img: "/ReactLogo.png" },
		{ id: "Vercel", group: "hosting", img: "/ReactLogo.png" },
		{ id: "Git", group: "version", img: "/ReactLogo.png" },
		{ id: "Vite", group: "react", img: "/ReactLogo.png" },
		{ id: "D3", group: "css", img: "/ReactLogo.png" },
		{ id: "Motion", group: "css", img: "/ReactLogo.png" },
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
			<div className="relative w-full h-[1000px] flex justify-center items-center">
				<BubbleMap data={data} />
			</div>
		</section>
	);
}
