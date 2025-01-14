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
		<main className="mt-2 md:mt-28 flex flex-col gap-1 md:gap-6 px-2 md:px-10 max-w-[90rem] py-4 md:py-0  sm:px-8 lg:px-12 ">
			<BackButton />
			<h1 className="text-3xl pt-10 md:pt-6 pb-6 md:pb-0 text-white">
				{project.name}
			</h1>
			<div className="grid grid-rows-auto md:grid-cols-2 gap-6 md:gap-16 md:items-center px-0 lg:px-8">
				<ImageLoader className="order-0 md:order-none" projectId={projectId} />
				<div className="flex flex-col md:grid md:grid-rows-auto gap-4 md:gap-2 items-end">
					<div className="flex flex-col gap-2">
						<h2 className="text-xl md:text-2xl">Description</h2>
						<p className="">{project.desc}</p>
					</div>
					<div className="mr-auto md:mr-0 ">
						<div className="pb-3 md:pb-0">
							<h3 className="text-lg md:text-xl py-1">Tech list</h3>
							<TechList techs={project.tech} />
						</div>
						<div className="py-3 md:py-0">
							<h3 className="text-lg md:text-xl">Links:</h3>
							<div className="flex flex-col">
								<Link className="text-sm md:text-lg" href={project.github}>
									Github
								</Link>
								<Link className="text-sm md:text-lg" href={project.site}>
									Live website
								</Link>
								{project?.extra && (
									<Link className="text-sm md:text-lg" href={project.extra}>
										Hugging Face
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
