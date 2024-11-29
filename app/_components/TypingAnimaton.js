"use client";
import AnimatedCursor from "./AnimatedCursor";
import * as motion from "motion/react-client";
import { useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";
export default function TypingAnimaton({ text }) {
	const { baseText, altTexts } = text;
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) =>
		baseText.slice(0, latest),
	);

	useEffect(() => {
		const controls = animate(count, baseText.length, {
			type: "tween",
			duration: 1,
			ease: "easeInOut",
		});
		return controls.stop;
	}, [count, baseText.length]);

	return (
		<span>
			<motion.span className="inline-block ">{displayText}</motion.span>
			<AnimatedCursor />
		</span>
	);
}
