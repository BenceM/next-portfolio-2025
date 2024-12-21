import Image from "next/image";
import { skillsData } from "./Skills";

export default function ProjectItem({ project }) {
	const { nodes: skills } = skillsData;

	return (
		<li className="border border-white">
			<Image
				src={project.img}
				width={100}
				height={100}
				alt={`Picture of ${project.name}'s website`}
			/>
			<h4>{project.name}</h4>

			<ul>
				{project.tech.map((tech) => (
					<li key={tech}>{tech}</li>
				))}
			</ul>
		</li>
	);
}
