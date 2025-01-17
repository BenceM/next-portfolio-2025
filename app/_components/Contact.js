import { EmailForm } from "./EmailForm";

export default function Contact() {
	return (
		<section
			id="contact"
			className="flex flex-col w-full items-center gap-16 md:gap-10 md:px-8 max-w-[90rem] mx-auto min-h-screen"
		>
			<h2 className="text-4xl xl:text-5xl xl:leading-normal font-extrabold text-center md:text-start md:w-full py-1 text-transparent bg-gradient-to-br from-gradientMain via-gradientVia to-gradientTo bg-clip-text">
				Lets connect
			</h2>
			<EmailForm />
			{/* <ToastDemo /> */}
		</section>
	);
}
