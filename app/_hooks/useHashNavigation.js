"use client";

import { useRouter } from "next/navigation";

export function useHashNavigation() {
	const router = useRouter();

	return (hash) => {
		const cleanHash = hash.startsWith("#") ? hash.slice(1) : hash;

		const newUrl = `/#${cleanHash}`;

		router.push(newUrl);
	};
}
