"use client";
import { useMemo, useState } from "react";
import { projectsData, skillsData } from "../_data/data";
import { ComboBox } from "./ComboBox";
import ProjectsList from "./ProjectsList";

export default function ProjectFilter() {
	const frameworks = skillsData.nodes.map((skill) => {
		return {
			value: skill.id.toLowerCase(),
			label: skill.id,
		};
	});

	//filtering the projects
	const [selectedValues, setSelectedValues] = useState([]);

	const projects = useMemo(() => {
		if (selectedValues.length === 0) return projectsData;

		return projectsData.filter((project) => {
			const normalizedTech = project.tech.map((tech) => tech.toLowerCase());
			return selectedValues.every((value) => normalizedTech.includes(value));
		});
	}, [selectedValues]);

	const handleSelect = (currentValue) => {
		setSelectedValues((prev) =>
			prev.includes(currentValue)
				? prev.filter((value) => value !== currentValue)
				: prev.length < 3
				? [...prev, currentValue]
				: [...prev],
		);
	};

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
