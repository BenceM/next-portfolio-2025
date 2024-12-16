"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		router.push("/");
	}, [router]);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold">404 - Page Not Found</h1>
			<p className="mt-4">Redirecting you to the homepage...</p>
		</div>
	);
}
