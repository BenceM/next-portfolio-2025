"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { useState } from "react";
import { MobileMenuOverlay } from "./MobileMenuOverlay";

export default function MobileMenu() {
	// const { isOpen, setIsOpen } = useMenu();

	// function handleMenuClick() {
	// 	setIsOpen((prev) => !prev);
	// }
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenSheet = () => {
		setIsOpen(true);
	};
	return (
		<>
			<div className="flex flex-row justify-end md:hidden">
				<button
					aria-label="Menu"
					onClick={handleOpenSheet}
					className="size-12 "
				>
					<Bars3Icon />
				</button>
			</div>
			<MobileMenuOverlay open={isOpen} onOpenChange={setIsOpen} />
		</>
	);
}
