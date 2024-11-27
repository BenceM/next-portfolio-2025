import React from "react";

export default function Button({ children, className }) {
	return (
		<button
			className={`${className} rounded-full px-6 py-3 transition ease-in-out duration-300`}
		>
			{children}
		</button>
	);
}
