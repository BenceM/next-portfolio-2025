"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import Logo from "./Logo";
import { useMenu } from "./MenuContext";
import MobileMenuOverlay from "./MobileMenuOverlay";

export default function MobileMenu() {
	const { isOpen, setIsOpen } = useMenu();
	console.log(isOpen);
	function handleMenuClick() {
		setIsOpen((prev) => !prev);
	}
	return (
		<>
			<div className="flex flex-row justify-end md:hidden">
				<button onClick={handleMenuClick} className="size-12 ">
					{isOpen ? <XMarkIcon /> : <Bars3Icon />}
				</button>
			</div>
			{isOpen && <MobileMenuOverlay onClose={handleMenuClick} />}
		</>
	);
}
