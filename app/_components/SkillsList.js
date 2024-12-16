"use client";

import SkillItem from "./SkillItem";

export default function SkillsList({ skills }) {
	return (
		<ul className="grid grid-cols-2 gap-y-2">
			{skills.map((skill) => (
				<SkillItem skill={skill} key={skill.id} />
			))}
		</ul>
	);
}
