"use client";
import { useState } from "react";
import SkillsList from "./SkillsList";
import FilterButton from "./FilterButton";

export default function SkillsFilter({ skills }) {
	const [filterGroup, setFilterGroup] = useState("all");
	const filteredSkills =
		filterGroup === "all"
			? skills
			: skills.filter((skill) => skill.group === filterGroup);

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
			<SkillsList filteredSkills={filteredSkills} />
		</div>
	);
}
