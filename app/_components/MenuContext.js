"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext();
const InitialState = false;
function MenuProvider({ children }) {
	const [isOpen, setIsOpen] = useState(InitialState);

	return (
		<MenuContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</MenuContext.Provider>
	);
}

function useMenu() {
	const context = useContext(MenuContext);
	if (context === undefined)
		throw new Error("context was used outside provider");

	return context;
}

export { MenuProvider, useMenu };
