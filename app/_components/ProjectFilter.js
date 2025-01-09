"use client";
import { useState } from "react";
import { projectsData, skillsData } from "../_data/data";
import { ComboBox } from "./ComboBox";
import ProjectsList from "./ProjectsList";
const framework = [
	{
		value: "next.js",
		label: "Next.js",
	},
];
export default function ProjectFilter() {
	const frameworks = skillsData.nodes.map((skill) => {
		return {
			value: skill.id.toLowerCase(),
			label: skill.id,
		};
	});
	const [filterGroup, setFilterGroup] = useState(["all"]);
	const projects = projectsData;
	const [selectedValues, setSelectedValues] = useState([]);
	const handleSelect = (currentValue) => {
		setSelectedValues((prev) =>
			prev.includes(currentValue)
				? prev.filter((value) => value !== currentValue)
				: prev.length < 3
				? [...prev, currentValue]
				: [...prev],
		);
	};

	const filteredProjects =
		filterGroup === "all"
			? projects
			: projects.filter((project) => project.group === filterGroup); //replace
	//project.tech has to find the tech which is being filtered, also pair multiple filters?

	//instead of buttons add shadcn combobox and every time a filter is selected push an element to the screen max 3 filters which then can be removed by clicking it. Hovering changes the content of the pill to x and clicking removes the filter
	//the filter is an array of state and manipulate it
	const handleFilter = (filter) => setFilterGroup(filter);
	//probably have to create a context in the combobox set the context for the filter. Additionally to be able to combo the filters use the context to create a filterbutton with the value inside, tops 3, on hover changes to x when clicked removes the filter from the button. also have to reset the combobox so it displays not the chosen element but choose additional filter if a filter already exists
	// or make it into a multiple option one and just type out the active filters
	//add a color picker using the input type="color"

	//write the filter logic
	return (
		<div className="mr-auto flex flex-col gap-10">
			<div className="flex gap-6">
				<ComboBox
					selectedValues={selectedValues}
					handleSelect={handleSelect}
					frameworks={frameworks}
				/>
			</div>
			<ProjectsList projects={projects} />
		</div>
	);
}
