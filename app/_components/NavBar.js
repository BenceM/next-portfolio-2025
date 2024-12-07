import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function NavBar() {
	const isMobile = true;

	return (
		<nav className="md:flex md:flex-wrap md:items-center md:justify-between mx-auto px-8 py-4 md:py-0 md:pl-14 md:fixed md:z-50 md:top-0 md:left-0 md:right-0 md:bg-background">
			{isMobile ? <MobileMenu /> : <DesktopMenu />}
		</nav>
	);
}
