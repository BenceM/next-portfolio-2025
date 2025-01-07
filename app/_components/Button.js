import React from "react";

export default function Button({ children, className, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`rounded-full px-6 py-3 transition-all ease-in-out duration-300 w-full md:w-[40%] lg:w-[30%] max-w-[250px] ${className}`}
		>
			{children}
		</button>
	);
}
