"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Logo() {
	const path = usePathname();

	const router = useRouter();
	const scrollTop = () => {
		if (path !== "/") {
			router.replace("/");
			return;
		}
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
