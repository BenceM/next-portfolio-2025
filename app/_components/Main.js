import Image from "next/image";
import benceImage from "@/public/benceImage.webp";
import Button from "./Button";

import TypingAnimaton from "./TypingAnimaton";
import DownloadSection from "./DownloadSection";
import AnimatedContainer from "./AnimatedContainer";

export default function Main() {
	const texts = {
		baseText: [
			"Bence",
			"A Web Developer",
			"A Blockchain Enthusiast",
			"A Personal Trainer",
		],
	};
	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
	};
	return (
		<AnimatedContainer
			variants={variants}
			initial="hidden"
			animate="enter"
			// exit="exit"
			transition={{ duration: 0.5, type: "linear" }}
			id="/"
			className="max-w-[90rem] mx-auto py-4 md:py-0 px-4 sm:px-8 lg:px-12  md:flex  md:justify-center xl:min-h-screen 2xl:min-h-0"
		>
			<div className="flex flex-col justify-center items-center md:grid md:grid-cols-12 md:grid-rows-auto gap-y-2 md:h-full pt-12">
				{/* md:grid-cols-12 lg:grid-rows-[auto_1fr_auto_auto] */}
				<div className="col-span-7 md:text-left md:row-span-4 md:grid md:grid-rows-subgrid ">
					<h1 className="flex flex-col justify-center md:justify-start items-center mb-4 lg:mb-0 text-4xl sm:text-5xl xl:text-7xl xl:leading-normal font-extrabold md:row-start-1 md:row-end-3 md:grid md:grid-rows-subgrid">
						<div className="flex flex-col">
							<span className="text-transparent  bg-gradient-to-br from-gradientMain via-gradientVia to-gradientTo pb-2 w-fit bg-clip-text md:row-start-1 text-3xl sm:text-4xl xl:text-6xl">
								Hi, I&apos;m
								{/*bg-gradient-to-br from-sky-800 via-cyan-600 to-teal-800 */}
							</span>
						</div>
						<div className="mt-2 md:row-start-2">
							<TypingAnimaton texts={texts} />
						</div>
					</h1>

					<p className="text-textSecondary max-w-xl text-center md:text-left text-base sm:text-sm lg:text-lg xl:text-xl mb-6 md:mb-2 md:row-start-3 ">
						Frontend dev with 3 years of experience in React. Currently
						specialising in Next.js
					</p>
					<div className="flex flex-col md:flex-row gap-3 md:justify-start md:gap-4 justify-center items-center md:row-start-4">
						<Button
							href="#contact"
							className="bg-gradient-to-br relative from-gradientMain  via-gradientVia to-gradientTo  hover:brightness-110  text-fillButtonText shadow shadow-blue-200/0 hover:shadow-3xl after:-inset-[0.2rem] after:bg-gradient-to-br after:from-gradientMain after:via-gradientVia after:to-gradientTo after:absolute after:rounded-full after:-z-[1]"
						>
							Hire me
						</Button>
						<DownloadSection />
					</div>
				</div>

				<div className="col-start-9 col-end-12 md:row-span-4 flex justify-center items-center place-self-center mt-4 lg:mt-0 gradient-outline rounded-full">
					<div className="relative w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden bg-imageBg">
						<Image
							src={benceImage}
							alt="Portrait of Bence"
							className="object-contain w-full h-full scale-[1.2] translate-y-[12%] lg:translate-y-[10%] overflow-hidden "
						/>
					</div>
				</div>
			</div>
		</AnimatedContainer>
	);
}
// Adjust for darkmode, Oled mode
