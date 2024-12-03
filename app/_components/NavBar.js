"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { useMenu } from "./MenuContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
	const { isOpen, setIsOpen } = useMenu();
	return (
		<nav className="md:flex md:flex-wrap items-center justify-between mx-auto px-8 pl-14 fixed z-50 top-0 left-0 right-0 bg-background">
			<Logo />
			<div className="block md:hidden">
				{isOpen ? (
					<button>
						<Bars3Icon />
					</button>
				) : (
					<button>
						<XMarkIcon />
					</button>
				)}
			</div>
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
