import Link from "next/link";
import React from "react";

export default function Logo() {
	return (
		<Link href={"/"} className={`hover:text-hover text-4xl `}>
			MB
		</Link>
	);
}
