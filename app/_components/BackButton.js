"use client";

import { Button } from "@/components/ui/button";
import { useBackNavigation } from "../_hooks/useBackNavigation";

export function BackButton() {
	const moveBack = useBackNavigation();

	return (
		<Button onClick={moveBack} variant="outline">
			Go Back
		</Button>
	);
}
