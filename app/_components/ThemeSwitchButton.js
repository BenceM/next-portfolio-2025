"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { useTheme } from "./ThemeContext";

export function ThemeSwitchButton() {
	const { theme, updateTheme } = useTheme();

	const toggleTheme = useCallback(() => {
		updateTheme(theme === "light" ? "dark" : "light");
	}, [theme, updateTheme]);

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			aria-label="Toggle theme"
			className="hover:bg-background hover:text-hover"
		>
			{theme === "light" ? (
				<Moon className="h-5 w-5" />
			) : (
				<Sun className="h-5 w-5" />
			)}
		</Button>
	);
}
