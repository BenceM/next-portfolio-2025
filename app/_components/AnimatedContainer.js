"use client";

import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function AnimatedContainer({
	variants = {
		hidden: { opacity: 0, x: 0, y: 100 },
		enter: { opacity: 1, x: 0, y: 0 },
	},
	transition = { duration: 1, type: "spring" },
	id,
	className,
	children,
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.section
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={isInView ? "enter" : "hidden"}
			// exit="exit"
			transition={transition}
			id={id}
			className={` ${className}`}
		>
			{children}
		</motion.section>
	);
}
