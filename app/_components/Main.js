import Image from "next/image";
import benceImage from "@/public/benceImage.png";
import Button from "./Button";
export default function Main() {
	return (
		<main className="flex flex-col min-h-screen ">
			<div className="w-full mx-auto py-4 px-12">
				<div className="grid grid-cols-1 md:grid-cols-12  ">
					{/* md:grid-cols-12 */}
					<div className="col-span-7 place-self-center  sm:text-left">
						<h1 className=" mb-4 text-4xl sm:text-5xl xl:text-8xl xl:leading-normal font-extrabold">
							Hi, I&apos;m Bence
						</h1>
						<p className="text-stone-400 text-base lg:text-lg xl:text-xl mb-6 ">
							This is my website. This is my website. This is my website This is
							my website
						</p>
						<div className="flex flex-col md:flex-row gap-3 md:justify-start justify-center items-center">
							<Button className="bg-stone-50  text-black hover:bg-stone-300 ">
								Hire me
							</Button>
							<Button className="bg-transparent hover:bg-stone-800 text-stone-100 border border-stone-100">
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
