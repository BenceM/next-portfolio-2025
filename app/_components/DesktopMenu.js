import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function DesktopMenu() {
	return (
		<>
			<Logo />
			<ul className="menu hidden md:flex flex-row gap-16 z-10 text-xl py-7 ">
				<li>
					<Link href={"/#skills"} className={`hover:text-hover `}>
						Skills
					</Link>
				</li>
				<li>
					<Link href={"/#projects"} className={`hover:text-hover `}>
						Projects
					</Link>
				</li>

				<li>
					<Link href={"/#contact"} className={`hover:text-hover `}>
						Contact
					</Link>
				</li>
			</ul>
		</>
	);
}
