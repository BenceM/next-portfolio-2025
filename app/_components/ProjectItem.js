import Image from "next/image";

import TechList from "./TechList";

export default function ProjectItem({ project }) {
	const { img, name, tech } = project;
	return (
		<li className="border border-borderC shadow-md shadow-gradientOff flex flex-col items-start rounded-md p-3">
			<div className="relative w-[256px] h-44 rounded-lg">
				<Image
					src={img}
					fill
					// width={256}
					// height={0}
					// placeholder="blur"
					quality={80}
					className="rounded-lg h-full max-h-72 "
					alt={`Picture of ${name}'s website`}
				/>
			</div>
			<div className="flex flex-col items-start mt-2 bg-opacity-50">
				<h4 className="text-lg font-bold">{name}</h4>
				<TechList techs={tech} />
			</div>
		</li>
	);
}
