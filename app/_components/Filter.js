"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const activeFilter = searchParams.get("capacity") ?? "all";

	function handleFilter(filter) {
		const params = new URLSearchParams(searchParams);
		params.set("capacity", filter);
		console.log(params.toString());
		window.history.pushState({}, "", params);
		// router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}
	return (
		<div className="border-primary-800 flex">
			<Button
				filter="all"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				All
			</Button>
			<Button
				filter="core"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				Core
			</Button>
			<Button
				filter="css"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				Styling
			</Button>
			<Button
				filter="utils"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				Utils
			</Button>
			<Button
				filter="data"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				Data
			</Button>
		</div>
	);
}
function Button({ filter, handleFilter, activeFilter, children }) {
	return (
		<button
			className={`px-5 py-2 hover:bg-primary-700 ${
				filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
			}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}
