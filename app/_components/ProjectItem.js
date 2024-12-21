import Image from "next/image";

import TechList from "./TechList";

export default function ProjectItem({ project }) {
	return (
		<li className="border border-white">
			<Image
				src={project.img}
				width={100}
				height={100}
				alt={`Picture of ${project.name}'s website`}
			/>
			<h4>{project.name}</h4>

			<TechList techs={project.tech} />
		</li>
	);
}
