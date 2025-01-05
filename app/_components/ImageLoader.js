"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageLoader({ projectId }) {
	const [images, setImages] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		async function loadImages() {
			const response = await fetch(`/api/projects/${projectId}`);
			const imageFiles = await response.json();
			setImages(imageFiles);
		}

		loadImages();
	}, [projectId]);

	if (images.length === 0) {
		return <div>Loading...</div>;
	}
	const handlePrevious = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length,
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="relative w-full h-[600px] max-h-[600px] overflow-hidden bg-slate-800">
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute w-full h-full transition-opacity duration-300 ${
							index === activeIndex ? "opacity-100" : "opacity-0"
						}`}
					>
						<Image
							src={`/${projectId}/${image}`}
							alt={image}
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
				))}
			</div>
			<button
				onClick={handlePrevious}
				className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
			>
				&#10094;
			</button>
			<button
				onClick={handleNext}
				className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
			>
				&#10095;
			</button>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-3 h-3 rounded-full ${
							index === activeIndex ? "bg-white" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
