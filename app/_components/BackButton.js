"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useBackNavigation } from "../_hooks/useBackNavigation";
import Button from "./Button";

export function BackButton() {
	const moveBack = useBackNavigation();

	return (
		<Button
			onClick={moveBack}
			className="flex flex-row gap-2 lg:w-fit w-[35%] bg-[#121212] text-stone-100 relative items-center justify-center after:h-[111%] after:w-[103%] after:absolute  after:bg-gradient-to-br after:from-sky-800 after:to-teal-700 after:rounded-full after:-z-10 hover:bg-[#1f1f1f]  hover:shadow-3xl"
		>
			<span>
				<ArrowLeftIcon className=" w-6 h-6" />
			</span>
			Go Back
		</Button>
	);
}
