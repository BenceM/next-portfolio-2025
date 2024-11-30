"use client";
import AnimatedCursor from "./AnimatedCursor";
import * as motion from "motion/react-client";
import { useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";
export default function TypingAnimaton({ texts }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const baseText = texts.baseText[currentIndex];
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
		controls.then(() => {
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.baseText.length);
				count.set(0);
			}, 1000);
		});

		return () => controls.stop();
	}, [baseText, count, texts.baseText.length]);
	// lg:w-[680.18px]
	return (
		<div className="relative text-center md:text-left h-[95px] xl:h-[288px] ">
			<motion.span className="inline">{displayText}</motion.span>
			<AnimatedCursor className="absolute" />
		</div>
	);
}
