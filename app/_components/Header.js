import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
	return (
		<header className="flex flex-wrap items-center justify-between mx-auto px-8 pl-14 fixed z-50 top-0 left-0 right-0 bg-background">
			<Logo />
			<NavBar />
		</header>
	);
}
