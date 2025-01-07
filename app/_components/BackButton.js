"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useBackNavigation } from "../_hooks/useBackNavigation";
import Button from "./Button";

export function BackButton() {
	const moveBack = useBackNavigation();

	return (
		<Button
			onClick={moveBack}
			variant="outline"
			className="flex flex-row gap-2 bg-slate-600 lg:w-fit"
		>
			<span>
				<ArrowLeftIcon className=" w-6 h-6" />
			</span>
			Go Back
		</Button>
	);
}
