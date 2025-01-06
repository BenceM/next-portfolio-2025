import Image from "next/image";

import TechList from "./TechList";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import ImageWithOverlay from "./ImageWithOverlay";
// add github and live website links and a full fledged page or modal
//make a page for each project
export default function ProjectItem({ project }) {
	const { img, name, tech, github, site, id } = project;

	return (
		<li className="border border-borderC shadow-md shadow-gradientOff flex flex-col items-start rounded-md p-3 ">
			<Link
				href={`/projects/${id}`}
				className="relative w-[256px] h-44 rounded-lg "
			>
				{/* <Image
					src={img}
					fill
					// width={256}
					// height={0}
					// placeholder="blur"

					className="rounded-lg h-full max-h-72  "
					alt={`Picture of ${name}'s website`}
				/> */}
				<ImageWithOverlay src={img} alt={`Picture of ${name}'s website`} />
			</Link>
			<div className="flex flex-col items-start mt-2 bg-opacity-50 gap-3">
				<h4 className="text-lg font-bold hover:cursor-pointer ">{name}</h4>

				<div className="flex flex-col gap-1 mb-4">
					{/* live site link icon */}
					<Link href={site ?? ""} className="inline-flex hover:text-hover">
						Live Site
						<span>
							<ArrowTopRightOnSquareIcon className="size-4" />
						</span>
					</Link>
					{/* github link icon*/}
					<Link href={github ?? ""} className="inline-flex hover:text-hover">
						GitHub
						<span className="">
							<ArrowTopRightOnSquareIcon className="size-4" />
						</span>
					</Link>
				</div>
				<TechList techs={tech} />
			</div>
		</li>
	);
}
