"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ToastDemo = () => {
	const { toast } = useToast();
	const ye = true;
	return (
		<Button
			onClick={() => {
				toast({
					variant: ye ? "default" : "destructive",
					title: "Email sent",
					description: "Friday, February 10, 2023 at 5:57 PM",
				});
			}}
		>
			Show Toast
		</Button>
	);
};
