import BubbleMap from "./_charts/BubbleMap";

const data = {
	nodes: [
		{ id: "JavaScript", group: "core", img: "/jslogo.png", bg: false },
		{ id: "React", group: "frontend", img: "/ReactLogo.png", bg: false },
		{ id: "Next.js", group: "frontend", img: "/next-js.png", bg: true },
		{ id: "CSS", group: "frontend", img: "/csslogo.png", bg: false },
		{ id: "Tailwind", group: "css", img: "/tailwindcsslogo.png", bg: false },
		{ id: "Sass", group: "css", img: "/sass.png", bg: false },
		{
			id: "Styled Components",
			group: "css",
			img: "/styled-components.png",
			bg: false,
		},
		{ id: "Router", group: "react", img: "/react-routerlogo.png", bg: true },
		{ id: "Context API", group: "react", img: "/ReactLogo.png", bg: false },
		{ id: "Redux", group: "react", img: "/reduxlogo.png", bg: false },
		{
			id: "TanStack Query",
			group: "react",
			img: "/tanstacklogo.png",
			bg: false,
		},
		//REMAKE
		//Make vercel, recharts, context api draw circle with background color, add text, in vercel remove background and just add background, the other 2 is just a background with text on it
		{ id: "Auth.js", group: "react", img: "/auth-logo.png", bg: false },
		{ id: "Vercel", group: "hosting", img: "/vercel-logo.png", bg: false },
		{ id: "Git", group: "version", img: "/git-logo.png", bg: false },
		{ id: "Vite", group: "react", img: "/vite-logo.png", bg: false },
		{ id: "D3", group: "css", img: "/d3.png", bg: false },
		{ id: "Recharts", group: "css", img: "/recharts.png", bg: false },
		{ id: "Motion", group: "css", img: "/motion-logo.png", bg: false },
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
		{ source: "React", target: "Auth.js" },
		{ source: "React", target: "Vite" },
		{ source: "CSS", target: "Motion" },
		{ source: "CSS", target: "Recharts" },
		{ source: "CSS", target: "D3" },
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
