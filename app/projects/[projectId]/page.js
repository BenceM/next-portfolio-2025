// "use client";
import ImageLoader from "@/app/_components/ImageLoader";
import TechList from "@/app/_components/TechList";
import { projectsData } from "@/app/_data/data";
import Link from "next/link";
// import { useEffect, useState } from "react";
export default async function Page({ params }) {
	console.log(await params);

	const { projectId } = await params;

	// write the id of the project into the url
	// const imgFolder = projectsData.at(0).img.split("/").at(1);

	return (
		<main className="mt-2 md:mt-28 flex flex-col gap-10 px-10 max-w-[90rem] py-4 md:py-0  sm:px-8 lg:px-12 min-h-screen">
			<h1 className="text-3xl text-white">{projectsData.at(0).name}</h1>
			<div className="grid grid-cols-2 gap-16 items-center mx-12">
				<ImageLoader projectId={projectId} />
				<div className="">
					<p className="max-w-[300px]">{projectsData.at(0).desc}</p>
					<TechList techs={projectsData.at(0).tech} />
				</div>
			</div>
			<div className="">
				<Link href={projectsData.at(0).github}>Github</Link>
				<Link href={projectsData.at(0).site}>Live website</Link>
			</div>
		</main>
	);
}
