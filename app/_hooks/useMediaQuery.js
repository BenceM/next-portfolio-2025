"use client";
import { useState, useEffect } from "react";

//3
const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const media = window.matchMedia(query);

		const updateMatches = () => setMatches(media.matches);
		updateMatches();

		media.addEventListener("change", updateMatches);
		return () => media.removeEventListener("change", updateMatches);
	}, [query]);

	return matches;
};

export default useMediaQuery;
