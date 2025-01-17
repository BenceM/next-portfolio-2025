"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useBackNavigation } from "../_hooks/useBackNavigation";
import Button from "./Button";

export function BackButton() {
	const moveBack = useBackNavigation();

	return (
		<Button
			onClick={moveBack}
			className="flex flex-row gap-2 whitespace-nowrap w-fit md:w-fit lg:w-fit px-4 py-3 bg-background text-stone-100 relative items-center justify-center gradient-outline after:rounded-full after:-z-10 hover:bg-bgHover hover:shadow-3xl"
		>
			<span className="">
				<ArrowLeftIcon className=" w-6 h-6" />
			</span>
			Go Back
		</Button>
	);
}
