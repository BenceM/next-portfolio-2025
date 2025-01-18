"use client";

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
import { useActionState, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "../_actions/actions";
import Button from "./Button";

export function EmailForm() {
	const [state, action, isPending] = useActionState(sendEmail, {
		success: false,
		message: "",
	});

	const [actualState, setActualState] = useState(state);
	const { toast } = useToast();

	useEffect(() => {
		if (state && state.message !== "") {
			toast({
				variant: state.success ? "default" : "destructive",
				title: state.success ? "Success" : "Error",
				description: state.message,
			});
			setActualState(state);
		}
	}, [state, toast, actualState]);
	return (
		<div className="relative w-[90%] md:w-full h-full z-10 md:h-fit max-w-md flex items-center justify-center rounded-xl after:h-[102%] after:w-[102%] after:absolute after:bg-gradient-to-br after:from-gradientMain after:to-gradientTo after:-z-10 after:rounded-xl  ">
			<Card className="w-full max-w-md z-20 ">
				<CardHeader>
					<CardTitle className="text-gradientVia brightness-110 text-xl leading-relaxed tracking-wide">
						Get in touch
					</CardTitle>
					<CardDescription>
						Send me a message and I&apos;ll get back to you as soon as I can.
					</CardDescription>
				</CardHeader>
				<form action={action} className="z-20">
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
					<CardFooter className="flex items-center justify-center z-10">
						<Button
							type="submit"
							className="flex items-center justify-center gradient-outline whitespace-nowrap md:w-[40%] lg:w-[40%] hover:shadow-3xl duration-300 rounded-full hover:bg-bgHover px-6 py-3 "
						>
							{isPending ? "Sending..." : "Send Message"}
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
