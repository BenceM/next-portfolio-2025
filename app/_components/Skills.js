import { skillsData } from "../_data/data";
import BubbleMap from "./_charts/BubbleMap";
import SkillsFilter from "./SkillsFilter";

export default function Skills() {
	return (
		<section
			id="skills"
			className="flex flex-col items-center min-h-screen gap-16 px-12 max-w-[90rem] mx-auto"
		>
			<h2 className="text-4xl xl:text-5xl xl:leading-normal font-extrabold text-center  text-transparent bg-gradient-to-br from-sky-800 via-cyan-700 to-teal-800 bg-clip-text">
				My Skills
			</h2>
			<div className="grid grid-rows-auto md:grid-cols-2  gap-2 items-start justify-center">
				<div className="relative w-full min-h-[500px] h-full order-2 md:order-none">
					<BubbleMap data={skillsData} />
				</div>
				<div className="w-full order-1 md:order-none flex flex-col gap-8 ">
					<p className="text-base lg:text-lg">
						I&apos;m a logistics manager turned front-end web developer. My
						passion is coding, thinking of different ways to make something work
						optimally. I&apos;m interested in Ai, blockchain,optimalisation,
						nutrition, training and gardening. I&apos;m a team player, a fast
						learner and I&apos;m quick to adapt. I&apos;m always looking to
						expand my skillset and knowledge with new technologies.
					</p>
					{/* make it into a filter, base case is all, then core tech, styling, utils, data vis . 4 buttons for filtering*/}
					<div className="">
						<h3 className="text-2xl font-bold mb-6">Technologies</h3>

						<SkillsFilter skills={skillsData.nodes} />
					</div>
				</div>
			</div>
		</section>
	);
}
