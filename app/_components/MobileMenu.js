"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
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
					{!isOpen && <Bars3Icon />}
				</button>
			</div>
			{isOpen && <MobileMenuOverlay onClose={handleMenuClick} />}
		</>
	);
}
