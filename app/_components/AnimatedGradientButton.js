"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AnimatedGradientButton = ({ children, className, ...props }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative w-full md:w-[20%]"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<motion.div
				className="absolute h-[120%] w-[104%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-800 via-orange-400 to-sky-800 rounded-md"
				animate={{}}
				transition={{
					duration: 3,
					ease: "linear",
					repeat: Infinity,
				}}
				style={{
					backgroundSize: "200% 100%",
				}}
			/>
			<Button
				className={`
          relative z-10 w-full bg-[#121212]  text-white
          transition-colors duration-300 rounded-md
          ${className}
        `}
				{...props}
			>
				{children}
			</Button>
		</div>
	);
};

export default AnimatedGradientButton;
