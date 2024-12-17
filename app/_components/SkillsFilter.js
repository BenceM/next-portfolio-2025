"use client";
import { useState } from "react";
import SkillsList from "./SkillsList";
import FilterButton from "./FilterButton";

export default function SkillsFilter({ skills }) {
	const [filterGroup, setFilterGroup] = useState("all");
	let filteredSkills = skills;
	if (filterGroup === "all") filteredSkills = skills;
	return (
		<div className="flex flex-col gap-6">
			<div className="flex gap-6">
				<FilterButton
					filter="all"
					activeFilter={filterGroup}
					onClick={() => setFilterGroup("all")}
				>
					All
				</FilterButton>
				<FilterButton
					filter="core"
					activeFilter={filterGroup}
					onClick={() => setFilterGroup("core")}
				>
					Core
				</FilterButton>
				<FilterButton filter="css" activeFilter={filterGroup}>
					Styling
				</FilterButton>
				<FilterButton filter="utils" activeFilter={filterGroup}>
					Utils
				</FilterButton>
				<FilterButton filter="data" activeFilter={filterGroup}>
					Data
				</FilterButton>
			</div>
			<SkillsList filteredSkills={filteredSkills} />
		</div>
	);
}
