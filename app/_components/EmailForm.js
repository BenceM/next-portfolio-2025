"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { sendEmail } from "../_actions/actions";
import { useActionState } from "react";

export function EmailForm() {
	const [state, formAction, isPending] = useActionState(sendEmail, null);

	return (
		<div className="relative w-[90%] md:w-full max-w-md mx-auto flex items-center justify-center rounded-xl after:h-[102%] after:w-[102%] after:absolute after:bg-gradient-to-br after:from-teal-800 after:to-sky-800 after:-z-10 after:rounded-xl ">
			<Card className="w-full max-w-md ">
				<CardHeader>
					<CardTitle>Let&apos;s get in touch</CardTitle>
					<CardDescription>
						Send me a message and I&apos;ll get back to you soon.
					</CardDescription>
				</CardHeader>
				<form action={formAction}>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" name="name" placeholder="Your Name" required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="your@email.com"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="The message comes here ..."
								required
							/>
						</div>
					</CardContent>
					<CardFooter className="flex items-center justify-center">
						<Button type="submit" className="w-full md:w-[30%] border">
							{isPending ? "Sending..." : "Send Message"}
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
