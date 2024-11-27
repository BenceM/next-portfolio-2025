import Image from "next/image";
import benceImage from "@/public/benceImage.png";
export default function Main() {
	return (
		<main className="flex flex-col min-h-screen container mx-auto py-4 px-12">
			<div className="grid grid-cols-1 lg:grid-cols-12">
				<div className="col-span-7 place-self-center">
					<h1 className=" mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						Hi, I&apos;m Bence
					</h1>
					<p className=" text-stone-400 text-lg lg:text-xl">
						This is my website. This is my website. This is my websiteThis is my
						websiteThis is my websiteThis is my websiteThis is my websiteThis is
						my websiteThis is my website
					</p>
				</div>

				<div className="col-span-5 flex justify-center">
					<div className="relative w-[300px] h-[300px]  sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden">
						<div className="absolute inset-0 bg-stone-900/40 z-10"></div>

						<Image
							src={benceImage}
							alt="Portrait of Bence"
							className="object-contain w-full h-full scale-[1.2] translate-y-[12%] lg:translate-y-[10%] overflow-hidden "
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
