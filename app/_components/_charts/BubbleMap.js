"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

//start from the static list and import the path to the images

const BubbleMap = ({ data }) => {
	const svgRef = useRef();
	const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
	useEffect(() => {
		const handleResize = () => {
			const parent = svgRef.current.parentNode;
			const newDimensions = {
				width: parent.clientWidth,
				height: parent.clientHeight,
			};
			if (!newDimensions.width || !newDimensions.height) return;
			setDimensions((prev) =>
				prev.width !== newDimensions.width ||
				prev.height !== newDimensions.height
					? newDimensions
					: prev,
			);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Set initial size
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useEffect(() => {
		const width = dimensions.width;
		const height = dimensions.height;
		const svg = d3
			.select(svgRef.current)
			.attr("width", width)
			.attr("height", height);

		const simulation = d3
			.forceSimulation(data.nodes)
			.force(
				"link",
				d3
					.forceLink(data.links)
					.id((d) => d.id)
					.distance(100),
			)
			.force("charge", d3.forceManyBody().strength(-100))
			// .force("center", d3.forceCenter(width / 2, height / 2))
			.force("x", d3.forceX(width / 2).strength(0.05)) // Gentle horizontal centering
			.force("y", d3.forceY(height / 2).strength(0.05))
			.force("collision", d3.forceCollide().radius(40))
			.on("tick", ticked);

		const link = svg
			.selectAll(".link")
			.data(data.links)
			.join("line")
			.attr("class", "link")
			.attr("stroke", "#ccc")
			.attr("stroke-width", 2);

		// const node = svg
		// 	.selectAll(".node")
		// 	.data(data.nodes)
		// 	.join("circle")
		// 	.attr("class", "node")
		// 	.attr("r", 20)
		// 	.attr("fill", (d) => {
		// 		switch (d.group) {
		// 			case "frontend":
		// 				return "#69b3a2";
		// 			case "css":
		// 				return "#ffa600";
		// 			default:
		// 				return "#8884d8";
		// 		}
		// 	})
		// 	.call(drag(simulation));

		// const text = svg
		// 	.selectAll(".text")
		// 	.data(data.nodes)
		// 	.join("text")
		// 	.attr("class", "text")
		// 	.attr("dy", 4)
		// 	.attr("text-anchor", "middle")
		// 	.attr("fill", "#fff")
		// 	.text((d) => d.id);

		const node = svg
			.selectAll(".node")
			.data(data.nodes)
			.join("g") // Group elements to combine image and text
			.attr("class", "node")
			.call(drag(simulation)); // Drag functionality

		node
			.append("circle")
			.attr("r", 20)
			.attr("fill", (d) => {
				return d.bg ? "#fff" : "#121212";
				// switch (d.group) {
				// 	case "frontend":
				// 		return "#69b3a2";
				// 	case "css":
				// 		return "#ffa600";
				// 	default:
				// 		return "#8884d8";
				// }
			});

		// Add images to each node
		node
			.append("image")
			.attr("xlink:href", (d) => d.img) // Use the image URL from the dataset
			.attr("width", 40) // Adjust size
			.attr("height", 40)
			.attr("x", -20) // Center the image
			.attr("y", -20);

		// Add text for hover effect
		node
			.append("text")
			.attr("class", "node-label")
			.attr("dy", -30) // Position above the bubble
			.attr("text-anchor", "middle")
			.attr("fill", "#fff")
			.style("font-size", "12px")
			.style("visibility", "hidden") // Initially hidden
			.text((d) => d.id);

		// Show label on hover
		node
			.on("mouseover", function () {
				d3.select(this).select(".node-label").style("visibility", "visible");
			})
			.on("mouseout", function () {
				d3.select(this).select(".node-label").style("visibility", "hidden");
			});

		function enforceBoundary(node) {
			node.x = Math.max(20, Math.min(width - 20, node.x));
			node.y = Math.max(20, Math.min(height - 20, node.y));
		}
		function ticked() {
			data.nodes.forEach(enforceBoundary);
			link
				.attr("x1", (d) => d.source.x)
				.attr("y1", (d) => d.source.y)
				.attr("x2", (d) => d.target.x)
				.attr("y2", (d) => d.target.y);

			// node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
			node.attr("transform", (d) => `translate(${d.x},${d.y})`);
			// text.attr("x", (d) => d.x).attr("y", (d) => d.y);
		}

		function drag(simulation) {
			return d3
				.drag()
				.on("start", (event) => {
					if (!event.active) simulation.alphaTarget(0.3).restart();
					event.subject.fx = event.subject.x;
					event.subject.fy = event.subject.y;
				})
				.on("drag", (event) => {
					event.subject.fx = event.x;
					event.subject.fy = event.y;
				})
				.on("end", (event) => {
					if (!event.active) simulation.alphaTarget(0);
					event.subject.fx = null;
					event.subject.fy = null;
				});
		}
	}, [data, dimensions.width, dimensions.height]);

	return <svg ref={svgRef}></svg>;
};

export default BubbleMap;
