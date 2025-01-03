// "use client";
import ImageLoader from "@/app/_components/ImageLoader";
import { projectsData } from "@/app/_data/data";
// import { useEffect, useState } from "react";
export default async function Page({ params }) {
	console.log(await params);

	const { projectId } = await params;

	// write the id of the project into the url
	const imgFolder = projectsData.at(0).img.split("/").at(1);

	return (
		<main className="mt-2 md:mt-28">
			<h1 className="text-3xl text-white">{projectsData.at(0).name}</h1>
			<ImageLoader projectId={projectId} />
			{/* <Image src={}/> */}
		</main>
	);
}
