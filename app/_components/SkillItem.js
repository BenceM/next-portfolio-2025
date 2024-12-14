import Image from "next/image";

export default function SkillItem({ skill }) {
	const { id, img } = skill;
	return (
		<li className="flex items-center gap-2 leading-relaxed">
			<div className={`${id === "Next.js" ? "rounded-full bg-white" : ""}`}>
				<Image src={img} width={25} height={25} alt={`${id} logo`} />
			</div>

			{id}
		</li>
	);
}
