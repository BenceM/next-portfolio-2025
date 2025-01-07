"use client";

import { useRouter } from "next/navigation";

export function useBackNavigation() {
	const router = useRouter();
	return () => router.back();
}
