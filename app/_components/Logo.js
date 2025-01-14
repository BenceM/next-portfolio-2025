import Link from "next/link";
import React from "react";

export default function Logo() {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<Link
			href={"/"}
			onClick={(e) => {
				e.preventDefault();
				scrollTop();
			}}
			className={`hover:text-hover text-4xl `}
		>
			MB
		</Link>
	);
}
