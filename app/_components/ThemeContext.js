"use client";

import { createContext, useContext, useEffect, useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";

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
	const [theme, setTheme] = useState(
		() => localStorage.getItem(storageKey) || defaultTheme,
	);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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

	const updateTheme = (theme) => {
		localStorage.setItem(storageKey, theme);
		setTheme(theme);
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
