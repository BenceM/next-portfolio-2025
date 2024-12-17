"use client";

import SkillItem from "./SkillItem";

export default function SkillsList({ filteredSkills }) {
	return (
		<ul className="grid grid-cols-2 gap-y-2">
			{filteredSkills.map((skill) => (
				<SkillItem skill={skill} key={skill.id} />
			))}
		</ul>
	);
}
