"use client";
import { useState } from "react";
import { projectsData } from "../_data/data";
import { ComboBox } from "./ComboBox";
import ProjectsList from "./ProjectsList";
const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
	{
		value: "sveltekit1",
		label: "SvelteKit1",
	},
	{
		value: "nuxt.js1",
		label: "Nuxt.js1",
	},
	{
		value: "remix1",
		label: "Remix1",
	},
	{
		value: "astro1",
		label: "Astro1",
	},
];
export default function ProjectFilter() {
	const [filterGroup, setFilterGroup] = useState("all");
	const projects = projectsData;
	// Import projects and also import the projectslist
	// change projectslist so it doesn't receive projectsData from import but pass down the ones that are filtered as props and import projectsdata here
	const filteredProjects =
		filterGroup === "all"
			? projects
			: projects.filter((project) => project.group === filterGroup); //replace
	//project.tech has to find the tech which is being filtered, also pair multiple filters?

	//instead of buttons add shadcn combobox and every time a filter is selected push an element to the screen max 3 filters which then can be removed by clicking it. Hovering changes the content of the pill to x and clicking removes the filter
	//the filter is an array of state and manipulate it
	const handleFilter = (filter) => setFilterGroup(filter);
	//probably have to create a context in the combobox set the context for the filter. Additionally to be able to combo the filters use the context to create a filterbutton with the value inside, tops 3, on hover changes to x when clicked removes the filter from the button. also have to reset the combobox so it displays not the chosen element but choose additional filter if a filter already exists

	//add a color picker using the input type="color"
	return (
		<div className="mr-auto flex flex-col gap-10">
			<div className="flex gap-6">
				<ComboBox frameworks={frameworks} />
			</div>
			<ProjectsList />
		</div>
	);
}
