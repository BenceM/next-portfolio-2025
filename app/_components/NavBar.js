import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
	//easier to fetch the media query of the device and conditional the rendering of MobileMenu Desktop menu component

	return (
		<nav className="md:flex md:flex-wrap md:items-center md:justify-between mx-auto px-8 py-4 md:py-0 md:pl-14 md:fixed md:z-50 md:top-0 md:left-0 md:right-0 md:bg-background">
			<MobileMenu />
			{/* <Logo /> */}
			<ul className="menu hidden md:flex flex-row gap-16 z-10 text-xl py-7 ">
				<li>
					<Link href={"/"} className={`hover:text-hover `}>
						Home
					</Link>
				</li>
				<li>
					<Link href={"/#projects"} className={`hover:text-hover `}>
						Projects
					</Link>
				</li>
				<li>
					<Link href={"/#skills"} className={`hover:text-hover `}>
						Skills
					</Link>
				</li>
				<li>
					<Link href={"/#contact"} className={`hover:text-hover `}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
