import supabase from "./supabase";

export async function listImagesInFolder(bucketName, folderId) {
	const { data, error } = await supabase.storage
		.from(bucketName)
		.list(`${folderId}/`, {
			limit: 100,
			offset: 0,
			sortBy: { column: "name", order: "asc" },
		});

	if (error) {
		console.error("Error fetching images:", error);
		return [];
	}

	return data;
}
