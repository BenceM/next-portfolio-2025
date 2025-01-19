"use server";

import { Resend } from "resend";
import { contactFormSchema } from "../_lib/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(previousState, formData) {
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	try {
		//zod validation
		const result = contactFormSchema.safeParse({ name, email, message });
		if (!result.success) {
			return {
				success: false,
				message: "There is something wrong with your input!",
				errors: result.error.flatten().fieldErrors,
			};
		}

		const data = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: ["delivered@resend.dev"],
			subject: "New email from the portfolio page",
			react: (
				<body>
					<h2>New Contact Form Submission</h2>
					<p>
						<strong>Name:</strong> {name}
					</p>
					<p>
						<strong>Email:</strong> {email}
					</p>
					<p>
						<strong>Message:</strong> {message}
					</p>
				</body>
			),
		});

		return { success: true, message: "Email sent successfully!" };
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Failed to send email. Please try again.",
		};
	}
}
