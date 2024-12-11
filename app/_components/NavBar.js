"use client";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useMediaQuery from "../_hooks/useMediaQuery";

export default function NavBar() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<nav className="md:flex md:flex-wrap md:items-center md:justify-between mx-auto px-8 py-4 md:py-0 md:pl-14 md:fixed md:z-50 md:top-0 md:left-0 md:right-0 md:bg-background">
			{isDesktop ? <DesktopMenu /> : <MobileMenu />}
		</nav>
	);
}
