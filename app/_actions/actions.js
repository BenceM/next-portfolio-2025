"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	try {
		const data = await resend.emails.send({
			from: "Your Website <onboarding@resend.dev>",
			to: ["your-email@example.com"],
			subject: "New Contact Form Submission",
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
