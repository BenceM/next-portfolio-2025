import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
	// console.log(request);
	const { projectId } = await params;
	console.log(projectId);
	const imagesDir = path.join(process.cwd(), "public", projectId);
	if (!projectId) {
		return new Response(JSON.stringify([]), { status: 200 });
	}
	try {
		const files = await fs.promises.readdir(imagesDir);
		const imageFiles = files.filter((file) =>
			/\.(jpg|jpeg|png|gif|webp|svg)$/.test(file),
		);
		return new Response(JSON.stringify(imageFiles), { status: 200 });
	} catch (error) {
		console.error("Error reading images directory:", error);
		return new Response(JSON.stringify([]), { status: 500 });
	}

	// const { searchParams } = new URL(request.url);
	//return Response.json({ test: "test", projectId });
	// const folderName = searchParams.get("folder");

	// if (!folderName) {
	// 	return new Response(JSON.stringify([]), { status: 200 });
	// }

	// const imagesDir = path.join(process.cwd(), "public", "images", folderName);

	// try {
	// 	const files = await fs.promises.readdir(imagesDir);
	// 	const imageFiles = files.filter((file) =>
	// 		/\.(jpg|jpeg|png|gif|webp|svg)$/.test(file),
	// 	);

	// 	return new Response(JSON.stringify(imageFiles), { status: 200 });
	// } catch (error) {
	// 	console.error("Error reading images directory:", error);
	// 	return new Response(JSON.stringify([]), { status: 500 });
	// }
}
