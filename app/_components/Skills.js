import BubbleMap from "./_charts/BubbleMap";
import SkillsList from "./SkillsList";

const skillsData = {
	nodes: [
		{ id: "JavaScript", group: "core", img: "/jslogo.png", bg: false },
		{ id: "React", group: "core", img: "/ReactLogo.png", bg: false },
		{ id: "Next.js", group: "core", img: "/next-js.png", bg: true },
		{ id: "CSS", group: "css", img: "/csslogo.png", bg: false },
		{ id: "Tailwind", group: "css", img: "/tailwindcsslogo.png", bg: false },
		{ id: "Sass", group: "css", img: "/sass.png", bg: false },
		{
			id: "Styled Components",
			group: "css",
			img: "/styled-components.png",
			bg: false,
		},
		{
			id: "Router",
			group: "utilities",
			img: "/react-routerlogo.png",
			bg: true,
		},
		{ id: "Context API", group: "utilities", img: "/ReactLogo.png", bg: false },
		{ id: "Redux", group: "utilities", img: "/reduxlogo.png", bg: false },
		{
			id: "TanStack Query",
			group: "utilities",
			img: "/tanstacklogo.png",
			bg: false,
		},
		{ id: "Auth.js", group: "utilities", img: "/auth-logo.png", bg: false },
		{ id: "Vercel", group: "hosting", img: "/vercel-logo.png", bg: false },
		{ id: "Git", group: "version", img: "/git-logo.png", bg: false },
		{ id: "Vite", group: "utilities", img: "/vite-logo.png", bg: false },
		{ id: "D3", group: "data", img: "/d3.png", bg: false },
		{ id: "Recharts", group: "data", img: "/recharts.png", bg: false },
		{ id: "Motion", group: "css", img: "/motion-logo.png", bg: false },
		{ id: "Supabase", group: "data", img: "/supabase.png", bg: false },
		{ id: "Hugging Face", group: "data", img: "/hf-logo.png", bg: false },
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
		// { source: "data", target: "Supabase" },
	],
};

export default function Skills() {
	return (
		<section
			id="skills"
			className="flex flex-col justify-center items-center min-h-screen gap-7 px-12"
		>
			<h2 className="text-4xl font-extrabold text-center mb-8 text-sky-800">
				My Skills
			</h2>
			<div className="grid grid-rows-auto md:grid-cols-2  gap-2 items-start justify-center">
				<div className="relative w-full min-h-[500px] h-full order-2 md:order-none">
					<BubbleMap data={skillsData} />
				</div>
				<div className="w-full order-1 md:order-none ">
					<p className="text-base lg:text-lg">
						I&apos;m a logistics manager turned front-end web developer. My
						passion is coding, thinking of different ways to make something work
						optimally. I&apos;m interested in Ai, blockchain,optimalisation,
						nutrition, training and gardening. I&apos;m a team player, a fast
						learner and I&apos;m quick to adapt. I&apos;m always looking to
						expand my skillset and knowledge with new technologies.
					</p>
					{/* make it into a filter, base case is all, then core tech, styling, utilities, data vis . 4 buttons for filtering*/}
					<h3 className="text-2xl font-bold mb-2">Technologies</h3>

					<SkillsList skills={skillsData.nodes} />
				</div>
			</div>
		</section>
	);
}
