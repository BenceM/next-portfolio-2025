// "use client";
import { BackButton } from "@/app/_components/BackButton";
import ImageLoader from "@/app/_components/ImageLoader";
import TechList from "@/app/_components/TechList";
import { projectsData } from "@/app/_data/data";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function Page({ params }) {
	const { projectId } = await params;
	const project = projectsData.find(
		(project) => project.id === Number(projectId),
	);
	if (!project) {
		notFound();
	}

	return (
		<main className="mt-2 md:mt-28 flex flex-col gap-1 lg:gap-6 px-2 lg:px-10 max-w-[90rem] py-4 lg:py-0  sm:px-8 xl:px-12 min-h-screen">
			<BackButton />
			<h1 className="text-3xl pt-10 lg:pt-6 pb-6 lg:pb-0 text-foreground">
				{project.name}
			</h1>
			<div className="grid grid-rows-auto lg:grid-cols-2 gap-6 lg:gap-16 lg:items-center px-0 xl:px-8 ">
				<ImageLoader
					className="order-0 lg:order-none mx-auto"
					projectId={projectId}
				/>
				<div className="flex flex-col lg:grid lg:grid-rows-auto gap-4 lg:gap-2 items-end">
					<div className="flex flex-col gap-2">
						<h2 className="text-xl lg:text-2xl text-gradientVia brightness-110">
							Description
						</h2>
						<p className="">{project.desc}</p>
					</div>
					<div className="mr-auto lg:mr-0 ">
						<div className="pb-3 lg:pb-4 xl:pb-10">
							<h3 className="text-lg lg:text-xl py-1 text-gradientVia brightness-110">
								Tech list
							</h3>
							<TechList techs={project.tech} />
						</div>
						<div className="py-3 lg:py-0">
							<h3 className="text-lg lg:text-xl text-gradientVia brightness-110">
								Links:
							</h3>
							<div className="flex flex-col">
								<Link
									className="text-sm lg:text-lg hover:text-hover duration-300"
									target="blank"
									href={project.github}
								>
									Github
								</Link>
								{project.site.includes("https") ? (
									<Link
										className="text-sm lg:text-lg hover:text-hover duration-300"
										target="blank"
										href={project.site}
									>
										Live website
									</Link>
								) : (
									<p className="text-sm lg:text-lg">{project.site}</p>
								)}

								{project?.extra && (
									<Link
										className="text-sm lg:text-lg hover:text-hover duration-300"
										target="blank"
										href={project.extra}
									>
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
