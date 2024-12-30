import ProjectItem from "./ProjectItem";

export default function ProjectsList() {
	const projectsData = [
		{
			name: "Cabin User App",
			img: "/cabins/holiday-cabin-app-4.png",
			desc: "",
			tech: [
				"React",
				"Next.js",
				"Tailwind",
				"Context API",
				"Auth.js",
				"Supabase",
				"Vercel",
			],
			github: "https://github.com/BenceM/cabin-app",
			site: "https://holiday-cabin-app-bencems-projects.vercel.app/",
		},
		{
			name: "Cabin Management App",
			img: "/cabins/holiday-cabin-app-1.png",
			desc: "",
			tech: [
				"React",
				"Tailwind",
				"TanStack Query",
				"Context API",
				"Supabase",
				"Styled Components",
				"Recharts",
				"Vite",
			],
		},
		{
			name: "2D Platformer Game",
			img: "/game/2d-game-2.png",
			desc: "A 2D Platformer game created in plain ES7+, CSS, HTML using canvas. This was my first attempt at creating a game. It was a steep learning curve, but it turned out okay. Canvas has some limitations and if I were to create a game again I'd probably use an engine, so I wouldn't have to create everything again from 0. The camera size is different on different screens depending on resolution and pixel density, to fix this the whole camera system would need a rework and most of the game. This I'd defintiely do differently in another iteration.",
			tech: ["JavaScript", "CSS"],
			github: "https://github.com/BenceM/2d-platformer",
			site: "https://bencem.github.io/2d-platformer/",
		},
		{
			name: "Countries Website",
			img: "/cabins/holiday-cabin-app-1.png",
			desc: "A small project that uses an API for data fetching and display. This is an older project and my understanding of data fetching and handling greatly improved since then, would make the entire app much simpler, but regardless of code complexity, it runs decently well and it's pretty fast",
			tech: ["JavaScript", "CSS"],
		},
		{
			name: "Ai Image Generator",
			img: "/cabins/holiday-cabin-app-1.png",
			desc: "This Project was my very first Ai model training project. It was a steep jump for me in difficulty as my Python was a bit rusty and I haven't used Next.js before, on top of that I had to learn how diffusors and image generators work. I ran the training on Jupyter Notebooks renting a computer from google as my rig wasn't made for this kind of computation. Once the training was done I dowloaded the model and hosted it on Hugging Face. Their API model always clears the API endpoints so the first generation might take a long while if it wasn't in use for a bit. Overall cool project, today I'd do many things differently and would write a cleaner code for the front end.",
			tech: ["Next.js", "Tailwind", "Hugging Face", "Ai models"],
		},
	];
	return (
		<ul className="flex flex-wrap gap-4">
			{projectsData.map((project) => (
				<ProjectItem key={project.name} project={project} />
			))}
		</ul>
	);
}
