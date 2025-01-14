import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function DesktopMenu({ navRef }) {
	const scrollToSection = (id) => {
		const navHeight = navRef.current?.offsetHeight || 0;
		const section = document.getElementById(id);
		if (section) {
			const topPosition = section.offsetTop - navHeight;
			window.scrollTo({
				top: topPosition,
				behavior: "smooth",
			});
		}
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
						className={`hover:text-hover`}
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
						className={`hover:text-hover `}
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
						className={`hover:text-hover `}
					>
						Contact
					</Link>
				</li>
			</ul>
		</>
	);
}
