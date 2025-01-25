"use client";

import { createContext, useContext, useEffect, useState } from "react";
import useMediaQuery from "../_hooks/useMediaQuery";

const initialState = {
	theme: "system",
	setTheme: () => null,
};

const ThemeContext = createContext(initialState);

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "theme",
	...props
}) {
	const [theme, setTheme] = useState(defaultTheme);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	useEffect(() => {
		const storedTheme = localStorage.getItem(storageKey);

		if (storedTheme) {
			setTheme(storedTheme);
		} else if (prefersDarkMode) {
			setTheme("dark");
		}
	}, [storageKey, prefersDarkMode]);

	useEffect(() => {
		const root = window.document.documentElement;
		console.log("running");
		const oldTheme = root.classList.contains("dark") ? "dark" : "light";
		const newTheme =
			theme === "system" ? (prefersDarkMode ? "dark" : "light") : theme;

		if (oldTheme !== newTheme) {
			root.classList.remove(oldTheme);
			root.classList.add(newTheme);
		}
	}, [theme, prefersDarkMode]);

	const updateTheme = (newTheme) => {
		localStorage.setItem(storageKey, newTheme);
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider
			{...props}
			value={{
				theme,
				updateTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
