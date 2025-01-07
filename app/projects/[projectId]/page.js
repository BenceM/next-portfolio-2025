// "use client";
import { BackButton } from "@/app/_components/BackButton";
import ImageLoader from "@/app/_components/ImageLoader";
import TechList from "@/app/_components/TechList";
import { projectsData } from "@/app/_data/data";
import Link from "next/link";
export default async function Page({ params }) {
	const { projectId } = await params;
	const project = projectsData.find(
		(project) => project.id === Number(projectId),
	);

	return (
		<main className="mt-2 md:mt-28 flex flex-col gap-6 px-10 max-w-[90rem] py-4 md:py-0  sm:px-8 lg:px-12 ">
			<BackButton />
			<h1 className="text-3xl pt-6 text-white">{project.name}</h1>
			<div className="grid grid-cols-2 gap-16 items-center px-8">
				<ImageLoader projectId={projectId} />
				<div className="grid grid-rows-2 gap-4 items-end">
					<div className="">
						<h2 className="text-2xl">Description</h2>
						<p className="">{project.desc}</p>
					</div>
					<div className="">
						<h3 className="text-xl">Tech list</h3>
						<TechList techs={project.tech} />
						<h3 className="text-xl">Links:</h3>
						<div className="flex flex-col">
							<Link href={project.github}>Github</Link>
							<Link href={project.site}>Live website</Link>
							{project?.extra && <Link href={project.extra}>Hugging Face</Link>}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
