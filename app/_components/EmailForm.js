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
	// const state = {
	// 	success: false,
	// 	message: "",
	// };
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
		<div className="relative w-[90%] md:w-full h-full z-10 md:h-fit max-w-md mx-auto flex items-center justify-center rounded-xl after:h-[102%] after:w-[102%] after:absolute after:bg-gradient-to-br after:from-teal-800 after:to-sky-800 after:-z-10 after:rounded-xl  ">
			<Card className="w-full max-w-md z-20 ">
				<CardHeader>
					<CardTitle>Let&apos;s get in touch</CardTitle>
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
							className="flex items-center justify-center gradient-button whitespace-nowrap md:w-[40%] lg:w-[40%] hover:shadow-3xl duration-500 rounded-full "
						>
							{isPending ? "Sending..." : "Send Message"}
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
// <CardFooter className="flex items-center justify-center -z-10">
// 					<Button
// type="submit"
// className="relative w-full md:w-[40%] bg-[#121212] h-full rounded-md
// flex justify-center items-center whitespace-nowrap
// transition-colors duration-500
// before:absolute before:h-[107%] before:w-[104%] before:bg-gradient-to-br before:from-sky-800 before:to-teal-700 before:rounded-md before:z-[-10]
// after:absolute after:h-[107%] after:w-[104%] after:bg-gradient-to-br after:from-teal-700 after:to-sky-700 after:rounded-md after:z-[-10] after:opacity-0
// hover:after:opacity-100 after:transition-opacity after:duration-500 "
// >
// {isPending ? "Sending..." : "Send Message"}
// </Button>
// 					</CardFooter>

// w-full md:w-[40%] bg-[#121212] h-full rounded-md relative flex justify-center items-center after:h-[107%] after:w-[104%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-700 after:rounded-md after:transition-colors after:-z-10 whitespace-nowrap after:hover:from-teal-700 after:hover:to-sky-800 after:duration-300

// <Button
// 	type="submit"
// 	className="relative w-full md:w-[40%] bg-[#121212] h-full rounded-md
//         flex justify-center items-center whitespace-nowrap
//          transition-colors duration-500
//         before:absolute before:h-[107%] before:w-[104%] before:bg-gradient-to-br before:from-sky-800 before:to-teal-700 before:rounded-md before:z-[-10]
//         after:absolute after:h-[107%] after:w-[104%] after:bg-gradient-to-br after:from-teal-700 after:to-sky-700 after:rounded-md after:z-[-10] after:opacity-0
//         hover:after:opacity-100 after:transition-opacity after:duration-500 "
// >
// 	{isPending ? "Sending..." : "Send Message"}
// </Button>;

// <Button
// 							type="submit"
// 							className="
// 					w-full md:w-[40%] bg-[#121212] h-full rounded-md relative flex justify-center items-center after:h-[107%] after:w-[104%] after:absolute after:bg-gradient-to-br after:from-sky-800 transition-colors after:to-teal-700 after:rounded-md after:transition-colors after:-z-10 whitespace-nowrap after:hover:from-teal-700 after:hover:to-sky-800 after:duration-300"
// 						>
// 							{isPending ? "Sending..." : "Send Message"}
// 						</Button>
