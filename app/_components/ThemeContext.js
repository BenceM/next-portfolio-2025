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
	//add the toggle to the menu

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
		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = prefersDarkMode ? "dark" : "light";
			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
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
