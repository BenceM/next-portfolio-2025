"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { projectsData } from "../_data/data";

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

	const handleFilter = (filter) => setFilterGroup(filter);

	return (
		<div className="flex flex-col gap-6">
			<div className="flex gap-6">
				<FilterButton
					filter="all"
					activeFilter={filterGroup}
					handleFilter={handleFilter}
				>
					All
				</FilterButton>
				<FilterButton
					filter="core"
					activeFilter={filterGroup}
					handleFilter={handleFilter}
				>
					Core
				</FilterButton>
				<FilterButton
					filter="css"
					activeFilter={filterGroup}
					handleFilter={handleFilter}
				>
					Styling
				</FilterButton>
				<FilterButton
					filter="utils"
					activeFilter={filterGroup}
					handleFilter={handleFilter}
				>
					Utils
				</FilterButton>
				<FilterButton
					filter="data"
					activeFilter={filterGroup}
					handleFilter={handleFilter}
				>
					Data
				</FilterButton>
			</div>
		</div>
	);
}
