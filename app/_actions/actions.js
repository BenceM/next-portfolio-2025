"use server";

import { Resend } from "resend";
import { contactFormSchema } from "../_lib/schema";
import supabase from "../_lib/supabase";

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

export async function listImagesInFolder(bucketName, folderId) {
	if (Number(folderId) < 0 || Number(folderId) > 11)
		throw new Error("Invalid project id");
	try {
		const { data, error } = await supabase.storage
			.from(bucketName)
			.list(`${folderId}/`, {
				limit: 20,
				offset: 0,
				sortBy: { column: "name", order: "asc" },
			});

		return data
			? data.filter(
					(item) =>
						typeof item.name === "string" &&
						item.name.toLowerCase().endsWith(".webp"),
			  )
			: [];
	} catch (error) {
		console.error("Error fetching images:", error);
		return [];
	}
}
