import Link from "next/link";
import React from "react";

export default function NavBar() {
	return (
		<nav className="">
			<ul className="menu md:flex flex-row gap-16 z-10 text-xl py-7 ">
				<li>
					<Link href={"/"} className="hover:text-hover ">
						Home
					</Link>
				</li>
				<li>
					<Link href={"/"} className="hover:text-hover  ">
						Projects
					</Link>
				</li>
				<li>
					<Link href={"/"} className="hover:text-hover  ">
						Skills
					</Link>
				</li>
				<li>
					<Link href={"/"} className="hover:text-hover  ">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
