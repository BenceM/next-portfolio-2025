import Image from "next/image";
import { skillsData } from "./Skills";
export default function TechList({ techs }) {
	const { nodes: skills } = skillsData;
	return (
		<ul className="flex flex-row gap-1">
			{techs.map((tech) => {
				const skill = skills.find((s) => s.id === tech);
				return skill ? (
					<li key={tech} className="relative group">
						<Image
							src={skill.img}
							alt={tech}
							width={25}
							height={25}
							className={`${
								tech === "Next.js" ? "rounded-full bg-white" : ""
							} `}
						/>
						<span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
							{tech}
						</span>
					</li>
				) : (
					// Fallback if no matching skill is found
					<li key={tech}>{tech}</li>
				);
			})}
		</ul>
	);
}
