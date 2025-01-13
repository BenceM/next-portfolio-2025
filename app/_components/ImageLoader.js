"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { listImagesInFolder } from "../_lib/utils";

export default function ImageLoader({ projectId }) {
	const [images, setImages] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const carouselRef = useRef(null);

	// useEffect(() => {
	// 	async function loadImages() {
	// 		const res = await fetch(`/api/projects/${projectId}`);
	// 		const data = await res.json();
	// 		const hqImages = data.filter((image) => image.includes("-hq"));
	// 		setImages(hqImages);
	// 	}

	// 	loadImages();
	// }, [projectId]);
	//round 2
	useEffect(() => {
		async function fetchImages() {
			const fetchedImages = await listImagesInFolder(
				"project%20images",
				projectId,
			);
			setImages(fetchedImages);
		}
		fetchImages();
	}, [projectId]);
	console.log(images);
	const handlePrevious = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length,
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
	const toggleFullscreen = () => {
		if (!isFullscreen) {
			if (carouselRef.current.requestFullscreen) {
				carouselRef.current.requestFullscreen();
			} else if (carouselRef.current.webkitRequestFullscreen) {
				carouselRef.current.webkitRequestFullscreen();
			} else if (carouselRef.current.msRequestFullscreen) {
				carouselRef.current.msRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	};

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
		document.addEventListener("msfullscreenchange", handleFullscreenChange);

		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
			document.removeEventListener(
				"webkitfullscreenchange",
				handleFullscreenChange,
			);
			document.removeEventListener(
				"msfullscreenchange",
				handleFullscreenChange,
			);
		};
	}, []);

	if (images.length === 0) {
		return <div>Loading...</div>;
	}
	const sortedImgArray = images;
	return (
		<div
			ref={carouselRef}
			className={`relative ${
				isFullscreen
					? "fixed inset-0 w-full h-full z-50 bg-black"
					: "w-full max-w-2xl"
			}`}
		>
			<div
				className={`relative ${
					isFullscreen ? "w-full h-full" : "w-full h-[450px]"
				} max-h-full overflow-hidden bg-slate-800`}
			>
				{sortedImgArray.map((image, index) => (
					<div
						key={index}
						className={`absolute w-full h-full transition-opacity duration-300 ${
							index === activeIndex ? "opacity-100" : "opacity-0"
						}`}
					>
						<Image
							// src={`/${projectId}/${image}`}
							src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project%20images/${projectId}/${image.name}`}
							alt={`Image ${index + 1}`}
							sizes={isFullscreen ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
							fill
							quality={isFullscreen ? 100 : 80}
							style={{ objectFit: "contain" }}
							priority={index === activeIndex}
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
				{sortedImgArray.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-3 h-3 rounded-full ${
							index === activeIndex ? "bg-white" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
			<button
				onClick={toggleFullscreen}
				className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded"
			>
				{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
			</button>
		</div>
	);
}
