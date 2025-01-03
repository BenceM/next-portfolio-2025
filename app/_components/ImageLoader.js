"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageLoader({ projectId }) {
	const [images, setImages] = useState([]);

	useEffect(() => {
		async function loadImages() {
			const response = await fetch(`/api/projects/${projectId}`);
			const imageFiles = await response.json();
			setImages(imageFiles);
		}

		loadImages();
	}, [projectId]);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{images.map((image, index) => (
				<div key={index} className="relative w-full h-64">
					<Image
						src={`/${projectId}/${image}`}
						alt={image}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
			))}
		</div>
	);
}
