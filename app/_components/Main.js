import Image from "next/image";
import benceImage from "@/public/benceImage.png";
import Button from "./Button";

import TypingAnimaton from "./TypingAnimaton";
export default function Main() {
	const text = {
		baseText: "Bence",
		altTexts: ["Web Developer", "Blockchain Developer"],
	};
	// make it first with the library then eventually switch to framer motion for text animations
	return (
		<main className="flex flex-col min-h-screen ">
			<div className="w-full mx-auto py-4 px-12">
				<div className="grid grid-cols-1 md:grid-cols-12  ">
					{/* md:grid-cols-12 */}
					<div className="col-span-7 place-self-center  sm:text-left">
						<h1 className=" mb-4 text-4xl sm:text-5xl xl:text-8xl xl:leading-normal font-extrabold flex flex-col">
							<span className="text-transparent bg-gradient-to-br from-sky-800 via-cyan-800 to-teal-800 bg-clip-text">
								Hi, I&apos;m
							</span>
							<TypingAnimaton text={text} />
						</h1>

						<p className="text-stone-400 text-base lg:text-lg xl:text-xl mb-6 ">
							This is my website. This is my website. This is my website This is
							my website
						</p>
						<div className="flex flex-col md:flex-row gap-3 md:justify-start md:gap-4 justify-center items-center">
							<Button className="bg-gradient-to-br from-sky-800  to-teal-800  hover:brightness-110  text-white shadow shadow-blue-200/0 hover:shadow-3xl">
								Hire me
							</Button>
							<Button className="bg-[#121212] text-stone-100 relative flex items-center justify-center after:h-[107%] after:w-[102%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-800 after:rounded-full after:-z-10 hover:bg-[#1f1f1f]  hover:shadow-3xl  ">
								Dowload CV
							</Button>
						</div>
					</div>

					<div className="col-span-5 flex justify-center place-self-center mt-4 lg:mt-0">
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
		</main>
	);
}
