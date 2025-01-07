// "use client";
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
		<main className="mt-2 md:mt-28 flex flex-col gap-10 px-10 max-w-[90rem] py-4 md:py-0  sm:px-8 lg:px-12 min-h-screen">
			<h1 className="text-3xl text-white">{project.name}</h1>
			<div className="grid grid-cols-2 gap-16 items-center mx-12">
				<ImageLoader projectId={projectId} />
				<div className="">
					<h2>Description</h2>
					<p className="max-w-[300px]">{project.desc}</p>
					<h2>Tech list</h2>
					<TechList techs={project.tech} />
				</div>
			</div>
			<div className="">
				<h2>Links:</h2>
				<Link href={project.github}>Github</Link>
				<Link href={project.site}>Live website</Link>
				{project?.extra && <Link href={project.extra}>Hugging Face</Link>}
			</div>
		</main>
	);
}
