"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import SpinnerMini from "../SpinnerMini";

const BubbleMap = dynamic(() => import("./BubbleMap"), {
	loading: () => <SpinnerMini />,
	ssr: false, // Disable server-side rendering for D3
});

export function LazyBubbleMap({ data }) {
	return (
		<Suspense fallback={<SpinnerMini />}>
			<BubbleMap data={data} />
		</Suspense>
	);
}
