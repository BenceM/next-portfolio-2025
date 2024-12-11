import Image from "next/image";
import benceImage from "@/public/benceImage.png";
import Button from "./Button";

import TypingAnimaton from "./TypingAnimaton";
export default function Main() {
	const texts = {
		baseText: [
			"Bence",
			"Web Developer",
			"Blockchain Devoloper",
			"Personal Trainer",
		],
	};

	return (
		<div id="/" className="max-w-[90rem] mx-auto py-4 px-4 sm:px-8 lg:px-12">
			<div className="flex flex-col justify-center items-center md:grid md:grid-cols-12 md:grid-rows-auto gap-y-2">
				{/* md:grid-cols-12 lg:grid-rows-[auto_1fr_auto_auto] */}
				<div className="col-span-7 md:text-left md:row-span-4 md:grid md:grid-rows-subgrid ">
					<h1 className="flex flex-col justify-center md:justify-start items-center mb-4 md:mb-0 text-4xl sm:text-5xl xl:text-7xl xl:leading-normal font-extrabold md:row-start-1 md:row-end-3 md:grid md:grid-rows-subgrid">
						<span className="text-transparent bg-gradient-to-br from-sky-800 via-cyan-800 to-teal-800 bg-clip-text md:row-start-1 text-3xl sm:text-4xl xl:text-6xl">
							Hi, I&apos;m
						</span>
						<div className="mt-2 md:row-start-2">
							<TypingAnimaton texts={texts} />
						</div>
					</h1>

					<p className="text-stone-400 text-center md:text-left text-base sm:text-sm lg:text-lg xl:text-xl mb-6 md:mb-2 md:row-start-3 ">
						This is my website. This is my website. This is my website This is
						my website
					</p>
					<div className="flex flex-col md:flex-row gap-3 md:justify-start md:gap-4 justify-center items-center md:row-start-4">
						<Button className="bg-gradient-to-br from-sky-800  to-teal-800  hover:brightness-110  text-white shadow shadow-blue-200/0 hover:shadow-3xl">
							Hire me
						</Button>
						<Button className="bg-[#121212] text-stone-100 relative flex items-center justify-center after:h-[107%] after:w-[102%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-800 after:rounded-full after:-z-10 hover:bg-[#1f1f1f]  hover:shadow-3xl  ">
							Dowload CV
						</Button>
					</div>
				</div>

				<div className="col-start-9 col-end-12 md:row-span-4 flex justify-center items-center place-self-center mt-4 lg:mt-0">
					<div className="relative w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden">
						<div className="absolute inset-0 bg-stone-900/30 z-10"></div>

						<Image
							src={benceImage}
							alt="Portrait of Bence"
							className="object-contain w-full h-full scale-[1.2] translate-y-[12%] lg:translate-y-[10%] overflow-hidden "
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
// Adjust for darkmode, Oled mode
