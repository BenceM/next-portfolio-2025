import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
	const { projectId } = await params;

	if (!projectId) {
		return new Response(JSON.stringify([]), { status: 200 });
	}
	const imagesDir = path.join(process.cwd(), "public", projectId);
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
}
