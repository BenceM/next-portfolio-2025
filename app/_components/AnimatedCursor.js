//import { motion } from "motion/react";
"use client";
import * as motion from "motion/react-client";
const cursorVariants = {
	blinking: {
		opacity: [0, 0, 1, 1],
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatDelay: 0,
			ease: "linear",
			times: [0, 0.5, 0.5, 1],
		},
	},
};

export default function AnimatedCursor() {
	return (
		<motion.div
			variants={cursorVariants}
			animate="blinking"
			className="inline-block h-9 sm:h-12 xl:h-24 sm:text-5xl ml-2 xl:text-8xl w-[10px] translate-y-1 bg-foreground "
		/>
	);
}
