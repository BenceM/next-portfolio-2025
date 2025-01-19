import AnimatedContainer from "./AnimatedContainer";
import { EmailForm } from "./EmailForm";

export default function Contact() {
	return (
		<AnimatedContainer
			id="contact"
			className="flex flex-col w-full items-center  gap-16 md:gap-10 md:px-8 max-w-[90rem] mx-auto min-h-screen"
			variants={{
				hidden: { opacity: 0, x: 0, y: 200 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			transition={{ duration: 1, type: "linear" }}
		>
			<h2 className="text-4xl xl:text-5xl xl:leading-normal font-extrabold text-center lg:text-start md:w-full py-1 text-transparent bg-gradient-to-br from-gradientMain via-gradientVia to-gradientTo bg-clip-text">
				Contact
			</h2>
			<div className=" flex flex-col lg:flex-row gap-10 items-center lg:items-start lg:w-full  justify-center lg:justify-between ">
				<div className="px-5 lg:px-0 flex flex-col gap-2 ">
					<h3 className="text-2xl font-bold ">Let&apos;s connect</h3>

					{/* copy styling from skills section for p */}

					<p className="max-w-md md:max-w-sm text-base lg:text-lg">
						I&apos;m currently looking for new opportunities, projects to
						contribute to, great companies to work for. My inbox is always open,
						if you have any questions, want to say hi or have a business
						proposition. I&apos;ll try my best to get back to you as soon as
						possible!
					</p>
				</div>
				<EmailForm />
			</div>
		</AnimatedContainer>
	);
}
