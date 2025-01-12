import React from "react";
import { EmailForm } from "./EmailForm";

export default function Contact() {
	return (
		<section
			id="contact"
			className="max-w-[90rem] mx-auto py-4 md:py-0 px-4 sm:px-8 lg:px-12  md:flex  md:justify-center"
		>
			<EmailForm />
		</section>
	);
}
