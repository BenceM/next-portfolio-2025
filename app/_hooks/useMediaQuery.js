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

//1
// const useMediaQuery = (query) => {
// 	const [matches, setMatches] = useState(false);

// 	useEffect(() => {
// 		console.log(window.innerWidth);
// 		const media = window.matchMedia(query);
// 		console.log(media);
// 		if (media.matches !== matches) {
// 			setMatches(media.matches);
// 		}
// 		const listener = () => setMatches(media.matches);
// 		window.addEventListener("resize", listener);
// 		return () => window.removeEventListener("resize", listener);
// 	}, [matches, query]);

// 	return matches;
// };
//2
// const useMediaQuery = (query) => {
// 	const [isDesktop, setIsDesktop] = useState(false);
// 	const [screenSize, setScreenSize] = useState(0);
// 	useEffect(() => {
// 		const listener = () => setScreenSize(window.innerWidth);
// 		setScreenSize(window.innerWidth);

// 		setIsDesktop(query <= screenSize ? true : false);
// 		window.addEventListener("resize", listener);
// 		return () => window.removeEventListener("resize", listener);
// 	}, [query, screenSize]);

// 	return isDesktop;
// };
