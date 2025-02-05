import * as motion from "motion/react-client";
import { skillsData } from "../_data/data";
import { LazyBubbleMap } from "./_charts/LazyBubbleMap";
import SkillsFilter from "./SkillsFilter";
import AnimatedContainer from "./AnimatedContainer";

export default function Skills() {
	return (
		<AnimatedContainer
			className="flex flex-col w-full items-center gap-16 md:gap-10 md:px-8 max-w-[90rem] mx-auto "
			id="skills"
			variants={{
				hidden: { opacity: 0, x: 0, y: 100 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
		>
			<h2 className="text-4xl xl:text-5xl xl:leading-normal font-extrabold text-center md:text-start md:w-full py-1 text-transparent bg-gradient-to-br from-gradientMain via-gradientVia to-gradientTo bg-clip-text">
				My Skills
			</h2>

			<div className="grid grid-rows-auto md:grid-cols-2 gap-2 items-center md:items-start justify-center">
				<div className="relative w-full min-h-[600px] md:min-h-[500px] h-full order-2 overflow-hidden flex items-center justify-center">
					<LazyBubbleMap data={skillsData} />
				</div>

				<div className="w-full px-4 md:px-0 order-1 md:order-none flex flex-col justify-center xl:justify-normal items-center gap-8 md:gap-16 ">
					<div className="flex flex-col justify-center w-full gap-2">
						<h3 className="text-2xl font-bold ">About me</h3>
						<p className="text-base lg:text-lg">
							A Frontend Developer with expertise in React and TypeScript,
							currently branching into Next.js and fullstack. My passion is
							coding, thinking of different ways to make something work
							optimally. I love creating user friendly apps and I&apos;m
							interested in AI, blockchain, optimisation as well as some
							personal pursuits like nutrition, training and gardening. I&apos;m
							a team player, a fast learner and I&apos;m quick to adapt to new
							enviroments. I&apos;m always looking to expand my skillset and
							knowledge with emerging technologies.
						</p>
					</div>
					<div className="flex flex-col justify-center w-full gap-6 overflow-hidden">
						<h3 className="text-2xl font-bold">Technologies</h3>

						<SkillsFilter skills={skillsData.nodes} />
					</div>
				</div>
			</div>
		</AnimatedContainer>
	);
}
