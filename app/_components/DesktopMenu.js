"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useHashNavigation } from "../_hooks/useHashNavigation";

export default function DesktopMenu({ navRef }) {
	const moveSection = useHashNavigation();
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (!section) {
			moveSection(id);
			return;
		}
		const navHeight = navRef.current?.offsetHeight || 0;

		const topPosition = section.offsetTop - navHeight;
		window.scrollTo({
			top: topPosition,
			behavior: "smooth",
		});
	};
	return (
		<>
			<Logo />
			<ul className="menu hidden md:flex flex-row gap-16 z-10 text-xl py-7 ">
				<li>
					<Link
						href={"/#skills"}
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("skills");
						}}
						className={`hover:text-hover duration-300`}
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						href={"/#projects"}
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("projects");
						}}
						className={`hover:text-hover duration-300 `}
					>
						Projects
					</Link>
				</li>

				<li>
					<Link
						href={"/#contact"}
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("contact");
						}}
						className={`hover:text-hover duration-300`}
					>
						Contact
					</Link>
				</li>
			</ul>
		</>
	);
}
