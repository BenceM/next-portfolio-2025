"use client";

import SkillItem from "./SkillItem";

export default function SkillsList({ filteredSkills }) {
	return (
		<ul className="grid grid-cols-2 gap-x-2 md:gap-x-0 ml-10 md:ml-0 gap-y-2 h-full ">
			{filteredSkills.map((skill) => (
				<SkillItem skill={skill} key={skill.id} />
			))}
		</ul>
	);
}
