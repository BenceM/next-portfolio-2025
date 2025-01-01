import Image from "next/image";

import TechList from "./TechList";
import Link from "next/link";
// add github and live website links and a full fledged page or modal
export default function ProjectItem({ project }) {
	const { img, name, tech, github, site } = project;

	return (
		<li className="border border-borderC shadow-md shadow-gradientOff flex flex-col items-start rounded-md p-3 ">
			<div className="relative w-[256px] h-44 rounded-lg hover:cursor-pointer">
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
			<div className="flex flex-col items-start mt-2 bg-opacity-50 gap-3">
				<h4 className="text-lg font-bold hover:cursor-pointer mb-4">{name}</h4>

				<TechList techs={tech} />
				<div className="flex flex-col gap-1">
					{/* github link icon*/}
					<Link href={github ?? ""}>GIcon</Link>
					{/* live site link icon */}
					<Link href={site ?? ""}>Live</Link>
				</div>
			</div>
		</li>
	);
}
